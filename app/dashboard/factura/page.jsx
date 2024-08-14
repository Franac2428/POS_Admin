// pages/facturas.jsx

import { useState } from 'react';
import Editar from "@/app/components/facturas/editar";
import Ver from "@/app/components/facturas/ver";
import Buscador from "@/app/components/buscador/buscar";

const obtenerFechaEnEspanol = (fecha) => {
  const date = new Date(fecha);
  const opciones = {
    weekday: 'short', 
    day: '2-digit', 
    month: 'long', 
  };

  const fechaFormateada = new Intl.DateTimeFormat('es-ES', opciones).format(date);
  const año = date.getFullYear(); 

  return `${fechaFormateada} del ${año}`;
};

const agruparProductos = (detalles) => {
  const productosAgregados = detalles.reduce((acc, producto) => {
    const descripcion = producto.descripcion;
    const cantidad = parseFloat(producto.cantidad); 

    if (acc[descripcion]) {
      acc[descripcion].cantidad += cantidad;
    } else {
      acc[descripcion] = { ...producto, cantidad }; 
    }
    return acc;
  }, {});

  return Object.values(productosAgregados);
};

export default function Inventario({ data }) {
  const [filtros, setFiltros] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [facturaSeleccionada, setFacturaSeleccionada] = useState(null);

  const filteredData = Array.isArray(data) ? data.filter(factura => {
    const nombreCliente = factura.cliente.nombre.toLowerCase() + factura.cliente.apellido.toLowerCase();
    const facturaId = factura.idFactura.toString().padStart(6, '0');
    const searchLower = searchTerm.toLowerCase();

    return (nombreCliente.includes(searchLower) || facturaId.includes(searchTerm)) &&
      (filtros === '' || 
        (filtros === 'activa' && factura.estadoFac === 'ACTIVA') ||
        (filtros === 'pagada' && factura.estadoFac === 'PAGADA') ||
        (filtros === 'nula' && factura.estadoFac === 'NULA'));
  }) : [];

  const handleVerMasClick = (factura) => {
    setFacturaSeleccionada(factura);
  };

  const handleCloseModal = () => {
    setFacturaSeleccionada(null);
  };

  const handleActualizarEstado = (nuevoEstado) => {
    if (facturaSeleccionada) {
      actualizarEstadoFactura(facturaSeleccionada.idFactura, nuevoEstado);
    }
  };
  
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const getMedioPagoTexto = (idMedioPago) => {
    switch (idMedioPago) {
      case 1:
        return "Efectivo";
      case 2:
        return "Tarjeta";
      case 3:
        return "Transferencia / Sinpe";
      default:
        return "Desconocido";
    }
  };
  
  return (
    <div className="w-full relative">
      {/* Tu contenido aquí */}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/factura`);
    if (!response.ok) {
      throw new Error('Error en la respuesta de la red');
    }
    const data = await response.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: [], // O cualquier valor predeterminado
      },
    };
  }
}
