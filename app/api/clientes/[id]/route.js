import { NextResponse } from 'next/server';
import { FindWithLike } from '../../utils/db-methods';

// export async function POST(request) {
//   const data = await request.json();
//   const nuevoCliente = await db.clientes.create({
//     data: {
//       nombre: data.nombre,
//       apellido: data.apellido,
//       email: data.email,
//       telefono: data.telefono,
//       celular: data.celular,
//       direccion: data.direccion,
//     },
//   });
//   return NextResponse.json(nuevoCliente);
// }


export async function GET(req) {
  const url = new URL(req.url);
  const value = url.pathname.split('/').pop();

  if (value) {
    try {
      const results = await FindWithLike("clientes", value, ["nombre","apellido"]);
      return NextResponse.json(results);
    } 
    catch (error) {
      console.error('Error en la búsqueda:', error);
      return NextResponse.json({ error: 'Error al buscar datos' }, { status: 500 });
    }
  } 
  else {
    return NextResponse.json({ error: 'No existe el valor a buscar en la URL' }, { status: 400 });
  }
}









