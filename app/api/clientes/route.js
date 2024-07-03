import db from '@/app/lib/db';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { FindAll, FindById } from '../utils/db-methods';

const prisma = new PrismaClient()

export async function POST(request) {
  const data = await request.json();
  var fechaCreacion = new Date().toISOString();
  const nuevoCliente = await db.clientes.create({
    data: {
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      telefono: data.telefono,
      celular: data.celular,
      direccion: data.direccion,
      eliminado: false,
      fechaCreacion: new Date(fechaCreacion),
      idUsuarioCreacion: 1,
      rfc:''
    },
  });
  return NextResponse.json(nuevoCliente);
}



export async function GET() {
   const clientes = await FindAll("clientes");
   return NextResponse.json(clientes);
 }

 export async function GETBYID({id}) {
  const cliente = await FindById("clientes",id)
  return NextResponse.json(cliente);
}

 export async function DELETE(request){
  const data = await request.json();
  console.log(data);
  let model = {
    eliminado: data.eliminado
  };

  const clienteEliminado = await prisma.clientes.update({
    where: { clienteId: data.clienteId },
    data: model,
  })
  return NextResponse.json(clienteEliminado); 

}

export async function PUT(request){
  const data = await request.json();

  var modelUpd = {
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      telefono: data.telefono,
      celular: data.celular,
      direccion: data.direccion
  }
  
  const updCliente = await db.clientes.update({
    where:{ clienteId:data.clienteId },
    data:modelUpd
  }
);
return NextResponse.json(updCliente);

}





