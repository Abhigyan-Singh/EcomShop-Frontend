import { config, API } from 'apiConfig';
import apiClient from './api';

export const grocery = (id) => {
  return apiClient.get('http://localhost:8009/grocery/tree/5/PRODUCTS/109794');
};
