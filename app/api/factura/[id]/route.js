import { NextResponse } from 'next/server';
import db from '@/app/lib/db';

export async function GET(request, { params }) {
    try {
      const factura = await db.facturas.findUnique({
        where: {
            idFactura: Number(params.id), 
        }
      });
  
      if (!factura) {
        return NextResponse.json({ error: 'Producto no encontrado' }, { status: 404 });
      }
  
      return NextResponse.json(producto);
    } catch (error) {
      console.error('Error al obtener el producto:', error);
      return NextResponse.json({ error: 'Error al obtener el producto' }, { status: 500 });
    }
  }