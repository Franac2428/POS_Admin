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