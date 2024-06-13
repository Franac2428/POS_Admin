'use client';

import Anular from "@/app/components/pos/anular";
import Buscador from "@/app/components/pos/buscador";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";

export default function inventario() {
  const [anular, setAnular] = useState(false);


  return (
    <>

      <div className="w-full ">
        <div className="grid grid-cols-10 gap-4 max-w-7xl mx-auto">
          <h1 className="font-semibold col-span-10 pt-4 ml-5 dark:text-white " style={{ fontSize: "28px" }}>Listado de Facturas</h1>
          <div className="col-span-3 flex ml-5 ">
            <Buscador />
          </div>
          <div className="shadow-lg col-span-10 overflow-x-auto bg-white dark:bg-gray-700 px-5 py-4 rounded-lg">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Consecutivo</th>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Cliente</th>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Estado</th>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Monto</th>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Fecha Creación</th>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-600">
                  <td className="text-sm font-bold text-blue-700 hover:underline py-4">00001</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Francisco Araya Carvajal</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">
                    <span className="px-2 py-1 text-xs font-medium uppercase tracking-wide text-green-800 bg-green-200 dark:text-green-200 dark:bg-green-800 rounded-full">Activa</span>
                  </td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">₡15000</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">16/10/2021</td>
                  <td className="flex gap-2 justify-center my-2">
                    {/* <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-green-600 bg-opacity-50 rounded-md"><Pencil size={15}  strokeWidth={2.2}/></button> */}
                    <button onClick={() => setAnular(true)} className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md"><Trash size={15} strokeWidth={2.2} /> </button>
                  </td>
                </tr>

                <tr className="border-b dark:border-gray-600">
                  <td className="text-sm font-bold text-blue-700 hover:underline py-4">00002</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Josué Bonilla Soto</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">
                    <span className="px-2 py-1 text-xs font-medium uppercase tracking-wide text-green-800 bg-green-200 dark:text-green-200 dark:bg-green-800 rounded-full">Activa</span>
                  </td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">₡8500</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">16/11/2021</td>
                  <td className="flex gap-2 justify-center my-2">
                    {/* <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-green-600 bg-opacity-50 rounded-md"><Pencil size={15}  strokeWidth={2.2}/></button> */}
                    <button onClick={() => setAnular(true)} className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md"><Trash size={15} strokeWidth={2.2} /> </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>




        </div>
        <Anular
          open={anular}
          onClose={() => setAnular(false)}
        />

      </div>
    </>
  );
}

