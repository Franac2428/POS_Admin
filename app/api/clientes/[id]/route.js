import db from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const data = await request.json();
  const nuevoCliente = await db.clientes.create({
    data: {
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      telefono: data.telefono,
      celular: data.celular,
      direccion: data.direccion,
    },
  });
  return NextResponse.json(nuevoCliente);
}







