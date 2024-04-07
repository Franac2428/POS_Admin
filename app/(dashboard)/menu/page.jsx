import CartaComida from "../../components/pos/cartaComida";
import Orden from "../../components/pos/orden";

export default function App() {
  return (
    <div className="dark:text-white min-h-screen">
      <div className="flex flex-col gap-5 w-full p-4">
        <section className="flex flex-col md:flex-row justify-between transition-all">
          <div className="col-span-1 lg:col-span-7 mx-auto">
            <div className="flex flex-col justify-around">
              <div className="flex flex-col mb-3">
                <h1 className="font-semibold pt-4 text-xl dark:text-gray-100">Menú</h1>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <CartaComida nombre="Prueba" description="Descripcion con parametro 1" price={1000} />
                <CartaComida nombre="Prueba2" description="Descripcion con parametro 2" price={1300} />
                <CartaComida nombre="Prueba3" description="Descripcion con parametro 3" price={1400} />
                <CartaComida nombre="Prueba4" description="Descripcion con parametro 4" price={1500} />
                <CartaComida nombre="Prueba5" description="Descripcion con parametro 5" price={1600} />
                <CartaComida nombre="Prueba6" description="Descripcion con parametro 6" price={1700} />
                <CartaComida nombre="Prueba7" description="Descripcion con parametro 7" price={1800} />
                <CartaComida nombre="Prueba8" description="Descripcion con parametro 8" price={1900} />
              </div>
            </div>
          </div>
          <div className="col-span-1 w-96 flex flex-col h-full rounded-xl shadow-sm bg-white dark:bg-gray-700 mt-11 ml-4">
            <div className="flex flex-col">
              <h2 className="font-semibold pt-4 pl-4 text-lg dark:text-gray-100">Orden actual</h2>
              <div className="rounded-lg p-2 m-4 dark:bg-gray-800">
                <p className="font-semibold dark:text-gray-100">Cliente: Mario Cuevas</p>
                <p className="dark:text-gray-400">Transacción N°: 23093489273</p>
                <div className="flex justify-between dark:text-gray-500">
                  <p>2 de abril, 2024</p>
                  <p>11:34 AM</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full justify-between">
              <Orden />
              <div className="dark:bg-gray-800 rounded-b-xl">
                <div className="px-8 pt-8">
                  <div className="flex justify-between pb-3 dark:text-gray-100">
                    <h3>Subtotal</h3>
                    <p>₡2500</p>
                  </div>
                  <div className="flex justify-between pb-3 dark:text-gray-100">
                    <h3>Impuesto(10%)</h3>
                    <p>₡500</p>
                  </div>
                  <div className="flex justify-between pb-3 dark:text-gray-100">
                    <h3 className="font-semibold">Total</h3>
                    <p className="font-semibold">₡3000</p>
                  </div>
                </div>
                <div className='flex flex-col pb-8 mt-4 px-12'>
                  <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-2 rounded-xl text-white font-bold text-lg bg-verde dark:bg-green-700'>Cancelar Pago</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
