'use client';

import { useEffect, useState } from 'react';
import useSWR from 'swr';
import EstadoFac from "@/app/components/facturas/estadoFac";
import Ver from "@/app/components/facturas/ver";

const fetcher = (url) => fetch(url).then((res) => res.json());

const obtenerFechaEnEspanol = (fecha) => {
  const date = new Date(fecha);

  const opciones = {
    weekday: 'short', 
    day: '2-digit', 
    month: 'long', 
  };

  const fechaFormateada = new Intl.DateTimeFormat('es-ES', opciones).format(date);
  const año = date.getFullYear(); 

  return `${fechaFormateada} del ${año}`;
};

// Función para agrupar productos y sumar cantidades
const agruparProductos = (detalles) => {
  const productosAgregados = detalles.reduce((acc, producto) => {
    const descripcion = producto.descripcion;
    const cantidad = parseFloat(producto.cantidad); // Asegúrate de convertir a número

    if (acc[descripcion]) {
      acc[descripcion].cantidad += cantidad;
    } else {
      acc[descripcion] = { ...producto, cantidad }; // Inicializa con cantidad como número
    }
    return acc;
  }, {});

  return Object.values(productosAgregados);
};

export default function Inventario() {
  const [filtros, setFiltros] = useState('');
  const [facturaSeleccionada, setFacturaSeleccionada] = useState(null);

  const { data, error, mutate } = useSWR('http://localhost:3000/api/factura', fetcher);

  useEffect(() => {
    if (error) {
      console.error('Error fetching data:', error);
    }
  }, [error]);

  if (error) return <div className="text-red-500">Error al cargar los datos</div>;
  if (!data) return <div>Cargando...</div>;

  const filteredData = data.filter(factura => {
    if (filtros === '') return true;
    if (filtros === 'activa') return factura.estadoFac === 'ACTIVA';
    if (filtros === 'pagada') return factura.estadoFac === 'PAGADA';
    if (filtros === 'nula') return factura.estadoFac === 'CANCELADO';
    return false;
  });

  const handleVerMasClick = (factura) => {
    setFacturaSeleccionada(factura);
  };

  const handleCloseModal = () => {
    setFacturaSeleccionada(null);
  };

  return (
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
            {filteredData.map((factura) => {
              const productosAgrupados = agruparProductos(factura.detalles);
              return (
                <div key={factura.idFactura} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                  <span className='flex gap-2 text-center'>
                    <EstadoFac idFactura={factura.idFactura} estadoFac={factura.estadoFac} mutate={mutate} />
                    <span className='flex flex-col items-start'>
                      <p className="text-md font-semibold text-gray-900 dark:text-gray-400">
                        {factura.cliente.nombre} {factura.cliente.apellido}
                      </p>
                      <p className="text-sm font-normal text-gray-900 dark:text-gray-400">{obtenerFechaEnEspanol(factura.fechaEmision)}</p>
                    </span>
                  </span>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 mt-4">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Producto
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Cantidad
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Precio
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                        {productosAgrupados.slice(0, 4).map((producto) => (
                          <tr key={producto.idDetalleFactura}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                              {producto.descripcion}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                              {producto.cantidad}
                            </td>
                            <td className="px-6 text-end py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                              {producto.precio}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    
                    {productosAgrupados.length > 4 && (
                      <button
                        onClick={() => handleVerMasClick(factura)}
                        className="mt-4 text-blue-500 dark:text-blue-400 hover:underline"
                      >
                        Ver más
                      </button>
                    )}
                  </div>
                  <p className="text-md font-bold text-end text-gray-900 dark:text-gray-400">Total: ₡ {factura.total}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {facturaSeleccionada && (
        <Ver 
          open={!!facturaSeleccionada} 
          factura={facturaSeleccionada} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
}
