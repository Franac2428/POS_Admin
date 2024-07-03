const colorClasses = {
    blue: {
        base: 'bg-blue-500',
        hover: 'hover:bg-blue-800 dark:hover:bg-blue-800',
        dark: 'dark:bg-blue-700',
    },
    red: {
        base: 'bg-red-500',
        hover: 'hover:bg-red-800 dark:hover:bg-red-800',
        dark: 'dark:bg-red-700',
    },
    green: {
        base: 'bg-green-400',
        hover: 'hover:bg-green-800 dark:hover:bg-green-800',
        dark: 'dark:bg-green-700',
    },
    yellow: {
        base: 'bg-yellow-400',
        hover: 'hover:bg-yellow-800 dark:hover:bg-yellow-800',
        dark: 'dark:bg-yellow-500',
    },
    purple: {
        base: 'bg-purple-500',
        hover: 'hover:bg-purple-800 dark:hover:bg-purple-800',
        dark: 'dark:bg-purple-500',
    },
    cyan: {
        base: 'bg-cyan-500',
        hover: 'hover:bg-cyan-800 dark:hover:bg-cyan-800',
        dark: 'dark:bg-cyan-500',
    },
    gray: {
        base: 'bg-stone-500',
        hover: 'hover:bg-stone-800 dark:hover:bg-stone-700',
        dark: 'dark:bg-stone-500',
    },
};

const HtmlButton = ({ color, icon: Icon, legend, onClick, type = 'button' }) => {
    const baseClasses = 'flex items-center gap-2 shadow-lg active:scale-95 transition-transform ease-in-out duration-75 hover:scale-110 transform text-white font-semibold px-4 py-2 rounded-lg';
    const colorClass = colorClasses[color] || colorClasses.blue;

    return (
        <button
            className={`${baseClasses} ${colorClass.base} ${colorClass.hover} ${colorClass.dark}`}
            type={type}
            onClick={onClick}>
            {Icon && <Icon className="text-white-500" />}
            {legend}
        </button>
    );
};

export default HtmlButton;
