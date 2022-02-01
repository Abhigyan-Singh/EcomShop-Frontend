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
<<<<<<< HEAD
=======

export const previouslyPurchased = () => {
  return apiClient.get(config.baseUrl + API.previous_purchased);
};
>>>>>>> 3d4f7d33347d7f11971f383d8f6a6add0836da52
