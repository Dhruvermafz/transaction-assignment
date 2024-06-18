import axios from "axios";

// Use environment variables for the API host
export const host = "http://localhost:5000";

// Set the base URL for axios
axios.defaults.baseURL = host;

// Function to set or remove the authorization token
export const setToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

// Generic function to make API calls
export const call = async (method, path, data) => {
  try {
    const response = await axios[method](path, data);
    return response.data;
  } catch (error) {
    // Handle error appropriately
    console.error("API call error:", error);
    throw error; // Re-throw the error for further handling
  }
};

export default {
  setToken,
  call,
  host,
};
