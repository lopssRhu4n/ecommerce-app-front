import axios from 'axios';
import { useAuthStore } from '@/stores/AuthStore';

const baseURL = 'http://localhost/api';

const axiosInstance = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('apiToken');
    const authStore = useAuthStore();
    if (token) {
      config.headers = { ...config.headers, Authentication: `Bearer ${token}` };
      authStore.changeIsLogged(true);
      authStore.apiToken = token;
    }
    return config;
  },
  (error) => {
    console.log(error);
  },
);

export default axiosInstance;
