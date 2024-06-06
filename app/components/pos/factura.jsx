import { X } from "lucide-react";
import { useState } from "react";

export default function Comprobante({ openFactura, onCloseFactura, json }) {
    const [facturaObj, setFacturaObj] = useState(null);

    function imprimirFactura() {
      const contenidoModal = document.getElementById('modalFactura').innerHTML;
      const ventanaImpresion = window.open('', '_blank');
      
      ventanaImpresion.document.write('<html><head><title>Impresión de Factura</title>');
      ventanaImpresion.document.write('<style>@media print {.no-imprimir { display: none; } body { height: 297mm; }</style>');
      ventanaImpresion.document.write('</head><body>');
      ventanaImpresion.document.write(contenidoModal);
      ventanaImpresion.document.write('</body></html>');
      
      ventanaImpresion.print();
      onCloseFactura(false);
      ventanaImpresion.close();
    }

    if(json) {
      return (

      //   <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-opacity ${open ? "visible bg-black bg-opacity-20 dark:bg-opacity-30" : "invisible"}`}>
      // <div onClick={(e) => e.stopPropagation()} className={`bg-white dark:bg-gray-800 rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} m-auto`}>
      //   <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300">
      //     <X size={18} strokeWidth={2} />
      //   </button>
        
        <div id="modalFactura" onClick={onCloseFactura} className={`fixed inset-0 justify-center items-center grid grid-cols-8 transition-opacity ${openFactura ? "visible bg-black bg-opacity-20 dark:bg-opacity-30" : "invisible"}`}>
          <div onClick={(e) => e.stopPropagation()} className={`bg-white dark:bg-gray-800 rounded-xl shadow p-6 transition-all col-span-2 col-start-4 ${openFactura ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
            <button onClick={onCloseFactura} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300 no-imprimir">
              <X />
            </button>
            <div className="w-full">
              <div className="mx-5 my-4 w-full">
                <h2 className="text-xl font-bold flex gap-3 text-center dark:text-white">Factura No. {json.Consecutivo}</h2>
                <hr className="my-3 mr-7 py-0.2 border" />
              </div>
              
              <div className="grid mr-5 mb-5 gap-x-12 grid-cols-2">
                <div className="lg:w-full w-full ml-2 mr-2 col-span-12 flex flex-wrap">
                  <div className="w-full md:w-1/2 lg:w-1/3 mb-2">
                    <div className="font-medium text-gray-900 dark:text-white">Fecha de Emisión: {new Date(json.FechaEmision).toLocaleDateString()}</div>
                  </div>
                  <div className="w-full lg:w-full mb-2 lg:mb-0"> 
                    <div className="font-medium text-gray-900 dark:text-white"><strong>Emisor:</strong></div>
                    <div className="dark:text-white">{json.Emisor + " / " + json.NombreComercialEmisor}</div>
                  </div>
                  <div className="w-full lg:w-1/3 mb-2">
                    <div className="font-medium text-gray-900 dark:text-white"><strong>Receptor:</strong></div>
                    <div className="dark:text-white">{json.Cliente}</div>
                  </div>
                </div>
              </div>
              <hr></hr>
              <div className="grid mr-5 mb-5 gap-x-12 grid-cols-3">
                <div className="lg:w-full w-full ml-2 mr-2 col-span-6">
                  <div className="overflow-x-auto overflow-y-auto"  style={{ height: '10rem' }}>
                    <table  style={{ border: 'none' }} className="w-full">
                      <thead className="">
                        <tr>
                          <th className="dark:text-white uppercase">#</th>
                          <th className="dark:text-white px-4 uppercase">Cant.</th>
                          <th className="dark:text-white px-4 uppercase">Detalle</th>
                          <th className="dark:text-white px-4 uppercase">Precio</th>
                        </tr>
                      </thead>
                      <tbody>
                        {json.Detalles.map((detalle, index) => (
                          <tr key={index}>
                            <td className="dark:text-white w-4">{detalle.Linea}</td>
                            <td className="dark:text-white w-8 px-4">{detalle.Cantidad}</td>
                            <td className="dark:text-white w-40 px-4">{detalle.Descripcion}</td>
                            <td className="dark:text-white w-15 px-4">{detalle.Precio}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                      <br></br>
                      <tr>
                        <td colSpan="4" className="dark:text-white text-left mt-5"><strong>Monto Total: {json.TotalFactura}</strong></td>
                      </tr>
                      <tr>
                        <td colSpan="4" className="dark:text-white text-left" style={{ fontSize: "12px" }}><strong>Observaciones: </strong>{!json.Observaciones ? 'N/A' : json.Observaciones}</td>
                      </tr>
                      <tr>
                        <td colSpan="4" className="dark:text-white text-center" style={{ fontSize: "14px" }}><strong>--GRACIAS POR SU COMPRA--</strong></td>
                      </tr>
                      <tr>
                        <td colSpan="4" className="dark:text-white text-center" style={{ fontSize: "8px" }}><strong>Inscrito en régimen tributario simplificado</strong></td>
                      </tr>
                    </tfoot>
                    </table>
                  </div>
                </div>
              </div>
                        
              

              <button onClick={imprimirFactura} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded no-imprimir">Imprimir</button>

            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
}
