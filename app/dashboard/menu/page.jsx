
'use client'
import HtmlBreadCrumb from "@/app/components/HtmlHelpers/BreadCrumb";
import HtmlButton from "@/app/components/HtmlHelpers/Button";
import HtmlFormInput from "@/app/components/HtmlHelpers/FormInput";
import AgregarProductoVenta from "@/app/components/pos/agregarProdVenta";
import CartaComida from "@/app/components/pos/cartaComida";
import { Coins, Files, HandPlatter } from "lucide-react";
import { useEffect, useState } from "react";
import { Toaster, toast } from 'sonner';


export default function App() {
  const itemsBreadCrumb = ["Home","POS"];
  const fechaActual = new Date().toLocaleDateString();
  const [modalAgregar, openModalAgregar] = useState(false);

  const [categorias, setCategorias] = useState([]);
  const [catalogoCategoria, setCatalogoCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);


  const catalogo = [];

  const obtenerCategoriasProdVenta = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/categoriasprodventa');
        if (!response.ok) {
            throw new Error(`Error al obtener las categorias: ${response.statusText}`);
        }
        const data = await response.json();
        if (data.length === 0) {
            console.log("No hay categorías de productos")
        } 
        else {
            console.log(data);
            setCategorias(data);
            //Modelo para el catálogo:
            data.forEach((item) => {
              catalogo.push({ value: item.idCategoriaProdVenta, label: item.nombre });
            });

            setCatalogoCategorias(catalogo)
        }
    } 
    catch (error) {
        console.error('Error:', error);
    } 
  };

  useEffect(() => {
    obtenerCategoriasProdVenta();
  }, []);

  const setActiveTab = (id) =>{
    const tabs = document.querySelectorAll('.tab-categorias');
    tabs.forEach(tab => tab.classList.remove('tab-active'));

    let item = document.getElementById("tab_" + id)
    item.classList.add("tab-active")
  };

  const obtenerProductosVenta = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/productosventa');
        if (!response.ok) {
            throw new Error(`Error al obtener los productos: ${response.statusText}`);
        }
        const data = await response.json();
        if (data.length === 0) {
            toast.warning('No se encontraron registros');
        } else {
            console.log(data);
            setProductos(data);
        }
    } catch (error) {
        console.error('Error:', error);
        toast.error('Sucedió un error al obtener los productos');
    } finally {
        setLoading(false);
    }
};

useEffect(() => {
  obtenerProductosVenta();
}, []);

if (loading) return <div>Loading...</div>;

  if (!categorias) return null;

  return (
    <div className="flex h-screen">
      <div className="w-5/6">
        <div className="w-full p-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="pl-2 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <HtmlBreadCrumb items={itemsBreadCrumb}/>
            </ol>
          </nav>
        </div>
        <div className="pl-4 grid grid-cols-1 md:grid-cols-12 gap-4 mx-auto">
          <div className="md:col-span-2">
              <div className="mt-1">
                  <HtmlButton color={"blue"} legend={"Info. Caja"} icon={Coins} />
              </div>
          </div>
          <div className="md:col-span-2">
              <div className="mt-1">
                  <HtmlButton color={"yellow"} legend={"Facturas"} icon={Files} />
              </div>
          </div>
          <div className="md:col-span-2">
              <div className="mt-1">
                  <HtmlButton color={"green"} legend={"Productos"} icon={HandPlatter} onClick={() => openModalAgregar(true)}/>
              </div>
          </div>
          
        </div>
        <div className="flex flex-col w-full h-full overflow-y-auto">
          <div className="p-2">
            

        <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          
            {categorias.map((item, index) => (
              <li className="me-2" key={index}>
                <a href="#" id={`tab_${item.idCategoriaProdVenta}`} onClick={() => setActiveTab(item.idCategoriaProdVenta)} className="tab-categorias inline-block p-4 hover:text-blue-600 rounded-t-lg dark:hover:text-blue-600 ">
                  {item.nombre}
                </a>
              </li>
            ))}        
            </ul>
        </div>

        <div style={{ maxHeight: '30rem', overflowY: 'auto' }} className="mt-4 grid grid-cols-2 items-stretch sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productos.map((item, index) => {
          const bufferImagen = Buffer.from(item.imagen.data);
          const imgBase64 = bufferImagen.toString('base64');

          const imgSrc = `data:${item.tipoImagen};base64,${imgBase64}`;
          const modelForCard = {
            productoVentaId: item.idProductoVenta,
            nombre: item.nombre,
            precio: item.precio,
            cantDisponible: item.cantidad,
            cantMinima: item.cantidadMinima,
            imagen: imgSrc,
            idCategoriaProdVenta: item.idCategoriaProdVenta
          };
        return (
          <CartaComida producto={modelForCard} reloadTable={obtenerProductosVenta}/>
        );
      })}
        </div>
          </div>
        </div>
      </div>

      <aside className="w-2/6 bg-gray-200 dark:bg-gray-800 overflow-y-auto">
        <div className="p-2">
        <h2 className="font-semibold pt-4 pl-4 text-lg dark:text-gray-100">Fecha: {fechaActual}</h2>
        </div>
        <div className="p-4">
        <HtmlFormInput id={"txtCliente"} legend={"Nombre del cliente"}/>
        </div>

        <div className="p-4">
        <table className="w-full border-collapse table-auto">
                  <thead>
                  <tr className="bg-gray-200">
                  <th className="px-3 py-3 text-left text-sm font-medium text-black uppercase w-10 dark:bg-gray-700 dark:text-white">Cant.</th>
                  <th className="px-5 py-3 text-left text-sm font-medium text-black uppercase w-20 dark:bg-gray-700 dark:text-white">Detalles</th>
                  <th className="px-15 py-3 text-left text-sm font-medium text-black uppercase w-5 dark:bg-gray-700 dark:text-white">Precio</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase dark:bg-gray-700 dark:text-white">...</th>
                  </tr>
                  </thead>
                  </table>    

                  </div>

      </aside>
      <AgregarProductoVenta open={modalAgregar} onClose={() => openModalAgregar(false)} setOptions={catalogoCategoria} reloadProducts={obtenerProductosVenta} />

      <Toaster richColors />
    </div>
    
  );
  
}
