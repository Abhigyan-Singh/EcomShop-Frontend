import { createContext, useContext, useReducer, useState } from 'react';
import { mockData } from 'composites/home-get-started.js';
import { cartReducer, itemReducer, favoriteReducer ,userReducer} from './reducers';
import useFetch from '../hooks/useFetch';
import queryString from 'query-string';

const Cart = createContext();
export const Context = ({ children }, data) => {
  const items = { data };
  const [state, dispatch] = useReducer(cartReducer, {
    data: items,
    cart: [],
    tempCart: [],
    postlogin: false,
    progress: false,
  });

  const [favorites, dispatchFavorites] = useReducer(favoriteReducer, {
    favorites: [],
    progress: false
  });

  const [userStore, dispatchUser] = useReducer(userReducer, {
    user: {}
  });

  const [itemState, itemDispatch] = useReducer(itemReducer, {
    byAmys: false,
    byBanquet: false,
    byAll: false,
    byLocal: false,
    byOrganic: false,
    byGlutenFree: false,
    byNew: false,
    bySale: false,
    byName: '',
    byPrice: '',
    bySize: ''
  });
  return (
    <Cart.Provider
      value={{
        state,
        dispatch,
        itemState,
        itemDispatch,
        favorites,
        dispatchFavorites,
        userStore,
        dispatchUser
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
