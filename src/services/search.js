import apiClient from './api';
import { API, config } from 'apiConfig';


export const search = (searchKey, facilityId = 2037, page = 2) => {
  return apiClient.get(API.search, {
    params: {
      searchKey: searchKey,
      facilityId: facilityId,
      currentPageNumber: page,
      //itemCount: count
    }
  });
};

// export const search = (productName, facilityId = 500, pageno = 1, itemCount = 1) => {
//   return apiClient.get( `${config.baseUrl}${API.search}/${productName}/${facilityId}/${pageno}/${itemCount}`);
// };

export const productDetails = (productId) => {
  return apiClient.get(API.productDetails + productId);
};

export const previouslyPurchased = () => {
  return apiClient.get(config.baseUrl + API.previous_purchased);
};



//http://localhost:8009/productn/searchbyname/baby/500/1/100

//http://localhost:8009/productn/searchbyname/{productName}/{facilityId}/{pageno}/{itemCount}
