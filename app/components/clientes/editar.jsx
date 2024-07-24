import { X } from "lucide-react";
import { Toaster, toast } from 'sonner';

export default function EditarCliente({ open, onClose }) {
    const handleEditar = () => {
        toast.success('Acción realizada con éxito');
        setTimeout(() => {
            onClose();
        });
    };

    const cliente = {
        nombre: "Josué",
        apellidos: "Bonilla Soto",
        cedula: "305440618",
        correo: "josue@gmail.com",
        telefono: "72094668",
        descripcion: "San José, Costa Rica",
        facturasAsignadas: [
            { id: '00001', monto: 1000, fecha: "2024-03-01" },
            { id: '00020', monto: 1500, fecha: "2024-03-15" },
            { id: '00030', monto: 2000, fecha: "2024-03-30" }
        ]
    };

    return (
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-opacity ${open ? "visible bg-black bg-opacity-20 dark:bg-opacity-30" : "invisible"}`}>
            <div onClick={(e) => e.stopPropagation()} className={`bg-white dark:bg-gray-800 rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} m-auto`}>
                <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                    <X size={18} strokeWidth={2} />
                </button>
                <div className="flex flex-col items-center">
                    <h2 className="text-xl font-bold flex items-center gap-3 text-gray-900 dark:text-gray-100 my-4">
                        Editar cliente: {cliente.nombre}
                    </h2>
                    <hr className="w-full border-t border-gray-300 dark:border-gray-600"></hr>
                    <form onSubmit={handleEditar} className="ml-5 my-4 w-full">
                        <div className="grid mr-5 gap-x-12 grid-cols-2">
                            <div className="mb-4">
                                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Nombre</label>
                                <input required type="text" id="nombre" name="nombre" defaultValue={cliente.nombre} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="apellidos" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Apellidos</label>
                                <input required type="text" id="apellidos" name="apellidos" defaultValue={cliente.apellidos} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="cedula" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Cédula</label>
                                <input required type="text" id="cedula" name="cedula" defaultValue={cliente.cedula} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="correo" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Correo</label>
                                <input required type="email" id="correo" name="correo" defaultValue={cliente.correo} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Teléfono</label>
                                <input required type="tel" id="telefono" name="telefono" defaultValue={cliente.telefono} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>
                            <div className="mb-4 col-span-2">
                                <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Descripción</label>
                                <textarea required id="descripcion" name="descripcion" defaultValue={cliente.descripcion} rows="3" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                            </div>
                            <div className="mb-4 col-span-2">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Facturas Asignadas</h3>
                                {cliente.facturasAsignadas.map((factura, index) => (
                                    <div key={index} className="mt-4 border rounded-lg p-4">
                                        <div className="grid grid-cols-3 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">ID</label>
                                                <input type="text" defaultValue={factura.id} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Monto</label>
                                                <input type="number" defaultValue={factura.monto} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Fecha</label>
                                                <input type="date" defaultValue={factura.fecha} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-end gap-4 mr-5 ">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-6">
                                Guardar
                            </button>
                            <button type="button" className="bg-gray-400 font-semibold rounded-md py-2 px-6" onClick={onClose}>
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
