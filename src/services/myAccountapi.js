import apiClient from './api';
import { API, config } from 'apiConfig';

export const addressDetails = (name) => {
  return apiClient.get(config.baseUrl + API.myAccount_Address + name);
};

export const StateArray = (FacilityId) => {
  return apiClient.get(config.baseUrl + API.state_address + FacilityId);
};
export const BuildingsArray = () => {
  return apiClient.get(config.baseUrl + API.buildings_address);
};

export const AddressValidation = (payload) => {
  return apiClient.post(API.addressValidation, payload);
};
export const getdeliveryaddress = (facilityId, payload) => {
  return apiClient.post(API.deliveryaddress + facilityId, payload);
};
export const AddressWeekdays = () => {
  return apiClient.get(config.baseUrl + API.weekdays);
};

export const AddressopeningHours = (subRouteId) => {
  return apiClient.get(config.baseUrl + API.openingHours + subRouteId);
};
export const updateAccount = (name,payload) => {
  return apiClient.put(config.baseUrl + API.update_account + name,payload);
};