import db from '@/app/lib/db';
import bcrypt from 'bcrypt';
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

//Obtenemos el Scope Identity
var scopeIdAuditoria = 0;

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
                scopeIdAuditoria = await auditRegister(credentials.email,credentials.password,1,'Ingreso de credenciales');
                
                const userFound = await db.usuarios.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if (!userFound){
                    //Id 4: No existe el usuario
                    auditUpdate(scopeIdAuditoria,4,'Usuario no existe');
                    throw new Error(JSON.stringify({
                        message: 'Email no encontrado',
                        ok: false,
                    }));
                }
               

                const matchPassword = await bcrypt.compare(credentials.password, userFound.password)

                if (!matchPassword){
                    //Id 2: Clave incorrecta
                    auditUpdate(scopeIdAuditoria,2,'Clave Incorrecta');

                    throw new Error(JSON.stringify({
                        message: 'La contraseña es incorrecta',
                        ok: false,
                    }));
                } 
                else{
                    //Id 3: Ingreso satisfactorio
                    auditUpdate(scopeIdAuditoria,3,'Ingreso satisfactorio');

                return {
                    id: userFound.id,
                    name: userFound.nombre,
                    email: userFound.email,
                    role: userFound.role ?? 'admin',// Asegúrate de incluir el rol
                }

                
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.role = token.role;
            }
            return session;
        }
    }
};

async function auditRegister(usuario,clave,idStatus,mensaje){
    try{
        const newAudit = await db.auditoriaLogin.create({
            data:{
                Usuario:usuario,
                Clave:clave,
                IdStatusAuditoriaLogin: idStatus,
                FechaEstadoActualizado:null,
                Mensaje:mensaje
            }
        });
        //Devuelve el identity insertado
        return parseInt(newAudit.IdAuditoriaLogin);

    }
    catch(error){
        console.error("Error insertando la auditoría: " + error);
    }
}

async function auditUpdate(idAudit,idStatus,mensaje){
    try{
        const dataToUpdate = {
            IdStatusAuditoriaLogin: idStatus,
            FechaEstadoActualizado:new Date(),
            Mensaje: mensaje
        }

        //Si el ingreso es correcto, no envía la clave correcta
        if(idStatus == 3){
            dataToUpdate.Clave = "";
        }

        const newAudit = await db.auditoriaLogin.update({
            where:{
                IdAuditoriaLogin:idAudit
            },
            data:dataToUpdate
        });
    }
    catch(error){
        console.error("Error actualizando la auditoría: " + error);
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

