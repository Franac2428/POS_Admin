'use client'

import * as Dialog from '@radix-ui/react-dialog';
import { useState } from "react";
import { toast } from 'sonner';


const Nota = ({ actual, asistenciaId, onAsistencia }) => {
    const [observacion, setObservation] = useState("");

    const handleChange = (e) => {
        setObservation(e.target.value);
    };

    const handleEditar = async () => {
        try {
        const response = await fetch(`/api/marcar/${asistenciaId}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ observacion: observacion }),
        });

        if (response.ok) {
            toast.success('Nota registrada con éxito');
            setTimeout(() => {
            onAsistencia();
            });      
        } else {
            const errorData = await response.json();
            toast.error(`Error: ${errorData.message}`);
        }
        } catch (error) {
        toast.error('Error al registrar nota');
        }
        
        setObservation("");
    };

  return(
    <>
      <Dialog.Root>
    <Dialog.Trigger asChild>
    <button className="px-4 py-2 text-gray-900 dark:text-gray-200 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform bg-blue-600 bg-opacity-50 rounded-md">
        Realizar nota
     </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="text-gray-900 m-0 text-[17px] font-medium">
          Realizar Nota
        </Dialog.Title>
        <Dialog.Description className="text-gray-900 mt-[10px] mb-5 text-[15px] leading-normal">
          Notifica y registra cualquier observación o incidente ocurrido durante tus horas laborales
        </Dialog.Description>
        <fieldset className="mb-[15px] flex items-center gap-5">          
          <textarea
            value={observacion}
            onChange={handleChange}
            placeholder="Escribe aquí tu observación..."
            className="form-textarea block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            rows="3"
        ></textarea>
</fieldset>

        <div className="flex justify-end gap-[25px]">
            <Dialog.Close asChild>
                <button className="text-gray-700 bg-mauve4 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                    Cancelar
                </button>
            </Dialog.Close>
            <Dialog.Close asChild>
                <button onClick={handleEditar} className="text-white bg-green-500 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                    Sí, guardar nota
                </button>
            </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>

    </>
  );
};

export default Nota;
