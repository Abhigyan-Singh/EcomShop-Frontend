import apiClient from './api';
import { API, config } from 'apiConfig';

export const search = (searchKey, facilityId, page) => {
  return apiClient.get(config.baseUrl + API.search, {
    params: { searchKey: searchKey, facilityId: facilityId, page: page }
  });
};

export const productDetails = (productId) => {
  return apiClient.get(config.baseUrl + API.productDetails + productId);
};