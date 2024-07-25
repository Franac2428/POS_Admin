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
                    <div className="grid grid-cols-1 md:grid-cols-12 mt-8 mx-auto">
                        <div className="col-span-12">
                            <div className='w-full'>
                                <BarChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}   