import { NextResponse } from 'next/server';
import db from '@/app/lib/db';

export async function GET(request, { params }) {
  const empleadoId = Number(params.id); 
  const today = new Date();
  const mes = String(today.getMonth() + 1).padStart(2, '0'); 
  const dia = String(today.getDate()).padStart(2, '0'); 
  const ano = today.getFullYear();
  const fechaLocal = `${ano}-${mes}-${dia}T00:00:00.000Z`;

  // Generar la fecha del siguiente día para la comparación
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const mesTom = String(tomorrow.getMonth() + 1).padStart(2, '0'); 
  const diaTom = String(tomorrow.getDate()).padStart(2, '0'); 
  const anoTom = tomorrow.getFullYear();
  const fechaLocalTom = `${anoTom}-${mesTom}-${diaTom}T00:00:00.000Z`;

  console.log('Parsed fecha de hoy:', fechaLocal); // debugging
  console.log('Parsed fecha de mañana:', fechaLocalTom); // debugging

  try {
    const asistencia = await db.asistencia.findFirst({
      where: {
        empleadoId,
        fecha: {
          gte: new Date(fechaLocal), // Fecha de hoy 00:00:00
          lt: new Date(fechaLocalTom), // Fecha de mañana 00:00:00
        },
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
