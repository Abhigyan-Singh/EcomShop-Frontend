import React, { Fragment, useEffect, useState } from 'react';
import List from 'components/list';
import Item from 'components/item/item';
import { getAllFavorites } from 'services/favorites';
import {  useLocation } from 'react-router-dom';
import { search } from 'services/search';
import { getAllList, getAllListWithDetails } from 'services/mylist';

export default {
  title: 'Pages/Home',
  argTypes: {
    isAuthenticated: {
      name: 'Show Authenticated State',
      control: 'boolean',
      defaultValue: true
    }
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const ShopListItems = ({ isAuthenticated, logout, ...rest }, onAdd) => {
  const [items, setItems] = useState([]);
  const location = useLocation();
  const [listItems, setListItems] = useState([]);
 
  const getListItems = async () => {
    const res = await getAllList();
    setListItems(res.data);
  };

  const fetchListItemsMethod = async (listItem) => {
    const list = await getAllListWithDetails(listItem.id);
     const items =  list.data ? list.data.map(each => ({ ...each.product, keywords: each.product.keywords.split(',') })) : [];
    setItems(items)
    
  }
  useEffect(() => {
    if (location.state && location.state.id) {
      fetchListItemsMethod(location.state);
    }
    getListItems();

  }, [])

  const fetchListItems = async  (listItem) => {
    fetchListItemsMethod(listItem);
  }

  return (
    <Fragment>
      <div style={{ minHeight: 500, marginLeft: 10  }}>
        <List fetchListItems={fetchListItems} isCustomListItem={true} />
        <div style={{ marginTop : 10 }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          {items.map((e, i) => (
            <Item  listItems={listItems} onFavoriteClick={ () => {
              // favorites();
            }} item={e} key={i} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

ShopListItems.storyName = 'ShopListItems';
