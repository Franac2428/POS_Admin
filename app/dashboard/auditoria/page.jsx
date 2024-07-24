"use client";
import useSWR from 'swr';
export default function RegistroAuditoria() {
    
    const { data, error, mutate } = useSWR('http://localhost:3000/api/audit', async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Listado Auditoría: " + data)
        return data;
    });


    function RespaldarBase() {
        let url = "http://localhost:3001/backups";
        window.location.href = url;

    }

    return (
        <>
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        {/* Start coding here */}
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
        {/* <div className="w-full md:w-1/2">
            <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                Search
                </label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                            />
                    </svg>
                    </div>
                    <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search"
                    required=""
                    />
                </div>
            </form>
        </div> */}
        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
            <button
                type="button"
                onClick={RespaldarBase}
                className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                > Respaldar Base de Datos
                </button>
        </div>
        </div>
        <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-4 py-3">
                    Id Auditoria
                    </th>
                    <th scope="col" className="px-4 py-3">
                    Status
                    </th>
                    <th scope="col" className="px-4 py-3">
                    Fecha
                    </th>
                    <th scope="col" className="px-4 py-3">
                    Hora
                    </th>
                    <th scope="col" className="px-4 py-3">
                    Usuario
                    </th>
                    <th scope="col" className="px-4 py-3">
                    Mensaje
                    </th>
                </tr>
            </thead>
            {data && data.map((item) => {
            const fecha = new Date(item.FechaLogin);

            return (
            <tr className="" key={item.IdAuditoriaLogin}>
                <td className="px-4 py-3">{item.IdAuditoriaLogin}</td>
                <td className="px-4 py-3">{item.Status}</td>
                <td className="px-4 py-3">{fecha.toLocaleDateString()}</td>
                <td className="px-4 py-3">{fecha.toLocaleTimeString()}</td>
                <td className="px-4 py-3">{item.Usuario}</td>
                <td className="px-4 py-3">{item.Mensaje}</td>
            </tr>
            );
            })}

        </table>
        </div>
        </div>
        </div>
        </>
    );
}
