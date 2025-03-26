import axios from "axios";
import { baseurl } from "../utils/baseurl";
export const getProviders = async () => {
    try {
      const token = localStorage.getItem('authResponse');
      
      if (!token) {
        throw new Error('Token no encontrado');
      }

      const config = {
        headers: {
          'tgwr_token': token, 
        }
      };
  
      const response = await axios.get(`${baseurl}/providers/all`, config); 
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error al obtener proveedores:", error);
      return error;
    }
  };


  export const createProvider = async (formData) => {
    try {
      const response = await axios.post(`${baseurl}/providers/register`, formData);
      console.log(response);
      return response;
    } catch (error) {
      return error;
    }
  };
  


  
