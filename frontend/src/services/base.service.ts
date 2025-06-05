import axios from 'axios';

const BASE_URL = 'http://localhost:3200/api';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add request interceptor to handle auth token
// axiosInstance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// Add response interceptor to handle errors
// axiosInstance.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if (error.response?.status === 401) {
//             localStorage.removeItem('token');
//         }
//         return Promise.reject(error);
//     }
// );

const baseService = {
    async get(endpoint, params = {}) {
        try {
            const response = await axiosInstance.get(endpoint, { params });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    },

    async post(endpoint, data = {}) {
        try {
            const response = await axiosInstance.post(endpoint, data);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    },

    async put(endpoint, data = {}) {
        try {
            const response = await axiosInstance.put(endpoint, data);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    },

    async delete(endpoint) {
        try {
            const response = await axiosInstance.delete(endpoint);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    },

    handleError(error) {
        const errorMessage = error.response?.data?.message || error.message || 'An error occurred';
        console.error('API Error:', errorMessage);
        throw new Error(errorMessage);
    }
};

export default baseService;