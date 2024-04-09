import React from 'react';
import {ScrollText } from "lucide-react";
import classNames from 'classnames';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import * as Tabs from '@radix-ui/react-tabs';

const TabsDemo = () => (
  <Tabs.Root
    className="flex flex-col "
    defaultValue="tab1"
  >
    <Tabs.List className="shrink-0 flex border-b border-mauve6" aria-label="Manejp de pedidos">
      <Tabs.Trigger
        className="bg-white px-5 h-[45px] flex-1 flex items-center font-semibold justify-center text-xl leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-custom-yellow data-[state=active]:text-custom-yellow data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
        value="tab1"
      >
        Realizar Pedido
      </Tabs.Trigger>
      <Tabs.Trigger
        className="bg-white px-5 h-[45px] flex-1 flex items-center font-semibold justify-center text-xl leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-custom-yellow data-[state=active]:text-custom-yellow data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
        value="tab2"
      >
        Historial
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content
      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab1"
    >
      <p className="mb-5 text-mauve11 text-[15px] leading-normal">
        Make changes to your account here. Click save when you're done.
      </p>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <Accordion.Root
            className="bg-mauve6 w-fullrounded-md shadow-[0_2px_10px] shadow-black/5"
            type="single"
            defaultValue="item-1"
            collapsible

        >
            <AccordionItem value="item-1">
            <AccordionTrigger>En progreso</AccordionTrigger>
            <AccordionContent>
                Yes. It's unstyled by default, giving you freedom over the look and feel.
            </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
            <AccordionTrigger>Realizar pedido</AccordionTrigger>
            <AccordionContent>
            <form className="ml-5 my-4 w-full">
                <div className="grid mr-5 gap-x-12 grid-cols-2">
                    <div className="mb-4 ">
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input required type="text" id="nombre" name="nombre" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>

                    <div className="mb-4">
                    <label htmlFor="marca" className="block text-sm font-medium text-gray-700">Marca</label>
                    <input required type="text" id="marca" name="marca" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>

                    <div className="mb-4">
                    <label htmlFor="tipo" className="block text-sm font-medium text-gray-700">Tipo</label>
                    <input required type="text" id="tipo" name="tipo" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="precio" className="block text-sm font-medium text-gray-700">Precio</label>
                    <input requiredmtype="number" id="precio" name="precio" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="proveedor" className="block text-sm font-medium text-gray-700">Proveedor</label>
                    <input required type="text" id="proveedor" name="proveedor" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="estado" className="block text-sm font-medium text-gray-700">Estado</label>
                    <select required  id="estado" name="estado" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                        <option value="fresco">Fresco</option>
                        <option value="vigente">Vigente</option>
                        <option value="por_caducar">Por Caducar</option>
                        <option value="caducado">Caducado</option>
                    </select>                       
                    </div>
                    <div className="mb-4">
                    <label htmlFor="fechaIngreso" className="block text-sm font-medium text-gray-700">Fecha de ingreso</label>
                    <input required type="date" id="fechaIngreso" name="fechaIngreso" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="fechaCaducidad" className="block text-sm font-medium text-gray-700">Fecha de caducidad</label>
                    <input required type="date" id="fechaCaducidad" name="fechaCaducidad" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>                    
                    <div className="mb-4">
                    <label htmlFor="nivelMinimo" className="block text-sm font-medium text-gray-700">Nivel Mínimo</label>
                    <input required type="number" id="nivelMinimo" name="nivelMinimo" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="cantidad" className="block text-sm font-medium text-gray-700">Cantidad</label>
                    <input required type="number" id="cantidad" name="cantidad" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                </div>
                <div className="mb-4 mr-5">
                <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Descripción</label>
                <textarea required id="descripcion" name="descripcion" rows="3" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                </div>
                <div className="flex justify-end gap-4 mr-5 ">
                <button type="submit" className="bg-verde font-semibold rounded-md py-2 px-6 text-white">Agregar
                </button>
                <button type="button" className="bg-gray-400 font-semibold   rounded-md py-2 px-6"   >
                    Cancelar
                </button>
                </div>


                </form>
            </AccordionContent>
            </AccordionItem>

           
        </Accordion.Root>

       
        
      </fieldset>
      
      
    
  
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab2"
    >
      
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
      <table className="w-full">
              <thead>
                <tr>
                  <th className="text-gray-600 text-sm front-semibold">  Id </th>
                  <th className="text-sm text-gray-600 front-semibold">Nombre</th>
                  <th className="text-sm text-gray-600 front-semibold"> Proveedor</th>
                  <th className="text-sm text-gray-600 front-semibold">  Cantidad   </th>
                  <th className="text-sm text-gray-600 front-semibold"> Fecha ingreso  </th>
                  <th className="text-sm text-gray-600 front-semibold">  Factura   </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="">
                <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                    <a href="#" className="font-bold text-blue-700 hover:underline">10001</a>
                  </td>
                  <td className=" text-center text-sm text-gray-900 whitespace-nowrap">Refresco Coca Cola 3L</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Coca Cola</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">1000</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">16/10/2021</td>
                  <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                  <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md " ><ScrollText size={15}  strokeWidth={2.2}/></button>
                  </td>
                </tr>
                <tr className="">
                <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                    <a href="#" className="font-bold text-blue-700 hover:underline">10002</a>
                  </td>
                  <td className=" text-center text-sm text-gray-900 whitespace-nowrap">Cebolla morada</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Q&T SA</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">299</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">16/10/2021</td>
                  <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                  <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md " ><ScrollText size={15}  strokeWidth={2.2}/></button>
                  </td>    
                </tr>
                <tr className="">
                <td className=" text-center text-sm text-gray-700 whitespace-nowrap">
                    <a href="#" className="font-bold text-blue-700 hover:underline">10003</a>
                  </td>
                  <td className=" text-center text-sm text-gray-700 whitespace-nowrap">Chicharrón de cerdo</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Carnicería Juan</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">10</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">16/10/2021</td>
                  <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                  <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md " ><ScrollText size={15}  strokeWidth={2.2}/></button>
                  </td>  
                </tr>
                <tr className="">
                <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                    <a href="#" className="font-bold text-blue-700 hover:underline">10004</a>
                  </td>
                  <td className=" text-center text-sm text-gray-900 whitespace-nowrap">Pechuga de pollo</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Pipasa</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">394</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">16/10/2021</td>
                  <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                  <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md " ><ScrollText size={15}  strokeWidth={2.2}/></button>
                  </td>  
                </tr>              
              </tbody>
            </table>
      </fieldset>
     
    </Tabs.Content>
  </Tabs.Root>
);
const AccordionItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        'focus-within:shadow-mauve12 mt-px font-semibold overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  ));
  
  const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(
          'text-gray-900 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-lg leading-none shadow-[0_1px_0] outline-none',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon
          className="text-gray-900 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  ));
  
  const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        'text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  ));

export default TabsDemo;