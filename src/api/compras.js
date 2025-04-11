import axios from "axios";
import { baseurl, token } from "../utils/baseurl";
export const getBuys = async () => {
    try {
      const config = token();
      const response = await axios.get(`${baseurl}/buy_books/all`, config);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error al obtener compras:", error);
      return error;
    }
  };
  
  export const putBuys = async (formData) => {
    try {
      const config = token();
      const response = await axios.put(
        `${baseurl}/buy_books/edit/${formData.id}`,
        formData,
        config
      );
      console.log("desde el endpoint de compra editando");
      console.log(formData);
      console.log(response);
      return response;
    } catch (error) {
      return error;
    }
  };
export const createBuys = async (formData) => {
    try {
      const config = token();
      const response = await axios.post(
        `${baseurl}/buy_books/register`,
        formData,config
      );
      console.log(response);
      return response;
    } catch (error) {
      return error;
    }
  };
  