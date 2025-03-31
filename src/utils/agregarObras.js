import { createPublishing } from "../api/editorial";

const validateEditoriales = (editoriales, datos, proveedor) => {
    // Verificar que 'proveedor' no esté vacío
    if (!proveedor || proveedor.trim() === "") {
      throw new Error("El proveedor está vacío");
    }
  
    const registradas = [];
    const noRegistradas = [];
  
    editoriales.forEach((nombre) => {
      const editorialEncontrada = datos.Publishing.find(
        (item) => item.name.toLowerCase() === nombre.toLowerCase()
      );
      if (editorialEncontrada) {
        registradas.push({ id: editorialEncontrada.id, name: editorialEncontrada.name });
      } else {

        noRegistradas.push(nombre);
      }
    });
  
    return { registradas, noRegistradas };
  };
  
  // Ejemplo de uso:
  const datos = {
    Publishing: [
      { id: 1, name: "Editorial Alfa" },
      { id: 2, name: "Editorial Beta" },
      { id: 3, name: "Editorial Gamma" },
    ]
  };
  
  export const ValidateEditoriales = (editoriales, datos, proveedor) => {
    // Verificar que 'proveedor' no esté vacío
    if (!proveedor || proveedor.trim() === "") {
      throw new Error("El proveedor está vacío");
    }
  
    const registradas = [];
    const noRegistradas = [];
  
    editoriales.forEach((nombre) => {
      const editorialEncontrada = datos.Publishing.find(
        (item) => item.name.toLowerCase() === nombre.toLowerCase()
      );
      if (editorialEncontrada) {
        registradas.push({ id: editorialEncontrada.id, name: editorialEncontrada.name });
      } else {
        noRegistradas.push(nombre);
      }
    });
  
    return { registradas, noRegistradas };
  };
  

  