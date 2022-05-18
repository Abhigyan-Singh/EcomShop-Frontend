import { config, API } from 'apiConfig';
import apiClient from './api';

export const subMenu = (id) => {
  return apiClient.get(config.baseUrl + API.facilities + id);
};
