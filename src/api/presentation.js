

import axios from "axios";

import { baseurl, token } from "../utils/baseurl";

export const getPresentation = async () => {
  try {
    const config = token();
    const response = await axios.get(`${baseurl}/presentation/all`, config);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error al obtener autores:", error);
    return error;
  }
};



export const createPresentation = async (formData) => {
  try {
    const config = token();
    const response = await axios.post(`${baseurl}/presentation/register`, formData,config);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
