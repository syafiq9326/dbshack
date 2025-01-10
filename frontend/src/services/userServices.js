import axios from "axios";

const API_URL = "http://localhost:3001";

export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users/getAllUsers`);
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

export const fetchProductsByUser = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/users/${userId}/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products by user:", error);
        throw error;
    }
};
