import db from '@/app/lib/db';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()


export async function GET() {
  try {
      const listaInfoCaja = await prisma.infoCaja.findMany({
          select:{
              idInfoCaja:true,
              fechaApertura:true,
              fechaCierre:true,
              montoInicioCaja:true,
              montoCierreCaja:true,
          },
          orderBy:{
            idInfoCaja: 'desc'
          }
      });

      if (listaInfoCaja.length === 0) {
          return NextResponse.json({
              code: 204,
              status: "failed",
              data: [],
              message: "No se encontraron registros"
          });
      } else {
          return NextResponse.json({
              code: 200,
              status: "success",
              data: listaInfoCaja,
              message: ""
          });
      }
  } catch (error) {
      return NextResponse.json({
          code: 500,
          status: "failed",
          data: [],
          message: "Error en la obtención de datos " + error
      });
  }
}

export async function POST(request) {
   const data = await request.json();
   var fechaApertura = new Date().toISOString();
   var fechaConsulta = new Date();
   fechaConsulta.setDate(fechaConsulta.getDate() + 1);
   var fechaConsultaCaja = fechaConsulta.toISOString();
   
   const aperturaCaja = await db.infoCaja.create({
     data: {
       fechaApertura: fechaApertura,
       fechaCierre:null,
       idUsuario: 1,
       fechaConsultaCaja:fechaConsultaCaja,
       montoInicioCaja: Number(data.montoInicioCaja)
     },
   });

   return NextResponse.json(aperturaCaja);
 }

 export async function PUT(request) {
  try{
      const data = await request.json();
      let model = {
          idInfoCaja:data.idInfoCaja,
          montoCierreCaja: data.montoCierreCaja,
          fechaCierre: new Date().toISOString()
      };


      const updMovimiento = await db.infoCaja.update({
          where:{ idInfoCaja:data.idInfoCaja },
          data:model
      });

      if(!updMovimiento){
          return NextResponse.json({
              code: 500,
              status: "failed",
              data: [],
              message: "Error al actualizar los datos: " + error
          });
      }
      else{
          return NextResponse.json({
              code: 200,
              status: "success",
              data: updMovimiento,
              message: ""
          });
      }
     

  }
  catch(error){
      return NextResponse.json(
          {
             code:500,
             status:"failed",
             data:[],
             message:"Error en servidor al actualizar los datos: " + error
          }
       );
  }



}