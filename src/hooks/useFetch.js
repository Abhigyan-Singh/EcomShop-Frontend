import { useState, useEffect, useCallback } from 'react';
import { search } from 'services/search';
import { usefavoriteApi } from 'services/favorites';
import { useCookies } from 'react-cookie';
import { CartState } from 'context/context';

const bannerId = 1

function useFetch(query, pageNo) {
  const { favorites, state: { progress }, dispatch } = CartState();
  const { fetchFavorites } = usefavoriteApi();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [data, setData] = useState();
  const [cookies, setCookie] = useCookies(['user']);
  const { facility } = cookies;
  const facilityId = facility?.facilityId ? facility?.facilityId : 2037;
  const sendQuery = useCallback(async () => {
    try {
      console.log("STARTED")
      setLoading(true);
      setError(false);
      const res = await search(query, facilityId, 0);
      let favoritesData;
      if (favorites.favorites.length === 0 && favorites.progress === false) {
        await fetchFavorites();
      }
      favoritesData = favorites.favorites;
      if (res && res.data.suggestionList) {
        //setList(res.data.productList)
        setList((prev) => {
          const newListData = [...prev, ...res.data.suggestionList];
          const formattedListData = newListData.map((each) => {
            let favorite = false;
            favoritesData.map((val) => {
              if (!favorite && val.productId === each.productId) {
                favorite = true;
              }
            });
            return { ...each, favorite };
          });
          return [...new Set(formattedListData)];
        });
      }
      setLoading(false);
      dispatch({ type: 'SET_CART_PROGRESS', payload: false })
    } catch (err) {
      console.log("HIT ERROR")
      setError(err);
      console.log("ERROR", err);
      setLoading(false);
      dispatch({ type: 'SET_CART_PROGRESS', payload: false });
    }
  }, [query, facilityId]);

  useEffect(() => {
    if (query && progress === false) {
      console.log("QUERY", query)
      dispatch({ type: 'SET_CART_PROGRESS', payload: true });
      sendQuery(query)
    }
  }, [query, sendQuery, progress, dispatch]);
  return { loading, error, list };
}

export default useFetch;
