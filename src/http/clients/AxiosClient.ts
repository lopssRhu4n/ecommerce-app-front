import axios from 'axios';
import { useAuthStore } from '@/stores/AuthStore';

const authStore = useAuthStore();

const baseURL = 'http://localhost/api';

const axiosInstance = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use(
  (config) => {
    authStore.checkIsLogged();
    const token = authStore.apiToken;
    if (token) config.headers = { ...config.headers, Authentication: 'Bearer ' + token };
    return config;
  },
  (error) => {
    console.log(error);
  },
);

export default axiosInstance;
