
export default function UsuariosLista({ name, role, status, contact, schedule, lastlogin }) {
    return (
        <>
            <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="w-4 px-4 py-3">
                    <div className="flex items-center">
                        <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            onclick="event.stopPropagation()"
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">
                            checkbox
                        </label>
                    </div>
                </td>
                <th
                    scope="row"
                    className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    <div className="flex items-center">
                        <img
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png"
                            alt="iMac Front Image"
                            className="w-auto h-8 mr-3 rounded-full"
                        />
                        {name}
                    </div>
                </th>
                <td className="px-4 py-2">
                    <div className="inline-flex items-center bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5 mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                            />
                        </svg>
                        {role}
                    </div>
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center">
                        <div className={`w-3 h-3 mr-2 ${status === 'Activo' ? 'bg-green-500' : 'bg-red-500'} border rounded-full`} />
                        {status}
                    </div>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                    <div className="flex items-center space-x-1.5">
                        <a
                            className="transition hover:text-gray-900 dark:hover:text-white"
                            href="#"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={13}
                                height={12}
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M12.188 6.203c0-.375-.047-.656-.094-.96H6.563v1.991h3.28c-.116.868-.984 2.508-3.28 2.508-1.993 0-3.61-1.64-3.61-3.68 0-3.257 3.844-4.757 5.906-2.765l1.594-1.524A5.637 5.637 0 0 0 6.563.25 5.797 5.797 0 0 0 .75 6.063a5.782 5.782 0 0 0 5.813 5.812c3.351 0 5.625-2.344 5.625-5.672Z" />
                            </svg>
                        </a>
                    </div>
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 mr-1 text-green-500"
                            aria-hidden="true"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            />
                        </svg>
                        {schedule}

                    </div>
                </td>
                <td className="px-4 py-2">{lastlogin}</td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <button
                        id="dropdown-button-0"
                        type="button"
                        data-dropdown-toggle="dropdown-0"
                        className="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                    >
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                    </button>
                    <div
                        id="dropdown-0"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                    >
                        <ul
                            className="py-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdown-button-0"
                        >
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Show
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Edit
                                </a>
                            </li>
                        </ul>
                        <div className="py-1">
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                                Delete
                            </a>
                        </div>
                    </div>
                </td>
            </tr>
        </>
    )
}