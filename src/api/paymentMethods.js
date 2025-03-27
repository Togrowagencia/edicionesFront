import axios from "axios";
import { baseurl } from "../utils/baseurl";

export const getPayment = async () => {
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

    const response = await axios.get(`${baseurl}/payment_methods/all`, config);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error al obtener editoriales:", error);
    return error;
  }
};

export const createPayment = async (formData) => {
  try {
    console.log(formData);
    const response = await axios.post(
      `${baseurl}/payment_methods/register`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Asegurarse de que el contenido se envíe como multipart
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const putPayment = async (formData) => {
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
      `${baseurl}/payment_methods/edit/${formData.id}`,
      formData,
      config,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Asegurarse de que el contenido se envíe como multipart
        },
      }
    );

    return response;
  } catch (error) {
    return error;
  }}
