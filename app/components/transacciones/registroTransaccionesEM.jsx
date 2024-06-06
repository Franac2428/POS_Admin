'use client'

import { useEffect, useState, createContext, useContext } from 'react';
import { initFlowbite } from 'flowbite'
import Actualizar from '@/app/components/transacciones/actualizarTransaccion';
import Eliminar from '@/app/components/transacciones/borrarTransaccion';

export default function RegistroTransaciones({ transaction, article, paytype, price, status }) {
    const [open, setOpen] = useState(false);
    const [actualizar, SetActualizar] = useState(false);
    useEffect(() => {
        initFlowbite()
    }, [])
    return (
        <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
            <td className="px-4 py-3 w-4">
                <div className="flex items-center">
                    <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        onclick="event.stopPropagation()"
                        className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-table-search-1" className="sr-only">
                        checkbox
                    </label>
                </div>
            </td>
            <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
            >
                {transaction}
            </th>
            <td className="px-4 py-3">{article}</td>
            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {paytype}
            </td>
            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                ₡{price}
            </td>
            <td className="px-4 py-3 whitespace-nowrap">
                <span className={
                    `text-xs font-medium mr-2 px-2.5 py-0.5 rounded ${status === "Completada"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : status === "En progreso"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                    }`
                }>
                    {status}
                </span>
            </td>
            <td className="px-4 py-3">
                {/* <button
                    id={`${transaction}-dropdown-button`}
                    type="button"
                    data-dropdown-toggle={`${transaction}-dropdown`}
                    className="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                >
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                </button> */}
                <div
                    id={`${transaction}-dropdown`}
                    className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                    <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="apple-imac-27-dropdown-button"
                    >
                        <li>
                            <button
                                className="block py-2 px-4 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={() => SetActualizar(true)}
                            >
                                Edit
                            </button>
                        </li>
                        <li>
                            <button
                                className="block py-2 px-4 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Show
                            </button>
                        </li>


                    </ul>
                    <div className="py-1">
                        <button
                            className="block py-2 px-4 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => setOpen(true)}
                        >
                            Borrar
                        </button>
                    </div>
                </div>
            </td>
            <Eliminar open={open} onClose={() => setOpen(false)} />
            <Actualizar open={actualizar} onClose={() => SetActualizar(false)} />
        </tr>
    )
}