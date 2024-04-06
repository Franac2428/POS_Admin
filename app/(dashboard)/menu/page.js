import CartaComida from "../../components/cartaComida";
import Orden from "../../components/orden";

export default function App() {
  return (
    <>
    
    <div className="flex flex-col gap-5 w-full">
      <section className="grid grid-cols-1 h-screen transition-all lg:grid-cols-10">
          <div className="col-span-7 mx-auto">
          <div className="flex flex-col justify-around">
            <div className="flex flex-col mb-3">
              <h1 className="font-semibold pt-4" style={{ fontSize: "28px" }}>Menú</h1>
              <div className="py-4 shadow-sm bg-white rounded-md ">
              <ul className="flex justify-evenly items-center">
              <li className="font-semibold border-2 border-custom-yellow rounded  bg-yellow-100 p-2 -yellow-800">Todos</li>
                  <li className="font-semibold  p-2 hover:bg-yellow-100 hover:border-2 border-custom-yellow rounded ">Combos</li>
                  <li className="font-semibold  p-2 hover:bg-yellow-100 hover:border-2 border-custom-yellow rounded ">Bebidas</li>
                  <li className="font-semibold  p-2 hover:bg-yellow-100 hover:border-2 border-custom-yellow rounded ">Pollos</li>
                  <li className="font-semibold  p-2 hover:bg-yellow-100 hover:border-2 border-custom-yellow rounded ">Otros</li>
              </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 items-stretch sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <CartaComida/>
              <CartaComida/>
              <CartaComida/>
              <CartaComida/>
              <CartaComida/>
              <CartaComida/>
              <CartaComida/>
              <CartaComida/>
            </div>
          </div>
          </div>
          <div className="flex flex-col h-full  border-l shadow-sm bg-white col-span-3 ">
            <div className="flex  flex-col">
                <h2 className="font-semibold pt-4 pl-4" style={{ fontSize: "22px" }}>Orden actual</h2>
                <div style={{ backgroundColor: '#f1f1f1' }}className="rounded-lg p-2 mx-4">
                    <p className="font-semibold">Cliente: Mario Cuevas</p>
                    <p className="">Transacción N°: 23093489273</p>
                    <div className="flex justify-between">
                    <p className="text-gray-600">2 de abril, 2024</p>
                    <p className="text-gray-600">11:34 AM</p>

                    </div>



                </div>

                
            </div>
            <div className="flex flex-col h-full  border-l shadow-sm col-span-2 justify-between">

            <Orden/>
            <div className="" style={{ backgroundColor: '#f1f1f1' }}>
              <div className="px-8 pt-8">
                <div className=" flex justify-between pb-3">
                  <h3>Subtotal</h3>
                  <p>₡2500</p>
                </div>
                <div className=" flex dashed-border justify-between pb-3">
                  <h3>Impuesto(10%)</h3>
                  <p>₡500</p>
                </div>
                <div className="flex justify-between pb-3">
                  <h3 className="font-semibold">Total</h3>
                  <p className="font-semibold">₡3000</p>
                </div>
            </div>  
            <div className='flex flex-col pb-8 mt-4 px-12'>    
                         <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-2 rounded-xl text-white font-bold text-lg bg-verde'>Cancelar Pago</button>
                   
            </div>
            </div>
              
              </div>          
          </div>

        </section>
        
         
      </div>
    </>
  );
}

