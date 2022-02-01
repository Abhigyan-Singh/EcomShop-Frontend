import { config, API } from 'apiConfig';
import apiClient from './api';

export const allStores = (id) => {
  return apiClient.get('http://mp2-dev-web2.cobornsinc.local:8009/api' + API.facilities + id);
};
