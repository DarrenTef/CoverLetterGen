import axios from "axios";

const API_URL = 'http://localhost:3000/auth';

export const signUp = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, {email, password});
        return response.data;
    } catch (error) {
        throw error.response.data || error.message;
    }
};

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {email, password});
        return response.data;
    } catch (error) {
        throw error.response.data || error.message;
    }
};



window.login = login;