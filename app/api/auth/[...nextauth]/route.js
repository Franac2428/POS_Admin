import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import db from '@/app/lib/db'
import bcrypt from 'bcrypt'

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jbonilla" },
                password: { label: "Contraseña", type: "password" }
            },
            async authorize(credentials, req) {
                console.log(credentials);

                const userFound = await db.usuarios.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if (!userFound) throw new Error(JSON.stringify({
                    message: 'Email no encontrado',
                    ok: false,
                }));

                console.log(userFound)
                const matchPassword = await bcrypt.compare(credentials.password, userFound.password)

                if (!matchPassword) return null

                return {
                    id: userFound.id,
                    name: userFound.nombre,
                    email: userFound.email,
                }
            },
        }),
    ],

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };