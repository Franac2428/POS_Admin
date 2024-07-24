'use client';

import { useState } from 'react';
import useSWR from 'swr';
import { useEffect,createContext, useContext } from 'react';
import HorariosLista from "./horariosList";
import UpdateHorario from '@/app/components/seguridad/updateHorario';
import AddHorario from "./addHorario";
import { Toaster, toast } from 'sonner';
import DeleteHorario from '@/app/components/seguridad/deleteHorario';


export default function HorariosList() {
    const [updateHorario, setUpdateHorario] = useState(false);
    const [selectedHorario, setSelectedHorario] = useState(null);
    const [deletehorario, setDeleteHoraio] = useState(false);


    const { data, error, mutate } = useSWR('http://localhost:3000/api/horario', async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    });

    if (error) return <div>Error al cargar los datos</div>;
    if (!data) return <div>Cargando...</div>;
    if (!Array.isArray(data)) return <div>No hay datos disponibles</div>;

    return (
        <>
            <Toaster />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Horarios
                        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                            Horarios semanales, puedes asignar la hora de inicio y hora final de la jornada
                            o bien puedes hasta marcar la fecha de un feriado durante la semana.
                        </p>
                        <button
                            type="button"
                            data-modal-target="createHorariodefaultModal"
                            data-modal-toggle="createHorariodefaultModal"
                            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 bg-gray-700 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                        >
                            <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                />
                            </svg>
                            Agregar
                        </button>
                        <AddHorario mutate={mutate} />
                    </caption>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Dias</th>
                            <th scope="col" className="px-6 py-3">Hora Entrada</th>
                            <th scope="col" className="px-6 py-3">Hora Salida</th>
                            <th scope="col" className="px-6 py-3"><span className="sr-only">Edit</span></th>
                            <th scope="col" className="px-6 py-3"><span className="sr-only">Eliminar</span></th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((horario) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={horario.Id}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {horario.Dia}
                                </th>
                                <td className="px-6 py-4">{horario.HoraInicio}</td>
                                <td className="px-6 py-4">{horario.HoraFin}</td>
                                <td className="px-6 py-4 text-right">
                                    <button
                                        type='button'
                                        data-modal-target="updateEventModal"
                                        data-modal-toggle="updateEventModal"
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        onClick={() => {
                                            setSelectedHorario(horario.Id);
                                            setUpdateHorario(true);
                                        }}
                                    >
                                        Edit
                                    </button>                              
                                                                 
                                    <UpdateHorario open={updateHorario} onClose={() => setUpdateHorario(false)} horarioId={selectedHorario} mutate={mutate} />
                                </td>
                                <td className="px-6 py-4 text-right">
                                    
                                    <button
                                        type='button'
                                        data-modal-target="popup-modal-horario"
                                        data-modal-toggle="popup-modal-horario"
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        onClick={() => {
                                            setSelectedHorario(horario.Id);
                                            setDeleteHoraio(true);
                                        }}
                                    >
                                        Eliminar
                                    </button>
                                    <DeleteHorario open={deletehorario} onClose={() => setDeleteHoraio(false)} horarioId={selectedHorario}  mutate={mutate} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
