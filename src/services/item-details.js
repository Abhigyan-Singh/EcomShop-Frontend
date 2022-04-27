import { config, API } from 'apiConfig';
import apiClient from './api';

export const getAllMeals = (productId) => {
  return apiClient.get(config.baseUrl + API.meals + productId);
};

export const getBestSellers = (productId) => {
  return apiClient.get(config.baseUrl + API.bestsellers + productId);
};
