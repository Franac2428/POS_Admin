'use client'
import TopCards from '@/app/components/reporteria/TopCards'
import BarChart from '@/app/components/reporteria/BarChart';


export default function Reporteria() {
    return (
        <>
            <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
                <div>
                    <div>
                        <TopCards />
                    </div>
                    <div className='mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5'>
                        <div className='w-full'>
                            <BarChart />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}   