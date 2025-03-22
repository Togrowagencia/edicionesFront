import axios from "axios";
import { baseurl } from "../utils/baseurl";


export const getContent = async () => {
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
  
      const response = await axios.get(`${baseurl}/content/all`, config); 
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error al obtener autores:", error);
      return error;
    }
  };
