import db from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
      const roles = await db.role.findMany();
      return NextResponse.json(roles);
    } catch (error) {
      return NextResponse.json({ error: 'Error al obtener los roles' }, { status: 500 });
    }
}

export async function POST(request) {
    const data = await request.json();
    const { roleName, description } = data;
  
    try {
      const newRole = await db.roles.create({
        data: {
          roleName,
          description,
        },
      });
      return NextResponse.json(newRole, { status: 201 });
    } catch (error) {
      return NextResponse.json({ error: 'Error al crear el rol' }, { status: 500 });
    }
}