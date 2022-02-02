
import apiClient from './api';

export const grocery = () => {
  return apiClient.get('http://localhost:8009/grocery/tree/5/PRODUCTS/4433');
};
