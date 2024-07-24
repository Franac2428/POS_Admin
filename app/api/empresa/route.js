import db from '@/app/lib/db';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { FindAll } from '../utils/db-methods';

const prisma = new PrismaClient()

export async function GET() {
   const result = await FindAll("infoEmpresa")
   return NextResponse.json(result[0]);
}

export async function POST(request){
   const d = await request.json();
   const result = await db.infoEmpresa.create({
      nombre: d.nombre,
      nombreComercial: d.nombreComercial,
      identificacion: d.identificacion,
      correo: d.correo,
      telefono: d.telefono,
      celular: d.celular,
      direccion: d.direccion,
      logo: data.imagen ? data.imagen : null,
      tipoImagen: data.tipoImagen ? data.tipoImagen : null
   });

   return NextResponse.json(result);
}

export async function PUT(request){
   const d = await request.json();

   var modelUpd = {
      nombre: d.nombre,
      nombreComercial: d.nombreComercial,
      identificacion: d.identificacion,
      correo: d.correo,
      telefono: d.telefono,
      celular: d.celular,
      direccion: d.direccion,
   }

   if(d.actualizaImagen){
      modelUpd.imagen = d.imagen
      modelUpd.tipoImagen = d.tipoImagen
   }

   const result = await db.infoEmpresa.update({
      where:{idEmpresa: d.idEmpresa},
      data:modelUpd
   });

   return NextResponse.json(result)
}