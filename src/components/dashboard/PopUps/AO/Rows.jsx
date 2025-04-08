export const Rows = (datos) => {
    return [
      [
        {
          name: "isbn",
          iconSrc: "/public/svg/popup-ao/ISBN.svg",
          placeholder: "ISBN",
        },
        {
          name: "name",
          iconSrc: "/public/svg/popup-ao/NDLO.svg",
          placeholder: "Nombre de la obra",
        },
        {
          name: "name_publishing",
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
          name: "authors",
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
          name: "name_content",
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
          name: "classification",
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
          name: "genders",
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
          name: "cost",
          iconSrc: "/public/svg/popup-ao/costo.svg",
          placeholder: "Costo del libro",
        },
      ],
      [
        {
          name: "price_vent",
          iconSrc: "/public/svg/popup-ao/precio.svg",
          placeholder: "Precio de venta",
        },
        {
          name: "quantity",
          iconSrc: "",
          placeholder: "Cantidad",
        },
        {
          name: "dimensions",
          iconSrc: "",
          placeholder: "Dimensiones",
        },
      ],
      [
        {
          name: "edition",
          iconSrc: "/public/svg/popup-ao/NDLO.svg",
          placeholder: "Edición",
        },
        {
          name: "name_format",
          iconSrc: "/public/svg/popup-ao/NDLO.svg",
          placeholder: "Formato",
        },
        {
          name: "language",
          iconSrc: "",
          placeholder: "Idioma",
        },
      ],
      [
        {
          name: "number_pages",
          iconSrc: "",
          placeholder: "Numero de páginas",
        },
        {
          name: "peso",
          placeholder: "Peso",
          iconSrc: "/public/svg/popup-ao/costo.svg",
        },
        {
          name: "name_presentation",
          placeholder: "Presentacion",
          iconSrc: "/public/svg/popup-ao/NDLO.svg",
        },
      ],
    ];
  };
  