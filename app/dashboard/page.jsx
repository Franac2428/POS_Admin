
'use client';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function DashboardPage() {
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === 'loading') return;
        if (!session) {
            signIn();
        } else {
            console.log("Session role:", session);
            console.log("User role:", session.user?.role);
            // Log the user's role to the console
            if (session.user.role !== 'Administrador') {
                <p>Empleado</p>;
            }
        }
    }, [session, status]);

    if (status === 'loading' || !session) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, admin!</p>
        </div>
    );
}

