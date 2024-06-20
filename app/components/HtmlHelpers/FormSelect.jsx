
const HtmlFormSelect = ({ id, legend, colSize, options }) => {
    return (
        <div className={`col-span-${colSize}`}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                {legend}:
            </label>
            <select
                required
                id={id}
                name={id}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default HtmlFormSelect;
