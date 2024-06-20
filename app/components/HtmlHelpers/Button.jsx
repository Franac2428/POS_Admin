
const HtmlButton = ({ color, icon: Icon, legend, onClick, type = 'button' }) => {
    return (
        <button
            className={`flex items-center gap-2 shadow-lg active:scale-95 transition-transform ease-in-out duration-75 hover:scale-110 transform text-white font-semibold bg-${color}-500 hover:bg-${color}-800 dark:hover:bg-${color}-800   dark:bg-${color}-700 px-4 py-2 rounded-lg`}
            type={type}
            onClick={onClick}>
            {Icon && <Icon className={`text-${color}-700 dark:text-white-500`} />} 
            {legend}
        </button>
    );
};

export default HtmlButton;
