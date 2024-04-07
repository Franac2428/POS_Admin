import { X, CircleAlert } from "lucide-react";
import { Toaster, toast } from 'sonner';

export default function Ver({ open, onClose }) {
    const handleVer = () => {
        toast.success('Acción realizada con éxito');
        setTimeout(() => {
            onClose();
        }, 1500);
    };

    // Aquí puedes reemplazar los datos de ejemplo con los datos reales del empleado
    const empleado = {
        nombre: "Josué",
        apellidos: "Bonilla Soto",
        cedula: "305440618",
        fechaNacimiento: "2003-19-03",
        fechaContratacion: "2024-01-16",
        puesto: "Cajas",
        correo: "josue@gmail.com",
        telefono: "72094668",
        salario: 4000.0,
        horario: "L-S 12md-6pm",
        descripcion: "San José, Costa Rica",
    };

    return (
        <>
            <div onClick={onClose} className={`fixed inset-0  justify-center items-center grid grid-cols-8 transition-opacity ${open ? "visible bg-black bg-opacity-20" : "invisible"}`}>
                <div onClick={(e) => e.stopPropagation()} className={` bg-white rounded-xl shadow p-6 transition-all col-span-4 col-start-3 ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                    <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600">
                        <X />
                    </button>
                    <div className="w-full">
                        <div className="mx-5 my-4 w-full">
                            <h2 className="text-2xl font-bold flex gap-3 text-center text-gray-900">Ver empleado</h2>
                            <hr className="my-3 mr-7 py-0.2 border border-black" />
                        </div>
                        <div className="ml-5 my-4 w-full">
                            <dl className="grid grid-cols-2 gap-x-4">
                                <div className="mb-4">
                                    <dt className="text-sm font-medium text-gray-700">Nombre</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{empleado.nombre}</dd>
                                </div>
                                <div className="mb-4">
                                    <dt className="text-sm font-medium text-gray-700">Apellidos</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{empleado.apellidos}</dd>
                                </div>
                                <div className="mb-4">
                                    <dt className="text-sm font-medium text-gray-700">Cedula</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{empleado.cedula}</dd>
                                </div>
                                <div className="mb-4">
                                    <dt className="text-sm font-medium text-gray-700">Fecha Nacimiento</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{empleado.fechaNacimiento}</dd>
                                </div>
                                <div className="mb-4">
                                    <dt className="text-sm font-medium text-gray-700">Fecha Contratación</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{empleado.fechaContratacion}</dd>
                                </div>
                                <div className="mb-4">
                                    <dt className="text-sm font-medium text-gray-700">Puesto</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{empleado.puesto}</dd>
                                </div>
                                <div className="mb-4">
                                    <dt className="text-sm font-medium text-gray-700">Correo</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{empleado.correo}</dd>
                                </div>
                                <div className="mb-4">
                                    <dt className="text-sm font-medium text-gray-700">Telefono</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{empleado.telefono}</dd>
                                </div>
                                <div className="mb-4">
                                    <dt className="text-sm font-medium text-gray-700">Salario x hora</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{empleado.salario}</dd>
                                </div>
                                <div className="mb-4">
                                    <dt className="text-sm font-medium text-gray-700">Horario</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{empleado.horario}</dd>
                                </div>
                                <div className="mb-4 col-span-2">
                                    <dt className="text-sm font-medium text-gray-700">Dirección</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{empleado.descripcion}</dd>
                                </div>
                            </dl>
                        </div>
                        <div className="flex justify-end gap-4 mr-5">
                            <button type="button" className="bg-gray-400 font-semibold rounded-md py-2 px-6" onClick={onClose}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster richColors />
        </>
    );
}
