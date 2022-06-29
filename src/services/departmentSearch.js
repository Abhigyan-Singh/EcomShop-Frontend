import apiClient from './api';
import { API, config } from 'apiConfig';

export const departments = (currentPageNumber, facilityId, areaId) => {
  return apiClient.get(
    `${config.baseUrl}${API.departments}?sortBy=&sortOrder=&currentPageNumber=${currentPageNumber}&size=100&catalog=PRODUCTS&facilityId=${facilityId}&locationCode=NAV_CATALOG&areaId=${areaId}`
  );
};
//areasolrsearch?catalog=PRODUCTS&facilityId=605&locationCode=NAV_CATALOG&areaId=100152
