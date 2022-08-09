import envConfig from './environments/config';

export const config = {
  baseUrl: envConfig.url
};

export const API = {
  departments: '/product/areasolrsearch',
  facilities: '/api/facilities/',
  authenticate: '/api/authenticate',
  ajaxauthenticateuser: '/osl/ajaxauthenticateuser',
  userinfo: '/userinfo',
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
  add_to_cart: '/cart/addtocart',
  add_to_guest_cart: '/cart/addtoguestcart',
  get_cart_items: '/cart/getCartItems',
  filter_products: '/product/areasolrsearch',
  meals: '/productn/meals/',
  bestsellers: '/productn/bestsellers/',
  ignore_cart: '/action/Ignore',
  replace_cart: '/action/Replace',
  merge_cart: '/action/Merge',
  default_facility: '/customer/',
  store_locator_facilities: '/address/facilities',
  own_brand: '/productn/findownbrand',
  products_by_brand_name: '/productn/findbybrand/',
  carddetails: '/payment-option/',
  cradit_card: '/credit-cards',
  ebt_card: '/ebt-cards',
  delete_card: '/cards/',
  myAccount_Address: '/address/addresses/',
  state_address: '/address/state/',
  buildings_address: '/address/buildings',
};

export const CookiesAge = 604800;

