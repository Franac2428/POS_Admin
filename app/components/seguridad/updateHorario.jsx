'use client';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Toaster, toast } from 'sonner';
import DeleteHorario from '@/app/components/seguridad/deleteHorario';

export default function UpdateHorario({ horarioId, mutate }) {
    const [open, setOpen] = useState(false);
    const [deletehorario, SetDeleteHorario] = useState(false);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [horario, setHorario] = useState(null);

    const fetchHorario = async () => {
        if (horarioId) {
            try {
                const response = await fetch(`http://localhost:3000/api/horario/${horarioId}`);
                const result = await response.json();
                if (response.ok) {
                    setHorario(result);
                } else {
                    toast.error('Error al obtener los datos del horario');
                }
            } catch (error) {
                toast.error('Error al obtener los datos del horario');
            }
        }
    };

    useEffect(() => {
        fetchHorario();
    }, [horarioId]);

    useEffect(() => {
        if (horario) {
            setValue('Dia', horario.Dia);
            setValue('HoraInicio', horario.HoraInicio);
            setValue('HoraFin', horario.HoraFin);

        }
    }, [horario, setValue]);

    const handleEditar = handleSubmit(async (data) => {
        try {
            const response = await fetch(`http://localhost:3000/api/horario/${horarioId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const horarioActualizado = await response.json();
                toast.success('Horario editado con éxito');
                mutate(); 
                setTimeout(() => {
                    onClose();
                }, 500);
            } else {
                const errorData = await response.json();
                toast.error(`Error: ${errorData.message}`);
            }
        } catch (error) {
        }
    });

    return (
        <>
            <div
                id="updateEventModal"
                tabIndex={-1}
                aria-hidden="true"
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
            >
                <div className="relative p-4 w-full max-w-xl h-full md:h-auto">
                    {/* Modal content */}
                    <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        {/* Modal header */}
                        <div className="flex justify-between items-center mb-4 sm:mb-5 dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Update event
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-toggle="updateEventModal"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* Modal body */}
                        <form onSubmit={handleEditar}>
                            <div className="grid gap-4 mb-4">
                                <div>
                                    <label
                                        htmlFor="Dia"
                                        className="block mb-2 w-10 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Dia
                                    </label>
                                    <select
                                        id="Dia"
                                        name="Dia"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        {...register("Dia", { required: { value: true, message: 'El día es requerido' } })}
                                    >
                                        <option value="Lunes">Lunes</option>
                                        <option value="Martes">Martes</option>
                                        <option value="Miércoles">Miércoles</option>
                                        <option value="Jueves">Jueves</option>
                                        <option value="Viernes">Viernes</option>
                                        <option value="Sábado">Sábado</option>
                                        <option value="Domingo">Domingo</option>
                                    </select>

                                    {errors.Dia && <span className="text-red-500">{errors.Dia.message}</span>}
                                </div>
                                <div>
                                    <label
                                        htmlFor="HoraInicio"
                                        className="block mb-2 w-24 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Hora Entrada:
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                            <svg
                                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <input
                                            type="time"
                                            id="HoraInicio"
                                            className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            defaultValue="00:00"
                                            {...register("HoraInicio", { required: { value: true, message: 'La hora es requerida' } })} />
                                        {errors.HoraInicio && <span className="text-red-500">{errors.HoraInicio.message}</span>}
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="HoraFin"
                                        className="block mb-2 w-20 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Hora Salida:
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                            <svg
                                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <input
                                            type="time"
                                            id="HoraFin"
                                            className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            defaultValue="00:00"
                                            {...register("HoraFin", { required: { value: true, message: 'La hora es requerida' } })} />
                                        {errors.HoraFin && <span className="text-red-500">{errors.HoraFin.message}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button
                                    type="submit"
                                    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Actualizar
                                </button>
                                <button
                                    type="button"
                                    data-modal-target="popup-modal-horario"
                                    data-modal-toggle="popup-modal-horario"
                                    className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                                    onClick={() => setDeleteHorario(true)}
                                 
                                >
                                    <svg
                                        className="mr-1 -ml-1 w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Borrar
                                </button>
                            </div>
                        </form>
                        <DeleteHorario open={deletehorario} onClose={() => SetDeleteHoraio(false)} horarioId={horarioId}  mutate={mutate} />
                    </div>
                </div>
            </div>
        </>

    )
}