export default function CartaComida({imgName,nombre, precio, onClick}) {  
  return (
    <div className="max-w-xs bg-white dark:bg-gray-800 p-4 flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
         src={`/${imgName}.png`}  
         alt={nombre}
         className="w-auto h-40 object-cover rounded-t-lg hover:scale-110 cursor-pointer transition-transform duration-500 ease-in-out"
      />
      <h2 className="mt-2 text-lg font-bold dark:text-white">{nombre}</h2>
      <div className="flex justify-between items-center mt-4">
        <span className="text-yellow-600 dark:text-yellow-400">₡{precio}</span>
        <button
          className="px-3 py-1 text-white bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 rounded-lg text-sm transition-colors duration-300 ease-in-out"
          onClick={onClick}
        >
          +
        </button>
      </div>
    </div>
  );
}
