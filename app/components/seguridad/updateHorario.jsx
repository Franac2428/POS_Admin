import { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { X } from "lucide-react";

export default function UpdateHorario({ open, onClose, horarioId, mutate }) {
    const [horario, setHorario] = useState(null);
    const [selectedDia, setSelectedDia] = useState('');

    const diaRef = useRef();
    const horaInicioRef = useRef();
    const horaFinRef = useRef();

    useEffect(() => {
        const fetchHorario = async () => {
            try {
                const response = await fetch(`/api/horario/${horarioId}`);
                if (response.ok) {
                    const data = await response.json();
                    setHorario(data);
                    setSelectedDia(data.Dia);
                } else {
                    toast.error('Error al obtener los datos del horario');
                }
            } catch (error) {
                toast.error('Error al obtener los datos del horario');
            }
        };

        if (open && horarioId) {
            fetchHorario();
        } else {
            setHorario(null);
        }
    }, [open, horarioId]);

    const handleEditarHorario = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`/api/horario/${horarioId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Dia: diaRef.current.value,
                    HoraInicio: horaInicioRef.current.value,
                    HoraFin: horaFinRef.current.value,
                }),
            });

            if (response.ok) {
                const horarioActualizado = await response.json();
                toast.success('Horario actualizado con éxito');
                mutate();
                onClose();
            } else {
                const errorData = await response.json();
                toast.error(`Error: ${errorData.message}`);
            }
        } catch (error) {
            toast.error('Error al actualizar el horario');
        }
    };

    const handleCancel = () => {
        onClose();
    };

    if (!open) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all sm:max-w-lg sm:w-full">
                    <form onSubmit={handleEditarHorario}>
                        <div className="flex justify-between items-center bg-white dark:bg-gray-800 px-4 py-5 sm:px-6">
                            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                Editar Horario
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={handleCancel}
                            >
                                <X className="w-5 h-5" />
                                <span className="sr-only">Cerrar modal</span>
                            </button>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:p-6">
                            <label htmlFor="dia" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Día
                            </label>
                            <select
                                id="dia"
                                ref={diaRef}
                                value={selectedDia} 
                                onChange={(e) => setSelectedDia(e.target.value)}  
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                >
                                <option value="Lunes">Lunes</option>
                                <option value="Martes">Martes</option>
                                <option value="Miércoles">Miércoles</option>
                                <option value="Jueves">Jueves</option>
                                <option value="Viernes">Viernes</option>
                                <option value="Sábado">Sábado</option>
                                <option value="Domingo">Domingo</option>
                            </select>

                            <label htmlFor="horaInicio" className="block mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                                Hora de Inicio
                            </label>
                            <input
                                type="time"
                                id="horaInicio"
                                ref={horaInicioRef}
                                defaultValue={horario?.HoraInicio}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                            />

                            <label htmlFor="horaFin" className="block mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                                Hora de Fin
                            </label>
                            <input
                                type="time"
                                id="horaFin"
                                ref={horaFinRef}
                                defaultValue={horario?.HoraFin}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                            />

                            <div className="mt-4 flex justify-end">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="ml-3 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-700"
                                >
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
