import React from 'react';

const EvaluacionesDesempeno = () => {
    // Datos de ejemplo de evaluaciones y observaciones
    const evaluaciones = [
        {
            id: 1,
            empleado: 'Empleado 1',
            fecha: '2024-04-10',
            observacion: 'Buen desempeño en el proyecto X. Se destaca por su capacidad para trabajar en equipo.',
        },
        {
            id: 2,
            empleado: 'Empleado 2',
            fecha: '2024-04-11',
            observacion: 'El empleado ha mostrado una mejora constante en su rendimiento. Se recomienda continuar así.',
        },
        {
            id: 3,
            empleado: 'Empleado 3',
            fecha: '2024-04-11',
            observacion: 'Hubo pérdidas de inventario. Estamos en contacto.',
        },
        // Más evaluaciones...
    ];

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
