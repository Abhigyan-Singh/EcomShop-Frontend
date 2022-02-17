import { config, API } from 'apiConfig';
import apiClient from './api';

export const allStores = (id) => {
  return apiClient.get(config.baseUrl + API.facilities + id);
};
