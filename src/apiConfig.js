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
  all_user_list: '/userList/all',
  all_user_list_details: '/userlistitems/all/',
  save_list_Details: '/userlistitems/save/',
  list_save: '/userList/save',
  previous_purchased: '/producthistorylist/productHistoryDetails'
};

export const CookiesAge = 604800;
