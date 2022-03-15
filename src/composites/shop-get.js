import React, { useState, useRef, useEffect, useCallback } from 'react';
import useFetch from '../hooks/useFetch';
import queryString from 'query-string';
import Item from 'components/item/item';
import { getAllList } from 'services/mylist';
import { CartState } from 'context/context';


function ShopGetPage() {
  const params = window.location.href.split('?')[1];
  const { text: searchText } = queryString.parse(params);
  const [query, setQuery] = useState(searchText);
  const [page, setPage] = useState(1);
  const { loading, error, list } = useFetch(query, page);
  const [listItems, setListItems] = useState([]);
  const loader = useRef(null);
 

  const getListItems = async () => {
    const res = await getAllList();
    setListItems(res.data);
  };

  const handleChange = (e) => {
    setQuery(e?.target?.value);
  };
  useEffect(() => {
    handleChange();
    getListItems();
    console.log("list", listItems)
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

  
  const { state: {data}, dispatch } = CartState()


  const { itemState: {      
    sort,
    byAmys,
    byBanquet,
    byBrand,
    byAll,
    byLocal,
    byOrganic,
    byGlutenFree,
    byNew,
    bySale,
    byName,
    byPrice,
    bySize
  }, 
    itemDispatch } = CartState()



  const sortedItems = () => {
    let sorted = data

    if (sort) {
      sorted = sorted.sort((a,b) => (
         sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      ))
    }
    return sorted;
  }


  return (
    <div className="App">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
        {sortedItems().map((e, i) => (
          <Item listItems={listItems} item={e} key={i} />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <div ref={loader} />
    </div>
  );
}

export default ShopGetPage;
