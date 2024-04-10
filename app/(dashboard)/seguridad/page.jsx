
import UsuariosLista from "../../components/seguridad/usuariosList";

export default function SeguridadGeneral() {
    return (
        <>

            <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
                <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
                </div>
                <main className="bg-gray-50 dark:bg-gray-900 p-4 md:ml-64 lg:mr-16 min-h-full pt-20">
                    <div className="flex items-center grid grid-cols-3 md:grip-cols-3 gap-4 mb-4"></div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-160 mb-4 flex flex-col">
                        <div className="overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                            <div className="px-4 divide-y dark:divide-gray-700">
                                <div className="flex flex-col py-3 space-y-3 md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-4">
                                    <div className="flex items-center flex-1 space-x-4">
                                        <h5>
                                            <span className="text-gray-500">All Users:</span>
                                            <span className="dark:text-white">14</span>
                                        </h5>
                                    </div>
                                    <div className="flex flex-col items-start flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                                        <button
                                            type="button"
                                            className="inline-flex items-center justify-center flex-shrink-0 px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-4 h-4 mr-2"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                                                />
                                            </svg>
                                            Table settings
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col items-stretch justify-between py-4 space-y-3 md:flex-row md:items-center md:space-y-0">
                                    <button
                                        type="button"
                                        className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                    >
                                        <svg
                                            className="h-3.5 w-3.5 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                        >
                                            <path
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                            />
                                        </svg>
                                        Agregar
                                    </button>
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
                                                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label htmlFor="checkbox-all" className="sr-only">
                                                        checkbox
                                                    </label>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-4 py-3">
                                                Usuario
                                            </th>
                                            <th scope="col" className="px-4 py-3">
                                                Rol del usuario
                                            </th>
                                            <th scope="col" className="px-4 py-3">
                                                Estado
                                            </th>
                                            <th scope="col" className="px-4 py-3">
                                                Contacto
                                            </th>
                                            <th scope="col" className="px-4 py-3">
                                                Horario
                                            </th>
                                            <th scope="col" className="px-4 py-3 whitespace-nowrap">
                                                Ultimo Inicio
                                            </th>
                                            <th scope="col" className="px-4 py-3">
                                                <span className="sr-only">Actions</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <UsuariosLista name="Jose Morales" role="Founder" status="Activo" schedule="11:00/21:00" lastlogin="29 May 2024" />
                                        <UsuariosLista name="Cristian Sandi" role="Caja" status="Inactivo" schedule="17:00/21:00" lastlogin="28 May 2024" />
                                        <UsuariosLista name="Esteban Mora" role="Cocina" status="Activo" schedule="11:00/21:00" lastlogin="29 May 2024" />
                                        <UsuariosLista name="Esteban Mora" role="Cocina" status="Activo" schedule="11:00/21:00" lastlogin="29 May 2024" />
                                        <UsuariosLista name="Esteban Mora" role="Cocina" status="Activo" schedule="11:00/21:00" lastlogin="29 May 2024" />
                                        <UsuariosLista name="Esteban Mora" role="Cocina" status="Activo" schedule="11:00/21:00" lastlogin="29 May 2024" />
                                        <UsuariosLista name="Esteban Mora" role="Cocina" status="Activo" schedule="11:00/21:00" lastlogin="29 May 2024" />
                                        <UsuariosLista name="Esteban Mora" role="Cocina" status="Activo" schedule="11:00/21:00" lastlogin="29 May 2024" />
                                    </tbody>
                                </table>
                            </div>
                            <nav
                                className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
                                aria-label="Table navigation"
                            >
                                <div className="flex items-center space-x-3">
                                    <label
                                        htmlFor="rows"
                                        className="text-xs font-normal text-gray-500 dark:text-gray-400"
                                    >
                                        Rows per page
                                    </label>
                                    <select
                                        id="rows"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block py-1.5 pl-3.5 pr-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    >
                                        <option selected="" value={10}>
                                            10
                                        </option>
                                        <option value={25}>25</option>
                                        <option value={50}>50</option>
                                        <option value={100}>100</option>
                                    </select>
                                    <div className="text-xs font-normal text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold text-gray-900 dark:text-white">
                                            1-10
                                        </span>
                                        of
                                        <span className="font-semibold text-gray-900 dark:text-white">
                                            100
                                        </span>
                                    </div>
                                </div>
                                <ul className="inline-flex items-stretch -space-x-px">
                                    <li>
                                        <a
                                            href="#"
                                            className="flex text-sm w-20 items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            Anterior
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex text-sm w-20 items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            Siguiente
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-48 lg:h-72"></div>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-48 lg:h-72"></div>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-48 lg:h-72"></div>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-48 lg:h-72"></div>
                    </div>
                    {/*                   <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-96 mb-4"></div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-48 lg:h-72"></div>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-48 lg:h-72"></div>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-48 lg:h-72"></div>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-48 lg:h-72"></div>
                    </div> */}
                </main>
            </section>
        </>
    )
}