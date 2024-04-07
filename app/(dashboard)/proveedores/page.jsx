'use client';

import Agregar from "@/app/components/inventario/crearProducto";
import { CirclePlus, FileUp, Pencil, SlidersHorizontal, Trash } from "lucide-react";
import { useState } from "react";
import Eliminar from "../../components/inventario/eliminarProducto";
import Buscador from "../../components/pos/buscador";
import Filtro from "../../components/inventario/filtro";


export default function inventario() {
  const [open, setOpen] = useState(false);
  const [agregar, setAgregar] = useState(false);
  

  return (
    <>
    
    <div className="w-full ">  
        <div className="grid grid-cols-10 gap-4 max-w-7xl mx-auto">
          <h1 className="font-semibold col-span-10 pt-4" style={{ fontSize: "28px" }}>Proveedores</h1>                
          <div className="col-span-3 flex ">
          <Buscador/>     
          </div>
          <div className="col-start-8 col-span-3 ">
            <div className="flex justify-end gap-6">
              <div className=""><Filtro/></div>              
              <button  className="flex items-center gap-4 shadow-sm active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform
                 text-white font-semibold bg-verde px-4 py-1 rounded-md relative flex-1" onClick={() => setAgregar(true)} >                  
                    <CirclePlus className=" text-white-800"/>
                    <div className="">Agregar</div>
                </button>
                <button className="flex gap-4 shadow-sm text-verde font-semibold bg-white px-4 py-1 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform
                 border-verde border-2 rounded-md relative flex-1">
                  <FileUp className="text-white-800"/>
                    <div className="">Exportar</div>            
                </button>
                
            </div>
          </div>
          <div className="shadow-sm col-span-10  bg-white px-3 py-2 rounded-md">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-gray-600 text-sm front-semibold">  Id </th>
                  <th className="text-sm text-gray-600 front-semibold">Nombre</th>
                  <th className="text-sm text-gray-600 front-semibold"> Estado</th>
                  <th className="text-sm text-gray-600 front-semibold"> Proveedor</th>
                  <th className="text-sm text-gray-600 front-semibold">  Cantidad   </th>
                  <th className="text-sm text-gray-600 front-semibold"> Fecha ingreso  </th>
                  <th className="text-sm text-gray-600 front-semibold">  Categoría   </th>
                  <th className="text-sm text-gray-600 front-semibold"> Acciones  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="">
                <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                    <a href="#" className="font-bold text-blue-700 hover:underline">10001</a>
                  </td>
                  <td className=" text-center text-sm text-gray-900 whitespace-nowrap">Refresco Coca Cola 3L</td>
                  <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-yellow-200 rounded-lg bg-opacity-50">Por caducar</span>
                  </td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Coca Cola</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">1000</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">16/10/2021</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Bebidas</td>
                  <td className=" flex gap-1 justify-evenly my-1 whitespace-nowrap">
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md " onClick={() => setAgregar(true)}><Pencil size={15}  strokeWidth={2.2}/></button>
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md"  onClick={() => setOpen(true)}><Trash size={15} strokeWidth={2.2} /> </button>
                  </td>
                </tr>
                <tr className="">
                <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                    <a href="#" className="font-bold text-blue-700 hover:underline">10002</a>
                  </td>
                  <td className=" text-center text-sm text-gray-900 whitespace-nowrap">Cebolla morada</td>
                  <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-green-200 rounded-lg bg-opacity-50">Fresco</span>
                  </td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Q&T SA</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">299</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">16/10/2021</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Verduras</td>
                  <td className=" flex gap-1 justify-evenly my-1 whitespace-nowrap">
                  <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md "onClick={() => setAgregar(true)}><Pencil size={15}  strokeWidth={2.2}/></button>
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md"  onClick={() => setOpen(true)}><Trash size={15} strokeWidth={2.2} /> </button>
                  </td>
                </tr>
                <tr className="">
                <td className=" text-center text-sm text-gray-700 whitespace-nowrap">
                    <a href="#" className="font-bold text-blue-700 hover:underline">10003</a>
                  </td>
                  <td className=" text-center text-sm text-gray-700 whitespace-nowrap">Chicharrón de cerdo</td>
                  <td className=" text-center text-sm text-gray-700 whitespace-nowrap">
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-red-200 rounded-lg bg-opacity-50">Caducado</span>
                  </td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Carnicería Juan</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">10</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">16/10/2021</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Carnes</td>
                  <td className=" flex gap-1 justify-evenly my-1 whitespace-nowrap">
                  <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md "onClick={() => setAgregar(true)}><Pencil size={15}  strokeWidth={2.2}/></button>
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md"  onClick={() => setOpen(true)}><Trash size={15} strokeWidth={2.2} /> </button>
                  </td>
                </tr>
                <tr className="">
                <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                    <a href="#" className="font-bold text-blue-700 hover:underline">10004</a>
                  </td>
                  <td className=" text-center text-sm text-gray-900 whitespace-nowrap">Pechuga de pollo</td>
                  <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-blue-200 rounded-lg bg-opacity-50">Vigente</span>
                  </td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Pipasa</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">394</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">16/10/2021</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Carnes</td>
                  <td className=" flex gap-1 justify-evenly my-1 whitespace-nowrap">
                  <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md "onClick={() => setAgregar(true)}><Pencil size={15}  strokeWidth={2.2}/></button>
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md"  onClick={() => setOpen(true)}><Trash size={15} strokeWidth={2.2} /> </button>
                  </td>
                </tr>              
              </tbody>
            </table>
          </div>
        </div>  
        <Eliminar open={open} onClose={() => setOpen(false)}/>
        <Agregar open={agregar} onClose={() => setAgregar(false)}/>

    
      </div>      
    </>
  );
}

