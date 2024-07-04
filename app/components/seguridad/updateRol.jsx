import { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';

export default function UpdateRole({ open, onClose, roleId, onUpdateRole }) {
    const [rol, setRol] = useState(null);
    const descriptionRef = useRef();

    useEffect(() => {
        const fetchRol = async () => {
            try {
                const response = await fetch(`/api/role/${roleId}`);
                if (response.ok) {
                    const data = await response.json();
                    setRol(data);
                } else {
                    toast.error('Error al obtener los datos del rol');
                }
            } catch (error) {
                toast.error('Error al obtener los datos del rol');
            }
        };

        if (open && roleId) {
            fetchRol();
        } else {
            setRol(null);
        }
    }, [open, roleId]);

    const handleEditarRol = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`/api/role/${roleId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Descripcion: descriptionRef.current.value,
                }),
            });

            if (response.ok) {
                const rolActualizado = await response.json();
                toast.success('Rol actualizado con éxito');
                onUpdateRole(rolActualizado); // Actualiza el rol en la interfaz padre si es necesario
                onClose(); // Cierra el modal después de la edición
            } else {
                const errorData = await response.json();
                toast.error(`Error: ${errorData.message}`);
            }
        } catch (error) {

        }
    };

    if (!open) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all sm:max-w-lg sm:w-full">
                    <form onSubmit={handleEditarRol}>
                        <div className="bg-white dark:bg-gray-800 px-4 py-5 sm:px-6">
                            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                Editar Rol
                            </h3>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:p-6">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Descripción
                            </label>
                            <input
                                type="text"
                                id="description"
                                ref={descriptionRef}
                                defaultValue={rol?.Descripcion}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                            />

                            <div className="mt-4 flex justify-end">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="ml-3 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-700"
                                >
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
