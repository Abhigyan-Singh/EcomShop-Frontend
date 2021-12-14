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
  
  useEffect(()=>{
    document.documentElement.className = 'marketplace-theme';
  },[])

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
      }
    ]);
    return routes;
  };

  return (
    <Router>
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
