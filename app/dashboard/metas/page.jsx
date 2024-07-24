'use client'
import React from 'react';
import useSWR from 'swr';

const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error al cargar los datos');
    }
    const data = await response.json();
    return data;
};

const EvaluacionesDesempeno = () => {
    const { data, error } = useSWR('http://localhost:3000/api/metas', fetcher);

    if (error) return <div>Error al cargar los datos</div>;
    if (!data) return <div>Cargando...</div>;
    if (!Array.isArray(data)) return <div>No hay datos disponibles</div>;

    const evaluaciones = data.map((evaluacion) => ({
        id: evaluacion.id,
        empleado: evaluacion.empleado?.nombre || 'Desconocido',
        fecha: new Date(evaluacion.fecha).toLocaleDateString(),
        observacion: evaluacion.observaciones,
    }));

    return (
        <div className="max-w-7xl mx-auto py-4">
            <h1 className="font-semibold text-3xl text-gray-900">Evaluaciones de Desempeño</h1>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {evaluaciones.map(evaluacion => (
                    <div key={evaluacion.id} className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden">
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-900">{evaluacion.empleado}</h2>
                            <p className="text-sm text-gray-600 mt-2">{evaluacion.fecha}</p>
                            <p className="text-sm text-gray-700 mt-4">{evaluacion.observacion}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EvaluacionesDesempeno;
