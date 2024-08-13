import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();


export async function GET() {

    try {
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
            topCardsData
        };

        return NextResponse.json(data);

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

}