import React, { useState, useRef, useEffect } from 'react';
import Item from 'components/item/item';
import { getAllList } from 'services/mylist';
import { Context } from 'context/context';
import InfiniteScroll from 'react-infinite-scroll-component';
import useFetch from '../hooks/useFetch';


const ShopGetPage = ({ query, pageno, loader, error, list, loading, gridView, listView }) => {
  const [listItems, setListItems] = useState([]);

  const getListItems = async () => {
    const res = await getAllList();
    setListItems(res.data);
  };

  useEffect(() => {
    getListItems();
  }, []);

  return (
    <InfiniteScroll
      pageStart={1}
      dataLength={list.length}
      next={true}
      hasMore={true}
      loadMore={useFetch(query, pageno)}
      loader={<h4>...</h4>}
      className="App">
      {gridView 
        ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
            {list.map((e, i) => (
              <Item listItems={listItems} item={e} key={i} listView={listView} gridView={gridView} />
            ))}
            {list.map((e, i) => (
              <Context data={e} key={i}></Context>
            ))}
          </div>
        : <div >
            {list.map((e, i) => (
              <Item listItems={listItems} item={e} key={i} />
            ))}
            {list.map((e, i) => (
              <Context data={e} key={i}></Context>
            ))}
          </div>
      }
        {loading && <p>Loading...</p>} 
        {error && <p>No Products match your criteria</p>}
        <div ref={loader}/>
    </InfiniteScroll>
  );
};

export default ShopGetPage;
