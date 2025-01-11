import axios from "axios";

const API_URL = "http://localhost:3001";
export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json", // Set default content type
  },
});
// add a authorization headers if jwt_token is present
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export function makeRequest(url, options) {
  return axiosInstance(url, options)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return Promise.reject(err?.response?.data?.error ?? "Error");
    });
}
// auth
export function loginUser(email, password) {
  return makeRequest(`/users/login`, {
    method: "POST",
    data: { email, password },
  });
}
export function getCompanyDetails(companyId) {
  return makeRequest(`/companies/${companyId}`);
}
// export const fetchUsers = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/users/getAllUsers`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     throw error;
//   }
// };

// export const fetchProductsByUser = async (userId) => {
//   try {
//     const response = await axios.get(`${API_URL}/users/${userId}/products`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching products by user:", error);
//     throw error;
//   }
// };
