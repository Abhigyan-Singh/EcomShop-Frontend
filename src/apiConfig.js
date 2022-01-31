import  envConfig from './environments/config';

export const config = {
  baseUrl: envConfig.url
};

export const API = {
  facilities: '/facilities/',
  authenticate: '/authenticate',
  search: '/product/search',
  productDetails: '/product/', // then id
  add_favorite: '/productlist/save',
  delete_favorite: '/productlist/deletefavProduct/',
  all_favorite: '/productlist/favProduct',
  previous_purchased: '/producthistorylist/productlist'
};

export const CookiesAge = 604800;
