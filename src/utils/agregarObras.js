
export const createItem = async (
  inputs,
  createEntityFunction,
  dataArray,
  entityKey,
  setInputValues
) => {
  console.log(inputs);

  if (String(inputs[entityKey]).trim() === "") {
    return new Notify({
      title: "Por favor, rellene todos los campos.",
      status: "warning",
      type: "filled",
      autotimeout: 850,
      autoclose: true,
      position: "left top",
      effect: "slide",
      gap: 20,
    });
  }

  // Verificar si la entidad ya existe en el array
  const exists = dataArray?.some((item) => {
    return (
      String(item.id) === String(inputs[entityKey]) ||
      (item.name &&
        item.name.toLowerCase() === String(inputs[entityKey]).toLowerCase())
    );
  });

  // Si la entidad no existe, crearla
  if (!exists) {
    try {
      // Llamar a la función para crear la entidad
      const response = await createEntityFunction({
        name: inputs[entityKey],
      });

      let createdEntity = null;

      // Si la respuesta es un array, buscar la entidad creada
      if (Array.isArray(response.data)) {
        createdEntity = response.data.find(
          (item) => item.name.toLowerCase() === inputs[entityKey].toLowerCase()
        );
      } else {
        // Si la respuesta no es un array, asumir que es el objeto creado
        createdEntity = response.data;
      }

      console.log(
        `${entityKey.charAt(0).toUpperCase() + entityKey.slice(1)} creado:`,
        createdEntity
      );

      // Si la entidad fue creada, actualizar el estado
      if (createdEntity) {
        setInputValues((prev) => ({
          ...prev,
          [entityKey]: createdEntity.name,
        }));
      }

      console.log(inputs);
    } catch (error) {
      console.error(`Error al crear ${entityKey}`, error);
      return new Notify({
        title: `Error al crear ${entityKey}`,
        status: "error",
        type: "filled",
        autotimeout: 850,
        autoclose: true,
        position: "left top",
        effect: "slide",
        gap: 20,
      });
    }
  }
};
