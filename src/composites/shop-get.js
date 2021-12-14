import React, { useState, useRef, useEffect, useCallback } from 'react';
import useFetch from '../hooks/useFetch';
import queryString from 'query-string';
import Item from 'components/item/item';

function ShopGetPage() {
  const p = window.location.href.split('?')[1];
  const { text } = queryString.parse(p);
  const [query, setQuery] = useState(text);
  const [page, setPage] = useState(1);
  const { loading, error, list } = useFetch(query, page);
  const loader = useRef(null);

  const handleChange = (e) => {
    setQuery(e?.target?.value);
  };
  useEffect(() => {
    handleChange();
  }, []);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <div className="App">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
        {list.map((e, i) => (
          <Item item={e} key={i} />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <div ref={loader} />
    </div>
  );
}

export default ShopGetPage;
