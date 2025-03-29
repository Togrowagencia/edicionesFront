import axios from "axios";
import { baseurl, token } from "../utils/baseurl";

export const getAuthor = async () => {
  try {
    const config = token();
    const response = await axios.get(`${baseurl}/author/all`, config);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error al obtener autores:", error);
    return error;
  }
};

export const putAuthor = async (formData) => {
  try {
    const config = token();
    const response = await axios.put(
      `${baseurl}/author/edit/${formData.id}`,
      formData,
      config
    );
    console.log("desde el endpoint del autor editando");
    console.log(formData);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const createAuthor = async (formData) => {
  try {
    const config = token();
    const response = await axios.post(`${baseurl}/author/register`,config, formData);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
