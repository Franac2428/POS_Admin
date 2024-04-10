import { X } from "lucide-react";
import { Toaster, toast } from 'sonner'

export default function Editar({ open, onClose }) {
    const handleEditar = () => {
        toast.success('Acción realizada con éxito');
        setTimeout(() => {
            onClose();
        }, 1500);
    };
    const empleado = {
        id: "EM10102",
        nombre: "Josué",
        apellidos: "Bonilla Soto",
        cedula: "305440618",
        fechaNacimiento: "2003-03-19",
        fechaContratacion: "2024-01-16",
        puesto: "Cajas",
        correo: "josue@gmail.com",
        telefono: "72094668",
        salario: 4000.0,
        horario: "L-S 12md-6pm",
        descripcion: "San José, Costa Rica",
    };

    return (
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-opacity ${open ? "visible bg-black bg-opacity-20 dark:bg-opacity-30" : "invisible"}`}>
            <div onClick={(e) => e.stopPropagation()} className={`bg-white dark:bg-gray-800 rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} m-auto`}>
                <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                    <X size={18} strokeWidth={2} />
                </button>
                <div className="flex flex-col items-center">
                    <h2 className="text-xl font-bold flex items-center gap-3 text-gray-900 dark:text-gray-100 my-4">
                        Editar empleado ID : {empleado.id}
                    </h2>
                    <hr className="w-full border-t border-gray-300 dark:border-gray-600"></hr>
                    <form onSubmit={handleEditar} className="ml-5 my-4 w-full">
                        <div className="grid mr-5 gap-x-12 grid-cols-2">

                            <div className="mb-4">
                                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Nombre</label>
                                <input required type="text" id="nombre_empleado" name="nombre_empleado" defaultValue={empleado.nombre} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="apellidos" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Apellidos</label>
                                <input required type="text" id="apellidos" name="apellidos" defaultValue={empleado.apellidos} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="cedula" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Cedula</label>
                                <input required type="text" id="cedula" name="cedula" defaultValue={empleado.cedula} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="fechaNacimiento" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Fecha Nacimiento</label>
                                <input required type="date" id="fechaNacimiento" name="fechaNacimiento" defaultValue={empleado.fechaNacimiento} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="fechaContratacion" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Fecha Contratacion</label>
                                <input required type="date" id="fechaContratacion" name="fechaContratacion" defaultValue={empleado.fechaContratacion} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="puesto" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Puesto</label>
                                <select required id="puesto" name="puesto" defaultValue={empleado.puesto} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                    <option value="cajas">Cajas</option>
                                    <option value="jefe">Jefe</option>
                                    <option value="cocina">Cocina</option>
                                    <option value="repartidor">Repartidor</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="correo" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Correo</label>
                                <input required type="text" id="correo" name="correo" defaultValue={empleado.correo} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Telefono</label>
                                <input required type="number" id="telefono" name="telefono" defaultValue={empleado.telefono} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="salario" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Salario</label>
                                <input required type="number" id="salario" name="salario" defaultValue={empleado.salario} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="horario" className="block text-sm font-medium text-gray-700">Horario</label>
                                <select required id="horario" name="horario" defaultValue={empleado.horario} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                    <option value="completo">L-S 12md-6pm</option>
                                    <option value="medio">L-S 12md-4pm</option>
                                    <option value="fines">L-S 6pm-11pm</option>
                                    <option value="entre">D-J 12md-7pm</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-4 mr-5">
                            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Descripción</label>
                            <textarea required id="descripcion" name="descripcion" defaultValue={empleado.descripcion} rows="3" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                        </div>

                        <div className="flex justify-end gap-4 mr-5 ">
                            <button type="submit" className="bg-verde font-semibold rounded-md py-2 px-6 text-white">Guardar
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