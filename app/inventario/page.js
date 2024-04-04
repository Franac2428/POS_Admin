import {  SlidersHorizontal,FileUp, CirclePlus } from "lucide-react";
import Buscador from "../components/buscador";

export default function inventario() {
  return (
    <>
    
    <div className="w-full ">  
        <div className="grid grid-cols-7 gap-4 max-w-7xl mx-auto">

          <h1 className="font-semibold col-span-7 pt-4" style={{ fontSize: "28px" }}>Inventario</h1>                
          <div className="col-span-2 flex ">
          <Buscador/>       

          </div>
          <div className="col-end-7 col-span-2 flex gap-10">
            <button className=" shadow-sm bg-white px-3 py-2 rounded-md"><SlidersHorizontal/></button>

              <div className="flex gap-4 shadow-sm text-white font-semibold bg-verde px-6 py-2 rounded-md relative flex-1">
                
                  <CirclePlus className="text-white-800"/>
                  <button className="">Agregar</button>
              </div>
              <div className="flex gap-4 shadow-sm text-verde font-semibold bg-white px-6 py-2  border-verde border-2 rounded-md relative flex-1">
                <FileUp className=" text-white-800"/>
                  <button className="">Exportar</button>            
              </div>

          </div>
          <div className="shadow-sm col-span-7  bg-white px-3 py-2 rounded-md">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-gray-600 text-sm front-semibold">  Id </th>
                  <th className="text-sm text-gray-600 front-semibold">Nombre</th>
                  <th className="text-sm text-gray-600 front-semibold"> Estado</th>
                  <th className="text-sm text-gray-600 front-semibold"> Proveedor</th>
                  <th className="text-sm text-gray-600 front-semibold">  Cantidad   </th>
                  <th className="text-sm text-gray-600 front-semibold">  Categoría   </th>
                  <th className="text-sm text-gray-600 front-semibold"> Fecha ingreso  </th>
                  <th className="text-sm text-gray-600 front-semibold"> Acciones  </th>


                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                <td className=" text-center text-sm text-gray-700 whitespace-nowrap">
                    <a href="#" className="font-bold text-blue-500 hover:underline">10001</a>
                  </td>
                  <td className=" text-center text-sm text-gray-700 whitespace-nowrap">  Kring New Fit office chair, mesh + PU, black   </td>
                  <td className=" text-center text-sm text-gray-700 whitespace-nowrap">
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Delivered</span>
                  </td>
                  <td className="p-3 text-center text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
                  <td className="p-3 text-center text-sm text-gray-700 whitespace-nowrap">$200.00</td>
                </tr>
                <tr className="bg-gray-50">
                <td className=" text-center text-sm text-gray-700 whitespace-nowrap">
                    <a href="#" className="font-bold text-blue-500 hover:underline">10002</a>
                  </td>
                  <td className=" text-center text-sm text-gray-700 whitespace-nowrap">  Kring New Fit office chair, mesh + PU, black   </td>
                  <td className=" text-center text-sm text-gray-700 whitespace-nowrap">
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Shipped</span>
                  </td>
                  <td className="p-3 text-center text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
                  <td className="p-3 text-center text-sm text-gray-700 whitespace-nowrap">$200.00</td>
                </tr>
                <tr className="bg-white">
                <td className=" text-center text-sm text-gray-700 whitespace-nowrap">
                    <a href="#" className="font-bold text-blue-500 hover:underline">10002</a>
                  </td>
                  <td className=" text-center text-sm text-gray-700 whitespace-nowrap">  Kring New Fit office chair, mesh + PU, black   </td>
                  <td className=" text-center text-sm text-gray-700 whitespace-nowrap">
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">Cancelled</span>
                  </td>
                  <td className="p-3 text-center text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
                  <td className="p-3 text-center text-sm text-gray-700 whitespace-nowrap">$200.00</td>
                </tr>
              </tbody>


            </table>
          </div>


        </div>
          

        
         
      </div>
    </>
  );
}

