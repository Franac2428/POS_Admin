import { X,CircleAlert } from "lucide-react";
import {Toaster, toast} from 'sonner'

export default function Agregar({ open, onClose }) {
  const handleAgregar = () => {
    toast.success('Acción realizada con éxito');
    setTimeout(() => {
      onClose(); 
    }, 1500);
  };

  return (    
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-opacity ${open ? "visible bg-black bg-opacity-20 dark:bg-opacity-30" : "invisible"}`}>
      <div onClick={(e) => e.stopPropagation()} className={`bg-white dark:bg-gray-800 rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} m-auto`}>
        <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300">
          <X size={18} strokeWidth={2} />
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold flex items-center gap-3 text-gray-900 dark:text-gray-100 my-4">
            Agregar Producto
          </h2>
          <hr className="w-full border-t border-gray-300 dark:border-gray-600"></hr>
                <form onSubmit={handleAgregar} className="ml-5 my-4 w-full">

                    <div className="grid mr-5 gap-x-12 grid-cols-2">
                        <div className="mb-4 ">
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Nombre</label>
                        <input required type="text" id="nombre" name="nombre" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>

                        <div className="mb-4">
                        <label htmlFor="marca" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Marca</label>
                        <input required type="text" id="marca" name="marca" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>

                        <div className="mb-4">
                        <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Tipo</label>
                        <input required type="text" id="tipo" name="tipo" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="precio" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Precio</label>
                        <input requiredmtype="number" id="precio" name="precio" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="proveedor" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Proveedor</label>
                        <input required type="text" id="proveedor" name="proveedor" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="estado" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Estado</label>
                        <select required  id="estado" name="estado" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                            <option value="fresco">Fresco</option>
                            <option value="vigente">Vigente</option>
                            <option value="por_caducar">Por Caducar</option>
                            <option value="caducado">Caducado</option>
                        </select>                       
                        </div>
                        <div className="mb-4">
                        <label htmlFor="fechaIngreso" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Fecha de ingreso</label>
                        <input required type="date" id="fechaIngreso" name="fechaIngreso" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="fechaCaducidad" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Fecha de caducidad</label>
                        <input required type="date" id="fechaCaducidad" name="fechaCaducidad" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>                    
                        <div className="mb-4">
                        <label htmlFor="nivelMinimo" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Nivel Mínimo</label>
                        <input required type="number" id="nivelMinimo" name="nivelMinimo" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="cantidad" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Cantidad</label>
                        <input required type="number" id="cantidad" name="cantidad" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                    </div>
                    <div className="mb-4 mr-5">
                    <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Descripción</label>
                    <textarea required id="descripcion" name="descripcion" rows="3" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                    </div>
                    <div className="flex justify-end gap-4 mr-5 ">
                    <button type="submit" className="bg-verde font-semibold rounded-md py-2 px-6 text-white">Agregar
                    </button>
                    <button type="button" 
                        className="bg-gray-400 font-semibold   rounded-md py-2 px-6"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                    </div>


                </form>
                    
                </div>
          </div>   
          <Toaster richColors/>
         
  </div>
);
}