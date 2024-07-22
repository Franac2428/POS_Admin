import { NextResponse } from 'next/server';
import db from '@/app/lib/db';

export async function GET(request, { params }) {
    console.log('Received params:', params); // debugging

    try {
        const empleadoId = Number(params.id);
        console.log('Parsed empleadoId:', empleadoId); //  debugging

        const asistencias = await db.asistencia.findMany({
            where: {
                empleadoId: empleadoId,
            },
        });
        
        if (!asistencias) {
            return NextResponse.json({ message: 'No se han registrado asistencias.' }, { status: 404 });
        }

        return NextResponse.json(asistencias);

    } catch (error) {
        console.error('Error fetching asistencias:', error); 
        return NextResponse.json({
            error: 'Error al verificar las asistencias.',
        }, { status: 500 });
    }
}
