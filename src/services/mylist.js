import { config, API } from 'apiConfig';
import apiClient from './api';

export const addList = (payload) => {
  return apiClient.post(config.baseUrl + API.list_save, payload);
};

export const getAllList = () => {
    return apiClient.get(config.baseUrl + API.all_user_list);
  };