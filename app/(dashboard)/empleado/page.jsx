'use client'

import Agregar from "@/app/components/empleado/crear";
import { CirclePlus, FileUp, Pencil, SlidersHorizontal, Trash, Eye, SmilePlus } from "lucide-react";
import { useState } from "react";
import Eliminar from "../../components/empleado/eliminar";
import Buscador from "../../components/pos/buscador";
import Evaluar from "@/app/components/empleado/evaluar";
import EvaluacionCard from "@/app/components/empleado/evaluar";




export default function empleado() {
    const [open, setOpen] = useState(false);
    const [agregar, setAgregar] = useState(false);
    const [ver, setVer] = useState(false);
    const [evaluar, setEvaluar] = useState(false);



    return (
        <>

            <div className="w-full ">
                <div className="grid grid-cols-10 gap-4 max-w-7xl mx-auto">
                    <h1 className="font-semibold col-span-10 pt-4" style={{ fontSize: "28px" }}>Empleados</h1>
                    <div className="col-span-3 flex ">
                        <Buscador />
                    </div>
                    <div className="col-start-8 col-span-3 ">
                        <div className="flex justify-end gap-6">
                            <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform shadow-sm bg-white px-3 py-1 rounded-md"><SlidersHorizontal /></button>
                            <button className="flex items-center gap-4 shadow-sm active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform
                 text-white font-semibold bg-verde px-4 py-1 rounded-md relative flex-1" onClick={() => setAgregar(true)} >
                                <CirclePlus className=" text-white-800" />
                                <div className="">Agregar</div>
                            </button>
                            <button className="flex gap-4 shadow-sm text-verde font-semibold bg-white px-4 py-1 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform
                 border-verde border-2 rounded-md relative flex-1">
                                <FileUp className="text-white-800" />
                                <div className="">Exportar</div>
                            </button>
                        </div>
                    </div>
                    <div className="shadow-sm col-span-10  bg-white px-3 py-2 rounded-md">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="text-gray-600 text-sm front-semibold">  Id </th>
                                    <th className="text-sm text-gray-600 front-semibold">  Cedula </th>
                                    <th className="text-sm text-gray-600 front-semibold"> Nombre</th>
                                    <th className="text-sm text-gray-600 front-semibold"> Apellido</th>
                                    <th className="text-sm text-gray-600 front-semibold"> Puesto</th>
                                    <th className="text-sm text-gray-600 front-semibold">  Correo   </th>
                                    <th className="text-sm text-gray-600 front-semibold">  # Telefono   </th>
                                    <th className="text-sm text-gray-600 front-semibold"> Acciones  </th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr className="">
                                    <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                                        <a href="#" className="font-bold text-blue-700 hover:underline">EM10102</a>
                                    </td>
                                    <td className=" text-center text-sm text-gray-900 whitespace-nowrap">305440618</td>
                                    <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Josue</td>
                                    <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Bonilla Soto</td>
                                    <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-yellow-200 rounded-lg bg-opacity-50">Cajas</span>
                                    </td>
                                    <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">josue@gmail.com</td>
                                    <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">72094668</td>
                                    <td className=" flex gap-1 justify-evenly my-1 whitespace-nowrap">
                                        <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md " onClick={() => setAgregar(true)}><Pencil size={15} strokeWidth={2.2} /></button>
                                        <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-green-600 bg-opacity-50 rounded-md" onClick={() => setVer(true)}><Eye size={15} strokeWidth={2.2} /> </button>
                                        <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-yellow-600 bg-opacity-50 rounded-md" onClick={() => setEvaluar(true)}><SmilePlus size={15} strokeWidth={2.2} /></button>
                                        <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md" onClick={() => setOpen(true)}><Trash size={15} strokeWidth={2.2} /> </button>
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                                        <a href="#" className="font-bold text-blue-700 hover:underline">EM20203</a>
                                    </td>
                                    <td className=" text-center text-sm text-gray-900 whitespace-nowrap">1234567689</td>
                                    <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Yaritza</td>
                                    <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Macotelo Menocal</td>
                                    <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-green-200 rounded-lg bg-opacity-50">Jefe</span>
                                    </td>
                                    <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">yaritza@gmail.com</td>
                                    <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">87456128</td>
                                    <td className=" flex gap-1 justify-evenly my-1 whitespace-nowrap">
                                        <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md " onClick={() => setAgregar(true)}><Pencil size={15} strokeWidth={2.2} /></button>
                                        <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-green-600 bg-opacity-50 rounded-md" onClick={() => setVer(true)}><Eye size={15} strokeWidth={2.2} /> </button>
                                        <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-yellow-600 bg-opacity-50 rounded-md" onClick={() => setEvaluar(true)}><SmilePlus size={15} strokeWidth={2.2} /></button>
                                        <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md" onClick={() => setOpen(true)}><Trash size={15} strokeWidth={2.2} /> </button>
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className=" text-center text-sm text-gray-700 whitespace-nowrap">
                                        <a href="#" className="font-bold text-blue-700 hover:underline">EM30304</a>
                                    </td>
                                    <td className=" text-center text-sm text-gray-700 whitespace-nowrap">78930292</td>
                                    <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Francisco</td>
                                    <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Araya Carvajal</td>
                                    <td className=" text-center text-sm text-gray-700 whitespace-nowrap">
                                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-red-200 rounded-lg bg-opacity-50">Cocina</span>
                                    </td>
                                    <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">francisco@gmail.com</td>
                                    <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">61198211</td>
                                    <td className=" flex gap-1 justify-evenly my-1 whitespace-nowrap">
                                        <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md " onClick={() => setAgregar(true)}><Pencil size={15} strokeWidth={2.2} /></button>
                                        <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-green-600 bg-opacity-50 rounded-md" onClick={() => setVer(true)}><Eye size={15} strokeWidth={2.2} /> </button>
                                        <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-yellow-600 bg-opacity-50 rounded-md" onClick={() => setEvaluar(true)}><SmilePlus size={15} strokeWidth={2.2} /></button>
                                        <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md" onClick={() => setOpen(true)}><Trash size={15} strokeWidth={2.2} /> </button>
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                                        <a href="#" className="font-bold text-blue-700 hover:underline">EM40405</a>
                                    </td>
                                    <td className=" text-center text-sm text-gray-900 whitespace-nowrap">52981198</td>
                                    <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Manfred</td>
                                    <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Villegas Lopez</td>
                                    <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-blue-200 rounded-lg bg-opacity-50">Repartidor</span>
                                    </td>
                                    <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">manfred@gmail.com</td>
                                    <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">65907621</td>
                                    <td className=" flex gap-1 justify-evenly my-1 whitespace-nowrap">
                                        <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md " onClick={() => setAgregar(true)}><Pencil size={15} strokeWidth={2.2} /></button>
                                        <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-green-600 bg-opacity-50 rounded-md" onClick={() => setVer(true)}><Eye size={15} strokeWidth={2.2} /> </button>
                                        <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-yellow-600 bg-opacity-50 rounded-md" onClick={() => setEvaluar(true)}><SmilePlus size={15} strokeWidth={2.2} /></button>
                                        <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md" onClick={() => setOpen(true)}><Trash size={15} strokeWidth={2.2} /> </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Eliminar open={open} onClose={() => setOpen(false)} />
                <Agregar open={agregar} onClose={() => setAgregar(false)} />
                <Evaluar show={evaluar} onClose={() => setEvaluar(false)} />
            </div>
        </>
    );
}
