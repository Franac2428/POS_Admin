import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const periodo = searchParams.get('periodo');

    if (!['diario', 'semanal', 'mensual', 'anual'].includes(periodo)) {
        return NextResponse.json({ error: 'Parámetro de período no válido' }, { status: 400 });
    }

    try {
        let ventas;

        switch (periodo) {
            case 'diario':
                ventas = await prisma.$queryRaw`
                    SELECT
                        DATE_FORMAT(DATE_SUB(fechaEmision, INTERVAL 6 HOUR), '%Y-%m-%d') AS dia,
                        ROUND(SUM(total), 2) AS total_ventas
                    FROM Facturas
                    WHERE fechaEmision >= DATE_SUB(CURDATE(), INTERVAL 1 DAY)
                      AND estadoFac IN ('ACTIVA', 'PAGADA')
                    GROUP BY dia
                    ORDER BY dia;
                `;
                break;

            case 'semanal':
                ventas = await prisma.$queryRaw`
                    SELECT
                        DATE_FORMAT(DATE_SUB(fechaEmision, INTERVAL 6 HOUR), '%x-%v') AS semana,
                        ROUND(SUM(total), 2) AS total_ventas
                    FROM Facturas
                    WHERE fechaEmision >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH)
                      AND estadoFac IN ('ACTIVA', 'PAGADA')
                    GROUP BY semana
                    ORDER BY semana;
                `;
                break;

            case 'mensual':
                ventas = await prisma.$queryRaw`
                    SELECT
                        DATE_FORMAT(DATE_SUB(fechaEmision, INTERVAL 6 HOUR), '%Y-%m') AS mes,
                        ROUND(SUM(total), 2) AS total_ventas
                    FROM Facturas
                    WHERE fechaEmision >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR)
                      AND estadoFac IN ('ACTIVA', 'PAGADA')
                    GROUP BY mes
                    ORDER BY mes;
                `;
                break;

            case 'anual':
                ventas = await prisma.$queryRaw`
                    SELECT
                        DATE_FORMAT(DATE_SUB(fechaEmision, INTERVAL 6 HOUR), '%Y') AS año,
                        ROUND(SUM(total), 2) AS total_ventas
                    FROM Facturas
                    WHERE fechaEmision >= DATE_SUB(CURDATE(), INTERVAL 5 YEAR)
                      AND estadoFac IN ('ACTIVA', 'PAGADA')
                    GROUP BY año
                    ORDER BY año;
                `;
                break;
        }

        return NextResponse.json({ ventas });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
