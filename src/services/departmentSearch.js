import apiClient from './api';
import { API, config } from 'apiConfig';


export const departments = (sortBy, sortOrder, currentPageNumber, catalog, facilityId, locationCode, areaId, facetName) => {
  return apiClient.get(
    `${config.baseUrl}${API.departments}/${sortBy}/${sortOrder}/${currentPageNumber}/${catalog}/${facilityId}/${locationCode}/${areaId}/${facetName}`
  );
};

//-http://localhost:8009/product/areasolrsearch?sortBy=&sortOr
