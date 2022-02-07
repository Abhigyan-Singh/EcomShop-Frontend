import axios from 'axios';
import { Cookies } from 'react-cookie';
import config  from '../environments/config'


const apiClient2 = axios.create({
    baseURL: config.url,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': config,
    }
  });
  
  apiClient2.interceptors.request.use(
    (config) => {
      const cookies = new Cookies();
      const jwt = cookies.get('user');
      if (jwt) {
        config.headers['Authorization'] = jwt.token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );



export const legacy = () => {
  return apiClient2.post('https://shop.coborns.com/ajaxauthenticateuser'); 
};

