import React, { Fragment, useState } from 'react';
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

export const HomeStory = (
  { isAuthenticated, ...rest },
  { globals: { theme } }
) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileButtonClick = (event) => {
    setMobileNavOpen(true);
  };

  const handleMobileNavClose = (event) => {
    setMobileNavOpen(event);
  };

  return (
    <Fragment>
      <Alert>
        <span>
          COVID-19 Vaccinations are now available in select locations.
        </span>{' '}
        <a className="underline" href="#link">
          Check Availability
        </a>
      </Alert>
      <Header
        onMobileButtonClick={handleMobileButtonClick}
        theme={theme}
        user={isAuthenticated ? user : null}
      />
      <MobileNav open={mobileNavOpen} onClose={handleMobileNavClose} />
      <Locator />
      <Hero slides={slides} />
      <HomeGetStarted />
      <HomePromotions />
      <HomeServices />
      <HomeRecipes />
      <Signup />
      <Footer theme={theme} />
    </Fragment>
  );
};

HomeStory.storyName = 'Home';
