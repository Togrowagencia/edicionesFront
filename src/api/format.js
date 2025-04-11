import axios from "axios";

import { baseurl, token } from "../utils/baseurl";

export const getFormat = async () => {
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



export const createAuthor = async (formData) => {
  try {
    const config = token();
    const response = await axios.post(`${baseurl}/format/register`, formData,config);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
