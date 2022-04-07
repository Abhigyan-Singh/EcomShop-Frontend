import React, { Fragment, useEffect, useState } from 'react';
import List from 'components/list';
import Item from 'components/item/item';
import { usefavoriteApi } from 'services/favorites';
import { getAllList } from 'services/mylist';
import { CartState } from 'context/context';

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

export const Favorites = ({ isAuthenticated, logout, ...rest }) => {
  const [listItems, setListItems] = useState([]);
  const { favorites } = CartState();
  const { fetchFavorites } = usefavoriteApi();

  const getListItems = async () => {
    const res = await getAllList();
    setListItems(res.data);
  };

  useEffect(() => {
    fetchFavorites();
    getListItems();
  }, []);

  return (
    <Fragment>
      <div style={{ minHeight: 500, marginLeft: 10 }}>
        <List />
        <div
          style={{ marginTop: 10 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3"
        >
          {favorites.favorites.map((e, i) => (
            <Item
              listItems={listItems}
              onFavoriteClick={() => {
                // favorites();
              }}
              item={e}
              key={i}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

Favorites.storyName = 'Favorites';
