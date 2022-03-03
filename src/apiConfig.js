import  envConfig from './environments/config';

export const config = {
  baseUrl: envConfig.url
};

export const API = {
  facilities: '/api/facilities/',
  authenticate: '/authenticate',
  search: '/product/search',
  productDetails: '/product/', // then id
  grocery_tree: '/grocery/tree/5/PRODUCTS/',
  in_store_services: '/api/stores/find/',
  add_favorite: '/productlist/save',
  delete_favorite: '/productlist/deletefavProduct/',
  all_favorite: '/productlist/favProduct',
  all_user_list: '/userList/all',
  all_user_list_details: '/userlistitems/all/',
  save_list_Details: '/userlistitems/save/',
  list_save: '/userList/save',
  previous_purchased: '/producthistorylist/productHistoryDetails',
  drop_down_filter: '/productn/findbyarea1/',
  add_to_cart:'/cart/addtocart'
};

export const CookiesAge = 604800;
