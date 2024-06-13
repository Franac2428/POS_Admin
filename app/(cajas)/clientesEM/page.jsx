'use client'

import { useState } from "react";
import { CirclePlus, FileUp, Pencil, SlidersHorizontal, Trash, Eye, SmilePlus } from "lucide-react";
import Buscador from "@/app/components/pos/buscador";
import Eliminar from "@/app/components/clientes/eliminar";
import Ver from "@/app/components/clientes/ver";
import Editar from "@/app/components/clientes/editar";

// Define los datos de los clientes
const clientes = [
    {
        id: "CL10102",
        cedula: "305440618",
        nombre: "Josue",
        apellido: "Bonilla Soto",
        correo: "josue@gmail.com",
        telefono: "72094668",
        factura: "00001",
    },
    {
        id: "CL20203",
        cedula: "1234567689",
        nombre: "Yaritza",
        apellido: "Macotelo Menocal",
        correo: "yaritza@gmail.com",
        telefono: "87456128",
        factura: "00002",
    },
    {
        id: "CL30304",
        cedula: "78930292",
        nombre: "Francisco",
        apellido: "Araya Carvajal",
        correo: "francisco@gmail.com",
        telefono: "61198211",
        factura: "00003",
    },
    {
        id: "CL40405",
        cedula: "52981198",
        nombre: "Manfred",
        apellido: "Villegas Lopez",
        correo: "manfred@gmail.com",
        telefono: "65907621",
        factura: "00004",
    },
];

export default function Clientes() {
    const [open, setOpen] = useState(false);
    const [ver, setVer] = useState(false);
    const [editar, setEditar] = useState(false);

    return (
        < div className="w-full" >
            <div className="grid grid-cols-10 gap-4 max-w-7xl mx-auto py-4">
                <h1 className="font-semibold col-span-10 text-3xl text-gray-900 dark:text-gray-100">Clientes</h1>
                <div className="col-span-3">
                    <Buscador />
                </div>
                <div className="col-start-8 col-span-3">
                    <div className="flex justify-end gap-6">

                        <button className="transition-transform ease-in-out duration-75 hover:scale-105 active:scale-95 transform shadow-lg bg-white dark:bg-gray-700 px-3 py-2 rounded-lg">
                            <SlidersHorizontal className="text-gray-500 dark:text-gray-400" />
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
                                <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4"> Id </th>
                                <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4"> Cedula </th>
                                <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4"> Nombre</th>
                                <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4"> Apellido</th>
                                <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4"> Correo   </th>
                                <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4"> #Telefono   </th>
                                <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4"> Factura reciente   </th>
                                <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4"> Acciones  </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {clientes.map((cliente, index) => (
                                <tr key={index} className="border-b dark:border-gray-600">
                                    <td className="text-center text-sm text-gray-900 whitespace-nowrap">
                                        <a href="#" className="font-bold text-blue-700 hover:underline">{cliente.id}</a>
                                    </td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200 py-4">{cliente.cedula}</td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200">{cliente.nombre}</td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200">{cliente.apellido}</td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200">{cliente.correo}</td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200">{cliente.telefono}</td>
                                    <td className="text-center text-sm text-gray-900 dark:text-gray-200">{cliente.factura}</td>
                                    <td className="flex gap-1 justify-evenly my-1 whitespace-nowrap">
                                        <button className="p-1.5 text-gray-900 dark:text-gray-200 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md " onClick={() => setEditar(true)}><Pencil size={15} strokeWidth={2.2} /></button>
                                        <button className="p-1.5 text-gray-900 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-green-600 bg-opacity-50 rounded-md" onClick={() => setVer(true)}><Eye size={15} strokeWidth={2.2} /> </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Editar open={editar} onClose={() => setEditar(false)} />
            <Ver open={ver} onClose={() => setVer(false)} />
        </div >
    );
}
