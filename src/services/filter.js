import { API, config } from 'apiConfig';
import apiClient from './api';

export const filterProducts = (page, size, facilityId, areaId, facetName) => {
  return apiClient.get(`${config.baseUrl}${API.filter_products}?page=${page}&size=${size}&catalog=PRODUCTS&facilityId=${facilityId}&locationCode=NAV_CATALOG&areaId=${areaId}&facetName=${facetName.join(',')}`);
};
