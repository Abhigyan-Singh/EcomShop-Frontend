import { API, config } from 'apiConfig';
import apiClient from './api';

export const grocery = (area) => {
  return apiClient.get(config.baseUrl + API.grocery_tree + area); //config.baseUrl
};
