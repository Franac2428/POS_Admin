'use client';
import React from 'react';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';

const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error al cargar los datos');
    }
    const data = await response.json();
    return data;
};

const EvaluacionesDesempeno = () => {
    const { data: session } = useSession();
    const { data, error } = useSWR('http://localhost:3000/api/metas', fetcher);

    // Verifica el rol del usuario
    const hasAccess = session?.user?.role === 'Empleado' || session?.user?.role === 'Administrador';

    if (!hasAccess) {
        return <div>No tienes autorización para ver esta página</div>;
    }

    if (error) return <div>Error al cargar los datos</div>;
    if (!data) return <div>Cargando...</div>;
    if (!Array.isArray(data)) return <div>No hay datos disponibles</div>;

    const evaluaciones = data.map((evaluacion) => ({
        id: evaluacion.id,
        nombre: evaluacion.empleado?.nombre || 'Desconocido',
        apellido: evaluacion.empleado?.apellido || 'Desconocido',
        fecha: new Date(evaluacion.fecha).toLocaleDateString(),
        observacion: evaluacion.observaciones,
    }));

    return (
        <div className="container mx-auto px-4 py-8 text-gray-900 dark:text-gray-100">
            <h1 className="text-2xl font-bold mb-4">Evaluaciones de Desempeño</h1>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {evaluaciones.map(evaluacion => (
                    <div key={evaluacion.id} className="shadow-lg bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{evaluacion.nombre} {evaluacion.apellido}</h2>
                            <p className="text-sm text-gray-900 dark:text-gray-100 mt-2">{evaluacion.fecha}</p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 mt-4">{evaluacion.observacion}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EvaluacionesDesempeno;
