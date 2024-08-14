import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Toaster, toast } from 'sonner';
import HtmlFormInput from "../HtmlHelpers/FormInput";
import HtmlTextArea from "../HtmlHelpers/TextArea";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function EditarCliente({ open, onClose, reloadTable, cliente }) {

  const [formData, setFormData] = useState({
    clienteId: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    celular: '',
    direccion: ''
  });
  

  useEffect(() => {
    if (cliente) {
      setFormData({
        clienteId: cliente.clienteId,
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        email: cliente.email,
        telefono: cliente.telefono,
        celular: cliente.celular,
        direccion: cliente.direccion
      });
    }
  }, [cliente]);

  const limpiarCamposForm = () => {
    const elements = document.getElementsByClassName("fc-edit-client");
    Array.from(elements).forEach((element) => {
      element.value = "";
      element.classList.remove('is-invalid');
      element.classList.remove('is-valid');
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value
    }));
  };

  const onFormEditSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      editarCliente();
    } else {
      toast.warning('Aún existen campos por completar o el formato del correo es incorrecto');
    }
  };

  const validateForm = () => {
    let isValid = true;
    const elements = document.getElementsByClassName("fc-edit-client");
    Array.from(elements).forEach((element) => {
      if (element.value.trim() === '') {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
        isValid = false;
      } else {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
      }
    });

    // const emailElement = document.getElementById("email");
    // if (!emailRegex.test(emailElement.value)) {
    //   emailElement.classList.add('is-invalid');
    //   emailElement.classList.remove('is-valid');
    //   isValid = false;
    // }

    return isValid;
  };

  async function editarCliente() {
    try {
      const response = await fetch('/api/clientes', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        onClose();
        toast.success('Cliente actualizado satisfactoriamente');
        setTimeout(() => {
          reloadTable();
        });
      } else {
        throw new Error(`Error: ${response.statusText}`);
      }
    } catch (error) {
      toast.error("Sucedió un error al actualizar el cliente");
      console.error(error);
    }
  }

  if (!cliente) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-opacity ${open ? "visible bg-black bg-opacity-40 dark:bg-opacity-50" : "invisible"}`}
    >
      <div onClick={(e) => e.stopPropagation()} className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-all ${open ? "scale-100 opacity-100" : "scale-90 opacity-0"} m-auto max-w-3xl w-full md:w-2/3 lg:w-7/12`}>
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300">
          <X size={20} strokeWidth={2} onClick={limpiarCamposForm} />
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold flex items-center gap-3 text-gray-900 dark:text-gray-100">
            Editar Cliente
          </h2>
          <input id="clienteId" hidden value={formData.clienteId} readOnly />
          <hr className="w-full border-t border-gray-600 dark:border-gray-500 mt-2"></hr>
          <form method="PUT" className="my-6 w-full" onSubmit={onFormEditSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
              <HtmlFormInput legend={"Nombre"} type={"text"} colSize={1} id={"nombre"} value={formData.nombre} onChange={handleChange} additionalClass={"fc-edit-client"} />
              <HtmlFormInput legend={"Apellidos"} type={"text"} colSize={1} id={"apellido"} value={formData.apellido} onChange={handleChange} additionalClass={"fc-edit-client"} />
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
              <HtmlFormInput legend={"Email"} type={"text"} colSize={1} id={"email"} value={formData.email} onChange={handleChange}  />
              <HtmlFormInput legend={"Teléfono"} type={"text"} colSize={1} id={"telefono"} value={formData.telefono} onChange={handleChange} maxLength={9}   />
              <HtmlFormInput legend={"Celular"} type={"text"} colSize={1} id={"celular"} value={formData.celular} onChange={handleChange} maxLength={9}  />
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-1 gap-4 mx-auto">
              <HtmlTextArea legend={"Dirección"} colSize={1} id={"direccion"} value={formData.direccion} onChange={handleChange}  />
            </div>
            <div className="flex justify-center gap-6 mt-5">
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-8">
                Editar
              </button>
              <button type="button" className="bg-gray-400 font-semibold rounded-md py-2 px-8" onClick={onClose} onClickCapture={limpiarCamposForm}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster richColors />
    </div>
  );
}
