"use client";

import Producto from "@/app/components/pos/crearProductoVenta";
import Caja from "@/app/components/pos/inicioCierreCaja";
import Cliente from "@/app/components/pos/nuevoCliente";
import Observaciones from "@/app/components/pos/observaciones";
import Pagar from "@/app/components/pos/pagar";
import SelectWithFilter from "@/app/components/pos/select";
import { Trash } from "lucide-react";
import { useRef, useState } from "react";
import CartaComida from "../../components/pos/cartaComida";

export default function App() {
  const clients = [
    { value: '1', label: 'Cliente General' },
    { value: '2', label: 'Francisco Araya' },
    { value: '3', label: 'Yaritza Macotelo' },
    { value: '4', label: 'Josué Bonilla' },
    { value: '5', label: 'Manfred Villegas' },
  ];

  const actualDate = new Date();

  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [rowsJson, setRowsJson] = useState([]);

  const handleAddRow = (nombre,precio) => {
    const newRow = {
      id: rows.length + 1,
      cantidad: 1,
      detalles: nombre,
      precio: precio
    };
    setRows([...rows, newRow]);
    setTotal(total + Number(newRow.precio * newRow.cantidad));
  };

  const handleDeleteRow = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
 
    const newTotal = updatedRows.reduce((acc, curr) => acc + (Number(curr.cantidad) * Number(curr.precio)), 0);
    const roundedTotal = Number(newTotal.toFixed(2));
    setTotal(roundedTotal);
  };
  

  const handleInputChange = (e, id, field) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, [field]: e.target.value } : row
    );
    setRows(updatedRows);
    if (field === 'cantidad' || field === 'precio') {
      const newTotal = updatedRows.reduce((acc, curr) => acc + (Number(curr.cantidad) * Number(curr.precio)), 0);
      setTotal(newTotal);
    }
  };
  
  const [open, setOpen] = useState(false);
  const[pagar,setPago] = useState(false);
  const fechaFactura = useRef(null);
  const totalFactura = useRef(null);
  
  const [observaciones, setObservaciones] = useState('');

  const[jsonFactura,setJsonFactura] = useState('');

  const [selectedClient, setSelectedClient] = useState(null);

  const[cliente,setCliente] = useState(false);

  const[prodVenta,setProdVenta] = useState(false);

  const[caja, setInfoCaja] = useState(false);

  

  const[jsonFact,setJsonFact] = useState(false);

  const handleChange = (selectedOption) => {
    setSelectedClient(selectedOption);
  };

  const handleObservacionesSubmit = (observaciones) => {
    setObservaciones(observaciones);
  };

  const handleJsonFactura = () => {
      
    const lineaDetalles = rows.map(row => ({
      Linea: row.id,
      Cantidad: row.cantidad,
      Descripcion: row.detalles,
      Precio: row.precio
    }));
      setRowsJson(prevRows => [...prevRows, ...lineaDetalles]);

      const facturaObj = {
        Consecutivo: "00001",
        FechaEmision: actualDate,
        Emisor:"Soda Santa Ana",
        NombreComercialEmisor:"Pollos Petote",
        Cliente: selectedClient ? selectedClient.label : 'Cliente General',
        Detalles: lineaDetalles,
        TotalFactura:total.toFixed(2),
        Observaciones: observaciones

    };

    setJsonFactura(JSON.parse(JSON.stringify(facturaObj)));
    console.log("Factura:" + JSON.parse(JSON.stringify(facturaObj)));
    console.log("Cliente: " + selectedClient ? selectedClient.label : 'Cliente General')


  };

  const handleCaja = (infoCaja) => {
    setInfoCaja(infoCaja)
  }

  function listaFacturas() {
    window.location.href = '/menu/listarFacturas';
  }














  return (
    <>
    <div className="dark:text-white min-h-screen">
      <div className="flex flex-col gap-5 w-full p-4">
        <section className="flex flex-col md:flex-row justify-between transition-all">
          <div className="col-span-1 lg:col-span-7 mx-auto">
            <div className="flex flex-col justify-around">
              <div className="flex flex-col mb-3">
                <h1 className="font-semibold pt-4 text-xl dark:text-gray-100">Menú</h1>
                <div className="mb-3">
                <button onClick={() => setInfoCaja(true)} type="button" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-900 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-200">
                  Info. Caja
                </button>   
                <button onClick={listaFacturas}  type="button" className=" ml-5 px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-900 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-200">
                  Ver Facturas
                </button> 
                <button onClick={() => setProdVenta(true)}  type="button" className=" ml-5 px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-900 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-200">
                  Agregar Producto
                </button>            
              </div>
                <div className="py-4 shadow-sm bg-white dark:bg-gray-700 rounded-md">
                  <ul className="flex justify-evenly items-center flex-wrap">
                    <li className="font-semibold border-2 border-custom-yellow rounded bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200 p-2">Todos</li>
                    <li className="font-semibold p-2 hover:bg-yellow-100 dark:hover:bg-yellow-800 border-2 border-transparent hover:cursor-pointer hover:border-custom-yellow rounded">Combos</li>
                    <li className="font-semibold p-2 hover:bg-yellow-100 dark:hover:bg-yellow-800 border-2 border-transparent hover:cursor-pointer hover:border-custom-yellow rounded">Bebidas</li>
                    <li className="font-semibold p-2 hover:bg-yellow-100 dark:hover:bg-yellow-800 border-2 border-transparent hover:cursor-pointer hover:border-custom-yellow rounded">Pollos</li>
                    <li className="font-semibold p-2 hover:bg-yellow-100 dark:hover:bg-yellow-800 border-2 border-transparent hover:cursor-pointer hover:border-custom-yellow rounded">Otros</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-2 items-stretch sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <CartaComida imgName={"frito"} nombre={"Pollo Frito"}  precio={1500} onClick={() => handleAddRow("Pollo Frito", 1500)} />
              <CartaComida imgName={"alitas"} nombre={"Alitas"}  precio={3700} onClick={() => handleAddRow("Alitas", 3700)}/>
              <CartaComida imgName={"vaso"} nombre={"Refresco"}  precio={1250} onClick={() => handleAddRow("Refresco", 1250)}/>
              <CartaComida imgName={"hamb"} nombre={"Hamburguesa"}  precio={3500} onClick={() => handleAddRow("Hamburguesa", 3500)}/>
              <CartaComida imgName={"express"} nombre={"Servicio Express"}  precio={1000} onClick={() => handleAddRow("Servicio Express", 1000)}/>

            </div>

            </div>
          </div>
          <div className="col-span-1 w-96 flex flex-col h-full rounded-xl shadow-sm bg-white dark:bg-gray-700 mt-11 ml-4">
            <div className="flex flex-col">
              <h2 className="font-semibold pt-4 pl-4 text-lg dark:text-gray-100">Orden actual</h2>
              <div>
                <h2 ref={fechaFactura} className="font-semibold pt-4 pl-4" style={{ fontSize: "18px" }}>Fecha: {actualDate.toLocaleDateString()}</h2>
              </div>

              <div className="mt-1 flex-row">
                  <div className="lg:w-11/12 w-11 ml-5 mr-4"> 
                    <label className="block mb-1 ml-1 text-md font-medium text-gray-900 dark:text-gray-100 ">Cliente:</label>
                    <SelectWithFilter
                      options={clients}
                      selectedValue={selectedClient}
                      onChange={handleChange}
                    />
                    <a onClick={() => setCliente(true)} className="block m-2 text-blue-500 underline text-sm">Agregar Nuevo Cliente</a>                  
                  </div>
                </div>
                
                  <table className="w-full border-collapse table-auto">
                  <thead>
                  <tr className="bg-gray-200">
                  <th className="px-3 py-3 text-left text-sm font-medium text-black uppercase w-10 dark:bg-gray-700 dark:text-white">Cant.</th>
                  <th className="px-5 py-3 text-left text-sm font-medium text-black uppercase w-20 dark:bg-gray-700 dark:text-white">Detalles</th>
                  <th className="px-15 py-3 text-left text-sm font-medium text-black uppercase w-5 dark:bg-gray-700 dark:text-white">Precio</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase dark:bg-gray-700 dark:text-white">-</th>
                  </tr>
                  </thead>
                  <tbody>
                  {rows.map((row) => (
                  <tr key={row.id}>
                  <td className="px-2 py-4 whitespace-nowrap">
                  <input
                  type="text"
                  value={row.cantidad}
                  onChange={(e) => handleInputChange(e, row.id, 'cantidad')}
                  className="dark:bg-gray-900 dark:text-white border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-10 p-1"
                  />
                  </td>
                  <td className="py-4 whitespace-nowrap">
                  <input
                  type="text"
                  value={row.detalles}
                  onChange={(e) => handleInputChange(e, row.id, 'detalles')}
                  className="dark:bg-gray-900 dark:text-white border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-35 p-1"
                  />
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                  <input
                  type="text"
                  value={row.precio}
                  onChange={(e) => handleInputChange(e, row.id, 'precio')}
                  className="dark:bg-gray-900 dark:text-white border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-16 p-1"
                  />
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                  <button onClick={() => handleDeleteRow(row.id)} className="p-1.5 text-gray-900 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform bg-red-600 bg-opacity-50 rounded-md"><Trash size={15} strokeWidth={2.2} /> </button>
                  </td>
                  </tr>
                  ))}
                  </tbody>
                  </table>





            </div>
            <div className="flex flex-col h-full justify-between">

              <div className="dark:bg-gray-700 rounded-b-xl">
                <div className="px-8 pt-8">
  
                  <div className="flex justify-between pb-3 dark:text-gray-100">
                    <h3 className="font-semibold">Total:</h3>
                    <p ref={totalFactura} className="font-semibold"><span>₡</span> {Number(total.toFixed(2))}</p>
                  </div>

                </div>

                <div className='flex flex-col pb-8 mt-4 px-12'>
                <button onClick={() => { handleJsonFactura(); setPago(true); }} type="button" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-900 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-200">
                  Confirmar Pago
                </button> 

                <button onClick={() => setOpen(true)} type="button" className="mt-5 px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-900 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-200">
                  Observaciones
                </button>               
              
              </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Cliente open={cliente} onClose={() => setCliente(false)}/>

    <Observaciones 
        open={open} 
        onClose={() => setOpen(false)} 
        onObservacionesSubmit={handleObservacionesSubmit} 
      />
    
    <Pagar open={pagar} onClose={() => setPago(false)} montoTotal={total} facturaObj={jsonFactura}/>

    <Producto open={prodVenta} onClose={() => setProdVenta(false)}/>
    
    <Caja 
        open={caja} 
        onClose={() => setInfoCaja(false)}
        setInfoCaja={handleCaja}/>

    </>
  );
  
}
