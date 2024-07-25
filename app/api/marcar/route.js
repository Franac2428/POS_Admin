import db from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const asistencias = await db.asistencia.findMany({
      include: {
        empleado: true,
      },
    });
    return NextResponse.json(asistencias);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener los asistencias' }, { status: 500 });
  }
}

export async function POST(request) {
  const data = await request.json();
  const { empleadoId, entrada,fecha } = data;  
  try {

    const existingAsistencia = await db.asistencia.findFirst({
      where: {
        empleadoId,
        fecha,
      },
    });

    console.log("error findfirst: " + existingAsistencia);

    if (existingAsistencia) {
      return NextResponse.json({ error: 'Ya existe una asistencia registrada para este empleado en la misma fecha' }, { status: 400 });
    }
    else{
      const nuevoasistencia = await db.asistencia.create({
        data: {
          empleadoId,
          entrada,
          fecha,
        },
      });

      return NextResponse.json(nuevoasistencia, { status: 201 });

    }

    

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al crear el asistencia' }, { status: 500 });
  }
}

  