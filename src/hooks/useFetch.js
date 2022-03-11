import { useState, useEffect, useCallback } from 'react';
import { search } from 'services/search';
import { getAllFavorites } from 'services/favorites'
import { useCart } from "react-use-cart";
const facilityId = 2037;

function useFetch(query, page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  //const { addItem } = useCart();
  


  console.log(query);
  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const res = await search(query, facilityId, page);
      const favoritesRes = await getAllFavorites();
      const favorites = favoritesRes.data;
      if (res && res.data.suggestionList) {
        await setList((prev) => { 
          const newListData = [...prev, ...res.data.suggestionList];
          const formattedListData = newListData.map((each) => {
            let favorite = false;
             favorites.map(val => {
              if (!favorite && val.productId === each.productId) {
                favorite = true;
              }
            })
            //addItem(list)
            return ({ ...each, favorite })
          })
          return [...new Set(formattedListData)];
        });
        setLoading(false);
      }
    } catch (err) {
      setError(err);
    }
  }, [query, page]);

  useEffect(() => {
    if (query) {
      sendQuery(query);
    }
  }, [query, sendQuery, page]);

  return { loading, error, list };
}

export default useFetch;
