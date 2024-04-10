'use client';
import { useEffect, useState, createContext, useContext } from 'react';
import { initFlowbite } from 'flowbite';
import UpdateRole from '@/app/components/seguridad/updateRol';

export default function RoleLista({ role, description }) {
    const [open, setOpen] = useState(false);
    const [updaterol, SetUpdateRole] = useState(false);
    useEffect(() => {
        initFlowbite(); // Inicializamos Flowbite una vez que el componente se ha montado
    }, []);

    // Generamos IDs únicos para cada dropdown y botón basados en el role para evitar conflictos
    const dropdownId = `dropdown-${role.replace(/\s+/g, '-')}`; // Reemplaza espacios por guiones para asegurar un ID válido

    return (
        <>
            <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="w-4 px-4 py-3">
                    <div className="flex items-center">
                        <input
                            id={`checkbox-${dropdownId}`}
                            type="checkbox"
                            onClick="event.stopPropagation()" // Corrige la capitalización de onclick a onClick
                            className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor={`checkbox-${dropdownId}`} className="sr-only">
                            checkbox
                        </label>
                    </div>
                </td>
                <th
                    scope="row"
                    className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    {role}
                </th>
                <td className="px-4 py-2">
                    <div className="px-2 py-0.5 text-xs font-medium text-primary-800 bg-primary-100 rounded dark:bg-primary-900 dark:text-primary-300">
                        {description}
                    </div>
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <button
                        id={`button-${dropdownId}`}
                        type="button"
                        data-dropdown-toggle={dropdownId}
                        className="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 rounded-lg hover:bg-gray-200 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        {/* SVG del botón aquí */}
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                    </button>
                    <div
                        id={dropdownId}
                        className="hidden z-10 w-44 bg-white rounded shadow divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600"
                    >
                        <ul
                            className="py-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby={`button-${dropdownId}`}
                        >
                            <li>
                                <button
                                    type='button'
                                    data-modal-target="UpdateRoldefaultModal"
                                    data-modal-toggle="UpdateRoldefaultModal"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Edit
                                </button>
                            </li>
                        </ul>
                    </div>
                    <UpdateRole open={updaterol} onClose={() => SetUpdateRole(false)} />
                </td>
            </tr>
        </>
    );
}
