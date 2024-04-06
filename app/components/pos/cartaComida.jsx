

export default function CartaComida() {  
    return (
      <div className="font-bold w-[200px] bg-white p-4 flex flex-col rounded-lg ">
        <img
           src="/frito.png" 
          alt=""
          className="w-auto h-40  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
        />
        <h2>Pollo Frito</h2>
        <p className="text-sm font-normal">Pollo frito askdojnai foam djf os fpasdfe rfsif</p>
        <div className="flex justify-between ">
        <span className="text-yellow-600 ">₡1000</span>


          <button           
            className="px-3 text-white bg-custom-yellow hover:bg-yellow-600 rounded-lg text-sm"          >
            +
          </button>
        </div>
      </div>
    );
  };
  
