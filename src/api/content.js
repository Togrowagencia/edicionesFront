import axios from "axios";
import { baseurl, token } from "../utils/baseurl";

export const getContent = async () => {
  try {
    const config = token();

    const response = await axios.get(`${baseurl}/content/all`, config);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error al obtener autores:", error);
    return error;
  }
};

export const createContent = async (formData) => {
  try {
    const config = token();
    const response = await axios.post(
      `${baseurl}/content/register`,
      formData,config
    );
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const putContent = async (formData) => {
  try {
    const config = token();
    const response = await axios.put(
      `${baseurl}/content/edit/${formData.id}`,
      formData,
      config
    );
    return response;
  } catch (error) {
    return error;
  }
};
