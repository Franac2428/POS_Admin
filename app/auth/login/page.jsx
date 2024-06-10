"use client"

import CambioClave from "@/app/(auth)/olvidoClave";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";



export default function login() {

    const [cambioClave, setCambioClave] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const onSubmit = handleSubmit(async data => {
        console.log(data);

        const res = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });

        if (res.error) {
            alert(res.error);
        } else {
            router.push('/dashboard/menu')
            console.log("Enviando a /dashboard");
        }

        console.log(res);
    });

    return (
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <form onSubmit={onSubmit} className=' w-11/12 max-w-[700px] px-10 py-20 rounded-3xl'>
                    <h1 className='text-5xl font-semibold'>Inicio de sesión</h1>
                    <p className='font-medium text-lg text-gray-500 mt-4'>¡Bienvenido otra vez! Por favor ingrese sus credenciales.</p>
                    <div className='mt-8'>
                        <div className='flex flex-col'>
                            <label className='text-lg font-medium'>Usuario</label>
                            <input
                                type="email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email es requerido",
                                    },
                                })}
                                className='w-full bg-white rounded-xl p-4 mt-1 bg-transparent'
                                placeholder="Ingrese su usuario" />
                            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                        </div>
                        <div className='flex flex-col mt-4'>
                            <label className='text-lg font-medium'>Contraseña</label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Contraseña es requerida"
                                    },
                                })}
                                className='w-full bg-white rounded-xl p-4 mt-1 bg-transparent'
                                placeholder="Ingrese su contraseña"
                                type={"password"}
                            />{errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        </div>
                        <div className='flex flex-col mt-4'>
                            <button type="submit" className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-custom-yellow rounded-xl
                         text-white font-bold text-center text-lg' >Ingresar</button>

                        </div>
                        <div className='flex flex-col mt-4'>
                            <Link href="./pos" className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-custom-yellow rounded-xl
                         text-white font-bold text-center text-lg' >Ingresar empleado</Link>

                        </div>
                        <div className='mt-4'>
                            <button type="button" onClick={() => setCambioClave(true)} className='font-medium text-base text-custom-yellow'>¿Olvidaste tu contraseña?</button>
                        </div>

                    </div>
                </form>
            </div>
            <div className="rounded-l-full hidden items-center justify-center w-1/2 lg:flex h-full" style={{ backgroundColor: '#FEA81D' }}>
                <div>
                    <Image src={'/petote.png'} width={400} height={400} alt={'petote'} />

                </div>
            </div>
            <CambioClave open={cambioClave} onClose={() => setCambioClave(false)} />
        </div>
    );

}