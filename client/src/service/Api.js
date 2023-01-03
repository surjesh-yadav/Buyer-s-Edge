import axios from "axios";
const URL = "http://localhost:4001";

export const authenticateSignUp = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error SignUp krte time:-", error);
  }
};

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error Login krte time:-", error);
    return error.response;
  }
};
