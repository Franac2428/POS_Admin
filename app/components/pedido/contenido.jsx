import React, { useState } from 'react';
import {ScrollText,Trash,ArrowDownToLine } from "lucide-react";
import classNames from 'classnames';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as Tabs from '@radix-ui/react-tabs';
import Adjuntar from './adjuntar';

const TabsDemo = () => {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleCantidadChange = (event) => {
    setCantidad(event.target.value);
  };

  const agregarProducto = () => {
    if (nombre.trim() !== '' && cantidad.trim() !== '') {
      setProductos([...productos, { nombre: nombre, cantidad: cantidad }]);
      setNombre('');
      setCantidad('');
    } else {
      alert('Por favor, ingrese un nombre y una cantidad válidos.');
    }
  };
  return(
    <>
    <Tabs.Root
    className="flex flex-col  "
    defaultValue="tab1"
  >
    <Tabs.List className="shrink-0 flex border-b  border-mauve6" aria-label="Manejp de pedidos">
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
            className="bg-mauve6 w-fullrounded-md  shadow-[0_2px_10px] shadow-black/5"
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
            <form  className="ml-5 my-4 w-full">

      <div className="grid mr-5 gap-x-12 grid-cols-5">
      <div className="mb-4 col-span-5">
              <label htmlFor="estado" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Proveedor</label>
              <select required  id="estado" name="estado" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                  <option value="fresco">Coca-cola</option>
                  <option value="vigente">Pipsa</option>
                  <option value="por_caducar">Mario Gomez</option>
                  <option value="caducado">Caducado</option>
              </select>                       
              </div>         
      <div className="mb-4 col-span-2">
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={handleNombreChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4 col-span-2">
        <label htmlFor="cantidad" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Cantidad
        </label>
        <input
          type="text"
          id="cantidad"
          name="cantidad"
          value={cantidad}
          onChange={handleCantidadChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="flex items-center">
      <button onClick={agregarProducto} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Agregar Producto
      </button>
      </div>        
      <div className="shadow-lg col-span-5 overflow-x-auto bg-white dark:bg-gray-700 px-5 py-4 rounded-lg">
      <table className="w-full text-left">
        <thead>
          <tr >
            <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Producto</th>
            <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Cantidad</th>
            
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr className="border-b dark:border-gray-600" key={index}>
              <td className="text-sm text-gray-900 dark:text-gray-200">{producto.nombre}</td>
              <td className="text-sm text-gray-900 dark:text-gray-200">{producto.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
          <div className="mb-4 mr-5">
          <label htmlFor="Observaciones" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Observaciones</label>
          <textarea required id="descripcion" name="descripcion" rows="3" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
          </div>
          <div className="flex justify-end gap-4 mr-5 ">
          <button type="submit" className="bg-verde font-semibold rounded-md py-2 px-6 text-white">Agregar
          </button>
          <button type="button" 
              className="bg-gray-400 font-semibold   rounded-md py-2 px-6"
          >
              Limpiar
          </button>
          </div>
          </form>
            </AccordionContent>
            </AccordionItem>
        </Accordion.Root>     
      </fieldset>
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5  bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab2"
    >      
      <fieldset className="mb-[15px] w-full flex flex-col justify-startshadow-lg col-span-10 overflow-x-auto bg-white dark:bg-gray-700 px-5 py-4 rounded-lg">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Id</th>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Proveedor</th>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Tipo</th>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Fecha</th>
                  <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Factura</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-600">
                  <td className="text-sm text-gray-900 dark:text-gray-200 py-4">PD1001</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Coca Cola</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Via web</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">16/10/2021</td>
                  <td className="flex gap-2  my-2">
                    <Adjuntar/>
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-yellow-600 bg-opacity-50 rounded-md" onClick={() => setEvaluar(true)}><ArrowDownToLine size={15} strokeWidth={2.2} /></button>
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md" onClick={() => setOpen(true)}><Trash size={15} strokeWidth={2.2} /> </button>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-600">
                  <td className="text-sm text-gray-900 dark:text-gray-200 py-4">PD1002</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Plastico</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Correo</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">16/10/2021</td>
                  <td className="flex gap-2  my-2">
                  <Adjuntar/>
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-yellow-600 bg-opacity-50 rounded-md" onClick={() => setEvaluar(true)}><ArrowDownToLine size={15} strokeWidth={2.2} /></button>
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md" onClick={() => setOpen(true)}><Trash size={15} strokeWidth={2.2} /> </button>                  </td>
                </tr>
                <tr className="border-b dark:border-gray-600">
                  <td className="text-sm text-gray-9
                  00 dark:text-gray-200 py-4">PD1003</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Coca Cola</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">Via web</td>
                  <td className="text-sm text-gray-900 dark:text-gray-200">16/10/2021</td>
                  <td className="flex gap-2  my-2">
                  <Adjuntar/>
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-yellow-600 bg-opacity-50 rounded-md" onClick={() => setEvaluar(true)}><ArrowDownToLine size={15} strokeWidth={2.2} /></button>
                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md" onClick={() => setOpen(true)}><Trash size={15} strokeWidth={2.2} /> </button>                  </td>
                </tr>



              </tbody>
            </table>
      </fieldset>     
        </Tabs.Content>
      </Tabs.Root>
    </>
  );

}
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
        'text-mauve11 dark:bg-gray-800  bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
      ));
export default TabsDemo;