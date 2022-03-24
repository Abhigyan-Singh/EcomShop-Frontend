import { config, API } from 'apiConfig';
import apiClient from './api';
import { useCookies } from 'react-cookie';
import { CartState } from '../context/context';

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
  const [cookies] = useCookies(['user']);
  const { user } = cookies;

  const getCartDetails = async (userName) => {
    const cartData = await getCartData(
      user?.userName ? user.userName : userName
    );
    const cart = cartData.data.map((each) => ({
      ...each.id.product,
      currentPrice: each.itemTotal,
      qty: each.quantityInCart
    }));
    dispatch({ type: 'SET_CART_DATA', payload: cart });
  };

  const updateCart = async (item) => {
    await addtocart(user?.userName, item.productId, 1, 2037);
    getCartDetails();
  };
  return {
    updateCart,
    getCartDetails
  };
};

export default useCart;
