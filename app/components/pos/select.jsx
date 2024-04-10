import Select from 'react-select';


const SelectWithFilter = ({ options, selectedValue, onChange }) => {

  return (
    <Select
    options={options}
    value={selectedValue}
    onChange={onChange}
      isClearable
      isSearchable
      placeholder="--Seleccione--"
      className="mt-1 p-1 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-900 dark:text-white"
    />
  );

  
};

export default SelectWithFilter;
