'use client';
export default function AddUser() {
    return (
        <>
            <>
                {/* Main modal */}
                <div
                    id="addUserModal"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
                >
                    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                        {/* Modal content */}
                        <form
                            action="#"
                            className="relative bg-white rounded-lg shadow dark:bg-gray-800"
                        >
                            {/* Modal header */}
                            <div className="flex justify-between items-center py-4 px-4 rounded-t sm:px-5">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Administrator Usuario
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-toggle="addUserModal"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div id="accordion-collapse" data-accordion="collapse">
                                <h2 id="accordion-collapse-heading-1">
                                    <button
                                        type="button"
                                        className="flex justify-between items-center py-4 px-4 w-full font-medium leading-none text-left text-gray-900 bg-gray-50 sm:px-5 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                                        data-accordion-target="#accordion-collapse-body-1"
                                        aria-expanded="true"
                                        aria-controls="accordion-collapse-body-1"
                                    >
                                        <span>Informacion General</span>
                                        <svg
                                            data-accordion-icon=""
                                            className="w-6 h-6 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id="accordion-collapse-body-1"
                                    className=""
                                    aria-labelledby="accordion-collapse-heading-1"
                                >
                                    <div className="p-4 border-gray-200 sm:p-5 dark:border-gray-700">
                                        {/* Inputs */}
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div className="sm:col-span-2">
                                                <label
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    htmlFor="file_input"
                                                >
                                                    Subir imagen
                                                </label>
                                                <div className="items-center w-full sm:flex">
                                                    <img
                                                        className="mb-4 w-20 h-20 rounded-full sm:mr-4 sm:mb-0"
                                                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                                                        alt="Helene avatar"
                                                    />
                                                    <div className="w-full">
                                                        <input
                                                            className="w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                            aria-describedby="file_input_help"
                                                            id="file_input"
                                                            type="file"
                                                        />
                                                        <p
                                                            className="mt-1 mb-3 text-xs font-normal text-gray-500 dark:text-gray-300"
                                                            id="file_input_help"
                                                        >
                                                            SVG, PNG, JPG or GIF (MAX. 800x400px).
                                                        </p>
                                                        <div className="flex items-center space-x-2.5">
                                                            <button
                                                                type="button"
                                                                className="inline-flex items-center py-2 px-3 text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                                            >
                                                                <svg
                                                                    className="mr-1 -ml-1 w-4 h-4"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                Subir nueva imagen
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="py-2 px-3 text-xs font-medium text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                                            >
                                                                Borrar
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="first-name"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    Nombre
                                                </label>
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    defaultValue="Jose"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    placeholder="nombre"
                                                    required=""
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="last-name"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    Apellido
                                                </label>
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    defaultValue="Morales"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    placeholder="Apellido"
                                                    required=""
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="account"
                                                    className="inline-flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    Horario
                                                    <button
                                                        type="button"
                                                        data-tooltip-target="tooltip-account"
                                                        data-tooltip-style="dark"
                                                        className="ml-1"
                                                    >
                                                        <svg
                                                            aria-hidden="true"
                                                            className="w-4 h-4 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                        <span className="sr-only">Account details</span>
                                                    </button>
                                                    <div
                                                        id="tooltip-account"
                                                        role="tooltip"
                                                        className="inline-block absolute invisible z-10 py-2 px-3 max-w-sm text-xs font-normal text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                                                    >
                                                        Choose here your account type.
                                                        <div className="tooltip-arrow" data-popper-arrow="" />
                                                    </div>
                                                </label>
                                                <select
                                                    id="account"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                >
                                                    <option selected="">Libre</option>
                                                    <option value="LN">Lunes</option>
                                                    <option value="MT">Martes</option>
                                                    <option value="MC">Miercoles</option>
                                                    <option value="JV">Jueves</option>
                                                    <option value="VN">Viernes</option>
                                                    <option value="SD">Sabado</option>
                                                    <option value="DG">Domingo</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    defaultValue="josemorales@gmail.com"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    placeholder="ejemplo@gmail.com"
                                                    required=""
                                                />
                                            </div>
                                            
                                            <div className="sm:col-span-2">
                                                <label
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    htmlFor="role"
                                                >
                                                    Asignar Rol
                                                </label>
                                                <div className="flex space-x-4">
                                                    <div className="flex items-center">
                                                        <input
                                                            id="inline-checkbox"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            name="role"
                                                            className="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        />
                                                        <label
                                                            htmlFor="inline-checkbox"
                                                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                        >
                                                            Jefe
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input
                                                            id="inline-2-checkbox"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            name="role"
                                                            className="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        />
                                                        <label
                                                            htmlFor="inline-2-checkbox"
                                                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                        >
                                                            Cocina
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input
                                                            defaultChecked=""
                                                            id="inline-checked-checkbox"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            name="role"
                                                            className="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        />
                                                        <label
                                                            htmlFor="inline-checked-checkbox"
                                                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                        >
                                                            Caja
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input
                                                            defaultChecked=""
                                                            id="inline-checked-checkbox"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            name="role"
                                                            className="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        />
                                                        <label
                                                            htmlFor="inline-checked-checkbox"
                                                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                        >
                                                            Express
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    Estado
                                                </div>
                                                <label
                                                    htmlFor="status"
                                                    className="inline-flex relative items-center cursor-pointer"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="status"
                                                        className="sr-only peer"
                                                    />
                                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600" />
                                                    <span className="ml-3 text-sm font-medium text-gray-500 dark:text-gray-300">
                                                        Inactivo
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                            <div className="flex items-center py-4 px-4 space-x-4 sm:py-5 sm:px-5">
                                <button
                                    type="button"
                                    className="text-green-600 inline-flex items-center hover:text-white border border-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-900"
                                >
                                    Agregar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>

        </>
    )
}