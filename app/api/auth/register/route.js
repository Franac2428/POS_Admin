import { sendEmail } from '@/app/api/emails/sendEmail';
import db from '@/app/lib/db';
import { VerifyEmailTemplate } from '@/app/template/verify-email';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const data = await request.json();
        console.log(data);

        const emailFound = await db.usuarios.findUnique({
            where: {
                email: data.email
            }
        });

        if (emailFound) {
            return NextResponse.json({
                message: "El email ya existe"
            }, {
                status: 400
            });
        }

        const usernameFound = await db.usuarios.findUnique({
            where: {
                username: data.username
            }
        });

        if (usernameFound) {
            return NextResponse.json({
                message: "El nombre de usuario ya existe"
            }, {
                status: 400
            });
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        // Asignar el rol, puedes definir un rol predeterminado o usar el que venga en la solicitud
        const role = data.role || 'admin';

        const newUser = await db.usuarios.create({
            data: {
                username: data.username,
                email: data.email,
                password: hashedPassword,
                nombre: data.nombre,
                apellido: data.apellido,
                direccion: data.direccion,
                telefono: data.telefono,
                role: role // Asignar el rol
            },
        });

        const emailVerificationToken = crypto.randomBytes(32).toString("base64url");

        await db.usuarios.update({
            where: {
                Id: newUser.Id // Usar 'Id' con mayúscula
            },
            data: {
                emailVerificationToken: emailVerificationToken,
            }
        });

        // Enviar el correo electrónico con el token de verificación
        await sendEmail({
            from: "Petote <onboarding@resend.dev>",
            to: [newUser.email], // Usar el email del nuevo usuario
            subject: "Verifique su email",
            react: VerifyEmailTemplate({ email: newUser.email, emailVerificationToken }) // Usar el token de verificación correcto
        });

        const { password: _, ...usuarioSinPassword } = newUser;
        return NextResponse.json(usuarioSinPassword);

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Ocurrió un error" }, { status: 500 });
    }
}
