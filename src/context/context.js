import { createContext, useContext, useReducer, useState } from 'react';
import { mockData } from 'composites/home-get-started.js';
import { cartReducer, itemReducer, favoriteReducer } from './reducers';
import useFetch from '../hooks/useFetch';
import queryString from 'query-string';

const Cart = createContext();
export const Context = ({ children }, data) => {
  const items = { data };
  const [state, dispatch] = useReducer(cartReducer, {
    data: items,
    cart: []
  });

  const [favorites, dispatchFavorites] = useReducer(favoriteReducer, {
    favorites: []
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
        dispatchFavorites
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
