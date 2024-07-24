import { useEffect, useState } from 'react';

const FiltroMenu = ({ onFilterChange }) => {
  const [filterCategoria, setFilterCategoria] = useState('');
  const [filterEstado, setFilterEstado] = useState('');
  const [filterProveedor, setFilterProveedor] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/categorias');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log("Categorias: ", data); // Agrega logs para verificar los datos
        setCategorias(data);
      } catch (error) {
        console.error('Error fetching categorias:', error);
      }
    };

    const fetchProveedores = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/proveedor');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log("Proveedores: ", data); // Agrega logs para verificar los datos
        setProveedores(data);
      } catch (error) {
        console.error('Error fetching proveedores:', error);
      }
    };

    fetchCategorias();
    fetchProveedores();
  }, []);

  useEffect(() => {
    onFilterChange({ filterCategoria, filterEstado, filterProveedor });
  }, [filterCategoria, filterEstado, filterProveedor]);

  return (
    <div className="absolute top-16 right-16 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-72">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Filtros</h3>
      {/* <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Categoría</label>
        <select
          onChange={(e) => setFilterCategoria(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Todas</option>
          {categorias.map(categoria => (
            <option key={categoria.CategoriaProductoID} value={categoria.CategoriaProductoID}>{categoria.Nombre}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Proveedor</label>
        <select
          onChange={(e) => setFilterProveedor(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Todos</option>
          {proveedores.map(proveedor => (
            <option key={proveedor.ProveedorID} value={proveedor.ProveedorID}>{proveedor.Nombre}</option>
          ))}
        </select>
      </div> */}
      <div>
        <label className="block 
         font-medium text-gray-700 dark:text-gray-300">Estado</label>
        <select
          onChange={(e) => setFilterEstado(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white dark:bg-gray-700 font-medium text-gray-700 dark:text-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Todos</option>
          <option value="Vigente">Vigente</option>
          <option value="Por caducar">Por caducar</option>
          <option value="Caducado">Caducado</option>
          <option value="Fresco">Fresco</option>
        </select>
      </div>
    </div>
  );
};

export default FiltroMenu;
