import apiClient from './api';
import { API, config } from 'apiConfig';

const today = new Date()
export const search = (searchKey, facilityId, currentPageNumber) => {
  return apiClient.get(
    `${config.baseUrl}${API.search}?searchKey=${searchKey}&facilityId=${facilityId}&currentPageNumber=${currentPageNumber}`
  );
};
export const inStoreServices = () => {
  return fetch('https://api.yext.com/v2/accounts/2285947/entities/2023?api_key=78de6e2905bde12aaacc15e2662d4ec2&v=20220621')
};
