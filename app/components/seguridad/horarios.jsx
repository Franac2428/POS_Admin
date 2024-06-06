'use client'
import { useEffect, useState, createContext, useContext } from 'react';
import HorariosLista from "./horariosList"
import AddHorario from "./addHorario"

export default function HorariosList() {
    const [addHorario, SetAddHorario] = useState(false);
    useEffect(() => {
        initFlowbite(); // Inicializamos Flowbite una vez que el componente se ha montado
    }, []);
    return (
        <>
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
                        <AddHorario open={addHorario} onClose={() => SetAddHorario(false)} />
                    </caption>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Dias
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Hora Entrada
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Hora Salida
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fecha Importante
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Estado
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <HorariosLista days="Lunes" entryhours="9:00" exithours="20:00" importDate="Vacio" status="Laboral" />
                        <HorariosLista days="Martes" entryhours="9:00" exithours="20:00" importDate="25/04/2024" status="No Laboral" />
                        <HorariosLista days="Miercoles" entryhours="9:00" exithours="20:00" importDate="Vacio" status="Laboral" />
                        <HorariosLista days="Jueves" entryhours="9:00" exithours="20:00" importDate="Vacio" status="Laboral" />
                        <HorariosLista days="Viernes" entryhours="9:00" exithours="20:00" importDate="Vacio" status="Laboral" />
                        <HorariosLista days="Sabado" entryhours="9:00" exithours="20:00" importDate="Vacio" status="Laboral" />
                        <HorariosLista days="Domingo" entryhours="9:00" exithours="20:00" importDate="Vacio" status="Laboral" />
                    </tbody>
                </table>
            </div >

        </>
    )
}