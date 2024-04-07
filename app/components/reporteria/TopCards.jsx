import React from 'react';



const TopCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
                <p className="text-3xl font-semibold text-gray-800">$1,437,876</p>
                <p className="text-sm text-gray-600">YTD Revenue</p>
                <div className="flex items-center mt-4">
                    <span className="text-green-500 font-semibold mr-2">+11%</span>
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
                <p className="text-3xl font-semibold text-gray-800">$X</p>
                <p className="text-sm text-gray-600">Another Metric</p>
                <div className="flex items-center mt-4">
                    <span className="text-red-500 font-semibold mr-2">-5%</span>
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
                <p className="text-3xl font-semibold text-gray-800">$Y</p>
                <p className="text-sm text-gray-600">Yet Another Metric</p>
                <div className="flex items-center mt-4">
                    <span className="text-blue-500 font-semibold mr-2">+20%</span>
                </div>
            </div>
        </div>

    );
};

export default TopCards;

