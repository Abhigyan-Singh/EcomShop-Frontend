import apiClient from './api';
import { API, config } from 'apiConfig';

export const inStoreServices = (facilityId) => {
  return apiClient.get(config.baseUrl + API.in_store_services + facilityId);
};
