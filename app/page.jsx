// Importa las librerías necesarias
'use client'
import { useSession } from "next-auth/react";
import { Fragment } from 'react';

export default function Page() {
    const { data: session, status } = useSession();

    // Si no se ha cargado la sesión aún
    if (status === "loading") {
        return <p>Cargando...</p>;
    }

    // Si hay un error al cargar la sesión
    if (status === "error") {
        return <p>Error al cargar la sesión.</p>;
    }

    // Verifica si el usuario es administrador
    if (session?.user?.role === "Administrador") {
        return (
            <Fragment>
                {/* Encabezado */}
                <header className="bg-gray-900 text-white py-4">
                    <div className="container mx-auto px-4">
                        <h1 className="text-2xl font-bold">Dashboard de Administrador</h1>
                    </div>
                </header>

                {/* Contenido principal */}
                <main className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 - Estadísticas */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">Estadísticas Generales</h2>
                            {/* Aquí puedes colocar tus estadísticas */}
                        </div>

                        {/* Card 2 - Últimos usuarios */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">Últimos Usuarios</h2>
                            {/* Aquí puedes mostrar los últimos usuarios */}
                        </div>

                        {/* Card 3 - Configuraciones */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">Configuraciones</h2>
                            {/* Enlaces a configuraciones */}
                        </div>
                    </div>
                </main>

                {/* Pie de página */}
                <footer className="bg-gray-900 text-white py-4 mt-8">
                    <div className="container mx-auto px-4 text-center">
                        <p>Derechos reservados &copy; 2024</p>
                    </div>
                </footer>
            </Fragment>
        );
    }

    // Si el usuario no es administrador
    return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-red-600 text-center">No estás autorizado para ver esta página.</p>
        </div>
    );
}
