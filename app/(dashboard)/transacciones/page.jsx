import RegistroTransacciones from "../../components/transacciones/registroTransacciones";

export default function Transaccion() {
    return (
        <>

            <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-10">
                <div className="mx-auto px-4 lg:px-12">
                    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                        <div className="border-b dark:border-gray-700 mx-4">
                            <div className="flex items-center justify-between space-x-4 pt-3">
                                <div className="flex-1 flex items-center space-x-3">
                                    <h5 className="dark:text-white font-semibold">Transacciones</h5>
                                </div>
                            </div>
                            <div className="flex flex-col-reverse md:flex-row items-center justify-between md:space-x-4 py-3">
                                <div className="w-full lg:w-2/3 flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center">
                                    <form className="w-full md:max-w-sm flex-1 md:mr-4">
                                        <label
                                            htmlFor="default-search"
                                            className="text-sm font-medium text-gray-900 sr-only dark:text-white"
                                        >
                                            Search
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                    />
                                                </svg>
                                            </div>
                                            <input
                                                type="search"
                                                id="default-search"
                                                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="Buscar..."
                                                required=""
                                            />
                                            <button
                                                type="submit"
                                                className="text-white absolute right-0 bottom-0 top-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-r-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                            >
                                                Buscar
                                            </button>
                                        </div>
                                    </form>
                                    <div className="flex items-center space-x-4">
                                        <div>
                                            <button
                                                id="filterDropdownButton"
                                                data-dropdown-toggle="filterDropdown"
                                                className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                                type="button"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    aria-hidden="true"
                                                    className="h-4 w-4 mr-2 text-gray-400"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                Filter
                                                <svg
                                                    className="-mr-1 ml-1.5 w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        clipRule="evenodd"
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                id="filterDropdown"
                                                className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
                                            >
                                                <ul
                                                    className="space-y-2 text-sm"
                                                    aria-labelledby="filterDropdownButton"
                                                >
                                                    <li className="flex items-center">
                                                        <input
                                                            id="apple"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                        />
                                                        <label
                                                            htmlFor="apple"
                                                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                                        >
                                                            Combo 1 (56)
                                                        </label>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <input
                                                            id="fitbit"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                        />
                                                        <label
                                                            htmlFor="fitbit"
                                                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                                        >
                                                            Combo 2 (16)
                                                        </label>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <input
                                                            id="razor"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                        />
                                                        <label
                                                            htmlFor="razor"
                                                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                                        >
                                                            Combo 3 (49)
                                                        </label>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <input
                                                            id="nikon"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                        />
                                                        <label
                                                            htmlFor="nikon"
                                                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                                        >
                                                            Combo 4 (12)
                                                        </label>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <input
                                                            id="benq"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                        />
                                                        <label
                                                            htmlFor="benq"
                                                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                                        >
                                                            Combo 5 (74)
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                id="configurationDropdownButton"
                                                data-dropdown-toggle="configurationDropdown"
                                                type="button"
                                                className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="h-4 w-4 mr-2 text-gray-400"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                Configuracion
                                            </button>
                                            <div
                                                id="configurationDropdown"
                                                className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                                            >
                                                <ul
                                                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                    aria-labelledby="configurationDropdownButton"
                                                >
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                        >
                                                            Por Tipo de pago
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                        >
                                                            Por Producto
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="py-1">
                                                    <a
                                                        href="#"
                                                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Reiniciar
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-auto flex flex-col md:flex-row mb-3 md:mb-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                    <button
                                        type="button"
                                        className="flex-shrink-0 flex items-center justify-center py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    >
                                        <svg
                                            className="mr-2 w-4 h-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                                            />
                                        </svg>
                                        Generar Informe
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mx-4 pb-3 flex flex-wrap">
                            <div className="hidden md:flex items-center text-sm font-medium text-gray-900 dark:text-white mr-4 mt-3">
                                Mostrar:
                            </div>
                            <div className="flex flex-wrap">
                                <div className="flex items-center mt-3 mr-4">
                                    <input
                                        id="inline-radio"
                                        type="radio"
                                        defaultValue=""
                                        name="inline-radio-group"
                                        className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="inline-radio"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Todo
                                    </label>
                                </div>
                                <div className="flex items-center mr-4 mt-3">
                                    <input
                                        id="inline-2-radio"
                                        type="radio"
                                        defaultValue=""
                                        name="inline-radio-group"
                                        className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="inline-2-radio"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Pagos completados
                                    </label>
                                </div>
                                <div className="flex items-center mr-4 mt-3">
                                    <input
                                        id="inline-3-radio"
                                        type="radio"
                                        defaultValue=""
                                        name="inline-radio-group"
                                        className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="inline-3-radio"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Pagos en progreso
                                    </label>
                                </div>
                                <div className="flex items-center mr-4 mt-3">
                                    <input
                                        id="inline-4-radio"
                                        type="radio"
                                        defaultValue=""
                                        name="inline-radio-group"
                                        className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="inline-4-radio"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Pagos denegados
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="p-4">
                                            <div className="flex items-center">
                                                <input
                                                    id="checkbox-all"
                                                    type="checkbox"
                                                    className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                                <label htmlFor="checkbox-all" className="sr-only">
                                                    checkbox
                                                </label>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-4 py-3 min-w-[14rem]">
                                            ID Transaccion
                                        </th>
                                        <th scope="col" className="px-4 py-3 min-w-[10rem]">
                                            Producto
                                            <svg
                                                className="h-4 w-4 ml-1 inline-block"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    clipRule="evenodd"
                                                    fillRule="evenodd"
                                                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                                />
                                            </svg>
                                        </th>
                                        <th scope="col" className="px-4 py-3 min-w-[7rem]">
                                            Tipo de pago
                                            <svg
                                                className="h-4 w-4 ml-1 inline-block"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    clipRule="evenodd"
                                                    fillRule="evenodd"
                                                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                                />
                                            </svg>
                                        </th>
                                        <th scope="col" className="px-4 py-3 min-w-[6rem]">
                                            Precio
                                            <svg
                                                className="h-4 w-4 ml-1 inline-block"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    clipRule="evenodd"
                                                    fillRule="evenodd"
                                                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                                />
                                            </svg>
                                        </th>
                                        <th scope="col" className="px-4 py-3 min-w-[7rem]">
                                            Estado
                                            <svg
                                                className="h-4 w-4 ml-1 inline-block"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    clipRule="evenodd"
                                                    fillRule="evenodd"
                                                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                                />
                                            </svg>
                                        </th>
                                        <th scope="col" className="px-4 py-3">
                                            <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <RegistroTransacciones transaction="1354324324" article="Combo 1" paytype="Efectivo" price={4000} status="Completada" />
                                    <RegistroTransacciones transaction="1354526343" article="Combo 8" paytype="Tarjeta" price={9000} status="En progreso" />
                                    <RegistroTransacciones transaction="1379354325" article="Combo 5" paytype="Tarjeta" price={6000} status="Completada" />
                                    <RegistroTransacciones transaction="1395323324" article="Postre" paytype="Efectivo" price={2000} status="Completada" />
                                    <RegistroTransacciones transaction="1336576264" article="Ensalada" paytype="Efectivo" price={1900} status="Completada" />
                                    <RegistroTransacciones transaction="1364724344" article="Combo 2" paytype="Tarjeta" price={3200} status="Denegada" />
                                </tbody>
                            </table>
                        </div>
                        <div
                            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 px-4 pt-3 pb-4"
                            aria-label="Table navigation"
                        >
                            <div className="text-xs flex items-center space-x-5">
                                <div>
                                    <div className="text-gray-500 dark:text-gray-400 mb-1">
                                        Precio de venta total
                                    </div>
                                    <div className="dark:text-white font-medium">$ 8,489,400</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button
                                    type="button"
                                    className="py-2 px-3 flex items-center text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Export CSV
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}