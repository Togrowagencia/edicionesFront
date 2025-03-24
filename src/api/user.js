import axios from "axios";
import { baseurl } from "../utils/baseurl";


export const getUsers = async () => {
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
  
      const response = await axios.get(`${baseurl}/users/all`, config); 
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      return error;
    }
  };


  export const createUsers = async (formData) => {
    try {
      const response = await axios.post(`${baseurl}/users/register`, formData);
      console.log(response);
      return response;
    } catch (error) {
      return error;
    }
  };
  
  
export const getUserById = async (Id) => {
  try {
    const response = await axios.post(`${baseurl}/users/register`, formData);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};



  export const  putUser = async (formData) => {
    console.log(formData);
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
      const response = await axios.put(`${baseurl}/users/edit/${formData.id}`,formData,config);
      console.log("aaaaaaaaaaa")
      console.log(formData)
      console.log(response);    
      return response;
    } catch (error) {
      return error;
    }
  };

  export const deleteUser = async (formData) => {
    try {
      const response = await axios.post(`${baseurl}/users/register`, formData);
      console.log(response);
      return response;
    } catch (error) {
      return error;
    }
  };
  



  


