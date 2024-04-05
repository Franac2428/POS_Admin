import { X } from "lucide-react";
import {Toaster, toast} from 'sonner'

export default function Eliminar({ open, onClose }) {
  const handleEliminar = () => {
    toast.success('Acción realizada con éxito');
    setTimeout(() => {
      onClose(); 
    }, 1500);
  };

  return (    
    <div onClick={onClose} className={`fixed inset-0  justify-center items-center grid grid-cols-8 transition-opacity
        ${open ? "visible bg-black bg-opacity-20" : "invisible"}
        `}>
            <div onClick={(e) => e.stopPropagation()} className={` bg-white rounded-xl shadow p-6 transition-all col-span-4 col-start-3
                ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600">
                    <X /></button>
                    <div className="w-full">
            <div className="mx-5 my-4 w-full">
              <h2 className="text-lg font-bold text-gray-900">Confirmar eliminación</h2>
              <hr className="my-3 mr-7 py-0.2 border border-black"></hr>
              <p className="text-md text-gray-800">
                ¿Seguro que desea eliminar este producto?
              </p>
            </div>
            <div className="mx-5 my-4 w-full">
                <div className="flex gap-2">
                <p className="text-gray-800 text-md font-bold">  Id: </p>
                <p className="text-gray-800 text-md"> 10001 </p>
                </div>
                <div className="flex gap-2">
                <p className="text-md text-gray-800 font-bold">Nombre:</p>
                <p className="text-gray-800 text-md"> Cebolla </p>

                </div>
                <div className="flex gap-2">
                <p className="text-md text-gray-800 font-bold">Descrición:</p>
                <p className="text-gray-800 text-md"> Cebolla blanca grande, proviene de Cartago y se utiliza solamente para ensaladas </p>

                </div>
                <div className="flex gap-2">
                <p className="text-md text-gray-800 font-bold"> Estado:</p>
                <p className="text-gray-800 text-md"> Vigente </p>

                </div>
                <div className="flex gap-2">
                <p className="text-md text-gray-800 font-bold"> Proveedor:</p>
                <p className="text-gray-800 text-md"> Juanito Mora </p>

                </div>
                <div className="flex gap-2">
                <p className="text-md text-gray-800 font-bold">  Cantidad:  </p>
                <p className="text-gray-800 text-md"> 10 </p>

                </div>
                <div className="flex gap-2">
                <p className="text-md text-gray-800 font-bold"> Fecha ingreso:  </p>
                <p className="text-gray-800 text-md"> 29/01/2024 </p>

                </div>
                <div className="flex gap-2">
                <p className="text-md text-gray-800 font-bold">  Categoría:   </p>
                <p className="text-gray-800 text-md"> Verdura </p>

                </div>
                <div className="flex gap-2">
                <p className="text-md text-gray-800 font-bold">  Categoría:   </p>
                <p className="text-gray-800 text-md"> Verdura </p>

                </div>
            </div>
            <div className="flex justify-end gap-4 ">
              <button className="bg-red-600 font-semibold rounded-md py-2 px-6 text-white" onClick={handleEliminar}>Eliminar
              </button>
              <button
                className="bg-gray-400 font-semibold   rounded-md py-2 px-6"
                onClick={onClose}
              >
                Cancelar
              </button>
            </div>
          </div>
          </div>   
          <Toaster richColors/>
         
  </div>
);
}