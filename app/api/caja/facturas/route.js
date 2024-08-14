import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request) {
    try {
        const { searchParams } = request.nextUrl;
        const idInfoCaja = parseInt(searchParams.get('idInfoCaja'), 10);

        if (isNaN(idInfoCaja)) {
            return NextResponse.json({
                code: 400,
                status: "failed",
                message: "El parámetro 'idInfoCaja' es inválido o no está presente."
            }, { status: 400 });
        }

        const infoCaja = await prisma.InfoCaja.findFirst({
            where: { idInfoCaja },
            select: {
                idInfoCaja: true,
                montoCierreCaja: true,
                montoInicioCaja: true,
                facturas: {
                    select: { total: true, vuelto: true, pagadoCon: true },
                    where: { idInfoCaja, estadoFac: { notIn: ['NULA'] } }
                },
                movimientos: {
                    select: { idMovimiento: true, monto: true, idTipoMovimiento: true },
                    where: { idInfoCaja, idEstadoMovimiento: 1 }
                },
            },
        });

        if (!infoCaja) {
            return NextResponse.json({
                code: 404,
                status: "failed",
                message: "No se encontró la información de la caja."
            }, { status: 404 });
        }

        const totalFacturado = infoCaja.facturas
            .reduce((acc, factura) => acc + (Number(factura.pagadoCon) - Number(factura.vuelto)), 0)
            .toFixed(2);

        const totalEntradas = infoCaja.movimientos
            .filter(mov => mov.idTipoMovimiento === 1)
            .reduce((acc, mov) => acc + Number(mov.monto), 0);

        const totalSalidas = infoCaja.movimientos
            .filter(mov => mov.idTipoMovimiento === 2)
            .reduce((acc, mov) => acc + Number(mov.monto), 0);

        const result = {
            idInfoCaja: infoCaja.idInfoCaja,
            totalFacturado: Number(totalFacturado),
            montoCierreCaja: Number(infoCaja.montoCierreCaja || 0),
            montoInicioCaja: Number(infoCaja.montoInicioCaja),
            totalEntradas: Number(totalEntradas),
            totalSalidas: Number(totalSalidas),
            diferencia: (Number(infoCaja.montoInicioCaja) + Number(totalEntradas) + Number(totalFacturado)) - Number(totalSalidas) - Number(infoCaja.montoCierreCaja || 0)
        };

        return NextResponse.json({
            code: 200,
            status: "success",
            data: result,
            message: "Se ha obtenido la lista de movimientos."
        }, { status: 200 });

    } catch (error) {
        console.error('Error al obtener la información de la caja:', error);
        return NextResponse.json({
            code: 500,
            status: "error",
            message: "Ocurrió un error al procesar la solicitud."
        }, { status: 500 });
    }
}