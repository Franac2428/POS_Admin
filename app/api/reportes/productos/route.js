import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request) {
    const url = new URL(request.url);
    const periodo = url.searchParams.get('periodo') || 'diario'; // valor predeterminado si no se proporciona 'periodo'

    let query;

    switch (periodo) {
        case 'semanal':
            query = prisma.$queryRaw`
                SELECT 
                    DATE_FORMAT(DATE_SUB(f.fechaEmision, INTERVAL 6 HOUR), '%x-%v') AS periodo, 
                    ROUND(SUM(df.cantidad * df.precio), 2) AS total_ventas, 
                    pv.nombre AS producto 
                FROM Facturas f 
                JOIN DetallesFactura df ON f.idFactura = df.idFactura 
                JOIN ProductoVenta pv ON df.idProductoVenta = pv.idProductoVenta 
                WHERE f.fechaEmision >= DATE_SUB(DATE_SUB(CURDATE(), INTERVAL 6 HOUR), INTERVAL 1 WEEK)
                  AND f.estadoFac IN ('ACTIVA', 'PAGADA') 
                GROUP BY periodo, producto 
                ORDER BY periodo
            `;
            break;
        case 'mensual':
            query = prisma.$queryRaw`
                SELECT 
                    DATE_FORMAT(DATE_SUB(f.fechaEmision, INTERVAL 6 HOUR), '%Y-%m') AS periodo, 
                    ROUND(SUM(df.cantidad * df.precio), 2) AS total_ventas, 
                    pv.nombre AS producto 
                FROM Facturas f 
                JOIN DetallesFactura df ON f.idFactura = df.idFactura 
                JOIN ProductoVenta pv ON df.idProductoVenta = pv.idProductoVenta 
                WHERE f.fechaEmision >= DATE_SUB(DATE_SUB(CURDATE(), INTERVAL 6 HOUR), INTERVAL 1 MONTH) 
                  AND f.estadoFac IN ('ACTIVA', 'PAGADA') 
                GROUP BY periodo, producto 
                ORDER BY periodo
            `;
            break;
        case 'anual':
            query = prisma.$queryRaw`
                SELECT 
                    DATE_FORMAT(DATE_SUB(f.fechaEmision, INTERVAL 6 HOUR), '%Y') AS periodo, 
                    ROUND(SUM(df.cantidad * df.precio), 2) AS total_ventas, 
                    pv.nombre AS producto 
                FROM Facturas f 
                JOIN DetallesFactura df ON f.idFactura = df.idFactura 
                JOIN ProductoVenta pv ON df.idProductoVenta = pv.idProductoVenta 
                WHERE f.fechaEmision >= DATE_SUB(DATE_SUB(CURDATE(), INTERVAL 6 HOUR), INTERVAL 1 YEAR) 
                  AND f.estadoFac IN ('ACTIVA', 'PAGADA') 
                GROUP BY periodo, producto 
                ORDER BY periodo
            `;
            break;
        default: // diario
            query = prisma.$queryRaw`
                SELECT 
                    DATE_FORMAT(DATE_SUB(f.fechaEmision, INTERVAL 6 HOUR), '%Y-%m-%d') AS periodo, 
                    ROUND(SUM(df.cantidad * df.precio), 2) AS total_ventas, 
                    pv.nombre AS producto 
                FROM Facturas f 
                JOIN DetallesFactura df ON f.idFactura = df.idFactura 
                JOIN ProductoVenta pv ON df.idProductoVenta = pv.idProductoVenta 
                WHERE f.fechaEmision >= DATE_SUB(DATE_SUB(CURDATE(), INTERVAL 6 HOUR), INTERVAL 1 DAY) 
                  AND f.estadoFac IN ('ACTIVA', 'PAGADA') 
                GROUP BY periodo, producto 
                ORDER BY periodo
            `;
    }

    try {
        const result = await query;

        // Convertir BigInt a String para evitar problemas de serialización
        const processedResult = result.map(row => ({
            periodo: row.periodo.toString(),
            total_ventas: Number(row.total_ventas),
            producto: row.producto
        }));

        return NextResponse.json({ ventasProductos: processedResult });
    } catch (error) {
        console.error("Error en la consulta:", error.message);
        console.error("Detalles del error:", error);
        return NextResponse.json({ error: 'Error en la consulta' }, { status: 500 });
    }
}

export default async function handler(req, res) {
    if (req.method === 'GET') {
        return GET(req, res);
    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
