import { NextResponse } from 'next/server';
import db from '@/app/lib/db'

export async function GET(request, { params }) {
    const { id } = params;
    
    try {
      const role = await db.roles.findUnique({
        where: {
          RoleID: Number(id),
        },
      });
      return NextResponse.json(role);
    } catch (error) {
      return NextResponse.json({ error: 'Error al obtener el rol' }, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    const { id } = params;
    const data = await request.json();
  
    try {
      const updatedRole = await db.roles.update({
        where: {
          RoleID: Number(id),
        },
        data,
      });
      return NextResponse.json(updatedRole);
    } catch (error) {
      return NextResponse.json({ error: 'Error al actualizar el rol' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    const { id } = params;
  
    try {
      const deletedRole = await db.roles.delete({
        where: {
          RoleID: Number(id),
        },
      });
      return NextResponse.json(deletedRole);
    } catch (error) {
      return NextResponse.json({ error: 'Error al borrar el rol' }, { status: 500 });
    }
}