import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
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
import { StoreLocator } from 'stories/pages/store.locator.js';
//import { getCartData } from 'services/addtocart';
import CartList from 'components/cartList/cartList.js';
import CheckoutReview from 'components/checkoutReview/checkoutReview';
import ContactInformation from 'components/contactInformation/contactInformation';
import CheckoutPaymentInformation from 'components/checkoutPaymentInformation/checkoutPaymentInformation';
import DeliverySlot from 'components/deliveryDaySlot/deliverySlot';
import PleaseWait from 'components/pleaseWait/pleaseWait';
import ScrollToTop from 'ScrollToTop.js/ScrollToTop';
import MyAccount from 'components/myAccount/MyAccount';
import MyAccountInformation from 'components/MyAccountInformation/MyAccountInformation';
import UpdateAccountAddress from 'components/updateAddress/updateaccountaddress';
import ChangePassword from 'components/changePassword/changePassword';
import DeliveryEligibility from 'components/deliveryeligibility/deliveryeligibility';
import CustomerdeliveryDayandTime from 'components/customerdeliverydayandtime/customerdeliverydayandtime';
import DeliveryNotesInstructions from 'components/deliverynotesInstructions/deliveryNotesInstructions';
import ShowCommunicationPreferences from 'components/showCommunicationPreferences/showcommunicationpreferences';
import ShowOrderHistory from 'components/showorderhistory/showOrderHistory';
import DisplayClubPreferences from 'components/displayClubPreferences/displayClubPreferences';
import MoreRewards from 'components/MoreRewards/moreRewards';
import { userInfoService } from 'services/auth';
import { CookiesAge } from 'apiConfig';
import useCart from 'services/addtocart';
import { CartState } from 'context/context';

