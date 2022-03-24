import { config, API } from 'apiConfig';
import apiClient from './api';
import { CartState } from '../context/context';
import { Cookies } from 'react-cookie';

export const addtocart = (userName, productId, quantity, facilityId) => {
  return apiClient.get(
    `${config.baseUrl}${API.add_to_cart}/${userName}/${productId}/${quantity}/${facilityId}`
  );
};

export const getCartData = (userName) => {
  return apiClient.get(`${config.baseUrl}${API.get_cart_items}/${userName}`);
};

const useCart = () => {
  const { dispatch } = CartState();
  const cookies = new Cookies();
  const jwt = cookies.get('user');

  const getCartDetails = async (userName) => {
    const cartData = await getCartData(jwt?.userName ? jwt.userName : userName);
    const cart = cartData.data.map((each) => ({
      ...each.id.product,
      currentPrice: each.itemTotal,
      qty: each.quantityInCart
    }));
    dispatch({ type: 'SET_CART_DATA', payload: cart });
  };

  const updateCart = async (item) => {
    await addtocart(jwt?.userName, item.productId, 1, 2037);
    getCartDetails();
  };
  return {
    updateCart,
    getCartDetails
  };
};

export default useCart;
