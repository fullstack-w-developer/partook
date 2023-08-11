import axios from "axios";

const API_URl = "http://78.109.200.116:1370/api/Authenticate"

const LoginServices = async () => {
    try {
        const response = await axios.post(`${API_URl}/login`)
    } catch (error) {
        throw new Error(error);
    }
}

export default { LoginServices }