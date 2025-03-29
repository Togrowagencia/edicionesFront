import axios from "axios";
import { baseurl, token } from "../utils/baseurl";

export const getWarehouses = async () => {
  try {
    const config = token();

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
    const tokenn = localStorage.getItem("authResponse");
    if (!token) {
      return Error("Token no encontrado");
    }
    const response = await axios.post(
      `${baseurl}/warehouse/register`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", 
          "tgwr_token": tokenn,// Asegurarse de que el contenido se envíe como multipart
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
    const config = token();

    const response = await axios.post(`${baseurl}/users/register`, formData,config);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const putUser = async (formData) => {
  try {
    const config = token();

    const response = await axios.post(`${baseurl}/users/register`, formData,config);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteUser = async (formData) => {
  try {
    const response = await axios.post(`${baseurl}/users/register`, formData,config);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
