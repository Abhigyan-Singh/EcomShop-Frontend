import { config, API } from 'apiConfig';
import apiClient from './api';
import { useCookies } from 'react-cookie';
import { CartState } from '../context/context';


export const addToCarts = (userName, productId, qty, facilityId) => {
  return apiClient.get(
    `${config.baseUrl}${API.add_to_cart}/${userName}/${productId}/${qty}/${facilityId}`
  );
};

export const replaceCarts = (userName) => {
  return apiClient.get(
    `${config.baseUrl}${API.replace_cart}/${userName}`
  );
};
export const mergeCarts = (userName) => {
  return apiClient.get(
    `${config.baseUrl}${API.merge_cart}/${userName}`
  );
};
export const ignoreCarts = (userName) => {
  return apiClient.get(
    `${config.baseUrl}${API.ignore_cart}/${userName}`
  );
};

export const getCartData = (userName) => {
  return apiClient.get(`${config.baseUrl}${API.get_cart_items}/${userName}`);
};

const useCart = () => {
  const { dispatch } = CartState();
  const [cookies] = useCookies(['user']);
  const { userInfo } = cookies;
  const getCartDetails = async (userName, postLogin) => {
    const userNameFinal = userInfo?.userName ? userInfo.userName : userName;
    if (userNameFinal) {
      const cartData = await getCartData(userNameFinal);
      if (postLogin && cartData && cartData.data && cartData.data.length) {
        dispatch({ type: 'SET_POST_LOGIN', payload: true });
      } else {
        dispatch({ type: 'SET_POST_LOGIN', payload: false });
      }
      const cart = cartData.data.map((each) => ({
        currentPrice: each.itemTotal,
        qty: each.quantityInCart
      }));
      dispatch({ type: 'SET_CART_DATA', payload: cart });
    }
  };

  const updateCart = async (item) => {
    await addToCarts(userInfo?.userName, item.productId, 1, 2037);
    getCartDetails();
  };

  const replaceCart = async () => {
    await replaceCarts(userInfo?.userName);
    getCartDetails();
  };

  const mergeCart = async () => {
    await mergeCarts(userInfo?.userName);
    getCartDetails();
  };

  const ignoreCart = async () => {
    await ignoreCarts(userInfo?.userName);
    getCartDetails();
  };

  return {
    updateCart,
    getCartDetails,
    replaceCart,
    mergeCart,
    ignoreCart
  };
};

export default useCart;
