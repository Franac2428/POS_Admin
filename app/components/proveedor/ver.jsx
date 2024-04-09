import { X, CircleAlert } from "lucide-react";
import { Toaster, toast } from 'sonner';

export default function Ver({ open, onClose }) {
    const handleVer = () => {
        toast.success('Acción realizada con éxito');
        setTimeout(() => {
            onClose();
        }, 1500);
    };

    const proveedor = {
        id: "PR1001",
        nombre: "Coca Cola",
        sitioWeb: "https://coca-colafemsa.com/noticias/presencia/coca-cola-femsa-costa-rica/",
        WhatsApp: "8888-8888",
        telefono: "800-SIEMPRE (743-6773)",
        fechaRegistro: "2024-01-16",
        tipo: "Bebidas",
        correo: "comunicacion@femsa.com.cr",
        descripcion:"Distribuidadora de Coca Cola Company en Costa Rica sus pedidos se hacen solamente desde la página"
    
    };

    return (
        <>
            <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-opacity ${open ? "visible bg-black bg-opacity-20 dark:bg-opacity-30" : "invisible"}`}>
            <div onClick={(e) => e.stopPropagation()} className={`bg-white dark:bg-gray-800 rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} m-auto`}>
                <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                <X size={18} strokeWidth={2} />
                </button>
                 <div className="flex flex-col items-center">
                      <h2 className="text-xl font-bold flex items-center gap-3 text-gray-900 dark:text-gray-100 my-4">Detalles proveedor</h2>
                            <hr className="my-3 mr-7 py-0.2 border border-black" />
                        </div>
                        <div className="ml-5 my-4 w-full">
                            <dl className="grid grid-cols-2 gap-x-4">
                                <div className="mb-4">
                                    <dt className="text-sm font-medium dark:text-gray-200  text-gray-700">id</dt>
                                    <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200 ">{proveedor.id}</dd>
                                </div>
                                <div className="mb-4">
                                    <dt className="text-sm font-medium text-gray-700 dark:text-gray-200 ">Nombre</dt>
                                    <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200 ">{proveedor.nombre}</dd>
                                </div>
                                <div className="mb-4">
                                    <dt className="text-sm font-medium text-gray-700 dark:text-gray-200 ">Sitio Web</dt>
                                    <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200 ">{proveedor.sitioWeb}</dd>
                                </div>
                                <div className="mb-4">
                                    <dt className="text-sm font-medium text-gray-700 dark:text-gray-200 ">WhatsApp</dt>
                                    <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200 ">{proveedor.WhatsApp}</dd>
                                </div>
                                <div className="mb-4">
                                    <dt className="text-sm font-medium text-gray-700 dark:text-gray-200 ">Teléfono</dt>
                                    <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200 ">{proveedor.telefono}</dd>
                                </div>
                                <div className="mb-4">
                                    <dt className="text-sm font-medium text-gray-700 dark:text-gray-200 ">Fecha Registro</dt>
                                    <dd className="mt-1 text-sm text-gray-900  dark:text-gray-200">{proveedor.fechaRegistro}</dd>
                                </div>
                                <div className="mb-4">
                                    <dt className="text-sm font-medium text-gray-700 dark:text-gray-200 ">Tipo</dt>
                                    <dd className="mt-1 text-sm text-gray-900  dark:text-gray-200">{proveedor.tipo}</dd>
                                </div>
                                <div className="mb-4">
                                    <dt className="text-sm font-medium text-gray-700 dark:text-gray-200 ">Correo</dt>
                                    <dd className="mt-1 text-sm text-gray-900  dark:text-gray-200">{proveedor.correo}</dd>
                                </div>
                                <div className="mb-4">
                                    <dt className="text-sm font-medium text-gray-700 dark:text-gray-200 ">Descripción</dt>
                                    <dd className="mt-1 text-sm text-gray-900  dark:text-gray-200">{proveedor.descripcion}</dd>
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
            <Toaster richColors />
        </>
    );
}
