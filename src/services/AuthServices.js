import axios from "axios";

const API_URL = "http://78.109.200.116:1370/api/Authenticate";

const RegisterUserApi = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/RegisterUser`, userData);
    return response.data.success;
  } catch (error) {
    throw new Error(error)
  }
}

export default { RegisterUserApi }