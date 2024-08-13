'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale'; 
import { X } from "lucide-react";
import { Toaster, toast } from 'sonner';


const EvaluacionesDesempeno = () => {
    const { data: session, status } = useSession(); 
    const employeeId = session?.user?.id;
    const [evaluaciones, setEvaluaciones] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [metaId, setMetaId] = useState(true); 

    const [error, setError] = useState(null); 

    useEffect(() => {
        if (employeeId) {
            fetchEvaluaciones();
        }
    }, [employeeId]);

    const handleEliminar = async (metaId) => {
        try {
            const response = await fetch(`http://localhost:3000/api/metas/${metaId}`, {
                method: 'DELETE',
            });
            const result = await response.json();
            if (response.ok) {
                toast.success('Meta eliminada');
                setTimeout(() => {
                    fetchEvaluaciones();
                }, 300);           
             } else {
                toast.error('Error al eliminar meta');
            }
        } catch (error) {
            toast.error('Error al eliminar meta');
        }
    };


    const fetchEvaluaciones = async () => {
        if (!employeeId) return;
        try {
            const response = await fetch(`/api/metas/${employeeId}`);
            if (!response.ok) {
                throw new Error('Error al obtener los datos');
            }
            const data = await response.json();
            setEvaluaciones(data);
        } catch (err) {
            setError('Error al comunicar con el servidor');
        } finally {
            setLoading(false);
        }
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    if (loading) return <div>Cargando...</div>;
    
    return (
        <div className="container mx-auto px-4 py-8 text-gray-900 dark:text-gray-100">

            <h1 className="text-2xl font-bold mb-4">Objetivos establecidos</h1>
            {error ? (
                <p>No se han registrado evaluaciones para usted.</p>
            ) : (
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    {evaluaciones.map(evaluacion => (
                        
                        <div key={evaluacion.id} className="relative shadow-lg bg-white dark:bg-gray-700 p-4 rounded-lg">
                            <button   onClick={() => handleEliminar(evaluacion.id)} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-600 dark:hover:text-gray-300">
                                <X size={18} strokeWidth={2} />
                            </button>
                            <div className="pb-4 bt-1 px-4">
                                <p className="text-lg font-semibold text-green-600 dark:text-green-200">
                                    Asunto: {evaluacion.asunto} 
                                </p>
                                <p className="text-md text-gray-900 dark:text-gray-100">
                                    Asignado a: {evaluacion.empleado.nombre} {evaluacion.empleado.apellido}
                                </p>
                                <p className="text-md text-gray-900 dark:text-gray-100">
                                    Fecha: {new Date(evaluacion.fecha).toLocaleDateString()}
                                </p>
                                <p className='text-end my-2'>     <span class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                                    <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                                    </svg>
                                    {capitalizeFirstLetter(formatDistanceToNow(new Date(evaluacion.fecha), { addSuffix: true, locale: es }))}

                                </span></p>
                           
                                <hr className="my-4 border-gray-300 dark:border-gray-600" />
                                <p className="text-md text-gray-900 dark:text-gray-100 mt-4">
                                    {evaluacion.observaciones}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
                        <Toaster richColors />

        </div>
    );
};

export default EvaluacionesDesempeno;
