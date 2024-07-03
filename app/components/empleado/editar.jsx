import { X } from "lucide-react";
import { Toaster, toast } from 'sonner';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

export default function Editar({ open, onClose, employeeId, mutate }) {
    const [empleado, setEmpleado] = useState(null);
    const [roles, setRoles] = useState([]);
    const { reset } = useForm();

    const nombreRef = useRef();
    const apellidoRef = useRef();
    const correoRef = useRef();
    const telefonoRef = useRef();
    const direccionRef = useRef();
    const rolRef = useRef();


    const fetchEmpleado = async () => {
        if (employeeId) {
            try {
                const response = await fetch(`/api/empleado/${employeeId}`);
                const result = await response.json();
                if (response.ok) {
                    setEmpleado(result);
                } else {
                    toast.error('Error al obtener los datos del empleado');
                }
            } catch (error) {
                toast.error('Error al obtener los datos del empleado');
            }
        }
    };

    const fetchRoles = async () => {
        try {
            const response = await fetch('/api/role'); // Asegúrate de que la ruta sea correcta
            const result = await response.json();
            if (response.ok) {
                setRoles(result);
            } else {
                toast.error('Error al obtener los roles');
            }
        } catch (error) {
            toast.error('Error al obtener los roles');
        }
    };

    useEffect(() => {
        fetchEmpleado();
        fetchRoles();
    }, [employeeId]);

    useEffect(() => {
        if (empleado) {
            nombreRef.current.value = empleado.nombre;
            apellidoRef.current.value = empleado.apellido;
            correoRef.current.value = empleado.email;
            telefonoRef.current.value = empleado.telefono;
            direccionRef.current.value = empleado.direccion;
            rolRef.current.value = empleado.roleId || "";  // Asigna el rol actual del empleado
        }
    }, [empleado, setValue]);

    const handleEditar = handleSubmit(async (data) => {
        try {
            const response = await fetch(`/api/empleado/${employeeId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({
                    nombre: nombreRef.current.value,
                    apellido: apellidoRef.current.value,
                    email: correoRef.current.value,
                    telefono: telefonoRef.current.value,
                    direccion: direccionRef.current.value,
                    roleId: rolRef.current.value,  // Añadir el rol al payload
                }),
            });

            if (response.ok) {
                const empleadoActualizado = await response.json();
                toast.success('Usuario editado con éxito');
                mutate();  
                setTimeout(() => {
                    onClose();
                }, 500);
            } else {
                const errorData = await response.json();
                toast.error(`Error: ${errorData.message}`);
            }
        } catch (error) {
            toast.error('Error al editar el empleado');
        }
    });

    const handleCancel = () => {
        fetchEmpleado(); 
        onClose();
        reset(); 
    }

    return (
        <div onClick={handleCancel} className={`fixed inset-0 flex justify-center items-center transition-opacity ${open ? "visible bg-black bg-opacity-20 dark:bg-opacity-30" : "invisible"}`}>
            <div onClick={(e) => e.stopPropagation()} className={`bg-white dark:bg-gray-800 rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} m-auto`}>
                <button onClick={handleCancel} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                    <X size={18} strokeWidth={2} />
                </button>
                {empleado && (
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl font-bold flex items-center gap-3 text-gray-900 dark:text-gray-100 my-4">
                            Editar empleado ID : {empleado.Id}
                        </h2>
                        <hr className="w-full border-t border-gray-300 dark:border-gray-600"></hr>
                        <form onSubmit={handleEditar} className="ml-5 my-4 w-full">
                            <div className="grid mr-5 gap-x-12 grid-cols-2">
                                <div className="mb-4 flex flex-col">
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Username</label>
                                    <input type="text" id="username" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                                    {...register("username", { required: { value: true, message: 'El username es requerido' }, minLength: { value: 4, message: 'El username debe tener al menos 4 caracteres' } })} />
                                    {errors.username && <span className="text-red-500">{errors.username.message}</span>}
                                </div>
                                <div className="mb-4 flex flex-col">
                                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Nombre</label>
                                    <input type="text" id="nombre" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                                    {...register("nombre", { required: { value: true, message: 'El nombre es requerido' } })} />
                                    {errors.nombre && <span className="text-red-500">{errors.nombre.message}</span>}
                                </div>
                                <div className="mb-4 flex flex-col">
                                    <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Apellidos</label>
                                    <input type="text" id="apellido" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                                    {...register("apellido", { required: { value: true, message: 'El apellido es requerido' } })} />
                                    {errors.apellido && <span className="text-red-500">{errors.apellido.message}</span>}
                                </div>
                                <div className="mb-4 flex flex-col">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Correo</label>
                                    <input type="email" id="email" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                                    {...register("email", { required: { value: true, message: 'El email es requerido' }, pattern: { value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, message: 'El email no es válido' } })} />
                                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                                </div>
                                <div className="mb-4 flex flex-col">
                                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Telefono</label>
                                    <input type="text" id="telefono" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                                    {...register("telefono", { required: { value: true, message: 'El telefono es requerido' }, pattern: { value: /^[0-9]+$/, message: 'El teléfono solo puede contener números' } })} />
                                    {errors.telefono && <span className="text-red-500">{errors.telefono.message}</span>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="rol" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Rol</label>
                                    <select id="rol" name="rol" ref={rolRef} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                        {roles.map((rol) => (
                                            <option key={rol.IdRole} value={rol.IdRole}>
                                                {rol.Descripcion}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4 mr-5 flex flex-col">
                                <label htmlFor="direccion" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Dirección</label>
                                <textarea id="direccion" rows="3" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                                {...register("direccion", { required: { value: true, message: 'La dirección es requerida' } })}></textarea>
                                {errors.direccion && <span className="text-red-500">{errors.direccion.message}</span>}
                            </div>
                            <div className="flex justify-end gap-4 mr-5">
                                <button type="submit" className="bg-verde font-semibold rounded-md py-2 px-6 text-white">Guardar</button>
                                <button type="button" className="bg-gray-400 font-semibold rounded-md py-2 px-6 text-white" onClick={handleCancel}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
