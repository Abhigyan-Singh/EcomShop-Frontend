import axios from 'axios';
import { Cookies } from 'react-cookie';
import config  from '../environments/config'



const apiClient = axios.create({
  baseURL: config.url,
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
