import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/reportes');
            const data = await res.json();

            if (data.ventasDiarias) {
                const labels = data.ventasDiarias.map(item => item.dia);
                const ventasData = data.ventasDiarias.map(item => item.total_ventas);

                setChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: 'Ventas ₡',
                            data: ventasData,
                            borderColor: 'rgb(53, 162, 235)',
                            backgroundColor: 'rgba(53, 162, 235, 0.4)',
                        },
                    ]
                });

                setChartOptions({
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Ventas diarias semanales'
                        }
                    },
                    maintainAspectRatio: false,
                    responsive: true
                });
            }
        };

        fetchData();
    }, []);

    return (
        <div className='w-full md:col-span-12 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>

            <Bar data={chartData} options={chartOptions} />
        </div>
    );
};

export default BarChart;
