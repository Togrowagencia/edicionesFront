import axios from "axios";
import { baseurl, token } from "../utils/baseurl";

export const getGenders = async () => {
  try {
    const config = token();

    const response = await axios.get(`${baseurl}/genders/all`, config);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error al obtener generos:", error);
    return error;
  }
};

export const createGender = async (formData) => {
  try {
    const config = token();

    const response = await axios.post(
      `${baseurl}/genders/register`,
      formData,
      config
    );
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const putGender = async (formData) => {
  try {
    const config = token();

    const response = await axios.put(
      `${baseurl}/genders/edit/${formData.id}`,
      formData,
      config
    );
    return response;
  } catch (error) {
    return error;
  }
};
