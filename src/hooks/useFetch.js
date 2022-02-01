import { useState, useEffect, useCallback } from 'react';
import { search } from 'services/search';
<<<<<<< HEAD
=======
import { getAllFavorites } from 'services/favorites'
>>>>>>> 3d4f7d33347d7f11971f383d8f6a6add0836da52
const facilityId = 2037;

function useFetch(query, page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  console.log(query);
  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const res = await search(query, facilityId, page);
<<<<<<< HEAD
      if (res) {
        await setList((prev) => [
          ...new Set([...prev, ...res.data.suggestionList])
        ]);
=======
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
            return ({ ...each, favorite })
          })
          return [...new Set(formattedListData)];
        });
>>>>>>> 3d4f7d33347d7f11971f383d8f6a6add0836da52
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
