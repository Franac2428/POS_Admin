import db from '@/app/lib/db';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const listaMovimientos = await prisma.movimientos.findMany({
            select:{
                idMovimiento:true,
                fechaCreacion:true,
                motivo:true,
                monto:true,
                idEstadoMovimiento:true,
                TipoMovimiento:{
                    select:{
                        nombre:true
                    }
                },
                EstadoMovimiento:{
                    select:{
                        nombre:true
                    }
                }
            },
            orderBy:{
                idMovimiento: 'desc'
            }
        });

        if (listaMovimientos.length === 0) {
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
                data: listaMovimientos,
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

    try{
        const data = await request.json();
        
        const newMovimiento = await db.movimientos.create({
          data: {
            idTipoMovimiento: data.idTipoMovimiento,
            idEstadoMovimiento: 1,
            fechaCreacion:new Date().toISOString(),
            idUsuarioCreacion: 1,
            motivo: data.motivo,
            idInfoCaja: data.idInfoCaja,
            monto: data.monto
          },
        });


        if(!newMovimiento){

            return NextResponse.json(
                {
                   code:404,
                   status:"failed",
                   data:[],
                   message:"Error al crear el movimiento de caja"
                }
             );
        }
        else{
            return NextResponse.json(
                {
                   code:200,
                   status:"success",
                   data:newMovimiento,
                   message:"Movimiento Creado Correctamente"
                }
             );
        }

    }
    catch(error){

        return NextResponse.json(
            {
               code:404,
               status:"failed",
               data:[],
               message:"Error en servidor: " + error
            }
         );
    }

}

export async function PUT(request) {
    try{
        const data = await request.json();
        let model = {
            idEstadoMovimiento: data.esAnular ? 3 : 2
        };


        const updMovimiento = await db.movimientos.update({
            where:{ idMovimiento:data.idMovimiento },
            data:model
        });

        if(!updMovimiento){
            return NextResponse.json({
                code: 500,
                status: "failed",
                data: [],
                message: "Error en la obtención de datos " + error
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
               message:"Error en servidor: " + error
            }
         );
    }



}