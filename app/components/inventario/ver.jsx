import { useState, useEffect } from 'react';
import { X } from "lucide-react";
import { Toaster, toast } from 'sonner';

export default function Ver({ open, onClose, productoId }) {
  const [producto, setProducto] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (open && productoId) {
      console.log(`Fetching data for product ID: ${productoId}`);
      setIsLoading(true);
      setIsError(false);
      fetch(`http://localhost:3000/api/inventario/${productoId}`)
        .then(response => {
          console.log('Response status:', response.status);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Data fetched successfully:', data);
          setProducto(data);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching producto:', error);
          setIsError(true);
          setIsLoading(false);
        });
    } else {
      console.log('No productoId provided');
    }
  }, [open, productoId]);

  if (isLoading) {
    return (
      <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-opacity ${open ? "visible bg-black bg-opacity-20 dark:bg-opacity-30" : "invisible"}`}>
        <div className={`bg-white dark:bg-gray-800 rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} m-auto`}>
          <p className="text-center text-gray-700 dark:text-gray-200">Cargando...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-opacity ${open ? "visible bg-black bg-opacity-20 dark:bg-opacity-30" : "invisible"}`}>
        <div className={`bg-white dark:bg-gray-800 rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} m-auto`}>
          <p className="text-center text-gray-700 dark:text-gray-200">Error al cargar los datos del producto.</p>
        </div>
      </div>
    );
  }

  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-opacity ${open ? "visible bg-black bg-opacity-20 dark:bg-opacity-30" : "invisible"}`}>
      <div onClick={(e) => e.stopPropagation()} className={`bg-white dark:bg-gray-800 rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} m-auto`}>
        <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300">
          <X size={18} strokeWidth={2} />
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold flex items-center gap-3 text-gray-900 dark:text-gray-100 my-4">Detalles del Producto</h2>
          <hr className="my-3 mr-7 py-0.2 border border-black" />
        </div>
        <div className="ml-5 my-4 w-full">
          <dl className="grid grid-cols-2 gap-x-4">
            <div className="mb-4">
              <dt className="text-sm font-medium dark:text-gray-200 text-gray-700">ID</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200">{producto?.ProductoID}</dd>
            </div>
            <div className="mb-4">
              <dt className="text-sm font-medium text-gray-700 dark:text-gray-200">Nombre</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200">{producto?.Nombre}</dd>
            </div>
            <div className="mb-4">
              <dt className="text-sm font-medium text-gray-700 dark:text-gray-200">Descripción</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200">{producto?.Descripcion}</dd>
            </div>
            <div className="mb-4">
              <dt className="text-sm font-medium text-gray-700 dark:text-gray-200">Precio de Compra</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200">{producto?.PrecioCompra}</dd>
            </div>
            <div className="mb-4">
              <dt className="text-sm font-medium text-gray-700 dark:text-gray-200">Precio de Venta</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200">{producto?.PrecioVenta}</dd>
            </div>
            <div className="mb-4">
              <dt className="text-sm font-medium text-gray-700 dark:text-gray-200">Stock</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200">{producto?.Stock}</dd>
            </div>
            <div className="mb-4">
              <dt className="text-sm font-medium text-gray-700 dark:text-gray-200">Categoría</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200">{producto?.CategoriaID}</dd>
            </div>
            <div className="mb-4">
              <dt className="text-sm font-medium text-gray-700 dark:text-gray-200">Proveedor</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200">{producto?.ProveedorID}</dd>
            </div>
            <div className="mb-4">
              <dt className="text-sm font-medium text-gray-700 dark:text-gray-200">Estado</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200">{producto?.Estado}</dd>
            </div>
            <div className="mb-4">
              <dt className="text-sm font-medium text-gray-700 dark:text-gray-200">Fecha de Ingreso</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200">{producto?.FechaIngreso ? new Date(producto.FechaIngreso).toLocaleDateString() : 'N/A'}</dd>
            </div>
            <div className="mb-4">
              <dt className="text-sm font-medium text-gray-700 dark:text-gray-200">Fecha de Caducidad</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200">{producto?.FechaCaducidad ? new Date(producto.FechaCaducidad).toLocaleDateString() : 'N/A'}</dd>
            </div>
          </dl>
        </div>
        <div className="flex justify-end gap-4 mr-5">
          <button type="button" className="bg-gray-400 font-semibold rounded-md py-2 px-6" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
      <Toaster richColors />
    </div>
  );
}
