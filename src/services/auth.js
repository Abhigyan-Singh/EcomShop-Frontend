import axios from 'axios';
import { config, API } from 'apiConfig';
import apiClient from './api';

export const authenticate = (payload) => {
  return apiClient.post(config.baseUrl + API.authenticate, payload);
};
