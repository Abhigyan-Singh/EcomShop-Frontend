import React, { useState, useRef, useEffect } from 'react';
import Item from 'components/item/item';
import { getAllList } from 'services/mylist';
import { Context } from 'context/context';
import { search } from 'services/search';
import { CircularProgress } from '../../node_modules/@mui/material/index';
import { LinearProgress } from '../../node_modules/@mui/material/index';

const ShopGetPage = ({ loader, error, list, loading }) => {
  const [listItems, setListItems] = useState([]);

  const getListItems = async () => {
    const res = await getAllList();
    setListItems(res.data);
  };

  useEffect(() => {
    getListItems();
  }, []);


  return (
    <div className="App">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
        {list.map((e, i) => (
          <Item listItems={listItems} item={e} key={i} />
        ))}
        {list.map((e, i) => (
          <Context data={e} key={i}></Context>
        ))}
      </div>
      {loading}
      {error && <p>No Products match your criteria</p>}
      <div ref={loader} />
    </div>
  );
};

export default ShopGetPage;
