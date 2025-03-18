<<<<<<< HEAD
import axios from "axios";
import { baseurl } from "../utils/baseurl";

export const createUsers = async (formData) => {
  try {
    const response = await axios.post(`${baseurl}/users/register`, formData);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const login = async (user, password) => {
  const formData = {
    "username": user,
    "password": password
  }
  console.log(user, password);
  console.log(formData);
  try {
    const response = await axios.post(`${baseurl}/auth/login`,formData);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
=======
import axios from "axios";
import { baseurl } from "../utils/baseurl";



export const login = async (user, password) => {
  const formData = {
    "username": user,
    "password": password
  }
  console.log(user, password);
  console.log(formData);
  try {
    const response = await axios.post(`${baseurl}/auth/login`,formData);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
>>>>>>> 9654bd9 ( fix: se añade la carpeta de apis)
