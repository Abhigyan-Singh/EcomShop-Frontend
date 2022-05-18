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
import { DisplayShoppingListDetails } from 'stories/pages/dispmyshoppinglistdetails';
import { Favorites } from 'stories/pages/favorites';
import { ShopListItems } from 'stories/pages/shop-list-item.stories';
import { Geolocation } from '../services/geolocation.js';
import { StoreLocator } from 'stories/pages/storelocator.js';
import { CookiesAge } from 'apiConfig';
import { userInfoService } from 'services/auth.js';

export const facilityStoremapping = {
  605: 2029,
  500: 2032,
  604: 2038,
  603: 2042,
  600: 2046
};

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  //const location = Geolocation();
  const { facility, dept, user, userInfo, subdept } = cookies;
  // const { dispatchUser } = CartState();
  // const { getCartDetails } = useCart();

  const [store, setStore] = useState(facility);
  const [store2, setStore2] = useState(facility);
  const [depart, setDepart] = useState(dept);
  const [depart2, setDepart2] = useState(dept);
  const [depart3, setDepart3] = useState(dept);
  const [depart4, setDepart4] = useState(dept);
  const [depart5, setDepart5] = useState(dept);
  const [subdepart, setSubdepart] = useState(subdept);
  const [subdepart2, setSubdepart2] = useState(subdept);
  const [subdepart3, setSubdepart3] = useState(subdept);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const { user } = cookies;
    if (user?.token) {
      setIsAuthenticated(true);
    } else setIsAuthenticated(false);
  }, [cookies]);

  useEffect(() => {
    let brand = 'coborns-theme';
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

  const onLogout = () => {
    removeCookie('user');
    removeCookie('userInfo');
    setIsAuthenticated(false);
  };

  const onStoreChange = (storeSel) => {
    setStore(storeSel);
  };

  const onStoreChange2 = (storeSel) => {
    setStore2(storeSel);
  };

  const onDepartChange = (storeDept) => {
    setDepart(storeDept);
  };

  const onDepartChange3 = (storeDept) => {
    setDepart3(storeDept);
  };

  const onDepartChange4 = (storeDept) => {
    setDepart4(storeDept);
  };

  const onDepartChange5 = (storeDept) => {
    setDepart5(storeDept);
  };

  const onSubDepartChange = (substoreDept) => {
    setSubdepart(substoreDept);
  };

  const onSubDepartChange2 = (storeDept) => {
    setSubdepart2(storeDept);
  };

  const onSubDepartChange3 = (storeDept) => {
    setSubdepart3(storeDept);
  };

  const AppRoute = ({ showCart, setShowCart }) => {
    let routes = useRoutes([
      {
        path: '/',
        element: (
          <HomeStory
            showCart={showCart}
            setShowCart={setShowCart}
            isAuthenticated={isAuthenticated}
            onStoreChange={onStoreChange}
            onDepartChange4={onDepartChange4}
            onDepartChange5={onDepartChange5}
            logout={onLogout}
          />
        )
      },
      {
        path: 'search',
        element: (
          <ShopStory
            isAuthenticated={isAuthenticated}
            logout={onLogout}
            onSubDepartChange2={onSubDepartChange2}
            onDepartChange3={onDepartChange3}
            onSubDepartChange={onSubDepartChange}
          />
        )
      },
      {
        path: 'item/:id',
        element: (
          <ItemStory isAuthenticated={isAuthenticated} logout={onLogout} />
        )
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
      },
      {
        path: 'shop-list-items',
        element: (
          <ShopListItems isAuthenticated={isAuthenticated} logout={onLogout} />
        )
      },
      {
        path: 'shop-list-items',
        element: (
          <ShopListItems isAuthenticated={isAuthenticated} logout={onLogout} />
        )
      },
      {
        path: 'store-locator',
        element: (
          <StoreLocator
            isAuthenticated={isAuthenticated}
            logout={onLogout}
            onFacilityChange={onStoreChange2}
            store2={store2}
          />
        )
      }
    ]);
    return routes;
  };

  // console.log('app', store);
  console.log(store, facilityStoremapping[store?.facilityId]);
  return (
    <Router>
      <div id="yext-facility-hours-setter" style={{ visibility: 'hidden' }}>
        <p>
          <span
            data-yext-field="hours"
            data-yext-id={
              facilityStoremapping[store?.facilityId]
                ? facilityStoremapping[store?.facilityId]?.toString()
                : store?.facilityId?.toString()
            }
          ></span>
        </p>
      </div>
      <Alert>
        <span>
          COVID-19 Vaccinations are now available in select locations.
        </span>{' '}
        <a className="underline" href="https://www.coborns.com/Covid19">
          Check Availability
        </a>
      </Alert>
      <Header
        onMobileButtonClick={handleMobileButtonClick}
        user={isAuthenticated ? { firstName: userInfo?.firstName } : null}
        logout={onLogout}
        store={store}
        onDeptChange={onDepartChange}
        onSubDeptChange3={onSubDepartChange3}
        usr={user}
        setShowCart={setShowCart}
      />
      <MobileNav open={mobileNavOpen} onClose={handleMobileNavClose} />
      <AppRoute showCart={showCart} setShowCart={setShowCart} />
      <Signup />
      <Footer />
    </Router>
  );
};

export default App;
