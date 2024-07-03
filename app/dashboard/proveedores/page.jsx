'use client';

import Agregar from "@/app/components/proveedor/crear";
import Eliminar from "../../components/proveedor/eliminar";
import Editar from "@/app/components/proveedor/editar";


import Buscador from "../../components/pos/buscador";
import { CirclePlus, FileUp, Pencil, SlidersHorizontal, Trash, Eye } from "lucide-react";

import { useState } from "react";
import Ver from "../../components/proveedor/ver";

export default function Proveedores() {
  const [open, setOpen] = useState(false);
  const [agregar, setAgregar] = useState(false);
  const [ver, setVer] = useState(false);
  const [editar, setEditar] = useState(false);


  return (
    <>
      <div className="w-full">
        <div className="md:grid  gap-4 max-w-7xl mx-auto py-4  md:w-auto flex flex-col md:grid-cols-10 mb-3 md:mb-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
          <h1 className="font-semibold col-span-10 text-3xl text-gray-900 dark:text-gray-100">Proveedores</h1>
          <div className=" col-span-3">
            <Buscador />
          </div>
          <div className="col-start-8 space-x-4 col-span-3">
            <div className=" sm:w-auto flex gap-4 flex-row mb-3 md:mb-0 md:items-center justify-end md:space-x-3 flex-shrink-06">
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
          <div className="shadow-lg col-span-10 overflow-x-auto bg-white dark:bg-gray-700 px-5 py-4 rounded-lg">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Id</th>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Nombre</th>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Teléfono</th>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Tipo</th>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Correo Electrónico</th>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-600">
                  <td className="text-sm font-bold text-blue-700 hover:underline py-4">PR1001</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Coca Cola</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">800-SIEMPRE (743-6773)</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Bebidas</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">comunicacion@femsa.com.cr</td>
                  <td className="flex gap-2 justify-center my-2">
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md " onClick={() => setEditar(true)}><Pencil size={15} strokeWidth={2.2} /></button>
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-green-600 bg-opacity-50 rounded-md" onClick={() => setVer(true)}><Eye size={15} strokeWidth={2.2} /> </button>
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md" onClick={() => setOpen(true)}><Trash size={15} strokeWidth={2.2} /> </button>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-600">
                  <td className="text-sm  font-bold text-blue-700 hover:underline py-4">PR1002</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">PepsiCo</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">800-PEPSICO</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Bebidas</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">contacto@pepsico.com</td>
                  <td className="flex gap-2 justify-center my-2">
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md " onClick={() => setEditar(true)}><Pencil size={15} strokeWidth={2.2} /></button>
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-green-600 bg-opacity-50 rounded-md" onClick={() => setVer(true)}><Eye size={15} strokeWidth={2.2} /> </button>
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md" onClick={() => setOpen(true)}><Trash size={15} strokeWidth={2.2} /> </button>
                  </td>
                </tr>

                <tr className="border-b dark:border-gray-600">
                  <td className="text-sm font-bold text-blue-700 hover:underline py-4">PR1003</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Nestlé</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">800-NESTLE</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Alimentos</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">contacto@nestle.com</td>
                  <td className="flex gap-2 justify-center my-2">
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md " onClick={() => setEditar(true)}><Pencil size={15} strokeWidth={2.2} /></button>
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-green-600 bg-opacity-50 rounded-md" onClick={() => setVer(true)}><Eye size={15} strokeWidth={2.2} /> </button>
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md" onClick={() => setOpen(true)}><Trash size={15} strokeWidth={2.2} /> </button>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-600">
                  <td className="text-sm font-bold text-blue-700 hover:underline py-4">PR1004</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Envases Universales</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">800-ENVASES</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Envases</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">contacto@envasesuniversales.com</td>
                  <td className="flex gap-2 justify-center my-2">
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md " onClick={() => setEditar(true)}><Pencil size={15} strokeWidth={2.2} /></button>
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-green-600 bg-opacity-50 rounded-md" onClick={() => setVer(true)}><Eye size={15} strokeWidth={2.2} /> </button>
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md" onClick={() => setOpen(true)}><Trash size={15} strokeWidth={2.2} /> </button>
                  </td>
                </tr>

                <tr className="border-b dark:border-gray-600">
                  <td className="text-sm  font-bold text-blue-700 hover:underline py-4">PR1005</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Verduras Frescas S.A.</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">800-VERDURAS</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Verduras</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">contacto@verdurasfrescas.com</td>
                  <td className="flex gap-2 justify-center my-2">
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md " onClick={() => setEditar(true)}><Pencil size={15} strokeWidth={2.2} /></button>
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-green-600 bg-opacity-50 rounded-md" onClick={() => setVer(true)}><Eye size={15} strokeWidth={2.2} /> </button>
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md" onClick={() => setOpen(true)}><Trash size={15} strokeWidth={2.2} /> </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Eliminar open={open} onClose={() => setOpen(false)} />
        <Agregar open={agregar} onClose={() => setAgregar(false)} />
        <Ver open={ver} onClose={() => setVer(false)} />
        <Editar open={editar} onClose={() => setEditar(false)} />


      </div>
    </>
  );
}
