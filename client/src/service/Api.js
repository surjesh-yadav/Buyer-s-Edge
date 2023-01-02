import axios from "axios";
const URL = "http://localhost:4001";
export const authenticateSignUp = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error SignUp API krte time:-", error);
  }
};
   