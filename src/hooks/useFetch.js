import { useState, useEffect, useCallback } from 'react';
import { search } from 'services/search';
import { getAllFavorites } from 'services/favorites';
const facilityId = 2037
const bannerId = 1

function useFetch(query, pageNo) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [data, setData] = useState()
  const [itemOnPageCount, setItemOnPageCount] = useState(6)


  const sendQuery = useCallback( async () => {
    try {
      console.log("STARTED")
      setLoading(true);
      setError(false);
      const res = await search(query, facilityId, bannerId, pageNo, itemOnPageCount);
      const favoritesRes = await getAllFavorites();
      const favorites = favoritesRes.data;
      if (res && res.data.productList) {
        console.log("RESPONSE",res.data.productList)
        setList(res.data.productList)
        // setList((prev) => {
        //   const newListData = [...prev, ...res.data.productList];
        //   const formattedListData = newListData.map((each) => {
        //     let favorite = false;
        //     favorites.map((val) => {
        //       if (!favorite && val.productId === each.productId) {
        //         favorite = true;
        //       }
        //     });
        //     return { ...each, favorite };
        //   });
        //   return [...new Set(formattedListData)];
        // });
        setLoading(false);
      }
    } catch (err) {
      console.log("HIT ERROR")
      setError(err);
      console.log("ERROR", err)
    }
  }, [query, facilityId, pageNo, itemOnPageCount]);

  useEffect(() => {
    if (query) {
      console.log("QUERY", query)
      sendQuery(query)
    }
  }, [query, sendQuery, pageNo]);

  return { loading, error, list };
}

export default useFetch;
