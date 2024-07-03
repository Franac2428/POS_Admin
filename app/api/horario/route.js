import db from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const horarios = await db.horario.findMany();
    return NextResponse.json(horarios);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener los horarios' }, { status: 500 });
  }
}

export async function POST(request) {
  const data = await request.json();
  const { Dia, HoraInicio, HoraFin } = data;

  try {
    const newHorario = await db.horario.create({
      data: {
        Dia,
        HoraInicio,
        HoraFin,
      },
    });
    return NextResponse.json(newHorario, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear el horario' }, { status: 500 });
  }
}
