import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Toaster, toast } from 'sonner';

const Realizar = ({ AccordionItem, AccordionTrigger, AccordionContent }) => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [productos, setProductos] = useState([]);
  const [tipoRadio, setTipoRadio] = useState('correo'); 
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const handleAgregar = handleSubmit(async (data) => {
    const pedido = {
      proveedor: data.proveedor,
      medioPedido: tipoRadio,
      productos: tipoRadio === 'correo' ? JSON.stringify(productos) : null, 
      observaciones: data.descripcion,
      estado: 'EN_PROGRESO',
    };

    try {
      const res = await fetch(`http://localhost:3000/api/pedido`, {
        method: 'POST',
        body: JSON.stringify(pedido),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.ok) {
        const newPedido = await res.json();
        toast.success('Nuevo pedido realizado con éxito');
        reset();
      } else {
        const errorData = await res.json();
        toast.error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      toast.error('Error en la solicitud');
    }
  });

  const handleRadioChange = (event) => {
    setTipoRadio(event.target.value);
  };

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

  const limpiarCampos = () => {
    reset();
    setProductos([]);
    setNombre('');
    setCantidad('');
  };

  return (
    <>        
      <AccordionItem value="item-2">
        <AccordionTrigger>Realizar pedido</AccordionTrigger>
        <AccordionContent>
          <form onSubmit={handleAgregar} className="ml-5 my-4 w-full">
            <div className="grid mr-5 gap-x-12 grid-cols-5">
              <div className="mb-4 col-span-5">
                <label htmlFor="proveedor" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Proveedor</label>
                <select required id="proveedor" name="proveedor" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" {...register("proveedor", { required: true })}>
                  <option value="Coca-cola">Coca-cola</option>
                  <option value="Pipsa">Pipsa</option>
                  <option value="Mario Gomez">Mario Gomez</option>
                  <option value="Caducado">Caducado</option>
                </select>                       
              </div>  
              <div className='mb-4'>      
                <input type="radio" id="correo" name="medioPedido" value="correo" checked={tipoRadio === 'correo'} onChange={handleRadioChange} />
                <label className='dark:text-gray-400 ml-5' htmlFor="correo">Correo</label>
              </div> 
              <div className='mb-4'>      
                <input type="radio" id="sitio_web" name="medioPedido" value="sitio_web" checked={tipoRadio === 'sitio_web'} onChange={handleRadioChange} />
                <label className='ml-5 dark:text-gray-400' htmlFor="sitio_web">Sitio Web</label>  
              </div> 
              <div className='mb-4 col-span-5'>            
                {tipoRadio === 'correo' && (
                  <div id="producto-form">
                    <div className='grid grid-cols-3 gap-7'>
                      <div className="mb-4">
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
                      <div className="mb-4">
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
                        <button type='button' onClick={agregarProducto} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Agregar Producto
                        </button>
                      </div>
                    </div>                   
                    <div className="shadow-lg col-span-5 overflow-x-auto bg-white dark:bg-gray-700 px-5 py-4 rounded-lg">
                      <table className="w-full text-left">
                        <thead>
                          <tr>
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
                )}
                {tipoRadio === 'sitio_web' && (
                  <div id="sitio-web-text">
                    <p className='mt-4 dark:text-gray-200'>Sitio web: ejemplo@ejemplo.com</p>
                  </div>
                )}
              </div>   
            </div>
            <div className="mb-4 mr-5">
              <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Observaciones</label>
              <textarea
                id="descripcion"
                name="descripcion"
                rows="3"
                {...register("descripcion", { required: true })}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
            <div className="flex justify-end gap-4 mr-5">
              <button type="submit" className="bg-verde font-semibold rounded-md py-2 px-6 text-white">Agregar</button>
              <button type="button" className="bg-gray-400 font-semibold rounded-md py-2 px-6" onClick={limpiarCampos}>
                Limpiar
              </button>
            </div>
          </form>
        </AccordionContent>
      </AccordionItem>
    </>
  );
}

export default Realizar;
