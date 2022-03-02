import { config, API } from 'apiConfig';
import apiClient from './api';

const filter = (paretnAreaCode, pageNo, brand, asc) => {
  return apiClient.get(API.drop_down_filter, {
    params: {
      paretnAreaCode: paretnAreaCode,
      pageNo: pageNo,
      brand: brand,
      asc: asc
    }
  });
};

export default filter;
