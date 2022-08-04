import apiClient from './api';
import { API, config } from 'apiConfig';

export const addressDetails = (name) => {
    return apiClient.get(config.baseUrl + API.myAccount_Addredd + name ); 
  };