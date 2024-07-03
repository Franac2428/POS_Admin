import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { Toaster, toast } from 'sonner';
import { useState, useEffect } from 'react';

export default function Agregar({ open, onClose, mutate }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const res = await fetch('/api/role');
                const data = await res.json();
                if (res.ok) {
                    setRoles(data);
                } else {
                    toast.error('Error obteniendo los roles');
                }
            } catch (error) {
                toast.error('Error en la solicitud');
            }
        };

        fetchRoles();
    }, []);

    const handleAgregar = handleSubmit(async (data) => {
        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                body: JSON.stringify({
                    ...data,
                    roleId: parseInt(data.roleId)
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (res.ok) {
                const newEmployee = await res.json();
                toast.success('Nuevo usuario guardado con éxito');
                mutate(currentData => [...currentData, newEmployee], false);
                setTimeout(() => {
                    onClose();
                    reset();
                }, 500);
            } else {
                const errorData = await res.json();
                toast.error(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            toast.error('Error en la solicitud');
        }
    });

    const handleCancel = () => {
        onClose();
        reset();
    };

    return (
        <div onClick={handleCancel} className={`fixed inset-0 justify-center items-center grid grid-cols-8 transition-opacity ${open ? "visible bg-black bg-opacity-20" : "invisible"}`}>
            <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl shadow p-6 transition-all col-span-4 col-start-3 ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                <button onClick={handleCancel} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600">
                    <X />
                </button>
                <div className="w-full">
                    <div className="mx-5 my-4 w-full">
                        <h2 className="text-2xl font-bold flex gap-3 text-center text-gray-900">Registrar empleado</h2>
                        <hr className="my-3 mr-7 py-0.2 border border-black"></hr>
                    </div>
                    <form onSubmit={handleAgregar} className="ml-5 my-4 w-full">
                        <div className="grid mr-5 gap-x-12 grid-cols-2">
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="username" className="text-sm font-medium text-gray-700">Username</label>
                                <input type="text" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" {...register("username", { required: { value: true, message: 'El username es requerido' } })} />
                                {errors.username && <span className="text-red-500">{errors.username.message}</span>}
                            </div>
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                <input type="email" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" {...register("email", { required: { value: true, message: 'El email es requerido' } })} />
                                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                            </div>
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="password" className="text-sm font-medium text-gray-700">Contraseña</label>
                                <input type="password" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" {...register("password", { required: { value: true, message: 'La contraseña es requerida' } })} />
                                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                            </div>
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="nombre" className="text-sm font-medium text-gray-700">Nombre</label>
                                <input type="text" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" {...register("nombre", { required: { value: true, message: 'El nombre es requerido' } })} />
                                {errors.nombre && <span className="text-red-500">{errors.nombre.message}</span>}
                            </div>
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="apellido" className="text-sm font-medium text-gray-700">Apellidos</label>
                                <input type="text" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" {...register("apellido", { required: { value: true, message: 'El apellido es requerido' } })} />
                                {errors.apellido && <span className="text-red-500">{errors.apellido.message}</span>}
                            </div>
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="telefono" className="text-sm font-medium text-gray-700">Telefono</label>
                                <input type="text" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" {...register("telefono", { required: { value: true, message: 'El telefono es requerido' } })} />
                                {errors.telefono && <span className="text-red-500">{errors.telefono.message}</span>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="salario" className="block text-sm font-medium text-gray-700">Salario x hora</label>
                                <input required type="number" id="salario" name="salario" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" {...register("salario", { required: { value: true, message: 'El salario es requerido' } })} />
                                {errors.salario && <span className="text-red-500">{errors.salario.message}</span>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="horario" className="block text-sm font-medium text-gray-700">Horario</label>
                                <select required id="horario" name="horario" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" {...register("horario", { required: { value: true, message: 'El horario es requerido' } })}>
                                    <option value="completo">L-S 12md-6pm</option>
                                    <option value="medio">L-S 12md-4pm</option>
                                    <option value="fines">L-S 6pm-11pm</option>
                                    <option value="entre">D-J 12md-7pm</option>
                                </select>
                                {errors.horario && <span className="text-red-500">{errors.horario.message}</span>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="roleId" className="block text-sm font-medium text-gray-700">Rol</label>
                                <select required id="roleId" name="roleId" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" {...register("roleId", { required: { value: true, message: 'El rol es requerido' } })}>
                                    {roles.map((role) => (
                                        <option key={role.IdRole} value={role.IdRole}>
                                            {role.Descripcion}
                                        </option>
                                    ))}
                                </select>
                                {errors.roleId && <span className="text-red-500">{errors.roleId.message}</span>}
                            </div>
                        </div>
                        <div className="flex mt-5 justify-end gap-x-3">
                            <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400" onClick={handleCancel}>Cancelar</button>
                            <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster position="top-right" />
        </div>
    );
}
