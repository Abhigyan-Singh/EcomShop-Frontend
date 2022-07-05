import apiClient from './api';
import { API, config } from 'apiConfig';

export const search = (searchKey, facilityId, currentPageNumber) => {
  return apiClient.get(
    `${config.baseUrl}${API.search}?pageSize=1000&searchKey=${searchKey}&facilityId=${facilityId}&currentPageNumber=${currentPageNumber}`
  );
};

export const productDetails = (productId) => {
  return apiClient.get(API.productDetails + productId);
};

export const previouslyPurchased = () => {
  return apiClient.get(config.baseUrl + API.previous_purchased);
};