export const facilityStoremapping = {
  605: 2029,
  500: 2032,
  604: 2038,
  603: 2042,
  600: 2046
};

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user', 'userInfo']);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  //const location = Geolocation();
  const { facility, dept, user, userInfo, subdept } = cookies;
  // const { dispatchUser } = CartState();
  const { getCartDetails } = useCart();
  const [store, setStore] = useState(facility);
  const [depart, setDepart] = useState(dept);
  const [gridView, setGridView] = useState(true);
  const [listView, setListView] = useState(!gridView);
  const [subdepart, setSubdepart] = useState(subdept);
  const [showCart, setShowCart] = useState(false);
  const [visible, setVisible] = useState(false);
  const [inputCheck, setInputCheck] = useState(() => {
    const saved = localStorage.getItem('input');
    const initialValue = JSON.parse(saved);
    return initialValue || null;
  });
  const { dispatchUser, favorites } = CartState();

  useEffect(() => {
    userInfoService().then((userRes) => {
      if (userRes.data) {
        setCookie('userInfo', userRes.data, {
          path: '/',
          maxAge: CookiesAge
        });
        setCookie('facility', userRes.data.facility, {
          path: '/',
          maxAge: CookiesAge
        });
        dispatchUser({
          type: 'SET_USER',
          payload: { userName: userRes.data.userName }
        });
        getCartDetails(userRes.data.userName);
      }
    });
  }, []);

  useEffect(() => {
    const { user } = cookies;
    if (!user && !userInfo) {
      setStore('');
    } else if (facility) {
      setStore(facility);
    }
    if (user?.token) {
      console.log('TOKEN', user.token);
      setIsAuthenticated(true);
    } else setIsAuthenticated(false);
  }, [cookies]);

  useEffect(() => {
    if (user) {
      console.log('USERFACILITY', user);
    }
  }, []);

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
    dispatchUser({
      type: 'SET_USER',
      payload: null
    });
  };

  const onStoreChange = (storeSel) => {
    console.log('onStoreChange', storeSel);
    setStore(storeSel);
  };

  const onDeptChange = (storeDept) => {
    setDepart(storeDept);
  };

  const onSubDeptChange = (substoreDept) => {
    setSubdepart(substoreDept);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  const handleInputCheck = (input) => {
    setInputCheck(input);
    localStorage.setItem('input', input);
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
            onDepartChange4={onDeptChange}
            onDepartChange5={onDeptChange}
            logout={onLogout}
          />
        )
      },
      {
        path: 'search',
        element: (
          <ShopStory
            setGridView={setGridView}
            setListView={setListView}
            gridView={gridView}
            listView={listView}
            inputCheck={inputCheck}
            setInputCheck={setInputCheck}
            isAuthenticated={isAuthenticated}
            logout={onLogout}
            onSubDepartChange2={onSubDeptChange}
            onDepartChange3={onDeptChange}
            onSubDepartChange={onSubDeptChange}
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
            userInfo={userInfo}
            isAuthenticated={isAuthenticated}
            logout={onLogout}
            onFacilityChange={onStoreChange}
            store={store}
          />
        )
      },
      {
        path: 'CartList',
        element: (
          <CartList isAuthenticated={isAuthenticated} logout={onLogout} />
        )
      },
      {
        path: 'Checkout',
        element: (
          <CheckoutReview isAuthenticated={isAuthenticated} logout={onLogout} />
        )
      },
      {
        path: 'contactInformation/edit',
        element: (
          <ContactInformation
            isAuthenticated={isAuthenticated}
            logout={onLogout}
          />
        )
      },
      {
        path: 'contactInformation',
        element: (
          <ContactInformation
            isAuthenticated={isAuthenticated}
            logout={onLogout}
          />
        )
      },
      {
        path: 'checkoutPayment',
        element: (
          <CheckoutPaymentInformation
            isAuthenticated={isAuthenticated}
            logout={onLogout}
          />
        )
      },
      {
        path: 'viewpaymentinfo',
        element: (
          <CheckoutPaymentInformation
            isAuthenticated={isAuthenticated}
            logout={onLogout}
          />
        )
      },
      {
        path: 'deliverySlot',
        element: (
          <DeliverySlot isAuthenticated={isAuthenticated} logout={onLogout} />
        )
      },
      {
        path: 'pleaseWait',
        element: (
          <PleaseWait isAuthenticated={isAuthenticated} logout={onLogout} />
        )
      },
      {
        path: 'myAccount',
        element: (
          <MyAccount isAuthenticated={isAuthenticated} logout={onLogout} />
        )
      },
      {
        path: 'myaccountinformation',
        element: (
          <MyAccountInformation
            isAuthenticated={isAuthenticated}
            logout={onLogout}
          />
        )
      },
      {
        path: 'updateaccountaddress',
        element: (
          <UpdateAccountAddress
            isAuthenticated={isAuthenticated}
            logout={onLogout}
          />
        )
      },
      {
        path: 'gotochangepassword',
        element: (
          <ChangePassword isAuthenticated={isAuthenticated} logout={onLogout} />
        )
      },
      {
        path: 'displaydeliveryoptions',
        element: (
          <DeliveryEligibility
            isAuthenticated={isAuthenticated}
            logout={onLogout}
          />
        )
      },
      {
        path: 'displaycustomerdeliverydayandtime',
        element: (
          <CustomerdeliveryDayandTime
            isAuthenticated={isAuthenticated}
            logout={onLogout}
          />
        )
      },
      {
        path: 'deliveryNotesInstructions',
        element: (
          <DeliveryNotesInstructions
            isAuthenticated={isAuthenticated}
            logout={onLogout}
          />
        )
      },
      {
        path: 'showcommunicationpreferences',
        element: (
          <ShowCommunicationPreferences
            isAuthenticated={isAuthenticated}
            logout={onLogout}
          />
        )
      },
      {
        path: 'showorderhistory',
        element: (
          <ShowOrderHistory
            isAuthenticated={isAuthenticated}
            logout={onLogout}
          />
        )
      },
      {
        path: 'displayclubpreferences',
        element: (
          <DisplayClubPreferences
            isAuthenticated={isAuthenticated}
            logout={onLogout}
          />
        )
      },
      {
        path: 'more-rewards',
        element: (
          <MoreRewards isAuthenticated={isAuthenticated} logout={onLogout} />
        )
      }
    ]);
    return routes;
  };

  // console.log('app', store, facilityStoremapping[store?.facilityId]);

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
        </span>
        <a className="underline" href="https://www.coborns.com/Covid19">
          Check Availability
        </a>
      </Alert>
      <Header
        handleInputCheck={handleInputCheck}
        inputCheck={inputCheck}
        setInputCheck={setInputCheck}
        onMobileButtonClick={handleMobileButtonClick}
        user={isAuthenticated ? { firstName: userInfo?.firstName } : ''}
        logout={onLogout}
        store={store}
        onDeptChange={onDeptChange}
        onSubDeptChange3={onSubDeptChange}
        usr={user}
        setShowCart={setShowCart}
        setVisible={visible}
      />
      <MobileNav open={mobileNavOpen} onClose={handleMobileNavClose} />
      <AppRoute showCart={showCart} setShowCart={setShowCart} />
      <ScrollToTop />
      <Signup />
      <Footer />
    </Router>
  );
};

export default App;
