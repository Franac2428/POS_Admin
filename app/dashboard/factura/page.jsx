'use client';

import { useEffect, useState } from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Inventario() {
  const [filtros, setFiltros] = useState(''); // Cambié a un string para facilitar el filtro por estado

  const { data, error, mutate } = useSWR('http://localhost:3000/api/factura', fetcher);

  useEffect(() => {
    if (error) {
      console.error('Error fetching data:', error);
    }
  }, [error]);
console.log('Datos recibidos:', data);

  if (error) return <div>Error al cargar los datos</div>;
  if (!data) return <div>Cargando...</div>;

  const filteredData = data.filter(factura => {
    if (filtros === '') return true;
    if (filtros === 'activa') return factura.estadoFac === 'ACTIVA';
    if (filtros === 'pagada') return factura.estadoFac === 'PAGADA';
    if (filtros === 'nula') return factura.estadoFac === 'CANCELADO';
    return false;
  });

  return (
    <>
      <div className="w-full relative">
        <div className="md:grid gap-4 max-w-7xl mx-auto py-4 md:w-auto flex flex-col md:grid-cols-10 mb-3 md:mb-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
          <h1 className="font-semibold col-span-10 text-3xl text-gray-900 dark:text-gray-100">Facturas</h1>
          <div className="col-span-3 space-x-4 flex items-center relative">
            <button
              className="flex items-center gap-3 shadow-lg active:scale-95 transition-transform ease-in-out duration-75 hover:scale-105 transform text-white font-semibold bg-gray-700 dark:bg-gray-800 px-4 py-2 rounded-lg"
              onClick={() => setFiltros('')}
            >
              Todas
            </button>        
            <button
              className="flex items-center gap-3 shadow-lg active:scale-95 transition-transform ease-in-out duration-75 hover:scale-105 transform text-white font-semibold bg-green-500 dark:bg-green-600 px-4 py-2 rounded-lg"
              onClick={() => setFiltros('activa')}
            >
              Activas
            </button>
            <button
              className="flex items-center gap-3 shadow-lg active:scale-95 transition-transform ease-in-out duration-75 hover:scale-105 transform text-white font-semibold bg-blue-500 dark:bg-blue-600 px-4 py-2 rounded-lg"
              onClick={() => setFiltros('pagada')}
            >
              Pagadas
            </button>
            <button
              className="flex items-center gap-3 shadow-lg active:scale-95 transition-transform ease-in-out duration-75 hover:scale-105 transform text-white font-semibold bg-gray-500 dark:bg-gray-600 px-4 py-2 rounded-lg"
              onClick={() => setFiltros('nula')}
            >
              Nulas
            </button>
          </div>
          <div className="shadow-lg col-span-10 overflow-x-auto bg-white dark:bg-gray-700 px-5 py-4 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredData.map((factura) => (
                <div key={factura.idFactura} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                  <h2 className="bg-gray-300 dark:bg-gray-900 text-lg font-bold text-gray-900 dark:text-gray-100 px-2 rounded-r-lg rounded-l-lg">
                    Factura NO: {factura.idFactura}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Fecha: {new Date(factura.fechaEmision).toLocaleDateString()}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Cliente: {factura.cliente.nombre} {factura.cliente.apellido}</p>
                  <ul className="list-disc ml-5">
                    {factura.detalles.map((producto) => (
                      <li key={producto.idDetalleFactura}>
                        {producto.descripcion} - Cantidad: {producto.cantidad} - Precio: {producto.precio}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total: {factura.total}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
