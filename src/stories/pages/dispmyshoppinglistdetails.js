import React, { Fragment, useEffect, useState } from 'react';
import List from 'components/list';
import Item from 'components/item/item';
import { previouslyPurchased } from 'services/search';
import { getAllFavorites } from 'services/favorites';
import { getAllList } from 'services/mylist';


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

export const DisplayShoppingListDetails = ({
  isAuthenticated,
  logout,
  ...rest
}) => {
  const [items, setItems] = useState([]);
  const [listItems, setListItems] = useState([]);
  const getListItems = async () => {
    const res = await getAllList();
    setListItems(res.data);
  };
  const fetchPreviouslyPurchased = async () => {
    const res = await previouslyPurchased();
    const favoritesRes = await getAllFavorites();
      const favorites = favoritesRes.data;
      if (res && res.data) {
        const productList = res.data.map((each) => ({ ...each.id.product, keywords: each.id.product.keywords.split(',') }) )
          const formattedListData = productList.map((each) => {
            let favorite = false;
             favorites.map(val => {
              if (!favorite && val.productId === each.productId) {
                favorite = true;
              }
            })
            return ({ ...each, favorite })
          })
          setItems(formattedListData);
      }
   
  };
  useEffect(() => {
    fetchPreviouslyPurchased();
    getListItems();
  }, []);
  return (
    <Fragment>
      <div style={{ minHeight: 500, marginLeft: 10 }}>
        <List />
        <div  style={{ marginTop : 10 }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          {items.map((e, i) => (
            <Item listItems={listItems} item={e} key={i} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

DisplayShoppingListDetails.storyName = 'DisplayShoppingListDetails';
