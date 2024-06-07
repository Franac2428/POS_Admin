import prisma from "@/app/lib/db"
import React from "react"

const VerifyEmailPage = async ({ searchParams }) => {
    if (searchParams.token) {
        const user = await prisma.usuarios.findUnique({
            where: {
                emailVerificationToken: searchParams.token
            }
        })
        if (!user) {
            return <div>Invalid token</div>
        }

        await prisma.usuarios.update({
            where: {
                emailVerificationToken: searchParams.token
            },
            data: {
                emailVerified: true,
                emailVerificationToken: null
            }
        })

        return (
            <div>
                <h1>
                    Email verified for <b>{user.email}</b>!
                </h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Verify Email</h1>
                No email verification token found. Check your email.
            </div>
        )
    }
}

export default VerifyEmailPage
