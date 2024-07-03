
const HtmlLabel = ({ color, icon: Icon, legend}) => {
    return (
        <span
            className={`px-2 py-1 text-xs font-medium uppercase tracking-wider text-${color}-800 bg-${color}-200 dark:text-${color}-200 dark:bg-${color}-800 rounded-md`}>
            {Icon && <Icon className={`text-${color}-700 dark:text-white-500`} />} 
            {legend}
        </span>
    );
};

export default HtmlLabel;
