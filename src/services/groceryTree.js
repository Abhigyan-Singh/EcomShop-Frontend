import { API, config } from 'apiConfig';
import apiClient from './api';

export const grocery = (area) => {
  return apiClient.get('http://localhost:8009' + API.grocery_tree + area); //config.baseUrl
};

