import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const ventasDiarias = await prisma.$queryRaw`
            SELECT
                dia,
                total_ventas
            FROM (
                SELECT
                    DATE_FORMAT(DATE_SUB(fechaEmision, INTERVAL 6 HOUR), '%W') AS dia,
                    SUM(total) AS total_ventas,
                    WEEKDAY(DATE_SUB(fechaEmision, INTERVAL 6 HOUR)) AS weekday
                FROM Facturas
                WHERE fechaEmision >= DATE_SUB(DATE_SUB(CURDATE(), INTERVAL 6 HOUR), INTERVAL 1 WEEK)
                GROUP BY dia, weekday
            ) AS subquery
            ORDER BY weekday;
        `;

        const productosInventario = await prisma.productoVenta.count({
            where: { eliminado: false }
        });

        const totalClientes = await prisma.clientes.count({
            where: { eliminado: false }
        });

        const ventasTotales = await prisma.facturas.aggregate({
            _sum: {
                total: true,
            }
        });

        const ventasMensuales = await prisma.facturas.aggregate({
            _sum: {
                total: true,
            },
            where: {
                fechaEmision: {
                    gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
                }
            }
        });

        const topCardsData = {
            productosInventario,
            totalClientes,
            ventasTotales: ventasTotales._sum.total || 0,
            ventasMensuales: ventasMensuales._sum.total || 0,
        };

        const data = {
            ventasDiarias,
            topCardsData
        };
        console.log(data);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
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
