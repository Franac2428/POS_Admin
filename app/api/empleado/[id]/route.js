import { NextResponse } from 'next/server';
import db from '@/app/lib/db'
export async function GET(request, { params }) {
  const usuario = await db.usuarios.findUnique({
    where: {
      Id: Number(params.id),
    }
  });
  console.log(usuario)
  return NextResponse.json(usuario);
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




