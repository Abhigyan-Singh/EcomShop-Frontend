import { config, API } from 'apiConfig';
import apiClient from './api';

export const allStores = (id) => {
  return apiClient.get(config.baseUrl + API.facilities + add_to_cart + '/' + 'DFEHR' + '/' + parentAreaCode  + '/' + pageNo);
};
