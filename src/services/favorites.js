import { config, API } from 'apiConfig';
import apiClient from './api';

export const addFavorite = (payload) => {
  return apiClient.post(config.baseUrl + API.add_favorite, payload);
};

export const deleteFavorite = (payload) => {
    return apiClient.delete(config.baseUrl + API.delete_favorite, payload);
  };

export const getAllFavorites = () => {
    return apiClient.get(config.baseUrl + API.all_favorite);
  };