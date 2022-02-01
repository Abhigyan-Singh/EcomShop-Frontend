import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes
} from 'react-router-dom';
import { HomeStory } from 'stories/pages/home.stories';
import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';
import { ShopStory } from 'stories/pages/shop.stories';
import Header from 'components/header/header';
import MobileNav from 'components/mobile-nav/mobile-nav';
import Signup from 'components/signup/signup';
import Footer from 'components/footer/footer';
import Alert from 'components/alert/alert';
import { ItemStory } from 'stories/pages/item.stories';
<<<<<<< HEAD


=======
import { DisplayShoppingListDetails } from 'stories/pages/dispmyshoppinglistdetails';
import { Favorites } from 'stories/pages/favorites';
>>>>>>> 3d4f7d33347d7f11971f383d8f6a6add0836da52

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  useEffect(() => {
    const { user } = cookies;
    if (user?.token) setIsAuthenticated(true);
    else setIsAuthenticated(false);
  }, [cookies]);
  const [user, setUser] = useState({ firstName: 'Apple' });

  const onLogout = () => {
    removeCookie('user');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    let brand = 'cashwise-theme';
    if (window.location.host.indexOf('COBORNS'.toLocaleLowerCase()) > -1) {
      brand = 'coborns-theme';
    } else if (
      window.location.host.indexOf('CASHWISE'.toLocaleLowerCase()) > -1
    ) {
      brand = 'cashwise-theme';
    } else if (
      window.location.host.indexOf('MARKETPLACEFOODSWI'.toLocaleLowerCase()) >
      -1
    ) {
      brand = 'marketplace-theme';
    }
    document.documentElement.className = brand;
  }, []);

  const handleMobileButtonClick = (event) => {
    setMobileNavOpen(true);
  };
  const handleMobileNavClose = (event) => {
    setMobileNavOpen(event);
  };

  const AppRoute = () => {
    let routes = useRoutes([
      {
        path: '/',
        element: (
          <HomeStory isAuthenticated={isAuthenticated} logout={onLogout} />
        )
      },
      {
        path: 'search',
        element: (
          <ShopStory isAuthenticated={isAuthenticated} logout={onLogout} />
        )
      },
      {
        path: 'item/:id',
        element: (
          <ItemStory isAuthenticated={isAuthenticated} logout={onLogout} />
        )
<<<<<<< HEAD
=======
      },
      {
        path: 'dispmyshoppinglistdetails',
        element: (
          <DisplayShoppingListDetails
            isAuthenticated={isAuthenticated}
            logout={onLogout}
          />
        )
      },
      {
        path: 'favorites',
        element: (
          <Favorites isAuthenticated={isAuthenticated} logout={onLogout} />
        )
>>>>>>> 3d4f7d33347d7f11971f383d8f6a6add0836da52
      }
    ]);
    return routes;
  };

  return (
    <Router>
<<<<<<< HEAD
=======
       <div id="yext-facility-hours-setter" style={{ visibility: 'hidden'}}>
      <p>
        <span data-yext-field="hours" data-yext-id="12792483"></span>
      </p>
    </div>
>>>>>>> 3d4f7d33347d7f11971f383d8f6a6add0836da52
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
        user={isAuthenticated ? user : null}
        logout={onLogout}
      />
      <MobileNav open={mobileNavOpen} onClose={handleMobileNavClose} />
      <AppRoute />
      <Signup />
      <Footer />
    </Router>
  );
};

export default App;
