import axios from "axios";
import { baseurl } from "../utils/baseurl";

export const getWarehouses = async () => {
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

    const response = await axios.get(`${baseurl}/warehouse/all`, config);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return error;
  }
};

export const createWarehouse = async (formData) => {
  try {
    console.log(formData);
    const response = await axios.post(
      `${baseurl}/warehouse/register`,
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

export const getUserById = async (Id) => {
  try {
    const response = await axios.post(`${baseurl}/users/register`, formData);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const putUser = async (formData) => {
  try {
    const response = await axios.post(`${baseurl}/users/register`, formData);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteUser = async (formData) => {
  try {
    const response = await axios.post(`${baseurl}/users/register`, formData);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
