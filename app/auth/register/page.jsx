'use client'
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const [selectedRoleId, setSelectedeRoleId] = useState(null);

    const onSubmit = handleSubmit(async (data) => {
        try {
            const postData = { ...data, IdRole: selectedRoleId };
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (res.ok) {
                router.push('/auth/login');
            } else {
                const errorData = await res.json();
                console.log("Error:", errorData);
            }

        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    });

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" {...register("username", { required: { value: true, message: 'El username es requerido' } })} />
                {errors.username && <span className="text-red-500">{errors.username.message}</span>}

                <input type="email" {...register("email", { required: { value: true, message: 'El email es requerido' } })} />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                <input type="password" {...register("password", { required: { value: true, message: 'La contraseña es requerida' } })} />
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                <input type="text" {...register("nombre", { required: { value: true, message: 'El nombre es requerido' } })} />
                {errors.nombre && <span className="text-red-500">{errors.nombre.message}</span>}

                <input type="text" {...register("apellido", { required: { value: true, message: 'El apellido es requerido' } })} />
                {errors.apellido && <span className="text-red-500">{errors.apellido.message}</span>}

                <input type="text" {...register("telefono", { required: { value: true, message: 'El telefono es requerido' } })} />
                {errors.telefono && <span className="text-red-500">{errors.telefono.message}</span>}

                <input type="text" {...register("direccion", { required: { value: true, message: 'La dirección es requerida' } })} />
                {errors.direccion && <span className="text-red-500">{errors.direccion.message}</span>}

                {/* Dropdown para seleccionar el rol */}
                <select onChange={(e) => setSelectedRoleId(parseInt(e.target.value))}>
                    <option value="">Selecciona un rol</option>
                    <option value="2">Administrador</option> {/* Ajustar con el IdRole correspondiente */}
                    <option value="3">Empleado</option>
                    <option value="1">Cocina</option> {/* Ajustar con el IdRole correspondiente */}
                </select>
                {errors.IdRole && <span className="text-red-500">Selecciona un rol</span>}


                <button type="submit">Registrar</button>
            </form>
        </div>
    );
}

export default RegisterPage;
