import React, { Fragment } from 'react';
import Locator from 'components/locator/locator';
import ShopSidebar from 'composites/shop-sidebar';
import ShopCategory from 'composites/shop-category';
import ItemGetPage from 'composites/item-get';
import BestSeller from 'components/itemDetails/bestSeller';
import HomeRecipes from 'composites/home-recipes';

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

export const ItemStory = ({ isAuthenticated, logout, ...rest }) => {
  return (
    <Fragment>
      <div className="border-b-2">
        <Locator />
      </div>
      <div className="flex flex-row">
        <ShopSidebar />
        <div className="w-full">
          <div className="pl-6 pt-5">
            <ShopCategory />
          </div>
          <ItemGetPage />
          <BestSeller />
          <HomeRecipes />
        </div>
      </div>
    </Fragment>
  );
};

ItemStory.storyName = 'Home';
