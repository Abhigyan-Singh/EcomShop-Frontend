import { useState, useEffect, useCallback } from 'react';
import { search } from 'services/search';
const facilityId =2037;

function useFetch(query, page) {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const res =await search(query,facilityId, page);
      if (res) {
        await setList((prev) => [...new Set([...prev, ...res.data])]);
        setLoading(false);
      }
    } catch (err) {
      setError(err);
    }
  }, [query, page]);

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, page]);

  return { loading, error, list };
}

export default useFetch;
