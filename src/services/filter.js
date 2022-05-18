import { API, config } from 'apiConfig';
import apiClient from './api';

export const filterProducts = (payload) => {
  return apiClient.post(config.baseUrl + API.filter_products, payload); //config.baseUrl
};
