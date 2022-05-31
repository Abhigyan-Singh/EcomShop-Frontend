import apiClient from './api';
import { API, config } from 'apiConfig';

export const search = (productName, facilityId, bannerId, pageNo, itemOnPageCount) => {
  return apiClient.get(
    `${config.baseUrl}${API.search}/${productName}/${facilityId}/${bannerId}/${pageNo}/${itemOnPageCount}`
  );
};

export const productDetails = (productId) => {
  return apiClient.get(API.productDetails + productId);
};

export const previouslyPurchased = () => {
  return apiClient.get(config.baseUrl + API.previous_purchased);
};



//http://localhost:8009/productn/searchbyname/baby/500/1/100

