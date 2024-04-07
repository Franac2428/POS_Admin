'use client';

import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import {SlidersHorizontal,X,Minus } from "lucide-react";


const Filtro =()=>{
    return <div> 
    <Popover.Root>
    <Popover.Trigger asChild>
      <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform shadow-sm bg-white px-3 py-1.5 rounded-md"> <SlidersHorizontal />
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className="rounded-lg p-5  bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
        sideOffset={5}
      >
        <div className="flex flex-col gap-2.5">
          <p className="text-gray-900 text-xl leading-[19px] ">Filtros</p>
                              <hr className="py-0.2 border border-black"></hr>

          <fieldset className="flex flex-col gap-5">
          <div className="">
            <label htmlFor="estado" className="block text-sm  text-gray-900">Proveedor</label>
                <select required  id="estado" name="estado" className="mt-1 p-1  text-sm  w-full border rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                            <option value="fresco">Pipasa</option>
                            <option value="vigente">Coca-Cola</option>
                            <option value="por_caducar">Walmart</option>
                            <option value="caducado">Pedro Corrales</option>
                </select>                       
              </div>
          </fieldset>
          <fieldset className="flex flex-col gap-5">
            <div className="">
                <label htmlFor="nombre" className="block text-sm  text-gray-900">Estado</label>
            <div className='mt-1 grid grid-cols-3 gap-3'>
                <button className="p-1 text-sm    text-gray-800 text-center border rounded-lg bg-opacity-50 hover:bg-green-200 hover:border-white ">Fresco</button>
                <button className="p-1 text-sm    text-gray-800  text-center border rounded-lg bg-opacity-50  hover:bg-green-200 hover:border-white ">Por vencer</button>
                <button className="p-1 text-sm    text-gray-800 text-center border rounded-lg bg-opacity-50  hover:bg-green-200 hover:border-white ">Vigente</button>
                <button className="p-1 text-sm    text-gray-800 text-center  border rounded-lg bg-opacity-50  hover:bg-green-200 hover:border-white ">No vence</button>
                <button className="p-1 text-sm    text-gray-800 text-center border rounded-lg bg-opacity-50  hover:bg-green-200 hover:border-white ">Vencido</button>
            </div>

             </div>
          </fieldset>
          <fieldset className="grid grid-cols-3 gap-5">
            <div className="col-span-3">
                <label htmlFor="nombre" className="block text-sm  text-gray-900">Cantidad</label>
            <div className='flex cols-span-2'>
              <span required  id="estado" name="estado" className="">
                <input required type='number' id="estado" name="estado" className="mt-1 p-1  text-sm  w-full border rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
               </span>                                            
              <span className='text-gray-700'><Minus/></span>
              <span required  id="estado" name="estado" className="">
                <input required  type='number' id="estado" name="estado" className="mt-1 p-1  text-sm  w-full border rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
              </span> 
                
            </div>

             </div>
          </fieldset>
          <fieldset className="flex flex-col gap-5">
           
          <div className="">
                        <label htmlFor="estado" className="block text-sm  text-gray-900">Categoría</label>
                        <select required  id="estado" name="estado" className="mt-1 p-1 w-full border  text-sm  rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                            <option value="fresco">Carnes</option>
                            <option value="vigente">Bebida</option>
                            <option value="por_caducar">Envase</option>
                            <option value="caducado">Limpieza</option>
                        </select>                       
                        </div>
          </fieldset>
          
          <div className="flex justify-between gap-4 ">
              <button className=" font-semibold rounded-md py-1 underline px-4 text-blue-700" >Limpiar
              </button>
              <button
                className="bg-verde text-white font-semibold rounded-md py-1 px-4"
              >
                Aplicar
              </button>
            </div>
        </div>

        <Popover.Close
          className="rounded-lg p-1 h-[25px] w-[25px] inline-flex items-center justify-center text-gray-400 absolute top-[5px] right-[5px] hover:bg-gray-50 hover:text-gray-600 focus:shadow-[0_0_0_2px] focus:shadow-gray-50 outline-none cursor-default"
          aria-label="Close"
        >
          <X  />
        </Popover.Close>
        <Popover.Arrow className="fill-white" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
    </div>
}
export default Filtro;