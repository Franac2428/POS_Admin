
'use client';
import { useEffect, useState, createContext, useContext } from 'react';
import { initFlowbite } from 'flowbite';
import RoleLista from "./roleList"
import AddRole from '@/app/components/seguridad/addRol';

export default function RoleTable() {
    const [open, setOpen] = useState(false);
    const [addrole, SetAddRole] = useState(false);
    return (
        <>
            <div className="overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                <div className="px-4 divide-y dark:divide-gray-700">
                    <div className="flex flex-col py-3 space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center space-x-4">
                            <h5>
                                <span className="text-gray-500">All Roles:</span>
                                <span className="dark:text-white">4</span>
                            </h5>
                        </div>
                        <button
                            type="button"
                            data-modal-target="createUserdefaultModal"
                            data-modal-toggle="createUserdefaultModal"
                            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
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
                    </div>
                    <AddRole open={addrole} onClose={() => SetAddRole(false)} />
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-2">
                                    <div className="flex items-center">
                                        <input
                                            id="checkbox-all"
                                            type="checkbox"
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" className="px-4 py-3">Role</th>
                                <th scope="col" className="px-4 py-3">Descripcion</th>
                                <th scope="col" className="px-4 py-3">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <RoleLista role="Jefe" description="Lorem Ipsum is simply dummy text" />
                            <RoleLista role="Cocina" description="Lorem Ipsum is simply dummy text" />
                            <RoleLista role="Caja" description="Lorem Ipsum is simply dummy text" />
                            <RoleLista role="Express" description="Lorem Ipsum is simply dummy text" />
                        </tbody>
                    </table>
                </div>
                <nav className="flex flex-col items-center justify-between p-4 sm:flex-row">
                    <div className="flex items-center space-x-3">
                        <label htmlFor="rows" className="text-xs font-normal text-gray-500 dark:text-gray-400">Rows per page</label>
                        <select id="rows" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block py-1.5 pl-3.5 pr-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected value={4}>4</option>
                            <option value={8}>8</option>
                        </select>
                        <div className="text-xs font-normal text-gray-500 dark:text-gray-400">
                            <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">100</span>
                        </div>
                    </div>
                    <ul className="inline-flex items-center -space-x-px">
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 py-1.5 text-sm leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Anterior</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 py-1.5 text-sm leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Siguiente</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}