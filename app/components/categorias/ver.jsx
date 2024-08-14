import { useState, useEffect } from 'react';
import { X } from "lucide-react";
import { Toaster, toast } from 'sonner';

export default function Ver({ open, onClose, categoriaId }) {
    const [categoria, setCategoria] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (categoriaId) {
            setIsLoading(true);
            setIsError(false);
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categorias/${categoriaId}`)
                .then(response => response.json())
                .then(data => {
                    setCategoria(data);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching categoria:', error);
                    setIsError(true);
                    setIsLoading(false);
                });
        }
    }, [categoriaId]);

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
                    <p className="text-center text-gray-700 dark:text-gray-200">Error al cargar los datos de la categoría.</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-opacity ${open ? "visible bg-black bg-opacity-20 dark:bg-opacity-30" : "invisible"}`}>
                <div onClick={(e) => e.stopPropagation()} className={`bg-white dark:bg-gray-800 rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} m-auto`}>
                    <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                        <X size={18} strokeWidth={2} />
                    </button>
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl font-bold flex items-center gap-3 text-gray-900 dark:text-gray-100 my-4">Detalles categoría</h2>
                        <hr className="my-3 mr-7 py-0.2 border border-black" />
                    </div>
                    <div className="ml-5 my-4 w-full">
                        <dl className="grid grid-cols-2 gap-x-4">
                            <div className="mb-4">
                                <dt className="text-sm font-medium dark:text-gray-200 text-gray-700">ID</dt>
                                <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200">{categoria?.CategoriaProductoID}</dd>
                            </div>
                            <div className="mb-4">
                                <dt className="text-sm font-medium text-gray-700 dark:text-gray-200">Nombre</dt>
                                <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200">{categoria?.NombreCategoria}</dd>
                            </div>
                            <div className="mb-4">
                                <dt className="text-sm font-medium text-gray-700 dark:text-gray-200">Descripción</dt>
                                <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200">{categoria?.Descripcion}</dd>
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
