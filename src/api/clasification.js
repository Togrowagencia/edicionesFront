import axios from "axios";
import { baseurl } from "../utils/baseurl";

export const getClassification = async () => {
  try {
    const token = localStorage.getItem("authResponse");

    if (!token) {
      throw new Error("Token no encontrado");
    }

    const config = {
      headers: {
        tgwr_token: token,
      },
    };

    const response = await axios.get(`${baseurl}/classification/all`, config);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error al obtener autores:", error);
    return error;
  }
};

export const createClasification = async (formData) => {
  try {
    const response = await axios.post(
      `${baseurl}/classification/register`,
      formData
    );
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const putClassification = async (formData) => {
  try {
    const token = localStorage.getItem("authResponse");
    if (!token) {
      throw new Error("Token no encontrado");
    }

    const config = {
      headers: {
        tgwr_token: token,
      },
    };
    const response = await axios.put(
      `${baseurl}/classification/edit/${formData.id}`,
      formData,
      config
    );
    return response;
  } catch (error) {
    return error;
  }
};
