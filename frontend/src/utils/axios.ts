import axios from 'axios';
import { API_URL } from '../config-global.ts';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    // withXSRFToken:true,
    // headers:{
    //     'X-Requested-With': 'XMLHttpRequest',
    //     'Content-Type':'application/json; charset=utf-8',
    //     'Accept':'application/json; charset=utf-8',
    // },
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default axiosInstance;

// ----------------------------------------------------------------------

export const endpoints = {
    auth: {
        login: '/api/login',
        register: '/api/register',
    },
}
