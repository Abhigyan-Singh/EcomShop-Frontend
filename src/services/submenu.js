import { config, API } from 'apiConfig';
import apiClient from './api';

export const subMenu = (id) => {
  return apiClient.get('http://localhost:8009' + API.facilities + id);
};
