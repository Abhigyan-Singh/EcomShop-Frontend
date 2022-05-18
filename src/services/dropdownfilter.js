import { config, API } from 'apiConfig';
import apiClient from './api';

const filter = (parentAreaName, pageNo, brand, asc) => {
  return apiClient.post(API.drop_down_filter, {
    params: {
      parentAreaName: parentAreaName,
      pageNo: pageNo,
      asc: asc
    },
    body: {
      "lifestyleAndDietary": [""],
      "brand": [brand],
      "newAndSale": [""]
    },
  });
};

export default filter;
