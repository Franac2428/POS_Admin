import { NextResponse } from 'next/server';
import db from '@/app/lib/db'
export async function GET() {

  const proveedores = await db.proveedores.findMany()
  return NextResponse.json(proveedores);
}

export async function POST(request) {
  const data = await request.json();
  const nuevoProveedor = await db.proveedores.create({
    data: {
      Nombre: data.nombre,
      Tipo: data?.tipo,
      Telefono: data.telefono,
      Email: data.correo,
      Direccion: data.direccion,
      Contacto: data.contacto,
    },
  });
  return NextResponse.json(nuevoProveedor);
}
