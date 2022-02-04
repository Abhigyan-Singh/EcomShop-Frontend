import apiClient from './api';
import { API, config } from 'apiConfig';


export const inStoreServices = (facilityId) => {
  return apiClient.get('http://localhost:8009' + API.in_store_services + facilityId);
};


