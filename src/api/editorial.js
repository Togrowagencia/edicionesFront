import axios from "axios";
import { baseurl } from "../utils/baseurl";


export const getPublishing = async () => {
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
  
      const response = await axios.get(`${baseurl}/publishing/all`, config); 
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error al obtener editoriales:", error);
      return error;
    }
  };
