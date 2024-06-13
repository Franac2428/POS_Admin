import { NextResponse } from 'next/server';
import db from '@/app/lib/db'
export async function GET() {

  const usuarios = await db.usuarios.findMany()
  return NextResponse.json(usuarios);
}

