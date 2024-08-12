'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { mutate } from 'swr';

const Editar = ({ estadoActual, onActualizarEstado, facturaId }) => {
  const normalizedEstadoActual = estadoActual.charAt(0).toUpperCase() + estadoActual.slice(1).toLowerCase();

  const [selectedOption, setSelectedOption] = useState(normalizedEstadoActual);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const normalizedEstado = estadoActual.charAt(0).toUpperCase() + estadoActual.slice(1).toLowerCase();
    setSelectedOption(normalizedEstado);
    setButtonColor(getButtonColor(normalizedEstado));
  }, [estadoActual]);

  const handleOptionChange = async (event) => {
    const newEstado = event.target.value;
    setSelectedOption(newEstado);
    setButtonColor(getButtonColor(newEstado));

    // Actualizar el estado en la base de datos
    try {
      const response = await fetch(`http://localhost:3000/api/factura/${facturaId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ estadoFac: newEstado.toUpperCase() }), // Enviar estado en mayúsculas
      });

      if (response.ok) {
        const facturaActualizada = await response.json();
        toast.success('Factura actualizada con éxito');
        onActualizarEstado(newEstado.toUpperCase()); // Actualizar estado en el componente padre
        mutate('http://localhost:3000/api/factura', (currentData) => {
          return currentData.map((factura) =>
            factura.idFactura === facturaId ? { ...factura, estadoFac: newEstado.toUpperCase() } : factura
          );
        }, false);
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      toast.error('Error al actualizar la factura');
    }

    setIsOpen(false);
  };

  const getButtonColor = (estado) => {
    switch (estado.toUpperCase()) {
      case 'ACTIVA':
        return 'bg-green-500';
      case 'PAGADA':
        return 'bg-blue-500';
      case 'NULA':
        return 'bg-gray-500';
      default:
        return 'bg-gray-200';
    }
  };
  const [buttonColor, setButtonColor] = useState(getButtonColor(normalizedEstadoActual));


  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`text-white flex px-4 py-1 rounded focus:outline-none items-center ${buttonColor}`}
      >
        {selectedOption || 'Seleccionar estado'} <ChevronDown size={20} />
      </button>
      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <div className="p-2">
            {['Activa', 'Pagada', 'Nula'].map((estado) => (
              <div key={estado} className="flex items-center mt-2">
                <input
                  type="radio"
                  id={`option-${estado}`}
                  name="dropdown-option"
                  value={estado}
                  checked={selectedOption === estado}
                  onChange={handleOptionChange}
                  className="mr-2"
                />
                <label htmlFor={`option-${estado}`}>{estado}</label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Editar;
