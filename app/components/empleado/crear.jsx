import { X, CircleAlert } from "lucide-react";
import { Toaster, toast } from 'sonner'

export default function Agregar({ open, onClose }) {
    const handleAgregar = () => {
        toast.success('Acción realizada con éxito');
        setTimeout(() => {
            onClose();
        }, 1500);
    };

    return (
        <div onClick={onClose} className={`fixed inset-0  justify-center items-center grid grid-cols-8 transition-opacity
        ${open ? "visible bg-black bg-opacity-20" : "invisible"}
        `}>
            <div onClick={(e) => e.stopPropagation()} className={` bg-white rounded-xl shadow p-6 transition-all col-span-4 col-start-3
                ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600">
                    <X /></button>
                <div className="w-full">
                    <div className="mx-5 my-4 w-full">
                        <h2 className="text-2xl font-bold flex gap-3 text-center text-gray-900">Registrar empleado</h2>
                        <hr className="my-3 mr-7 py-0.2 border border-black"></hr>

                    </div>
                    <form onSubmit={handleAgregar} className="ml-5 my-4 w-full">

                        <div className="grid mr-5 gap-x-12 grid-cols-2">
                            <div className="mb-4 ">
                                <label htmlFor="nombre_empleado" className="block text-sm font-medium text-gray-700">Nombre</label>
                                <input required type="text" id="nombre_empleado" name="nombre_empleado" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="apellidos" className="block text-sm font-medium text-gray-700">Apellidos</label>
                                <input required type="text" id="apellidos" name="apellidos" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
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
                                <select required id="estado" name="estado" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
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
            <Toaster richColors />

        </div>
    );
}