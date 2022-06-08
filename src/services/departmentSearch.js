import apiClient from './api';
import { API, config } from 'apiConfig';


export const departments = (sortBy, sortOrder, currentPageNumber, catalog, facilityId, locationCode, areaId) => {
  return apiClient.get(
    `${config.baseUrl}${API.departments}/${sortBy}=&${sortOrder}=&currentPageNumber=${currentPageNumber}&${catalog}=PRODUCTS&facilityId=${facilityId}&${locationCode}=NAV_CATALOG&areaId=${areaId}`
  );
};

//http://localhost:8009/product/areasolrsearch?sortBy=&sortOrder=&currentPageNumber=1&catalog=PRODUCTS&facilityId=605&locationCode=NAV_CATALOG&areaId=100000&facetName=Earth's