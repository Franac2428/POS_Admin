import { NextResponse } from 'next/server';
import db from '@/app/lib/db';

export async function GET(request, { params }) {
  try {
    const horario = await db.horario.findUnique({
      where: {
        Id: Number(params.id),
      },
    });
    return NextResponse.json(horario);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener el horario' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const horarioActualizado = await db.horario.update({
      where: {
        Id: Number(params.id),
      },
      data: data,
    });
    return NextResponse.json(horarioActualizado);
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar el horario' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const horario = await db.horario.delete({
      where: {
        Id: Number(params.id),
      },
    });
    return NextResponse.json(horario);
  } catch (error) {
    return NextResponse.json({ error: 'Error al eliminar el horario' }, { status: 500 });
  }
}
