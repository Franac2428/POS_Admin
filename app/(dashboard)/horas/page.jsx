import React from 'react';

const Monitorizacion = () => {
    // Datos de ejemplo para horarios de entrada y salida
    const horariosEntrada = [
        { id: 1, empleado: 'Josue Bonilla Soto', hora: '08:00', fecha: '2024-04-08' },
        { id: 2, empleado: 'Empleado 2', hora: '08:30', fecha: '2024-04-08' },
        // Más horarios de entrada...
    ];

    const horariosSalida = [
        { id: 1, empleado: 'Josue Bonilla Soto', hora: '17:00', fecha: '2024-04-08' },
        { id: 2, empleado: 'Empleado 2', hora: '17:30', fecha: '2024-04-08' },
        // Más horarios de salida...
    ];

    return (
        <div className="max-w-7xl mx-auto py-4">
            <h1 className="font-semibold text-3xl text-gray-900">Monitorización de Horarios</h1>
            <div className="mt-8">
                <h2 className="text-lg font-semibold mb-2">Horarios de Entrada</h2>
                <table className="w-full border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 bg-gray-100 border border-gray-200">ID</th>
                            <th className="px-4 py-2 bg-gray-100 border border-gray-200">Empleado</th>
                            <th className="px-4 py-2 bg-gray-100 border border-gray-200">Hora</th>
                            <th className="px-4 py-2 bg-gray-100 border border-gray-200">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {horariosEntrada.map(horario => (
                            <tr key={horario.id}>
                                <td className="px-4 py-2 border border-gray-200">{horario.id}</td>
                                <td className="px-4 py-2 border border-gray-200">{horario.empleado}</td>
                                <td className="px-4 py-2 border border-gray-200">{horario.hora}</td>
                                <td className="px-4 py-2 border border-gray-200">{horario.fecha}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-8">
                <h2 className="text-lg font-semibold mb-2">Horarios de Salida</h2>
                <table className="w-full border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 bg-gray-100 border border-gray-200">ID</th>
                            <th className="px-4 py-2 bg-gray-100 border border-gray-200">Empleado</th>
                            <th className="px-4 py-2 bg-gray-100 border border-gray-200">Hora</th>
                            <th className="px-4 py-2 bg-gray-100 border border-gray-200">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {horariosSalida.map(horario => (
                            <tr key={horario.id}>
                                <td className="px-4 py-2 border border-gray-200">{horario.id}</td>
                                <td className="px-4 py-2 border border-gray-200">{horario.empleado}</td>
                                <td className="px-4 py-2 border border-gray-200">{horario.hora}</td>
                                <td className="px-4 py-2 border border-gray-200">{horario.fecha}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Monitorizacion;
