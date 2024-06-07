"use client"
import React, { useState } from "react"
import { changePassword } from "@/app/api/auth/resetPassword/changePassword"

const ChangePasswordForm = ({ resetPasswordToken }) => {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [message, setMessage] = useState("")

    const handleSubmit = async () => {
        if (password !== confirmPassword) {
            setMessage("Passwords do not match")
            return
        }

        const message = await changePassword(resetPasswordToken, password)

        setMessage(message)
    }

    return (
        <div>
            <h1>Change Password</h1>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Change Password</button>
            <p>{message}</p>
        </div>
    )
}

export default ChangePasswordForm
