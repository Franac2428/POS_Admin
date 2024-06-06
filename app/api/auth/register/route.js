import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt'
import db from '@/app/lib/db'

export async function POST(request) {
    try {
        const data = await request.json();
        console.log(data);

        const emailFound = await db.usuarios.findUnique({
            where: {
                email: data.email
            }
        })

        if (emailFound) {
            return NextResponse.json({
                message: "El email ya existe"
            }, {
                status: 400
            })
        }

        const usernameFound = await db.usuarios.findUnique({
            where: {
                username: data.username
            }
        })

        if (usernameFound) {
            return NextResponse.json({
                message: "El nombre de usuario ya existe"
            }, {
                status: 400
            })
        }

        const hashedPassword = await bcrypt.hash(data.password, 10)
        const newUser = await db.usuarios.create({
            data: {
                username: data.username,
                email: data.email,
                password: hashedPassword,
                nombre: data.nombre,
                apellido: data.apellido,
                direccion: data.direccion,
                telefono: data.telefono
            },
        });

        const { password: _, ...usuarios } = newUser;
        return NextResponse.json(usuarios)

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Ocurrió un error" }, { status: 500 });
    }
}
