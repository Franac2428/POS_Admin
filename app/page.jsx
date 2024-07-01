'use client'

import { useSession } from "next-auth/react";

export default function Page() {
    const session = useSession();

    if (session?.data?.user?.role === "Administrador") {
        return <p>You are an admin, welcome!</p>;
    }

    return <p>You are not authorized to view this page!</p>;
}

