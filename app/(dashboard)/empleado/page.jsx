'use client'

import Agregar from "@/app/components/empleado/crear";
import { CirclePlus, FileUp, Pencil, SlidersHorizontal, Trash, Eye, SmilePlus } from "lucide-react";
import { useState } from "react";
import Eliminar from "../../components/empleado/eliminar";
import Buscador from "../../components/pos/buscador";
import Evaluar from "@/app/components/empleado/evaluar";
import Editar from "@/app/components/empleado/editar";
import Ver from "@/app/components/empleado/ver";
import useSWR from 'swr';

export default function Empleado() {
    const [open, setOpen] = useState(false);
    const [agregar, setAgregar] = useState(false);
    const [ver, setVer] = useState(false);
    const [editar, setEditar] = useState(false);
    const [evaluar, setEvaluar] = useState(false);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

    const { data, error, mutate } = useSWR('http://localhost:3000/api/empleado', async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    });

    if (error) return <div>Error al cargar los datos</div>;
    if (!data) return <div>Cargando...</div>;
    if (!data || !Array.isArray(data)) return <div>No hay datos disponibles</div>;

    const eliminarEmpleado = (employeeId) => {
        mutate(data.filter(empleado => empleado.Id !== employeeId), false);
        setOpen(false);
    };

    return (
        <>
            <div className="w-full">
                <div className="grid grid-cols-10 gap-4 max-w-7xl mx-auto py-4">
                    <h1 className="font-semibold col-span-10 text-3xl text-gray-900 dark:text-gray-100">Empleados</h1>
                    <div className="col-span-3">
                        <Buscador />
                    </div>
                    <div className="col-start-8 col-span-3">
                        <div className="flex justify-end gap-6">
                            <button className="transition-transform ease-in-out duration-75 hover:scale-105 active:scale-95 transform shadow-lg bg-white dark:bg-gray-700 px-3 py-2 rounded-lg">
                                <SlidersHorizontal className="text-gray-500 dark:text-gray-400" />
                            </button>
                            <button className="flex items-center gap-3 shadow-lg active:scale-95 transition-transform ease-in-out duration-75 hover:scale-105 transform text-white font-semibold bg-green-500 dark:bg-green-600 px-4 py-2 rounded-lg" onClick={() => setAgregar(true)}>
                                <CirclePlus className="text-white" />
                                Agregar
                            </button>
                            <button className="flex gap-3 shadow-lg text-green-500 dark:text-green-400 font-semibold bg-white dark:bg-gray-700 px-4 py-2 active:scale-95 transition-transform ease-in-out duration-75 hover:scale-105 transform border border-green-500 dark:border-green-400 rounded-lg">
                                <FileUp className="text-green-500 dark:text-green-400" />
                                Exportar
                            </button>
                        </div>
                    </div>
                    <div className="shadow-lg col-span-10 bg-white dark:bg-gray-700 px-5 py-4 rounded-lg">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">  Id </th>
                                    <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">  Cedula </th>
                                    <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4"> Nombre</th>
                                    <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4"> Apellido</th>
                                    <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4"> Puesto</th>
                                    <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">  Correo   </th>
                                    <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">  # Telefono   </th>
                                    <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4"> Acciones  </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((empleado) => (
                                    <tr className="" key={empleado.Id}>
                                        <td className=" text-center text-sm text-gray-700 whitespace-nowrap">
                                            <a href="#" className="font-bold text-blue-700 hover:underline"> {empleado.Id}</a>
                                        </td>
                                        <td className="text-center text-sm text-gray-900 dark:text-gray-200 py-4">78930292</td>
                                        <td className="text-center text-sm text-gray-900 dark:text-gray-200"> {empleado.nombre}</td>
                                        <td className="text-center text-sm text-gray-900 dark:text-gray-200"> {empleado.apellido}</td>
                                        <td className=" text-center text-sm text-gray-700 whitespace-nowrap">
                                            <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-red-200 dark:text-red-200 dark:bg-red-800 rounded-lg bg-opacity-50">Cocina</span>
                                        </td>
                                        <td className="text-center text-sm text-gray-900 dark:text-gray-200"> {empleado.email}</td>
                                        <td className="text-center text-sm text-gray-900 dark:text-gray-200"> {empleado.telefono}</td>
                                        <td className=" flex gap-1 justify-evenly my-1 whitespace-nowrap">
                                            <button className="p-1.5 text-gray-900 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md " onClick={() => {
                                                setSelectedEmployeeId(empleado.Id);
                                                setEditar(true)
                                                }}><Pencil size={15} strokeWidth={2.2} /></button>
                                            <button className="p-1.5 text-gray-900 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-green-600 bg-opacity-50 rounded-md" onClick={() => setVer(true)}><Eye size={15} strokeWidth={2.2} /> </button>
                                            <button className="p-1.5 text-gray-900 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-yellow-600 bg-opacity-50 rounded-md" onClick={() => setEvaluar(true)}><SmilePlus size={15} strokeWidth={2.2} /></button>
                                            <button className="p-1.5 text-gray-900 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md" onClick={() => {
                                                setSelectedEmployeeId(empleado.Id);
                                                setOpen(true);
                                            }}><Trash size={15} strokeWidth={2.2} /> </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Eliminar open={open} onClose={() => setOpen(false)} employeeId={selectedEmployeeId} onEliminar={eliminarEmpleado} />
                <Agregar open={agregar} onClose={() => setAgregar(false)} mutate={mutate} />
                <Evaluar show={evaluar} onClose={() => setEvaluar(false)} />
                <Editar open={editar} onClose={() => setEditar(false)} employeeId={selectedEmployeeId}  mutate={mutate}  />
                <Ver open={ver} onClose={() => setVer(false)} />
            </div>
        </>
    );
}
