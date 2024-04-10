
import HorariosLista from "./horariosList"

export default function HorariosList() {
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Horarios
                        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                            Horarios semanales, puedes asignar la hora de inicio y hora final de la jornada
                            o bien puedes hasta marcar la fecha de un feriado durante la semana.
                        </p>
                    </caption>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Dias
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Hora Entrada
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Hora Salida
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fecha Importante
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Estado
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <HorariosLista days = "Lunes" entryhours= "9:00" exithours= "20:00" importDate="Vacio" status = "Laboral" />
                        <HorariosLista days = "Martes" entryhours= "9:00" exithours= "20:00" importDate="25/04/2024" status = "No Laboral" />
                        <HorariosLista days = "Miercoles" entryhours= "9:00" exithours= "20:00" importDate="Vacio" status = "Laboral" />
                        <HorariosLista days = "Jueves" entryhours= "9:00" exithours= "20:00" importDate="Vacio" status = "Laboral" />
                        <HorariosLista days = "Viernes" entryhours= "9:00" exithours= "20:00" importDate="Vacio" status = "Laboral" />
                        <HorariosLista days = "Sabado" entryhours= "9:00" exithours= "20:00" importDate="Vacio" status = "Laboral" />
                        <HorariosLista days = "Domingo" entryhours= "9:00" exithours= "20:00" importDate="Vacio" status = "Laboral" />
                    </tbody>
                </table>
            </div>

        </>
    )
}