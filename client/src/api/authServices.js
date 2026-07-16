import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const signup = async (name, email, department, password, rePassword) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, {
      name,
      email,
      department,
      password,
      rePassword
    });
    return response.data;
  } catch (error) {
    console.error("Signup Error:", error.response?.data || error.message);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password
    });
    return response.data; // { user, token }
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    throw error;
  }
};