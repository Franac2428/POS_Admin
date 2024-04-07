'use client'
import TopCards from '@/app/components/reporteria/TopCards'
import BarChart from '@/app/components/reporteria/BarChart';


export default function Reporteria() {
    return (
        <>
            <div className='flex flex-col w-full'>
                <div>
                    <TopCards />
                </div>
                <div>
                    <BarChart />
                </div>
            </div>

        </>
    );
}   