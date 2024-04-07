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
                                <label htmlFor="cedula" className="block text-sm font-medium text-gray-700">Cedula</label>
                                <input required type="text" id="cedula" name="cedula" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="fechaNacimiento" className="block text-sm font-medium text-gray-700">Fecha Nacimiento</label>
                                <input required type="date" id="fechaNacimiento" name="fechaNacimiento" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="fechaContratacion" className="block text-sm font-medium text-gray-700">Fecha Contratacion</label>
                                <input required type="date" id="fechaContratacion" name="fechaContratacion" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="puesto" className="block text-sm font-medium text-gray-700">Puesto</label>
                                <select required id="puesto" name="puesto" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                    <option value="cajas">Cajas</option>
                                    <option value="jefe">Jefe</option>
                                    <option value="cocina">Cocina</option>
                                    <option value="repartidor">Repartidor</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Correo</label>
                                <input required type="text" id="correo" name="correo" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Telefono</label>
                                <input required type="text" id="telefono" name="telefono" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="salario" className="block text-sm font-medium text-gray-700">Salario x hora</label>
                                <input required type="number" id="salario" name="salario" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="horario" className="block text-sm font-medium text-gray-700">Horario</label>
                                <select required id="horario" name="horario" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                    <option value="completo">L-S 12md-6pm</option>
                                    <option value="medio">L-S 12md-4pm</option>
                                    <option value="fines">L-S 6pm-11pm</option>
                                    <option value="entre">D-J 12md-7pm</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-4 mr-5">
                            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Dirección</label>
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