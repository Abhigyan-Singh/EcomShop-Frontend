import apiClient from './api';
import { API, config } from 'apiConfig';



  export const cardDetails = (name) => {
    return apiClient.get(config.baseUrl + API.carddetails + name +API.cradit_card); //config.baseUrl
  };
  export const ebtDetails = (name) => {
    return apiClient.get(config.baseUrl + API.carddetails + name +API.ebt_card); //config.baseUrl
  };
  export const DeleteCards = (name,id) => {
    return apiClient.delete(config.baseUrl + API.carddetails + name +API.delete_card+id); //config.baseUrl
  };