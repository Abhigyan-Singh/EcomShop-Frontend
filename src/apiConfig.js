import envConfig from './environments/config';

export const config = {
  baseUrl: envConfig.url
};

export const API = {
  facilities: '/api/facilities/',
  authenticate: '/authenticate',
  userinfo: '/userinfo',
  search: '/product/search',
  productDetails: '/productn/product/', // then id
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
  add_to_cart: '/cart/addtocart',
  get_cart_items: '/cart/getCartItems',
  filter_products: '/productn/findbyarea1/101620/1/10/brand/asc',
  meals: '/productn/meals/',
  bestsellers: '/productn/bestsellers/'
};

export const CookiesAge = 604800;

//http://localhost:8009/productn/searchbyname/{productName}/{facilityId}/{pageno}/{itemCount}