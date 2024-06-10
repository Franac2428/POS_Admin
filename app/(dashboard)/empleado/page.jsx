'use client'

import Agregar from "@/app/components/empleado/crear";
import { CirclePlus, FileUp, Pencil, SlidersHorizontal, Trash, Eye, SmilePlus } from "lucide-react";
import { useState } from "react";
import Eliminar from "../../components/empleado/eliminar";
import Buscador from "../../components/pos/buscador";
import Evaluar from "@/app/components/empleado/evaluar";
import Editar from "@/app/components/empleado/editar";
import Ver from "@/app/components/empleado/ver";




export default function empleado() {
    const [open, setOpen] = useState(false);
    const [agregar, setAgregar] = useState(false);
    const [ver, setVer] = useState(false);
    const [editar, setEditar] = useState(false);
    const [evaluar, setEvaluar] = useState(false);



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
                                <tr className="border-b dark:border-gray-600">
                                    <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                                        <a href="#" className="font-bold text-blue-700 hover:underline">EM10102</a>
                                    </td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200 py-4">305440618</td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200">Josue</td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200">Bonilla Soto</td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200">
                                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-yellow-200 dark:text-yellow-200 dark:bg-yellow-800 rounded-lg bg-opacity-50">Cajas</span>
                                    </td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200">josue@gmail.com</td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200">72094668</td>
                                    <td className=" flex gap-1 justify-evenly my-1 whitespace-nowrap">
                                        <button className="p-1.5 text-gray-900 dark:text-gray-200 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md " onClick={() => setEditar(true)}><Pencil size={15} strokeWidth={2.2} /></button>
                                        <button className="p-1.5 text-gray-900 dark:text-gray-200 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-green-600 bg-opacity-50 rounded-md" onClick={() => setVer(true)}><Eye size={15} strokeWidth={2.2} /> </button>
                                        <button className="p-1.5 text-gray-900 dark:text-gray-200 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-yellow-600 bg-opacity-50 rounded-md" onClick={() => setEvaluar(true)}><SmilePlus size={15} strokeWidth={2.2} /></button>
                                        <button className="p-1.5 text-gray-900 dark:text-gray-200 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md" onClick={() => setOpen(true)}><Trash size={15} strokeWidth={2.2} /> </button>
                                    </td>
                                </tr>
                                <tr className="border-b dark:border-gray-600">
                                    <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                                        <a href="#" className="font-bold text-blue-700 hover:underline">EM20203</a>
                                    </td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200 py-4">1234567689</td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200">Yaritza</td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200">Macotelo Menocal</td>
                                    <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-green-200 dark:text-green-200 dark:bg-green-800 rounded-lg bg-opacity-50">Jefe</span>
                                    </td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200">yaritza@gmail.com</td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200">87456128</td>
                                    <td className=" flex gap-1 justify-evenly my-1 whitespace-nowrap">
                                        <button className="p-1.5 text-gray-900 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md " onClick={() => setEditar(true)}><Pencil size={15} strokeWidth={2.2} /></button>
                                        <button className="p-1.5 text-gray-900 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-green-600 bg-opacity-50 rounded-md" onClick={() => setVer(true)}><Eye size={15} strokeWidth={2.2} /> </button>
                                        <button className="p-1.5 text-gray-900 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-yellow-600 bg-opacity-50 rounded-md" onClick={() => setEvaluar(true)}><SmilePlus size={15} strokeWidth={2.2} /></button>
                                        <button className="p-1.5 text-gray-900 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md" onClick={() => setOpen(true)}><Trash size={15} strokeWidth={2.2} /> </button>
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className=" text-center text-sm text-gray-700 whitespace-nowrap">
                                        <a href="#" className="font-bold text-blue-700 hover:underline">EM30304</a>
                                    </td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200 py-4">78930292</td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200">Francisco</td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200">Araya Carvajal</td>
                                    <td className=" text-center text-sm text-gray-700 whitespace-nowrap">
                                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-red-200 dark:text-red-200 dark:bg-red-800 rounded-lg bg-opacity-50">Cocina</span>
                                    </td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200">francisco@gmail.com</td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200">61198211</td>
                                    <td className=" flex gap-1 justify-evenly my-1 whitespace-nowrap">
                                        <button className="p-1.5 text-gray-900 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md " onClick={() => setEditar(true)}><Pencil size={15} strokeWidth={2.2} /></button>
                                        <button className="p-1.5 text-gray-900 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-green-600 bg-opacity-50 rounded-md" onClick={() => setVer(true)}><Eye size={15} strokeWidth={2.2} /> </button>
                                        <button className="p-1.5 text-gray-900 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-yellow-600 bg-opacity-50 rounded-md" onClick={() => setEvaluar(true)}><SmilePlus size={15} strokeWidth={2.2} /></button>
                                        <button className="p-1.5 text-gray-900 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md" onClick={() => setOpen(true)}><Trash size={15} strokeWidth={2.2} /> </button>
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                                        <a href="#" className="font-bold text-blue-700 hover:underline">EM40405</a>
                                    </td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200 py-4">52981198</td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200">Manfred</td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200">Villegas Lopez</td>
                                    <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-blue-200 dark:text-blue-200 dark:bg-blue-800 rounded-lg bg-opacity-50">Repartidor</span>
                                    </td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200">manfred@gmail.com</td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200">65907621</td>
                                    <td className=" flex gap-1 justify-evenly my-1 whitespace-nowrap">
                                        <button className="p-1.5 text-gray-900 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md " onClick={() => setEditar(true)}><Pencil size={15} strokeWidth={2.2} /></button>
                                        <button className="p-1.5 text-gray-900 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-green-600 bg-opacity-50 rounded-md" onClick={() => setVer(true)}><Eye size={15} strokeWidth={2.2} /> </button>
                                        <button className="p-1.5 text-gray-900 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-yellow-600 bg-opacity-50 rounded-md" onClick={() => setEvaluar(true)}><SmilePlus size={15} strokeWidth={2.2} /></button>
                                        <button className="p-1.5 text-gray-900 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md" onClick={() => setOpen(true)}><Trash size={15} strokeWidth={2.2} /> </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Eliminar open={open} onClose={() => setOpen(false)} />
                <Agregar open={agregar} onClose={() => setAgregar(false)} />
                <Evaluar show={evaluar} onClose={() => setEvaluar(false)} />
                <Editar open={editar} onClose={() => setEditar(false)} />
                <Ver open={ver} onClose={() => setVer(false)} />
            </div>
        </>
    );
}
