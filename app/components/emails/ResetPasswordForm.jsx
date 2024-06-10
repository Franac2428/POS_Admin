"use client"
import React, { useState } from "react"
import { resetPassword } from "@/app/api/auth/resetPassword/resetPassword"

const ResetPasswordForm = () => {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async () => {
        const message = await resetPassword(email)

        setMessage(message)
    }

    return (
        <div className="flex flex-col gap-4">
            <h1>Reset Password</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <button onClick={handleSubmit}>Reset Password</button>
            <p>{message}</p>
        </div>
    )
}

export default ResetPasswordForm
