//CLASE DE HELPERS PARA JS

export  function AddRemoveClassById(id, addClass = "", removeClass = "") {
   const element = document.getElementById(id);

   if (element) {
       if (removeClass != "") {
           element.classList.remove(removeClass);
       }
       if (addClass != "") {
           element.classList.add(addClass);
       }
   }
}




export  function AddRemoveClassByClass(className, addClass = "", removeClass = "") {
   const elements = document.getElementsByClassName(className);

   for (const element of elements) {
       if (removeClass) {
           element.classList.remove(removeClass);
       }
       if (addClass) {
           element.classList.add(addClass);
       }
   }
}


export  function GetValueById(id) {
   return document.getElementById(id).value
}

export function GetValueByClass(className) {
   return document.getElementsByClassName(className).value
}

export function FormatName(nombre,apellidos) {
   return nombre + " " + apellidos;
}

export function GetHtmlValueById(id) {
    const selectElement = document.getElementById(id);
    if (selectElement) {
      const selectedText = selectElement.options[selectElement.selectedIndex].text;
      return selectedText;
    } 
}

export function FormatDate(fechaISO) {
    const fecha = new Date(fechaISO);

    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = fecha.getFullYear();
    const horas = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');

    return `${dia}/${mes}/${anio} ${horas}:${minutos}`;
}

export function FormatOnlyDate(fechaISO) {
    const fecha = new Date(fechaISO);

    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = fecha.getFullYear();

    return `${dia}/${mes}/${anio}`;
}


