import { config, API } from 'apiConfig';
import apiClient from './api';

export const cartPage = (paretnAreaCode, pageNo, brand, asc) => {
  return apiClient.post('http://localhost:8009' + API.cart_page + paretnAreaCode + '/' + pageNo + '/' + brand + '/' + asc);
};

