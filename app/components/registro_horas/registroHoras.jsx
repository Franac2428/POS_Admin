// RegistroHoras.js
'use client'
import React, { useState } from 'react';

const RegistroHoras = () => {
    const [horaEntrada, setHoraEntrada] = useState(null);
    const [horaSalida, setHoraSalida] = useState(null);

    const marcarHoraEntrada = () => {
        const horaActual = new Date().toLocaleTimeString();
        setHoraEntrada(horaActual);
    };

    const marcarHoraSalida = () => {
        const horaActual = new Date().toLocaleTimeString();
        setHoraSalida(horaActual);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Registro de Horas</h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold mb-2">Hora de Entrada</h2>
                    {horaEntrada ? (
                        <p className="text-green-600">{horaEntrada}</p>
                    ) : (
                        <button
                            onClick={marcarHoraEntrada}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        >
                            Marcar Entrada
                        </button>
                    )}
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold mb-2">Hora de Salida</h2>
                    {horaSalida ? (
                        <p className="text-green-600">{horaSalida}</p>
                    ) : (
                        <button
                            onClick={marcarHoraSalida}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        >
                            Marcar Salida
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RegistroHoras;
