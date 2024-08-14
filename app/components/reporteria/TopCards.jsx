import React, { useState, useEffect } from 'react';
import { CirclePlus, Users, DollarSign } from "lucide-react";

const TopCards = () => {
    const [data, setData] = useState({
        productosInventario: 0,
        totalClientes: 0,
        ventasTotales: 0,
        ventasMensuales: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/reportes/cards');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await res.json();
                setData(result.topCardsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // No hay dependencias aquí, se ejecuta solo al montar el componente

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
                <CirclePlus size={24} strokeWidth={2} />
                <p className="text-3xl font-semibold text-gray-800">{data.productosInventario}</p>
                <p className="text-sm text-gray-600">Productos inventario</p>
                <div className="flex items-center mt-4">
                    <span className="text-red-500 font-semibold mr-2">-5%</span>
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
                <Users size={24} strokeWidth={2} />
                <p className="text-3xl font-semibold text-gray-800">{data.totalClientes}</p>
                <p className="text-sm text-gray-600">Total Clientes</p>
                <div className="flex items-center mt-4">
                    <span className="text-red-500 font-semibold mr-2">-5%</span>
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
                <DollarSign size={24} strokeWidth={2} />
                <p className="text-3xl font-semibold text-gray-800">{data.ventasTotales}</p>
                <p className="text-sm text-gray-600">Ventas totales</p>
                <div className="flex items-center mt-4">
                    <span className="text-blue-500 font-semibold mr-2">+20%</span>
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
                <DollarSign size={24} strokeWidth={2} />
                <p className="text-3xl font-semibold text-gray-800">{data.ventasMensuales}</p>
                <p className="text-sm text-gray-600">Ventas Mensuales</p>
                <div className="flex items-center mt-4">
                    <span className="text-blue-500 font-semibold mr-2">+20%</span>
                </div>
            </div>
        </div>
    );
};

export default TopCards;
