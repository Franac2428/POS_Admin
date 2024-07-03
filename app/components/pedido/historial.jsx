import React from 'react';
import Adjuntar from './adjuntar';
import Eliminar from './eliminar';
import { ScrollText, Trash, ArrowDownToLine } from "lucide-react";
import useSWR from 'swr';

const Historial = () => {
    const { data, error } = useSWR('http://localhost:3000/api/pedido', async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    });

    if (error) return <div>Error al cargar los datos</div>;
    if (!data) return <div>Cargando...</div>;
    if (!data || !Array.isArray(data)) return <div>No hay datos disponibles</div>;

    // Filtrar los pedidos que están finalizados
    const pedidosFinalizados = data.filter(pedido => pedido.estado === 'FINALIZADO');

    return (
        <>  
            <fieldset className="mb-[15px] w-full flex flex-col justify-start shadow-lg col-span-10 overflow-x-auto bg-white dark:bg-gray-700 px-5 py-4 rounded-lg">
                <table className="w-full text-left">
                    <thead>
                        <tr>
                            <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Id</th>
                            <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Proveedor</th>
                            <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Tipo</th>
                            <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Realizado</th>
                            <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Finalizado</th>
                            <th className="text-sm font-semibold text-gray-600 dark:text-gray-400 pb-4">Factura</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pedidosFinalizados.map((pedido) => (
                            <tr className="border-b dark:border-gray-600" key={pedido.id}>
                                <td className="text-sm font-bold text-blue-700 hover:underline py-4">{pedido.id}</td>
                                <td className="text-sm text-gray-900 dark:text-gray-200">{pedido.proveedor}</td>
                                <td className="text-sm text-gray-900 dark:text-gray-200">{pedido.medioPedido}</td>
                                <td className="text-sm text-gray-900 dark:text-gray-200">{new Date(pedido.createdAt).toLocaleDateString()}</td>
                                <td className="text-sm text-gray-900 dark:text-gray-200">{new Date(pedido.updatedAt).toLocaleDateString()}</td>
                                <td className="flex gap-2 my-2">
                                    <Adjuntar />
                                    <button className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform bg-yellow-600 bg-opacity-50 rounded-md" onClick={() => setDescarga(true)}>
                                        <ArrowDownToLine size={15} strokeWidth={2.2} />
                                    </button>
                                    <Eliminar />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </fieldset>      
        </>
    );
}

export default Historial;
