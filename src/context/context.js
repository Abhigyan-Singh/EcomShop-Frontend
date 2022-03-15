import { createContext, useContext, useReducer, useState, useEffect } from 'react'
import { mockData } from 'composites/home-get-started.js'
import { cartReducer, itemReducer } from "./reducers"
import useFetch from '../hooks/useFetch';
import queryString from 'query-string';


const Cart = createContext();
export const Context = ({children}) => {
    const params = window.location.href.split('?')[1];
    const { text: searchText } = queryString.parse(params);
    const [query, setQuery] = useState(searchText);
    const { list } = useFetch(query)

    const handleChange = (e) => {
        setQuery(e?.target?.value);
      };

      useEffect(() => {
        handleChange();
      }, []);
     
    const datas = {mockData}
    const [state, dispatch]= useReducer(cartReducer, {
        data: list,
        cart: []
    });

    const [itemState, itemDispatch]= useReducer(itemReducer, {
      byAmys: false,
      byBanquet: false,
      byAll: false,
      byLocal: false,
      byOrganic: false,
      byGlutenFree: false,
      byNew: false,
      bySale: false,
      byName: "",
      byPrice: "",
      bySize: ""
    });
    return <Cart.Provider value={{ state, dispatch, itemState, itemDispatch }}>{children}</Cart.Provider>
};

export const CartState = () => {
    return useContext(Cart)
};


export default Context;