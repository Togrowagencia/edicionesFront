import axios from "axios";
import { baseurl,token } from "../utils/baseurl";

export const createUsers = async (formData) => {
  try {
    const config = token();
    const response = await axios.post(`${baseurl}/users/register`,config,formData);
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
