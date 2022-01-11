import apiClient from './api';
import { API, config } from 'apiConfig';

export const search = (searchKey, facilityId = 2037, page = 2) => {
  return apiClient.get(API.search, {
    params: {
      searchKey: searchKey,
      facilityId: facilityId,
      currentPageNumber: page
    }
  });
};

export const productDetails = (productId) => {
  return apiClient.get(API.productDetails + productId);
};
