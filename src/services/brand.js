import { config, API } from 'apiConfig';
import apiClient from './api';

export const getOwnBrands = () => {
    return apiClient.get(config.baseUrl + API.own_brand);
};

export const getProductsByBrandName = (productname) => {
    return apiClient.get(config.baseUrl + API.products_by_brand_name + productname);
};
