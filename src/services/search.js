import apiClient from './api';
import { API, config } from 'apiConfig';

export const search = (searchKey, facilityId, currentPageNumber) => {
  return apiClient.get(
    `${config.baseUrl}${API.search}?searchKey=${searchKey}&facilityId=${facilityId}&currentPageNumber=${currentPageNumber}`
  );
};

// export const search = (productName, facilityId, pageno, count) => {
//   return apiClient.get(config.baseUrl + API.search, {
//     params: {
//       productName: productName,
//       facilityId: facilityId,
//       currentPageNumber: pageno,
//       itemCount: count
//     }
//   });
// };

//http://localhost:8009/product/search?searchKey=baby&facilityId=500&currentPageNumber=0

export const productDetails = (productId) => {
  return apiClient.get(API.productDetails + productId);
};

export const previouslyPurchased = () => {
  return apiClient.get(config.baseUrl + API.previous_purchased);
};


