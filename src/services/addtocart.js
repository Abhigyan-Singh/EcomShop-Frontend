import { config, API } from 'apiConfig';
import apiClient from './api';

export const addtocart = (parentAreaCode, pageNo) => {
  return apiClient.get(config.baseUrl + API.add_to_cart + 'DFEHR' + parentAreaCode + pageNo);
};


export default addtocart;