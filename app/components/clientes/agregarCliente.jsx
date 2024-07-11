import { X } from "lucide-react";
import { Toaster, toast } from 'sonner';
import HtmlFormInput from "../HtmlHelpers/FormInput";
import HtmlTextArea from "../HtmlHelpers/TextArea";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function AgregarCliente({ open, onClose, reloadTable }) {
  var isValid = true;

  const limpiarCamposForm = () => {
    const elements = document.getElementsByClassName("fc-client");
    Array.from(elements).forEach((element) => {
      element.value = "";
      element.classList.remove('is-invalid');
      element.classList.remove('is-valid');
    });
  };

  const handleChange = (e) => {
    handleSubmit(e,false);
  };

  const onFormSubmit = (e) => {
    handleSubmit(e,true);
  };

  const onValidateEmail = (element) =>{
    let isValid = true;
    
    if(!emailRegex.test(element.value)){
      element.classList.remove('is-valid');
      element.classList.add('is-invalid');
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e,isFromButton) => {
    e.preventDefault();
    isValid = true;
    const elements = document.getElementsByClassName("fc-client");

    Array.from(elements).forEach((item) => {
      if (item.value.trim() == '') {
        item.classList.add('is-invalid');
        item.classList.remove('is-valid');
        isValid = false;
      } 
      else {
        item.classList.add('is-valid');
        item.classList.remove('is-invalid');
      }
    });

    if (!isValid && isFromButton) {
      toast.warning('Aún existen campos por completar');
    }
    else if(isValid && isFromButton && !onValidateEmail(document.getElementById("txtEmail"))){
      toast.warning("El formato de correo es inválido. Verifique e intente de nuevo")
    }
    else{
      if(isFromButton){
        agregarCliente();
      }
    }

  };

  async function agregarCliente(){
    let model = {
      nombre: getItemValue("txtNombre"),
      apellido: getItemValue("txtApellidos"),
      email: getItemValue("txtEmail"),
      telefono: getItemValue("txtTelefono"),
      celular: getItemValue("txtCelular"),
      direccion: getItemValue("txtDireccion")
    }
    
    try{
      const response = await fetch('/api/clientes',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(model)
      });

      if(response.ok){
        const data =  await response.json();
        onClose();
        toast.success('Cliente registrado satisfactoriamente');
        setTimeout(() => {
          reloadTable();
      });
      }
      else {
        throw new Error(`Error: ${response.statusText}`);
      }

    }
    catch(error){
      toast.error("Sucedió un error al agregar el cliente");
      console.error(error);
    }  
  }

  const getItemValue = (id) =>{
    return document.getElementById(id).value;
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
            Agregar Nuevo Cliente
          </h2>
          <hr className="w-full border-t border-gray-600 dark:border-gray-500 mt-2"></hr>
          <form method="POST" className="my-6 w-full" onSubmit={onFormSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
              <HtmlFormInput legend={"Nombre"} type={"text"} colSize={1} id={"txtNombre"} onChange={handleChange} additionalClass={"fc-client"} />
              <HtmlFormInput legend={"Apellidos"} type={"text"} colSize={1} id={"txtApellidos"} onChange={handleChange} additionalClass={"fc-client"} />
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
              <HtmlFormInput legend={"Email"} type={"text"} colSize={1} id={"txtEmail"} onChange={handleChange} additionalClass={"fc-client"} />
              <HtmlFormInput legend={"Teléfono"} type={"text"} colSize={1} id={"txtTelefono"} onChange={handleChange} additionalClass={"fc-client"} />
              <HtmlFormInput legend={"Celular"} type={"text"} colSize={1} id={"txtCelular"} onChange={handleChange} additionalClass={"fc-client"} />
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-1 gap-4 mx-auto">
              <HtmlTextArea legend={"Dirección"} colSize={1} id={"txtDireccion"} onChange={handleChange} additionalClass={"fc-client"} />
            </div>
            <div className="flex justify-center gap-6 mt-5">
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-8">
                Guardar
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
