'use client';

import Agregar from "@/app/components/inventario/crearProducto";
import Eliminar from "../../components/inventario/eliminarProducto";
import Buscador from "../../components/pos/buscador";
import { CirclePlus, FileUp, Pencil, SlidersHorizontal, Trash } from "lucide-react";
import { useState } from "react";

export default function Inventario() {
  const [open, setOpen] = useState(false);
  const [agregar, setAgregar] = useState(false);

  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-10 gap-4 max-w-7xl mx-auto py-4">
          <h1 className="font-semibold col-span-10 text-3xl text-gray-900 dark:text-gray-100">Inventario</h1>
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
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Id</th>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Nombre</th>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Estado</th>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Proveedor</th>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Cantidad</th>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Fecha ingreso</th>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Categoría</th>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-600">
                  <td className="text-sm text-gray-900 dark:text-gray-200 py-4">10001</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Refresco Coca Cola 3L</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">
                    <span className="px-2 py-1 text-xs font-medium uppercase tracking-wide text-yellow-800 bg-yellow-200 dark:text-yellow-200 dark:bg-yellow-800 rounded-full">Por caducar</span>
                  </td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Coca Cola</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">1000</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">16/10/2021</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Bebidas</td>
                  <td className="flex gap-2 justify-center my-2">
                    <button className="p-2 text-gray-900 dark:text-gray-200 active:scale-95 transition-transform ease-in-out duration-75 hover:scale-105 transform bg-blue-500 dark:bg-blue-600 rounded-md">
                      <Pencil size={18} strokeWidth={2} />
                    </button>
                    <button className="p-2 text-gray-900 dark:text-gray-200 active:scale-95 transition-transform ease-in-out duration-75 hover:scale-105 transform bg-red-500 dark:bg-red-600 rounded-md" onClick={() => setOpen(true)}>
                      <Trash size={18} strokeWidth={2} />
                    </button>
                  </td>
                </tr>


                <tr className="border-b dark:border-gray-600">
                  <td className="text-sm text-gray-900 dark:text-gray-200 py-4">10002</td>

                  <td className="text-sm text-gray-900 dark:text-gray-200 whitespace-nowrap">Cebolla morada</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 dark:text-green-200 dark:bg-green-800 rounded-full">Fresco</span>
                  </td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Q&T SA</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">299</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">16/10/2021</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Verduras</td>
                  <td className="flex gap-2 justify-center my-2">
                    <button className="p-2 text-gray-900 dark:text-gray-200 active:scale-95 transition-transform ease-in-out duration-75 hover:scale-105 transform bg-blue-500 dark:bg-blue-600 rounded-md">
                      <Pencil size={18} strokeWidth={2} />
                    </button>
                    <button className="p-2 text-gray-900 dark:text-gray-200 active:scale-95 transition-transform ease-in-out duration-75 hover:scale-105 transform bg-red-500 dark:bg-red-600 rounded-md" onClick={() => setOpen(true)}>
                      <Trash size={18} strokeWidth={2} />
                    </button>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-600">
                  <td className="text-sm text-gray-900 dark:text-gray-200 py-4">10003</td>

                  <td className="text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap">Chicharrón de cerdo</td>
                  <td className="text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 dark:text-red-200 dark:bg-red-800 rounded-full">Caducado</span>
                  </td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Carnicería Juan</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">10</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">16/10/2021</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Carnes</td>
                  <td className="flex gap-2 justify-center my-2">
                    <button className="p-2 text-gray-900 dark:text-gray-200 active:scale-95 transition-transform ease-in-out duration-75 hover:scale-105 transform bg-blue-500 dark:bg-blue-600 rounded-md">
                      <Pencil size={18} strokeWidth={2} />
                    </button>
                    <button className="p-2 text-gray-900 dark:text-gray-200 active:scale-95 transition-transform ease-in-out duration-75 hover:scale-105 transform bg-red-500 dark:bg-red-600 rounded-md" onClick={() => setOpen(true)}>
                      <Trash size={18} strokeWidth={2} />
                    </button>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-600">
                  <td className="text-sm text-gray-900 dark:text-gray-200 py-4">10004</td>

                  <td className=" text-sm text-gray-900 dark:text-gray-200 whitespace-nowrap">Pechuga de pollo</td>
                  <td className=" text-sm text-gray-900 dark:text-gray-200 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 dark:text-blue-200 dark:bg-blue-800 rounded-full">Vigente</span>
                  </td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Pipasa</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">394</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">16/10/2021</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Carnes</td>
                  <td className="flex gap-2 justify-center my-2">
                    <button className="p-2 text-gray-900 dark:text-gray-200 active:scale-95 transition-transform ease-in-out duration-75 hover:scale-105 transform bg-blue-500 dark:bg-blue-600 rounded-md">
                      <Pencil size={18} strokeWidth={2} />
                    </button>
                    <button className="p-2 text-gray-900 dark:text-gray-200 active:scale-95 transition-transform ease-in-out duration-75 hover:scale-105 transform bg-red-500 dark:bg-red-600 rounded-md" onClick={() => setOpen(true)}>
                      <Trash size={18} strokeWidth={2} />
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
        <Eliminar open={open} onClose={() => setOpen(false)} />
        <Agregar open={agregar} onClose={() => setAgregar(false)} />
      </div>
    </>
  );
}
