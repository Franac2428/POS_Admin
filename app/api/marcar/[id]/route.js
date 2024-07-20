import { NextResponse } from 'next/server';
import db from '@/app/lib/db';

export async function GET(request, { params }) {
  const empleadoId = Number(params.id); 
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const fecha = today;
  try {
    const asistencia = await db.asistencia.findFirst({
      where: {
        empleadoId,
        fecha,
      },
    });    

    if (asistencia) {
      return NextResponse.json(asistencia);
    } else {
      return NextResponse.json({ message: 'No se ha registrado la entrada.' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: 'Error al verificar la entrada.',
    }, { status: 500 });
  }
}
export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const asistenciaActualizado = await db.asistencia.update({
      where: {
        id: Number(params.id),
      },
      data: data,
    });
    return NextResponse.json(asistenciaActualizado);
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar el pedido' }, { status: 500 });
  }
}
