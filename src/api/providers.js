import axios from "axios";
import { baseurl, token } from "../utils/baseurl";
export const getProviders = async () => {
  try {
    const config = token();

    const response = await axios.get(`${baseurl}/providers/all`, config);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error al obtener proveedores:", error);
    return error;
  }
};

export const createProvider = async (formData) => {
  console.log("llega al crearprovider")
  console.log(formData)
  try {
    const config = token();
    console.log("elktoken",config)
    const response = await axios.post(
      `${baseurl}/providers/register`,
      formData,
      config,
    );
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const putProvider = async (formData) => {
  console.log(formData);
  try {
    const config = token();

    const response = await axios.put(
      `${baseurl}/providers/edit/${formData.id}`,
      formData,
      config
    );
    console.log("desde el endpoint del proveedor editando");
    console.log(formData);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
