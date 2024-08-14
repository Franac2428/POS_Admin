'use client';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
    const { data: session, status } = useSession();
    const [role, setRole] = useState(null);
    const [name, setName] = useState(null);

    useEffect(() => {
        if (status === 'loading') return;
        if (!session) {
            // Redirect to sign-in page if not authenticated
            signIn();
        } else {
            // Set the role and name from the session
            setRole(session.user?.role);
            setName(session.user?.name);
        }
    }, [session, status]);

    if (status === 'loading') {
        return <div className="flex justify-center items-center h-screen bg-gray-100 text-gray-500">Loading...</div>;
    }

    if (!session) {
        return <div className="flex justify-center items-center h-screen bg-gray-100 text-gray-500">Redirecting to sign-in...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Dashboard</h1>
                <div className="text-center">
                    {role === 'Administrador' ? (
                        <p className="text-xl text-green-600">¡Hola!, Administrador: <span className="font-bold">{name}</span>!</p>
                    ) : role === 'Empleado' ? (
                        <p className="text-xl text-blue-600">¡Hola!, Trabajador: <span className="font-bold">{name}</span>!</p>
                    ) : (
                        <p className="text-xl text-gray-700">Welcome, <span className="font-bold">{name}</span>!</p>
                    )}
                </div>
            </div>
        </div>
    );
}
