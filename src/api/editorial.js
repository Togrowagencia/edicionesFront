import axios from "axios";
import { baseurl, token } from "../utils/baseurl";

export const getPublishing = async () => {
  try {
    const config = token();
    const response = await axios.get(`${baseurl}/publishing/all`, config);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error al obtener editoriales:", error);
    return error;
  }
};

export const createPublishing = async (formData) => {
  try {
    const config = token();
    const response = await axios.post(
      `${baseurl}/publishing/register`,
      formData,
      config
    );
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const putPublishing = async (formData) => {
  try {
    const config = token();
    const response = await axios.put(
      `${baseurl}/publishing/edit/${formData.id}`,
      { name: formData.name },
      config
    );
    return response;
  } catch (error) {
    return error;
  }
};
