'use client';
import { useForm } from "react-hook-form";
import { Toaster, toast } from 'sonner';

export default function AddHorario({ open, onClose, mutate }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleAgregar = handleSubmit(async (data) => {
        try {
            const res = await fetch(`http://localhost:3000/api/horario`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (res.ok) {
                const newHorario = await res.json();
                toast.success('Nuevo horario guardado con éxito');
                setTimeout(() => {
                    reset(); // Limpia el formulario después de guardar
                    onClose();
                    mutate();
                }, 500);
            } else {
                const errorData = await res.json();
                toast.error(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            toast.error('Error en la solicitud');
        }
    });

    return (
        <>
            <div
                id="createHorariodefaultModal"
                tabIndex={-1}
                aria-hidden="true"
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
            >
                <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    {/* Modal content */}
                    <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        {/* Modal header */}
                        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Agregar nuevo horario
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-toggle="createHorariodefaultModal"
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
                        {/* Modal body */}
                        <form onSubmit={handleAgregar}>
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="Dia"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Día de la semana
                                    </label>
                                    <select
                                        id="Dia"
                                        name="Dia"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        {...register("Dia", { required: true })}
                                        required
                                    >
                                        <option value="">Selecciona un día</option>
                                        <option value="Lunes">Lunes</option>
                                        <option value="Martes">Martes</option>
                                        <option value="Miércoles">Miércoles</option>
                                        <option value="Jueves">Jueves</option>
                                        <option value="Viernes">Viernes</option>
                                        <option value="Sábado">Sábado</option>
                                        <option value="Domingo">Domingo</option>
                                    </select>
                                    {errors.Dia && <span className="text-sm text-red-600">Campo requerido</span>}
                                </div>
                                <div>
                                    <label
                                        htmlFor="HoraInicio"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Hora de inicio
                                    </label>
                                    <input
                                        type="time"
                                        name="HoraInicio"
                                        id="HoraInicio"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        {...register("HoraInicio", { required: true })}
                                        required
                                    />
                                    {errors.HoraInicio && <span className="text-sm text-red-600">Campo requerido</span>}
                                </div>
                                <div>
                                    <label
                                        htmlFor="HoraFin"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Hora de fin
                                    </label>
                                    <input
                                        type="time"
                                        name="HoraFin"
                                        id="HoraFin"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        {...register("HoraFin", { required: true })}
                                        required
                                    />
                                    {errors.HoraFin && <span className="text-sm text-red-600">Campo requerido</span>}
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="bg-primary-600 text-white rounded-lg px-4 py-2 transition duration-300 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 bg-gray-700 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-80"
                                    >
                                        Guardar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Toaster richColors />
            </div>
        </>
    );
}
