import * as React from "react"

export const VerifyEmailTemplate = ({ email, emailVerificationToken }) => (
    <div>
        <h1>
            Verify email for <b>{email}</b>
        </h1>
        <p>To verify your email, click on this link:</p>
        <a
            href={`http://localhost:3000/auth/verificar-email?token=${emailVerificationToken}`}
        >
            Click here to verify your email
        </a>
    </div>
)
