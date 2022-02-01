import { config, API } from 'apiConfig';
import apiClient from './api';

export const grocery = () => {
  return apiClient.get('http://mp2-dev-web2.cobornsinc.local:8009/grocery/tree/5/PRODUCTS/4433');
};
