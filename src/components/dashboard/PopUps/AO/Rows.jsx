export const Rows = (datos) => {
    return [
      [
        {
          name: "isbn",
          iconSrc: "/public/svg/popup-ao/ISBN.svg",
          placeholder: "ISBN",
        },
        {
          name: "nombreObra",
          iconSrc: "/public/svg/popup-ao/NDLO.svg",
          placeholder: "Nombre de la obra",
        },
        {
          name: "editorial",
          placeholder: "Editorial",
          hasArrow: true,
          multiselect: false,
          options: datos.Publishing
            ? datos.Publishing.map((item) => ({
                value: item.name    ,
                label: item.name,
              }))
            : [],
        },
      ],
      [
        {
          name: "proveedor",
          placeholder: "Proveedor",
          hasArrow: true,
          multiselect: false,
          options: datos.Providers
            ? datos.Providers.map((item) => ({
                value: item.id,
                label: item.corporate_name,
                percentage: item.percentage,
              }))
            : [],
        },
        {
          name: "autor",
          placeholder: "Autor",
          hasArrow: true,
          multiselect: true,
          options: datos.Author
            ? datos.Author.map((item) => ({
                value: item.name,
                label: item.name,
              }))
            : [],
        },
        {
          name: "contenido",
          placeholder: "Contenido",
          hasArrow: true,
          multiselect: false,
          options: datos.Content
            ? datos.Content.map((item) => ({
                value: item.name,
                label: item.name,
              }))
            : [],
        },
      ],
      [
        {
          name: "clasificacion",
          placeholder: "Clasificación",
          hasArrow: true,
          multiselect: true,
          options: datos.Classification
            ? datos.Classification.map((item) => ({
                value: item.name,
                label: item.name,
              }))
            : [],
        },
        {
          name: "genero",
          placeholder: "Género",
          hasArrow: true,
          multiselect: true,
          options: datos.Gender
            ? datos.Gender.map((item) => ({
                value: item.name,
                label: item.name,
              }))
            : [],
        },
        {
          name: "costoLibro",
          iconSrc: "/public/svg/popup-ao/costo.svg",
          placeholder: "Costo del libro",
        },
      ],
      [
        {
          name: "precioVenta",
          iconSrc: "/public/svg/popup-ao/precio.svg",
          placeholder: "Precio de venta",
        },
        {
          name: "cantidad",
          iconSrc: "",
          placeholder: "Cantidad",
        },
        {
          name: "dimensiones",
          iconSrc: "",
          placeholder: "Dimensiones",
        },
      ],
      [
        {
          name: "edicion",
          iconSrc: "/public/svg/popup-ao/NDLO.svg",
          placeholder: "Edición",
        },
        {
          name: "formato",
          iconSrc: "/public/svg/popup-ao/NDLO.svg",
          placeholder: "Formato",
        },
        {
          name: "idioma",
          iconSrc: "",
          placeholder: "Idioma",
        },
      ],
      [
        {
          name: "paginas",
          iconSrc: "",
          placeholder: "Numero de páginas",
        },
        {
          name: "peso",
          placeholder: "Peso",
          iconSrc: "/public/svg/popup-ao/costo.svg",
        },
        {
          name: "presentacion",
          placeholder: "Presentacion",
          iconSrc: "/public/svg/popup-ao/NDLO.svg",
        },
      ],
    ];
  };
  