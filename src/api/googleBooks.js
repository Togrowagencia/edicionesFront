import axios from "axios";
import { baseurl } from "../utils/baseurl";



export const getGoogleBook = async (formData) => {
    console.log(formData)
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

    const response = await axios.get(
      `${baseurl}/books?isbn=${formData}`,
      
      config
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error al obtener generos:", error);
    return error;
  }
};
