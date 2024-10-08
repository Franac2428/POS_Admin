'use client';
import { useRouter } from 'next/navigation';
import { Fragment } from 'react';

export default function Page() {
    const router = useRouter();

    const handleLoginRedirect = () => {
        router.push('/auth/login');
    };

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
                <div className="flex justify-center items-center">
                    <button
                        onClick={handleLoginRedirect}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Iniciar Sesión
                    </button>
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
