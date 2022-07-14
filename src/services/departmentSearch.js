import apiClient from './api';
import { API, config } from 'apiConfig';

export const departments = (currentPageNumber, facilityId, areaId) => {
  return apiClient.get(
    `${config.baseUrl}${API.departments}?sortBy=&sortOrder=&currentPageNumber=${currentPageNumber}&size=500&catalog=PRODUCTS&facilityId=${facilityId}&locationCode=NAV_CATALOG&areaId=${areaId}`
  );
};

export const onSale = (page, facilityId, areaId) => {
  return apiClient.get(
    `${config.baseUrl}${API.departments}?facilityId=2025&catalog=LISTS&areaId=102188&sortBy=productname_sortable%20ASC&page=1&size=100&locationCode=ALL_SPECIALS`
  );
};

export default onSale;
