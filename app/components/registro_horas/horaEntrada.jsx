import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { Toaster, toast } from 'sonner';

const Entrada = ({ actual, usuarioId, onAsistencia }) => {
    const fecha = new Date();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); 
    const dia = String(fecha.getDate()).padStart(2, '0'); 
    const ano = fecha.getFullYear();
    const millis = fecha.getMilliseconds();
    const fechaLocal = `${ano}-${mes}-${dia}T${actual}.${millis}Z`;
    const horaCero ="00:00:00.000";
    const fechaHoy = `${ano}-${mes}-${dia}T${horaCero}Z`;

    if (!usuarioId) {
        console.error("El ID del usuario no está disponible en la sesión");
        return null;
    }

    const handleAgregar = async () => {
        const asistencia = {
            empleadoId: usuarioId,
            entrada: fechaLocal,
            fecha : fechaHoy,
        };
        try {
            const res = await fetch(`/api/marcar`, {
                method: 'POST',
                body: JSON.stringify(asistencia),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (res.ok) {
                toast.success('Hora de entrada guardada con éxito');
                setTimeout(() => {
                  onAsistencia();
                });
            } else {
                const errorData = await res.json();
                toast.error(`Ya has marcado entrada para el día de hoy`);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            toast.error('Error en la solicitud');
        }
    };

    return (
        <>
            <AlertDialog.Root>
                <AlertDialog.Trigger asChild>
                    <button className="px-4 py-2 text-gray-900 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md">
                        Marcar entrada
                    </button>
                </AlertDialog.Trigger>
                <AlertDialog.Portal>
                    <AlertDialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
                    <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                        <AlertDialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                            ¿Está seguro?
                        </AlertDialog.Title>
                        <AlertDialog.Description className="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
                            Realizar esta acción guarda tu hora de entrada a las {actual}
                        </AlertDialog.Description>
                        <div className="flex justify-end gap-[25px]">
                            <AlertDialog.Cancel asChild>
                                <button className="text-gray-700 bg-mauve4 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                                    Cancelar
                                </button>
                            </AlertDialog.Cancel>
                            <AlertDialog.Action asChild>
                                <button onClick={handleAgregar} className="text-white bg-green-500 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                                    Sí, marcar entrada
                                </button>
                            </AlertDialog.Action>
                        </div>
                    </AlertDialog.Content>
                </AlertDialog.Portal>
            </AlertDialog.Root>
            <Toaster richColors />
        </>
    );
};

export default Entrada;
