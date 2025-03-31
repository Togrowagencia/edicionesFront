import axios from "axios";
import { baseurl, token } from "../utils/baseurl";

export const getClassification = async () => {
  try {
    const config = token();
    const response = await axios.get(`${baseurl}/classification/all`, config);
    console.log("aaaaaaaaaaaaaaaAAA");
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error al obtener Clasificaciones:", error);
    return error;
  }
};


export const createClasification = async (formData) => {
  try {
    const config = token();
    const response = await axios.post(
      `${baseurl}/classification/register`,
      formData,config
    );
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const putClassification = async (formData) => {
  try {
    const config = token();
    const response = await axios.put(
      `${baseurl}/classification/edit/${formData.id}`,
      formData,
      config
    );
    return response;
  } catch (error) {
    return error;
  }
};
