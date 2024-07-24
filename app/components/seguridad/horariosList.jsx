'use client';
import { useEffect, useState } from 'react';
import { initFlowbite } from 'flowbite';
import useSWR from 'swr';
import UpdateHorario from '@/app/components/seguridad/updateHorario';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HorariosLista({ days, entryhours, exithours, importDate, horarioId, status }) {
    const { data, error, mutate } = useSWR('/api/horarios', fetcher); // Aquí obtenemos la función mutate
    const [open, setOpen] = useState(false);
    const [updateHorario, setUpdateHorario] = useState(false);
    const [selectedHorario, setSelectedHorario] = useState(null);

    useEffect(() => {
        initFlowbite(); // Inicializamos Flowbite una vez que el componente se ha montado
    }, []);
    

    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={horarioId}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {days}
                </th>
                <td className="px-6 py-4">{entryhours}</td>
                <td className="px-6 py-4">{exithours}</td>
                <td className="px-6 py-4 text-right">
                    <button
                        type="button"
                        data-modal-target="updateEventModal"
                        data-modal-toggle="updateEventModal"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => {
                            setSelectedHorario(horarioId);
                            setUpdateHorario(true);
                        }}
                    >
                        Edit
                    </button>
                    <UpdateHorario open={updateHorario} onClose={() => setUpdateHorario(false)} horarioId={selectedHorario} mutate={mutate} />
                </td>
            </tr>
        </>
    );
}
