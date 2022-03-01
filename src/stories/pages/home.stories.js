import React, { Fragment, useState, useEffect } from 'react';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import Alert from 'components/alert/alert';
import Hero from 'components/hero/hero';
import Locator from 'components/locator/locator';
import Signup from 'components/signup/signup';
import HomeGetStarted from 'composites/home-get-started';
import HomePromotions from 'composites/home-promotions';
import HomeRecipes from 'composites/home-recipes';
import HomeServices from 'composites/home-services';
import user from 'data/user.json';
import slides from 'data/slides.json';
import slidesCashWise from 'data/slidesCashWise.json';
import slidesMarketPlace from 'data/slidesMarketPlace.json';
import MobileNav from 'components/mobile-nav/mobile-nav';

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

export const HomeStory = ({
  isAuthenticated,
  logout,
  onStoreChange,
  ...rest
}) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [data, setData] = useState([]);
  const [user, setUser] = useState({ firstName: 'Apple' });

  const getBranName = () => {
    if (window.location.host.indexOf('COBORNS'.toLocaleLowerCase())) {
      return 'COBORNS';
    } else if (window.location.host.indexOf('CASHWISE'.toLocaleLowerCase())) {
      return 'CASHWISE';
    } else if (
      window.location.host.indexOf('MARKETPLACEFOODSWI'.toLocaleLowerCase())
    ) {
      return 'MARKETPLACEFOODSWI';
    } else {
      return 'COBORNS';
    }
  };

  const brandName = getBranName(); // 'COBORNS' / 'CASHWISE' / 'MARKETPLACEFOODSWI'

  const handleMobileButtonClick = (event) => {
    setMobileNavOpen(true);
  };

  const handleMobileNavClose = (event) => {
    setMobileNavOpen(event);
  };
  const getSlides = (brand) => {
    switch (brand) {
      case 'COBORNS':
        return slides;
      case 'CASHWISE':
        return slidesCashWise;
      case 'MARKETPLACEFOODSWI':
        return slidesMarketPlace;
      default:
        break;
    }
  };

  useEffect(() => {
    // fetch('')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <Fragment>
      <Locator onLocationChange={onStoreChange} />
      <Hero slides={getSlides(brandName)} brandName={brandName} />
      <HomeGetStarted />
      <HomePromotions />
      <HomeServices />
      <HomeRecipes />
    </Fragment>
  );
};

HomeStory.storyName = 'Home';
