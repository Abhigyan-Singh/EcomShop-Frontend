import apiClient from './api';
import { API, config } from 'apiConfig';

export const addressDetails = (name) => {
  return apiClient.get(config.baseUrl + API.myAccount_Address + name);
};

export const StateArray = (FacilityId) => {
  return apiClient.get(config.baseUrl + API.state_address + FacilityId ); 
};
export const BuildingsArray = (FacilityId) => {
  return apiClient.get(config.baseUrl + API.buildings_address  ); 
};