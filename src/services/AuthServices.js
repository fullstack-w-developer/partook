import axios from "axios";

const API_URl = "http://78.109.200.116:1370/api/Authenticate";

const RegisterUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URl}/RegisterUser`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error)
  }
}

export default { RegisterUser }