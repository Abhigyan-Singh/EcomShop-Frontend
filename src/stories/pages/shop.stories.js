import React, { Fragment, useState, useEffect } from 'react';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import Alert from 'components/alert/alert';
import Hero from 'components/hero/hero';
import Locator from 'components/locator/locator';
import Signup from 'components/signup/signup';
import ShopSidebar from 'composites/shop-sidebar';
import ShopCategory from 'composites/shop-category';
import ShopTag from 'composites/shop-tag';
import ShopFilter from 'composites/shop-filter';
import ShopSort from 'composites/shop-sort';
import ShopSelectedFilter from 'composites/shopSelected-filter';
import user from 'data/user.json';
import slides from 'data/slides.json';
import slidesCashWise from 'data/slidesCashWise.json';
import slidesMarketPlace from 'data/slidesMarketPlace.json';
import MobileNav from 'components/mobile-nav/mobile-nav';
import ShopGetPage from 'composites/shop-get';
import filter  from 'services/dropdownfilter';


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

export const ShopStory = ({ isAuthenticated, logout, ...rest }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [data, setData] = useState([]);
  const [user, setUser] = useState({ firstName: 'Apple' });

  useEffect(() => {
    fetch()
      .then((res) => res.json())
      .then((res) => {
        setData(res.data)
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    
  }, []);

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
            <ShopTag />
            <div className="pt-6 flex flex-row justify-between">
              <ShopFilter />
              <ShopSort />
            </div>
          </div>
          <ShopSelectedFilter />
          <ShopGetPage />
        </div>
      </div>
    </Fragment>
  );
};

ShopStory.storyName = 'Home';

