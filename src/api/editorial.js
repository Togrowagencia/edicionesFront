import axios from "axios";
import { baseurl } from "../utils/baseurl";

export const getPublishing = async () => {
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

    const response = await axios.get(`${baseurl}/publishing/all`, config);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error al obtener editoriales:", error);
    return error;
  }
};

export const createPublishing = async (formData) => {
  try {
    const response = await axios.post(
      `${baseurl}/publishing/register`,
      formData
    );
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const putPublishing = async (formData) => {
  console.log("los datos que le llegan al endpoint")
  console.log(formData);
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
      `${baseurl}/publishing/edit/${formData.id}`,
      {name : formData.name},
      config
    );
    console.log("aaaaaaaaaaa");
    console.log(formData);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
