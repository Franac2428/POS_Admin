import db from "@/app/lib/db"
import bcrypt from "bcrypt"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

var scopeIdAuditoria = 0

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jbonilla" },
                password: { label: "Contraseña", type: "password" }
            },
            async authorize(credentials, req) {
                //Id:1 Se inserta la auditoría como status pendiente
                scopeIdAuditoria = await auditRegister(
                    credentials.email,
                    credentials.password,
                    1,
                    "Ingreso de credenciales"
                )

                const userFound = await db.usuarios.findUnique({
                    where: {
                        email: credentials.email
                    },
                    include: {
                        Role: true // Asegúrate de incluir la relación con Role
                    }
                })

                if (!userFound) {
                    await auditUpdate(scopeIdAuditoria, 4, "Usuario no existe")
                    throw new Error(JSON.stringify({
                        message: "Email no encontrado",
                        ok: false
                    }))
                }

                const matchPassword = await bcrypt.compare(
                    credentials.password,
                    userFound.password
                )

                if (!matchPassword) {
                    await auditUpdate(scopeIdAuditoria, 2, "Clave Incorrecta")
                    throw new Error(JSON.stringify({
                        message: "La contraseña es incorrecta",
                        ok: false
                    }))
                } else {
                    await auditUpdate(scopeIdAuditoria, 3, "Ingreso satisfactorio")
                    return {
                        id: userFound.id,
                        name: userFound.nombre,
                        email: userFound.email,
                        role: userFound.Role.Descripcion
                    }
                }
            }
        })
    ],
    pages: {
        signIn: "/auth/login"
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.name = token.name;
            session.user.email = token.email;
            session.user.role = token.role;
            return session;
        }
    }

}

async function auditRegister(usuario, clave, idStatus, mensaje) {
    try {
        const newAudit = await db.auditoriaLogin.create({
            data: {
                Usuario: usuario,
                Clave: clave,
                IdStatusAuditoriaLogin: idStatus,
                FechaEstadoActualizado: null,
                Mensaje: mensaje
            }
        })
        return parseInt(newAudit.IdAuditoriaLogin)
    } catch (error) {
        console.error("Error insertando la auditoría: " + error)
    }
}

async function auditUpdate(idAudit, idStatus, mensaje) {
    try {
        const dataToUpdate = {
            IdStatusAuditoriaLogin: idStatus,
            FechaEstadoActualizado: new Date(),
            Mensaje: mensaje
        }

        if (idStatus === 3) {
            dataToUpdate.Clave = ""
        }

        await db.auditoriaLogin.update({
            where: {
                IdAuditoriaLogin: idAudit
            },
            data: dataToUpdate
        })
    } catch (error) {
        console.error("Error actualizando la auditoría: " + error)
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
