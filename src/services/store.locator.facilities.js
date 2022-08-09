import { config, API } from 'apiConfig';
import apiClient from './api';

export const searchFacilities = (id) => {
    return apiClient.get(
      `${config.baseUrl}${API.store_locator_facilities}?id=${id}`
    );
  };
  