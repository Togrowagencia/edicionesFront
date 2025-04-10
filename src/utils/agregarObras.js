import { getClassification } from "../api/clasification";

export const createItem = async (
  inputs,
  createEntityFunction,
  dataArray,
  entityKey,
  setInputValues
) => {
  console.log("inputs");
  console.log(inputs);
  console.log("createEntityFunction");
  console.log(createEntityFunction);
  console.log("entityKey");
  console.log(entityKey);

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
    console.log(inputs, "DESDE EXIST");
    try {
      // Llamar a la función para crear la entidad
      const response = await createEntityFunction({
        name: inputs[0],
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

const handleCheckboxChange = (checkbox) => {
  if (checkbox === "obraPropia" || checkbox === "obraConsignacion") {
    setSelectedCheckboxes((prevState) => ({
      ...prevState,
      obraPropia: checkbox === "obraPropia" ? !prevState.obraPropia : false,
      obraConsignacion:
        checkbox === "obraConsignacion" ? !prevState.obraConsignacion : false,
    }));
  } else {
    setSelectedCheckboxes((prevState) => ({
      ...prevState,
      [checkbox]: !prevState[checkbox],
    }));
  }
};
//**  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
//** obraPropia: true,
//**  obraConsignacion: false,
//**  iva: false,
//** });*//
//** los formatos son en pasta dura o blanda*/
//** numero de paginas */
//** dimensiones */
//** idioma  */
//** peso *//
//* funcion de repeticion en donde los libros de menor valor son los que se van a añadir a la promocion *//
//* Las promociones me deben afectar cotizaciones   *//

export const calcularPrecioVenta = (costo, pct) => {
  const precio = parseFloat(costo) * (1 + parseFloat(pct) / 100);
  return Math.round(precio);
};

export const formatNumber = (num) => {
  if (!num) return "";
  const parsed = parseFloat(num.toString().replace(/\./g, ""));
  if (isNaN(parsed)) return "";
  return parsed.toLocaleString("es-AR");
};

export const createEntitiesIfNotExist = async ({
  inputValues,
  inputKey,
  existingList,
  createFn,
  label,
  reload,
  fetchFn,
}) => {
  const rawValues = inputValues[inputKey];

  // Convertir a array de strings (aunque venga como objeto o array)
  const values = Array.isArray(rawValues) ? rawValues : [rawValues];
  const nombresNuevos = values
    .map((val) =>
      typeof val === "string" ? val : val?.name || val?.label || ""
    )
    .map((val) => val?.toLowerCase().trim())
    .filter((val) => !!val);

  const existentesNormalizados = existingList?.map((e) =>
    e.name?.toLowerCase().trim()
  );

  for (const nombre of nombresNuevos) {
    const yaExiste = existentesNormalizados.includes(nombre);

    if (!yaExiste) {
      try {
        await createFn({ name: nombre });
        if (reload && fetchFn) {
          reload(fetchFn, label.charAt(0).toUpperCase() + label.slice(1));
        }
      } catch (err) {
        console.error(`Error al crear ${label}`, err);
        new Notify({
          title: `Error al crear ${label}`,
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
  }
};

export const transformInputValues = (values) => {
  const toArrayOfObjects = (arr) =>
    Array.isArray(arr) ? arr.map((item) => ({ name: item })) : [];

  return {
    name: values.name || "",
    isbn: values.isbn || "",
    cost: parseFloat(values.cost.toString().replace(/\./g, "")) || 0,
    file:
      typeof values.file === "string" ? values.file : values.file?.url || "", // o maneja la subida manual si es un File
    quantity: parseInt(values.quantity) || 0,
    classification: toArrayOfObjects(values.classification),
    dimensions: values.dimensions || "",
    language: values.language || "",
    number_pages: parseInt(values.number_pages) || 0,
    price_vent: parseFloat(values.price_vent) || 0,
    peso: values.peso || "",
    status: "available",
    authors: toArrayOfObjects(values.authors),
    genders: toArrayOfObjects(values.genders),
    name_publishing: Array.isArray(values.name_publishing)
      ? values.name_publishing[0]
      : values.name_publishing,
    name_content: Array.isArray(values.name_content)
      ? values.name_content[0]
      : values.name_content,
    name_presentation: values.name_presentation || "",
    description: values.description || "",
    edition: values.edition || "",
    name_format: values.name_format || "",
  };
};
