import axios from "axios";
import { baseurl, token } from "../utils/baseurl";

export const getPayment = async () => {
  try {
    const config = token();

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
    const tokenn = localStorage.getItem("authResponse");
    if (!token) {
      return Error("Token no encontrado");
    }
    const response = await axios.post(
      `${baseurl}/payment_methods/register`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "tgwr_token": tokenn,
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
    const tokenn = localStorage.getItem("authResponse");
    const response = await axios.put(
      `${baseurl}/payment_methods/edit/${formData.id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "tgwr_token": tokenn,
        },
      }
    );

    return response;
  } catch (error) {
    return error;
  }
};
