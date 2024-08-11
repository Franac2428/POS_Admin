import React, { useEffect } from 'react';

const EstadoFac = ({ idFactura, mutate }) => {

  useEffect(() => {
    const actualizarEstadoEnBD = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/inventario/${idFactura}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ Estado: estado }),
        });

        if (response.ok) {
          const data = await response.json();
          toast.success('Estado actualizado con éxito');
          console.log('Estado actualizado en la base de datos:', data);
          mutate();
        } else {
          const errorData = await response.json();
          throw new Error(`Error al actualizar el estado en la base de datos: ${errorData.error}`);
        }
      } catch (error) {
        console.error('Error al actualizar el estado en la base de datos:', error);
      }
    };

    if (idFactura && !isNaN(idFactura)) {
      actualizarEstadoEnBD();
    }
  }, [estadoFac, idFactura, mutate]);

  return <span className={getEstadoClass(estado)}>{estado}</span>;
};

function getEstadoClass(estado) {
  switch (estado) {
    case 'Activa':
      return 'bg-green-500 text-white font-semibold px-2 py-0 rounded-r-lg rounded-l-lg';
    case 'Pagada':
      return 'bg-blue-500 text-white font-semibold px-2 py-0 rounded-r-lg rounded-l-lg';
    case 'Nula':
      return 'bg-gray-500 text-white font-semibold px-2 py-0 rounded-r-lg rounded-l-lg';
    default:
      return 'bg-gray-500 text-white font-semibold px-2 py-0 rounded-r-lg rounded-l-lg';
  }
}

export default EstadoFac;
