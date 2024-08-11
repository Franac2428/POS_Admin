import { NextResponse } from 'next/server';
import db from '@/app/lib/db';

export async function GET() {
  try {
    // Obtén todos los detalles de factura con la información de la factura y productos
    const detalles = await db.detallesFactura.findMany({
      include: {
        fk_factura: {
          include: {
            cliente: true, 
          }
        },
        fk_productoVenta: true 
      }
    });

    const agrupadoPorFactura = detalles.reduce((acc, detalle) => {
      if (!acc[detalle.idFactura]) {
        acc[detalle.idFactura] = {
          idFactura: detalle.fk_factura.idFactura,
          fechaEmision: detalle.fk_factura.fechaEmision,
          cliente: detalle.fk_factura.cliente,
          total: detalle.fk_factura.total, // Añade el total
          estadoFac: detalle.fk_factura.estadoFac, // Añade el total
          detalles: [] // Inicializa una lista de detalles
        };
      }

      acc[detalle.idFactura].detalles.push({
        idDetalleFactura: detalle.idDetalleFactura,
        cantidad: detalle.cantidad,
        descripcion: detalle.descripcion,
        precio: detalle.precio,
        producto: detalle.fk_productoVenta
      });

      return acc;
    }, {});

    const resultados = Object.values(agrupadoPorFactura);

    return NextResponse.json(resultados);
  } catch (error) {
    console.error('Error al obtener los detalles de factura:', error);
    return NextResponse.json({ error: 'Error al obtener los detalles de factura' }, { status: 500 });
  }
}
