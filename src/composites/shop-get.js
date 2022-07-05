import React, { useState, useRef, useEffect } from 'react';
import Item from 'components/item/item';
import { getAllList } from 'services/mylist';
import { Context } from 'context/context';

const ShopGetPage = ({ loader, error, list, loading, gridView, listView, list2, inputCheck }) => {
  const [listItems, setListItems] = useState([]);
  const getListItems = async () => {
    const res = await getAllList();
    setListItems(res.data);
  };

  useEffect(() => {
    getListItems();
  }, []);

  useEffect(() => {
    console.log("list2 GET PAGE", list2)
    console.log("list1 GET PAGE", list)
  });

  return (
    <div
      className="App">
      {gridView
        ? <div>
          {list2
            ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
              {list2.map((e, i) => (
                <Item listItems={listItems} item={e} key={i} listView={listView} gridView={gridView} />
              ))}
              {list2.map((e, i) => (
                <Context data={e} key={i}></Context>
              ))}
            </div>
            : list ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
              {list.map((e, i) => (
                <Item listItems={listItems} item={e} key={i} listView={listView} gridView={gridView} />
              ))}
              {list.map((e, i) => (
                <Context data={e} key={i}></Context>
              ))}
            </div>
              : <p>No Products match your criteria</p>
          }
        </div>
        : <div >
          {list.map((e, i) => (
            <Item listItems={listItems} item={e} key={`item-${i}`} />
          ))}
          {list.map((e, i) => (
            <Context data={e} key={`context-${i}`}></Context>
          ))}
        </div>
      }
      {loading && <p>Loading...</p>}
      {list === [] || list2 === [] && <p>No Products match your criteria</p>}
      {error && <p>No Products match your criteria</p>}
      <div ref={loader} />
    </div>
  );
};

export default ShopGetPage;
