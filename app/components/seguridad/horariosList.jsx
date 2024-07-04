'use client';
import { useEffect, useState, createContext, useContext } from 'react';
import { initFlowbite } from 'flowbite';
import UpdateHorario from '@/app/components/seguridad/updateHorario';

export default function HorariosLista({ days, entryhours, exithours, importDate,horarioId, status }) {
    const [open, setOpen] = useState(false);
    const [updatehorario, SetUpdateHorario] = useState(false);
    useEffect(() => {
        initFlowbite(); // Inicializamos Flowbite una vez que el componente se ha montado
    }, []);
    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    {days}
                </th>
                <td className="px-6 py-4">{entryhours}</td>
                <td className="px-6 py-4">{exithours}</td>
                <td className="px-6 py-4 text-right">
                    <button
                        type='button'
                        data-modal-target="updateEventModal"
                        data-modal-toggle="updateEventModal"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        Edit
                    </button>
                    <UpdateHorario open={updatehorario} onClose={() => SetUpdateHorario(false)} horarioId={horarioId}/>
                </td>
            </tr>
        </>
    )
}
