import { Search } from "lucide-react";

export default function Buscador() {
    return (
        <div className="relative flex flex-1">
            <label htmlFor="search-product" className="sr-only">Buscar producto</label>
            <input
                id="search-product"
                type="text"
                className="w-full border shadow-sm border-gray-200 dark:border-gray-700 py-2 pl-10 text-sm text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-800 outline-none rounded-full"
                placeholder="Buscar..."
            />
            <Search className="absolute left-3 top-2 h-5 w-5 text-gray-500 dark:text-gray-400" />
        </div>
    );
}
