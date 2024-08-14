import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const url = new URL(req.url);
    // Extraer el parámetro idInfoCaja desde la URL
    const idInfoCaja = url.pathname.split('/').pop();

    if (!idInfoCaja) {
      return NextResponse.json({
        code: 400,
        status: "failed",
        data: [],
        message: "Falta el parámetro idInfoCaja en la URL"
      });
    }

    // Asegurarse de que idInfoCaja sea un número entero
    const id = parseInt(idInfoCaja, 10);
    if (isNaN(id)) {
      return NextResponse.json({
        code: 400,
        status: "failed",
        data: [],
        message: "El parámetro idInfoCaja debe ser un número entero válido"
      });
    }

    // Obtener la información de la caja
    const infoCaja = await prisma.InfoCaja.findFirst({
      where: {
        idInfoCaja: id,
      },
      select: {
        idInfoCaja: true,
        montoCierreCaja: true,
        montoInicioCaja: true,
        facturas: {
          select: {
            total: true,
            vuelto: true,
            pagadoCon: true
          },
          where: {
            idInfoCaja: id,
            estadoFac: {
              notIn: ['NULA']
            }
          }
        },
        movimientos: {
          select: {
            idMovimiento: true,
            monto: true,
            idTipoMovimiento: true,
          },
          where: {
            idInfoCaja: id,
            idEstadoMovimiento: 1,
          }
        },
      },
    });

    if (!infoCaja) {
      return NextResponse.json({
        code: 204,
        status: "failed",
        data: [],
        message: "No se encontró la información de la caja"
      });
    }

    // Sumar los totales de las facturas y restar los vueltos para calcular el monto real en la caja
    const totalFacturado = infoCaja.facturas
      .reduce((acc, factura) => acc + (Number(factura.pagadoCon) - Number(factura.vuelto)), 0)
      .toFixed(2);

    // Calcular el total de entradas y salidas a partir de los movimientos
    const totalEntradas = infoCaja.movimientos
      .filter(mov => mov.idTipoMovimiento === 1)
      .reduce((acc, mov) => acc + Number(mov.monto), 0);

    const totalSalidas = infoCaja.movimientos
      .filter(mov => mov.idTipoMovimiento === 2)
      .reduce((acc, mov) => acc + Number(mov.monto), 0);

    let montoInicio = Number(infoCaja.montoInicioCaja);
    let montoCierre = infoCaja.montoCierreCaja !== null ? Number(infoCaja.montoCierreCaja) : 0;
    let entradas = Number(totalEntradas);
    let salidas = Number(totalSalidas);

    const result = {
      idInfoCaja: infoCaja.idInfoCaja,
      totalFacturado: Number(totalFacturado),
      montoCierreCaja: Number(montoCierre),
      montoInicioCaja: montoInicio,
      totalEntradas: entradas,
      totalSalidas: salidas,
      diferencia: ((montoInicio + entradas + Number(totalFacturado)) - salidas) - montoCierre
    };

    return NextResponse.json({
      code: 200,
      status: "success",
      data: result,
      message: "Se ha obtenido la información de la caja"
    });
  } 
  catch (error) {
    console.error('Error al obtener la información de la caja:', error);
    return NextResponse.json({
      code: 500,
      status: "failed",
      data: [],
      message: "Ocurrió un error al obtener la información de la caja"
    });
  }
}
