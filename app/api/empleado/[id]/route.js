import { NextResponse } from 'next/server';
import db from '@/app/lib/db'


export async function GET(request, { params }) {
  console.log(params.id)

  const usuario = await db.usuarios.findUnique({
    where: {
      Id: Number(params.id),
    }
  });
  console.log(usuario)
  return NextResponse.json(usuario);
}
export async function PUT(request, { params }){
  const data = await request.json();
  const usuarioActualizado = await db.usuarios.update({
    where:{
      Id: Number(params.id),
    },
    data : data,
  });
  return NextResponse.json(usuarioActualizado); 

}
export async function DELETE(request, { params }) {
    const usuario = await db.usuarios.delete({
      where: {
        Id: Number(params.id),
      }
    });
    console.log(usuario)
    return NextResponse.json(usuario); 
}




