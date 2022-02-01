import axios from 'axios';
import { Cookies } from 'react-cookie';

const apiClient = axios.create({
  baseURL: 'http://mp2-dev-web2.cobornsinc.local:8009/',
  headers: {
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.request.use(
  (config) => {
    const cookies = new Cookies();
    const jwt = cookies.get('user');
    if (jwt) {
      config.headers['Authorization'] = 'Bearer ' + jwt.token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
