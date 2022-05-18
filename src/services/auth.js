import { config, API } from 'apiConfig';
import apiClient from './api';

export const authenticate = (payload) => {
  return apiClient.post(API.authenticate, payload);
};

export const userInfoService = () => {
  return apiClient.get(API.userinfo);
};
