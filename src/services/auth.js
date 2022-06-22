import { config, API } from 'apiConfig';
import apiClient from './api';

export const authenticate = (payload) => {
  return apiClient.post(API.authenticate, payload);
};

export const userInfoService = () => {
  return apiClient.get(API.userinfo);
};
export const ajaxauthenticateuser = (payload) => {// authenticate user in legacy system.
  return apiClient.post(API.ajaxauthenticateuser, payload);
}