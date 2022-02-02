import React, { Fragment, useEffect, useState } from 'react';
import List from 'components/list';
import Item from 'components/item/item';
import { getAllFavorites } from 'services/favorites';
import {  useLocation } from 'react-router-dom';
import { search } from 'services/search';
import { getAllListWithDetails } from 'services/mylist';


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

export const ShopListItems = ({ isAuthenticated, logout, ...rest }) => {
  const [items, setItems] = useState([]);
  const location = useLocation();
  console.log(location.state)
  const favorites = async () => {
    if (location.state.id) {
    const list = await getAllListWithDetails(location.state.id);
   const items =  list.data ? list.data.map(each => ({ ...each.product, keywords: each.product.keywords.split(',') })) : [];
    setItems(items)
    }
  }
  useEffect(() => {
    favorites();
  }, [])

  return (
    <Fragment>
      <div style={{ minHeight: 500 }}>
        <List isCustomListItem={true} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          {items.map((e, i) => (
            <Item onFavoriteClick={ () => {
              // favorites();
            }} item={e} key={i} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

ShopListItems.storyName = 'ShopListItems';
