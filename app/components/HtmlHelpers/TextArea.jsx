
const HtmlTextArea = ({ id, legend, colSize, additionalClass, onChange, value }) => {
    return (
        <div class={`col-span-${colSize}`}>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 dark:text-gray-200">{legend}:</label>
            <textarea value={value} id={id} name={id} onChange={onChange} className={`${additionalClass} bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark: border border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}></textarea>
        </div>

    );
};

export default HtmlTextArea;
