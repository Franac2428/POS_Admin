import {  SlidersHorizontal,FileUp, CirclePlus,Pencil,Eye,Trash } from "lucide-react";
import Buscador from "../components/buscador";

export default function inventario() {
  return (
    <>
    
    <div className="w-full ">  
        <div className="grid grid-cols-10 gap-4 max-w-7xl mx-auto">

          <h1 className="font-semibold col-span-10 pt-4" style={{ fontSize: "28px" }}>Inventario</h1>                
          <div className="col-span-3 flex ">
          <Buscador/>       

          </div>
          <div className="col-start-8 col-span-3 ">
            <div className="flex justify-end gap-6">
              <button className=" shadow-sm bg-white px-3 py-1 rounded-md"><SlidersHorizontal/></button>

                <div className="flex gap-4 shadow-sm text-white font-semibold bg-verde px-4 py-1 rounded-md relative flex-1">
                  
                    <CirclePlus className="text-white-800"/>
                    <button className="">Agregar</button>
                </div>
                <div className="flex gap-4 shadow-sm text-verde font-semibold bg-white px-4 py-1  border-verde border-2 rounded-md relative flex-1">
                  <FileUp className=" text-white-800"/>
                    <button className="">Exportar</button>            
                </div>
            </div>

          </div>
          <div className="shadow-sm col-span-10  bg-white px-3 py-2 rounded-md">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-gray-600 text-sm front-semibold">  Id </th>
                  <th className="text-sm text-gray-600 front-semibold">Nombre</th>
                  <th className="text-sm text-gray-600 front-semibold"> Estado</th>
                  <th className="text-sm text-gray-600 front-semibold"> Proveedor</th>
                  <th className="text-sm text-gray-600 front-semibold">  Cantidad   </th>
                  <th className="text-sm text-gray-600 front-semibold"> Fecha ingreso  </th>
                  <th className="text-sm text-gray-600 front-semibold">  Categoría   </th>
                  <th className="text-sm text-gray-600 front-semibold"> Acciones  </th>


                </tr>
              </thead>
              <tbody className="">
                <tr className="">
                <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                    <a href="#" className="font-bold text-blue-700 hover:underline">10001</a>
                  </td>
                  <td className=" text-center text-sm text-gray-900 whitespace-nowrap">Kring New Fit office chair, mesh + PU, black</td>
                  <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-yellow-200 rounded-lg bg-opacity-50">Por caducar</span>
                  </td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Coca Cola</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">1000</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">16/10/2021</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Bebidas</td>
                  <td className=" flex gap-1 justify-evenly my-1 whitespace-nowrap">
                    <div className="p-1.5 text-gray-900  bg-blue-600 bg-opacity-50 rounded-md "><Pencil size={15}  strokeWidth={2.2}/></div>
                    <div className="p-1.5 text-gray-900  bg-red-600 bg-opacity-50 rounded-md "><Trash size={15} strokeWidth={2.2} /> </div>
                  </td>
                </tr>
                <tr className="">
                <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                    <a href="#" className="font-bold text-blue-700 hover:underline">10002</a>
                  </td>
                  <td className=" text-center text-sm text-gray-900 whitespace-nowrap">Kring New Fit office chair, mesh + PU, black</td>
                  <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-green-200 rounded-lg bg-opacity-50">Fresco</span>
                  </td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Q&T SA</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">299</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">16/10/2021</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Verduras</td>
                  <td className=" flex gap-1 justify-evenly my-1 whitespace-nowrap">
                    <div className="p-1.5 text-gray-900  bg-blue-600 bg-opacity-50 rounded-md "><Pencil size={15}  strokeWidth={2.2}/></div>
                    <div className="p-1.5 text-gray-900  bg-red-600 bg-opacity-50 rounded-md "><Trash size={15} strokeWidth={2.2} /> </div>
                  </td>
                </tr>
                <tr className="">
                <td className=" text-center text-sm text-gray-700 whitespace-nowrap">
                    <a href="#" className="font-bold text-blue-700 hover:underline">10003</a>
                  </td>
                  <td className=" text-center text-sm text-gray-700 whitespace-nowrap">Kring New Fit office chair, mesh + PU, black</td>
                  <td className=" text-center text-sm text-gray-700 whitespace-nowrap">
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-red-200 rounded-lg bg-opacity-50">Caducado</span>
                  </td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Caenicería Juan</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">10</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">16/10/2021</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Carnes</td>
                  <td className=" flex gap-1 justify-evenly my-1 whitespace-nowrap">
                    <div className="p-1.5 text-gray-900  bg-blue-600 bg-opacity-50 rounded-md "><Pencil size={15}  strokeWidth={2.2}/></div>
                    <div className="p-1.5 text-gray-900  bg-red-600 bg-opacity-50 rounded-md "><Trash size={15} strokeWidth={2.2} /> </div>
                  </td>
                </tr>
                <tr className="">
                <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                    <a href="#" className="font-bold text-blue-700 hover:underline">10004</a>
                  </td>
                  <td className=" text-center text-sm text-gray-900 whitespace-nowrap">Kring New Fit office chair, mesh + PU, black</td>
                  <td className=" text-center text-sm text-gray-900 whitespace-nowrap">
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-blue-200 rounded-lg bg-opacity-50">Vigente</span>
                  </td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Pipasa</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">394</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">16/10/2021</td>
                  <td className="p-3 text-center text-sm text-gray-900 whitespace-nowrap">Pollos</td>
                  <td className=" flex gap-1 justify-evenly my-1 whitespace-nowrap">
                    <div className="p-1.5 text-gray-900  bg-blue-600 bg-opacity-50 rounded-md "><Pencil size={15}  strokeWidth={2.2}/></div>
                    <div className="p-1.5 text-gray-900  bg-red-600 bg-opacity-50 rounded-md "><Trash size={15} strokeWidth={2.2} /> </div>
                  </td>
                </tr>
                
                
              </tbody>


            </table>
          </div>


        </div>
          

        
         
      </div>
    </>
  );
}

