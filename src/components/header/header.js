import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useRef
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Disclosure, Popover, Transition } from '@headlessui/react';
import {
  MenuIcon as MenuOutlineIcon,
  SearchIcon
} from '@heroicons/react/outline';
import { ChevronRightIcon, MenuIcon } from '@heroicons/react/solid';
import cartIcon from 'assets/icons/cart-icon@2x.png';
import listIcon from 'assets/icons/list-icon@2x.png';
import cobornsLogo from 'assets/images/coborns-logo@2x.png';
import cashwiseLogo from 'assets/images/cashwise-logo@2x.png';
import marketplaceLogo from 'assets/images/marketplace-logo@2x.png';
import Autocomplete from 'components/autocomplete/autocomplete';
import mainNavigation from 'data/mainNavigation';
import './header.css';
import Modal from './Modal';
import Backdrop from './Backdrop';
import { search } from 'services/search';
import { grocery } from 'services/groceryTree';
import { useCookies } from 'react-cookie';
import { CookiesAge } from 'apiConfig';
import { useNavigate, useLocation } from 'react-router-dom';
import { CartState } from 'context/context';
import Cart from '../../components/cart/cart.js';
import { map } from 'lodash';
import StoreLocator from 'stories/pages/store.locator.js';
import { config, API } from 'apiConfig';
import { useCart } from 'react-use-cart';

export const facilityStoremapping = {
  605: 2029,
  500: 2032,
  604: 2038,
  603: 2042,
  600: 2046
};

const Header = (props) => {
  // BSWING: 'theme' can be passed through like this or pulled from another context - refactor if desired.
  // BSWING: 'user' or another authentication object can be passed through like this or pulled from another context - refactor if desired.
  const {
    className,
    theme = 'coborns',
    onMobileButtonClick,
    store,
    stores,
    user,
    usr,
    onDeptChange,
    onDepartChange5,
    onSubDeptChange3,
    setShowCart,
    ...rest
  } = props;
  const componentClassName = classNames('cbn-header', {}, className);
  const [value, setValue] = useState('');

  const [searchList, setSearchList] = useState([]);
  const [data, setData] = useState();
  const [cookies, setCookie] = useCookies();
  const [slide, setSlide] = useState(false);
  const { facility, dept, subdept } = cookies;
  const [selected, setSelected] = useState(dept);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [babySub, setBabySub] = useState();
  const [bakerySub, setBakerySub] = useState();
  const [meatSub, setMeatSub] = useState();
  const [dairySub, setDairySub] = useState();
  const [deliSub, setDeliSub] = useState();
  const [floralSub, setFloralSub] = useState();
  const [genSub, setGenSub] = useState();
  const [grocerySub, setGrocerySub] = useState();
  const [frozenSub, setFrozenSub] = useState();
  const [hbSub, setHBSub] = useState();
  const [houseSub, setHouseSub] = useState();
  const [petSub, setPetSub] = useState();
  const [produceSub, setProduceSub] = useState();
  const [beerSub, setBeerSub] = useState();
  const [wineSub, setWineSub] = useState();
  const [liquorSub, setLiquorSub] = useState();
  const [tobaccoSub, setTobaccoSub] = useState();
  //const [showCart, setShowCart] = useState(false);
  const { getCartDetails } = useCart();
  const {
    state: { cart, qty },
    dispatch
  } = CartState();
  const { search } = useLocation();
  const query = React.useMemo(() => new URLSearchParams(search), [search]);
  const [modalIsOpen, setModalIsOpen] = useState(query.get('login') === 'show');

  const fetch = async (item) => {
    if (item) {
      await search(item, store.facilityId, 1, 1, 6).then((res) =>
        setSearchList(res.data.productList)
      );
      setLoading(false);
    }
  };

  const setHoursHtml = () => {
    if (
      document.getElementById('yext-facility-hours-getter') &&
      document.getElementById('yext-facility-hours-setter')
    ) {
      document.getElementById('yext-facility-hours-getter').innerHTML =
        document.getElementById('yext-facility-hours-setter').innerHTML;
    }
  };

  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const searcher = useCallback(
    debounce((n) => fetch(n), 1000),
    []
  );

  const handleChange = (event) => {
    setLoading(true);
    setSearchList([]);
    setValue(event.target.value);
    if (event.target.value.length > 0) searcher(event.target.value);
  };

  const handleItemSelect = (item) => {
    setValue(item);
  };

  const handleMobileButtonClick = (event) => {
    if (typeof onMobileButtonClick === 'function') {
      onMobileButtonClick(event);
    }
  };

  const modelHandler = () => {
    setModalIsOpen(true);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  const [searchArray, setSearchArray] = useState(searchList);

  const onScroll = () => {
    // We need to integrate with solor here on scroll
  };

  useEffect(async () => {
    await grocery(4433).then((res) => {
      setData(res.data);
    });
  }, [props]);

  const handleDeptChange = (option) => {
    setCookie('subdept', ' ');
    setSelected(option);
    setCookie('dept', option, {
      path: '/',
      maxAge: CookiesAge
    });
    if (typeof onDeptChange === 'function') {
      onDeptChange(option);
    }
  };

  function refreshPage() {
    window.location.reload(false);
  }

  const handleCheckoutCart = () => {
    const urlObj = {
      localhost: 'https://devweb2.shop.coborns.com',
      dev: 'https://devweb.shop.coborns.com',
      prod: 'https://shop.coborns.com'
    };
    const path = '/checkautomaticpromotions';
    const host = window.location.host;
    let url = '';
    if (host.includes('localhost')) {
      url = urlObj['localhost'];
    } else if (host.includes('devweb2.shop.coborns.com')) {
      url = urlObj['dev'];
    } else if (host.includes('shop.coborns.com')) {
      url = urlObj['prod'];
    } else {
      url = urlObj['localhost'];
    }
    // window.location.replace(url + path)
    window.location.href = url + path;
  };


  const handleCartClick = (event) => {
    setShowCart(true);
  };

  const onClose = (event) => {
    setShowCart(false);
  };


  useEffect (() => { 
    grocery(109791)
      .then((res) => 
      {setBabySub(res.data)}
    )
    grocery(109792)
      .then((res) => 
      {setBakerySub(res.data)}
    )
    grocery(109793)
      .then((res) => 
      {setMeatSub(res.data)}
    )
    grocery(109794)
      .then((res) => 
      {setDairySub(res.data)}
    )
    grocery(109795)
      .then((res) => 
      {setDeliSub(res.data)}
    )
    grocery(109796)
      .then((res) => 
      {setFloralSub(res.data)}
    )
    grocery(109797)
      .then((res) => 
      {setGenSub(res.data)}
    )
    grocery(109798)
      .then((res) => 
      {setGrocerySub(res.data)}
    )
    grocery(109799)
      .then((res) => 
      {setFrozenSub(res.data)}
    )
    grocery(109800)
      .then((res) => 
      {setHBSub(res.data)}
    )
    grocery(109801)
      .then((res) => 
      {setHouseSub(res.data)}
    )
    grocery(109802)
      .then((res) => 
      {setPetSub(res.data)}
    )
    grocery(109803)
      .then((res) => 
      {setProduceSub(res.data)}
    )
    grocery(109804)
      .then((res) => 
      {setBeerSub(res.data)}
    )
    grocery(109805)
      .then((res) => 
      {setWineSub(res.data)}
    )
    grocery(109806)
      .then((res) => 
      {setLiquorSub(res.data)}
    )
    grocery(109807)
      .then((res) => 
      {setTobaccoSub(res.data)}
    )
  },[]);
 

  const handleSubDeptChange3 = (option) => {
    setCookie('subdept', ' ');
    setSelected(option);
    setCookie('subdept', option, {
      path: '/',
      maxAge: CookiesAge
    });
    if (typeof onSubDeptChange3 === 'function') {
      onSubDeptChange3(option);
    }
  };

  let timeout;
  const timeoutDuration = 400;
  const buttonRef = useRef(null);
  const [openState, setOpenState] = useState(false);

  const toggleMenu = (open) => {
    setOpenState((openState) => !openState);
    buttonRef?.current?.click();
  };

  const onHover = (open, action) => {
    if (
      (!open && !openState && action === 'onMouseEnter') ||
      (open && openState && action === 'onMouseLeave')
    ) {
      clearTimeout(timeout);
      timeout = setTimeout(() => toggleMenu(open), timeoutDuration);
    }
  };

  const handleClick = (open) => {
    setOpenState(!open);
    clearTimeout(timeout);
  };

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      event.stopPropagation();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <header className={componentClassName} {...rest}>
      <div
        id="home"
        className="flex justify-between items-center px-4 lg:px-6 h-16 md:h-28"
      >
        {theme === 'coborns' && (
          <div className="flex flex-1 -mb-1 md:-mb-2">
            <a href="/">
              <span className="sr-only">Coborn's</span>
              <img className="h-6 md:h-14 w-auto" src={cobornsLogo} alt="" />
            </a>
          </div>
        )}
        {theme === 'cashwise' && (
          <div className="flex flex-1">
            <a>
              <span className="sr-only">Cashwise</span>
              <img className="h-12 md:h-24 w-auto" src={cashwiseLogo} alt="" />
            </a>
          </div>
        )}
        {theme === 'marketplace' && (
          <div className="flex flex-1 -mb-1 md:-mb-2">
            <a>
              <span className="sr-only">MarketPlace Foods</span>
              <img
                className="h-6 md:h-14 w-auto"
                src={marketplaceLogo}
                alt=""
              />
            </a>
          </div>
        )}
        <div className="flex items-center justify-between text-right float right">
          <div className="hidden md:block">
            <div className="text-lg font-medium">
              {user && `Welcome Back, ${user.firstName}`}
              {!user && 'Grocery Shopping Made Easy'}
            </div>
            <div className="text-xs font-medium space-x-2">
              <a className="underline" href="/store-locator">
                Store Locator
              </a>
              {user && (
                <a
                  className="underline"
                  href="https://devweb2.shop.coborns.com/myaccountdetails"
                >
                  My Account
                </a>
              )}
              {!user && (
                <a
                  className="underline"
                  href="https://devweb2.shop.coborns.com/createaccount"
                >
                  Register
                </a>
              )}
              {user && (
                <button className="underline" onClick={props.logout}>
                  Sign Out
                </button>
              )}
              {!user && (
                <a className="underline">
                  <button className="underline" onClick={modelHandler}>
                    Sign In
                  </button>
                  {modalIsOpen && <Modal onClose={closeModalHandler} />}
                  {modalIsOpen && <Backdrop onClose={closeModalHandler} />}
                </a>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="cbn-header__mobile-button"
              onClick={handleMobileButtonClick}
            >
              <span className="sr-only">Open menu</span>
              <MenuOutlineIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div className="cbn-header__nav">
        <Popover className="relative hidden md:block">
          {({ open }) => {
            setTimeout(() => {
              setHoursHtml();
            }, 0);
            return (
              <Fragment>
                <Popover.Button className="cbn-header__menu-button">
                  <span className="text-base font-bold mr-2">Menu</span>
                  <MenuIcon className="h-5 w-5" aria-hidden="true" />
                </Popover.Button>
                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel
                    static
                    className="absolute  -ml-4 mt-2 transform w-screen md:max-w-xs"
                    style={{ zIndex: 999 }}
                  >
                    <div className="rounded shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative bg-white p-3">
                        <div className="rounded bg-yellow-100 mb-3 p-4">
                          <div className="font-bold leading-tight">
                            {store?.facilityName}
                          </div>
                          <div className="text-sm font-medium mb-1">
                            <div id="yext-facility-hours-getter" />
                          </div>
                          <div className="text-xs font-medium">
                            <a
                              className="underline"
                              href={`https://www.coborns.com/Cobstore${
                                facilityStoremapping[store?.facilityId]
                                  ? facilityStoremapping[
                                      store?.facilityId
                                    ]?.toString()
                                  : store?.facilityId?.toString()
                              }`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              View Store Details
                            </a>
                          </div>
                        </div>
                        <div className="relative grid grid-cols-1 bg-white">
                          {mainNavigation.map((item) =>
                            !item.children &&
                            item.name !== 'Rewards' &&
                            item.name !== 'In-store Services' &&
                            item.name !== 'Digital Coupons' ? (
                              <a
                                key={item.name}
                                href={item.href}
                                className="p-3 flex items-center rounded transition ease-in-out duration-150 text-gray-500 hover:bg-yellow-100"
                              >
                                <span className="flex items-center flex-1">
                                  {item.icon && <item.icon />}
                                  <span className="text-base font-medium">
                                    {item.name}
                                  </span>
                                </span>
                              </a>
                            ) : (!item.children && item.name === 'Rewards') ||
                              item.name === 'Digital Coupons' ? (
                              <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="p-3 flex items-center rounded transition ease-in-out duration-150 text-gray-500 hover:bg-yellow-100"
                              >
                                <span className="flex items-center flex-1">
                                  {item.icon && <item.icon />}
                                  <span className="text-base font-medium">
                                    {item.name}
                                  </span>
                                </span>
                              </a>
                            ) : item.name === 'In-store Services' ? (
                              <a
                                key={item.name}
                                href="#Services"
                                className="scroll-to-top p-3 flex items-center rounded transition ease-in-out duration-150 text-gray-500 hover:bg-yellow-100"
                              >
                                <span className="flex items-center flex-1">
                                  {item.icon && <item.icon />}
                                  <span className="text-base font-medium">
                                    {item.name}
                                  </span>
                                </span>
                              </a>
                            ) : (
                              <Popover as="div" key={item.name}>
                                {({ open, onClick }) => (
                                  <div>
                                    <Popover.Button className="p-3 flex items-center rounded transition ease-in-out duration-150 w-full text-gray-500 hover:bg-yellow-100">
                                      <span className="flex items-center flex-1">
                                        {item.icon && <item.icon />}
                                        <span className="text-base font-medium">
                                          {item.name}
                                        </span>
                                      </span>
                                      <ChevronRightIcon
                                        className={classNames(
                                          open ? 'rotate-90' : '',
                                          'h-5 w-5 text-gray-300 transform'
                                        )}
                                        aria-hidden="true"
                                      />
                                    </Popover.Button>
                                    <Popover.Panel className="space-y-1">
                                      {item.children.map((subItem) =>
                                        subItem.name === 'Our brands' ? (
                                          <a
                                            key={subItem.name}
                                            href={subItem.href}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="py-2 pl-6 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full text-gray-500 hover:bg-yellow-100"
                                          >
                                            {subItem.name}
                                          </a>
                                        ) : subItem.name == 'Four brothers' ? (
                                          <a
                                            key={subItem.name}
                                            href={subItem.href}
                                            className="py-2 pl-6 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full text-gray-500 hover:bg-yellow-100"
                                          >
                                            {subItem.name}
                                          </a>
                                        ) : (
                                          <div className="flex-1">
                                            {map(data, (option) => (
                                              <Popover as="div">
                                                {({ open, onClick }) => (
                                                  <div>
                                                    <div
                                                      onClick={() => {
                                                        handleDeptChange(
                                                          option.description
                                                        );
                                                        navigate(
                                                          '/search?text=' +
                                                            option.description
                                                        );
                                                      }}
                                                    >
                                                      <Popover.Button
                                                        //ref={buttonRef}
                                                        key={option.id.area}
                                                        option={
                                                          option.description
                                                        }
                                                        className="py-2 pl-6 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full text-gray-500 hover:bg-yellow-100"
                                                      >
                                                        {option.description}
                                                        <ChevronRightIcon
                                                          className={classNames(
                                                            open
                                                              ? 'rotate-90'
                                                              : '',
                                                            'h-5 w-5 text-gray-300 transform'
                                                          )}
                                                          aria-hidden="true"
                                                        />
                                                      </Popover.Button>
                                                    </div>
                                                    {option.description ===
                                                    'Baby' ? (
                                                      <div>
                                                        {babySub.map(
                                                          (subItem) => (
                                                            <div>
                                                              <Transition
                                                                onClick={() => {
                                                                  navigate(
                                                                    '/search?text=' +
                                                                      subItem.description
                                                                  );
                                                                }}
                                                                show={open}
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0 translate-y-1"
                                                                enterTo="opacity-100 translate-y-0"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100 translate-y-0"
                                                                leaveTo="opacity-0 translate-y-1"
                                                              >
                                                                <Popover.Panel>
                                                                  <button
                                                                    key={
                                                                      option.id
                                                                        .area
                                                                    }
                                                                    onClick={() => {
                                                                      handleSubDeptChange3(
                                                                        subItem.description
                                                                      );
                                                                      navigate(
                                                                        '/search?text=' +
                                                                          subItem.description
                                                                      );
                                                                    }}
                                                                    className="py-1 pl-12 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full hover:bg-yellow-100"
                                                                  >
                                                                    {
                                                                      subItem.description
                                                                    }
                                                                  </button>
                                                                </Popover.Panel>
                                                              </Transition>
                                                            </div>
                                                          )
                                                        )}
                                                      </div>
                                                    ) : option.description ===
                                                      'Bakery' ? (
                                                      <div>
                                                        {bakerySub.map(
                                                          (subItem) => (
                                                            <div>
                                                              <Transition
                                                                onClick={() => {
                                                                  navigate(
                                                                    '/search?text=' +
                                                                      subItem.description
                                                                  );
                                                                }}
                                                                show={open}
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0 translate-y-1"
                                                                enterTo="opacity-100 translate-y-0"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100 translate-y-0"
                                                                leaveTo="opacity-0 translate-y-1"
                                                              >
                                                                <Popover.Panel>
                                                                  <button
                                                                    onClick={() => {
                                                                      handleSubDeptChange3(
                                                                        subItem.description
                                                                      );
                                                                      navigate(
                                                                        '/search?text=' +
                                                                          subItem.description
                                                                      );
                                                                    }}
                                                                    className="py-1 pl-12 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full hover:bg-yellow-100"
                                                                  >
                                                                    {
                                                                      subItem.description
                                                                    }
                                                                  </button>
                                                                </Popover.Panel>
                                                              </Transition>
                                                            </div>
                                                          )
                                                        )}
                                                      </div>
                                                    ) : option.description ===
                                                      'Meat & Seafood' ? (
                                                      <div>
                                                        {meatSub.map(
                                                          (subItem) => (
                                                            <div>
                                                              <Transition
                                                                onClick={() => {
                                                                  handleSubDeptChange3(
                                                                    subItem.description
                                                                  );
                                                                  navigate(
                                                                    '/search?text=' +
                                                                      subItem.description
                                                                  );
                                                                }}
                                                                show={open}
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0 translate-y-1"
                                                                enterTo="opacity-100 translate-y-0"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100 translate-y-0"
                                                                leaveTo="opacity-0 translate-y-1"
                                                              >
                                                                <Popover.Panel>
                                                                  <button
                                                                    onClick={() => {
                                                                      handleSubDeptChange3(
                                                                        subItem.description
                                                                      );
                                                                      navigate(
                                                                        '/search?text=' +
                                                                          subItem.description
                                                                      );
                                                                    }}
                                                                    className="py-1 pl-12 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full hover:bg-yellow-100"
                                                                  >
                                                                    {
                                                                      subItem.description
                                                                    }
                                                                  </button>
                                                                </Popover.Panel>
                                                              </Transition>
                                                            </div>
                                                          )
                                                        )}
                                                      </div>
                                                    ) : option.description ===
                                                      'Dairy' ? (
                                                      <div>
                                                        {dairySub.map(
                                                          (subItem) => (
                                                            <div>
                                                              <Transition
                                                                onClick={() => {
                                                                  navigate(
                                                                    '/search?text=' +
                                                                      subItem.description
                                                                  );
                                                                }}
                                                                show={open}
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0 translate-y-1"
                                                                enterTo="opacity-100 translate-y-0"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100 translate-y-0"
                                                                leaveTo="opacity-0 translate-y-1"
                                                              >
                                                                <Popover.Panel>
                                                                  <button
                                                                    onClick={() => {
                                                                      handleSubDeptChange3(
                                                                        subItem.description
                                                                      );
                                                                      navigate(
                                                                        '/search?text=' +
                                                                          subItem.description
                                                                      );
                                                                    }}
                                                                    className="py-1 pl-12 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full hover:bg-yellow-100"
                                                                  >
                                                                    {
                                                                      subItem.description
                                                                    }
                                                                  </button>
                                                                </Popover.Panel>
                                                              </Transition>
                                                            </div>
                                                          )
                                                        )}
                                                      </div>
                                                    ) : option.description ===
                                                      'Deli' ? (
                                                      <div>
                                                        {deliSub.map(
                                                          (subItem) => (
                                                            <div>
                                                              <Transition
                                                                onClick={() => {
                                                                  navigate(
                                                                    '/search?text=' +
                                                                      subItem.description
                                                                  );
                                                                }}
                                                                show={open}
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0 translate-y-1"
                                                                enterTo="opacity-100 translate-y-0"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100 translate-y-0"
                                                                leaveTo="opacity-0 translate-y-1"
                                                              >
                                                                <Popover.Panel>
                                                                  <button
                                                                    onClick={() => {
                                                                      handleSubDeptChange3(
                                                                        subItem.description
                                                                      );
                                                                      navigate(
                                                                        '/search?text=' +
                                                                          subItem.description
                                                                      );
                                                                    }}
                                                                    className="py-1 pl-12 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full hover:bg-yellow-100"
                                                                  >
                                                                    {
                                                                      subItem.description
                                                                    }
                                                                  </button>
                                                                </Popover.Panel>
                                                              </Transition>
                                                            </div>
                                                          )
                                                        )}
                                                      </div>
                                                    ) : option.description ===
                                                      'Floral' ? (
                                                      <div>
                                                        {floralSub.map(
                                                          (subItem) => (
                                                            <div>
                                                              <Transition
                                                                onClick={() => {
                                                                  navigate(
                                                                    '/search?text=' +
                                                                      subItem.description
                                                                  );
                                                                }}
                                                                show={open}
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0 translate-y-1"
                                                                enterTo="opacity-100 translate-y-0"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100 translate-y-0"
                                                                leaveTo="opacity-0 translate-y-1"
                                                              >
                                                                <Popover.Panel>
                                                                  <button
                                                                    onClick={() => {
                                                                      handleSubDeptChange3(
                                                                        subItem.description
                                                                      );
                                                                      navigate(
                                                                        '/search?text=' +
                                                                          subItem.description
                                                                      );
                                                                    }}
                                                                    className="py-1 pl-12 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full hover:bg-yellow-100"
                                                                  >
                                                                    {
                                                                      subItem.description
                                                                    }
                                                                  </button>
                                                                </Popover.Panel>
                                                              </Transition>
                                                            </div>
                                                          )
                                                        )}
                                                      </div>
                                                    ) : option.description ===
                                                      'General Merchandise' ? (
                                                      <div>
                                                        {genSub.map(
                                                          (subItem) => (
                                                            <div>
                                                              <Transition
                                                                onClick={() => {
                                                                  navigate(
                                                                    '/search?text=' +
                                                                      subItem.description
                                                                  );
                                                                }}
                                                                show={open}
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0 translate-y-1"
                                                                enterTo="opacity-100 translate-y-0"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100 translate-y-0"
                                                                leaveTo="opacity-0 translate-y-1"
                                                              >
                                                                <Popover.Panel>
                                                                  <button
                                                                    onClick={() => {
                                                                      handleSubDeptChange3(
                                                                        subItem.description
                                                                      );
                                                                      navigate(
                                                                        '/search?text=' +
                                                                          subItem.description
                                                                      );
                                                                    }}
                                                                    className="py-1 pl-12 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full hover:bg-yellow-100"
                                                                  >
                                                                    {
                                                                      subItem.description
                                                                    }
                                                                  </button>
                                                                </Popover.Panel>
                                                              </Transition>
                                                            </div>
                                                          )
                                                        )}
                                                      </div>
                                                    ) : option.description ===
                                                      'Grocery' ? (
                                                      <div>
                                                        {grocerySub.map(
                                                          (subItem) => (
                                                            <div>
                                                              <Transition
                                                                onClick={() => {
                                                                  navigate(
                                                                    '/search?text=' +
                                                                      subItem.description
                                                                  );
                                                                }}
                                                                show={open}
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0 translate-y-1"
                                                                enterTo="opacity-100 translate-y-0"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100 translate-y-0"
                                                                leaveTo="opacity-0 translate-y-1"
                                                              >
                                                                <Popover.Panel>
                                                                  <button
                                                                    onClick={() => {
                                                                      handleSubDeptChange3(
                                                                        subItem.description
                                                                      );
                                                                      navigate(
                                                                        '/search?text=' +
                                                                          subItem.description
                                                                      );
                                                                    }}
                                                                    className="py-1 pl-12 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full hover:bg-yellow-100"
                                                                  >
                                                                    {
                                                                      subItem.description
                                                                    }
                                                                  </button>
                                                                </Popover.Panel>
                                                              </Transition>
                                                            </div>
                                                          )
                                                        )}
                                                      </div>
                                                    ) : option.description ===
                                                      'Frozen' ? (
                                                      <div>
                                                        {frozenSub.map(
                                                          (subItem) => (
                                                            <div>
                                                              <Transition
                                                                onClick={() => {
                                                                  navigate(
                                                                    '/search?text=' +
                                                                      subItem.description
                                                                  );
                                                                }}
                                                                show={open}
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0 translate-y-1"
                                                                enterTo="opacity-100 translate-y-0"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100 translate-y-0"
                                                                leaveTo="opacity-0 translate-y-1"
                                                              >
                                                                <Popover.Panel>
                                                                  <button
                                                                    onClick={() => {
                                                                      handleSubDeptChange3(
                                                                        subItem.description
                                                                      );
                                                                      navigate(
                                                                        '/search?text=' +
                                                                          subItem.description
                                                                      );
                                                                    }}
                                                                    className="py-1 pl-12 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full hover:bg-yellow-100"
                                                                    //style={{padding: 1}}
                                                                  >
                                                                    {
                                                                      subItem.description
                                                                    }
                                                                  </button>
                                                                </Popover.Panel>
                                                              </Transition>
                                                            </div>
                                                          )
                                                        )}
                                                      </div>
                                                    ) : option.description ===
                                                      'Health & Beauty' ? (
                                                      <div>
                                                        {hbSub.map(
                                                          (subItem) => (
                                                            <div>
                                                              <Transition
                                                                onClick={() => {
                                                                  navigate(
                                                                    '/search?text=' +
                                                                      subItem.description
                                                                  );
                                                                }}
                                                                show={open}
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0 translate-y-1"
                                                                enterTo="opacity-100 translate-y-0"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100 translate-y-0"
                                                                leaveTo="opacity-0 translate-y-1"
                                                              >
                                                                <Popover.Panel>
                                                                  <button
                                                                    onClick={() => {
                                                                      handleSubDeptChange3(
                                                                        subItem.description
                                                                      );
                                                                      navigate(
                                                                        '/search?text=' +
                                                                          subItem.description
                                                                      );
                                                                    }}
                                                                    className="py-1 pl-12 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full hover:bg-yellow-100"
                                                                  >
                                                                    {
                                                                      subItem.description
                                                                    }
                                                                  </button>
                                                                </Popover.Panel>
                                                              </Transition>
                                                            </div>
                                                          )
                                                        )}
                                                      </div>
                                                    ) : option.description ===
                                                      'Household & Laundry' ? (
                                                      <div>
                                                        {houseSub.map(
                                                          (subItem) => (
                                                            <div>
                                                              <Transition
                                                                onClick={() => {
                                                                  navigate(
                                                                    '/search?text=' +
                                                                      subItem.description
                                                                  );
                                                                }}
                                                                show={open}
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0 translate-y-1"
                                                                enterTo="opacity-100 translate-y-0"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100 translate-y-0"
                                                                leaveTo="opacity-0 translate-y-1"
                                                              >
                                                                <Popover.Panel>
                                                                  <button
                                                                    onClick={() => {
                                                                      handleSubDeptChange3(
                                                                        subItem.description
                                                                      );
                                                                      navigate(
                                                                        '/search?text=' +
                                                                          subItem.description
                                                                      );
                                                                    }}
                                                                    className="py-1 pl-12 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full hover:bg-yellow-100"
                                                                  >
                                                                    {
                                                                      subItem.description
                                                                    }
                                                                  </button>
                                                                </Popover.Panel>
                                                              </Transition>
                                                            </div>
                                                          )
                                                        )}
                                                      </div>
                                                    ) : option.description ===
                                                      'Pet' ? (
                                                      <div>
                                                        {petSub.map(
                                                          (subItem) => (
                                                            <div>
                                                              <Transition
                                                                onClick={() => {
                                                                  navigate(
                                                                    '/search?text=' +
                                                                      subItem.description
                                                                  );
                                                                }}
                                                                show={open}
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0 translate-y-1"
                                                                enterTo="opacity-100 translate-y-0"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100 translate-y-0"
                                                                leaveTo="opacity-0 translate-y-1"
                                                              >
                                                                <Popover.Panel>
                                                                  <button
                                                                    onClick={() => {
                                                                      handleSubDeptChange3(
                                                                        subItem.description
                                                                      );
                                                                      navigate(
                                                                        '/search?text=' +
                                                                          subItem.description
                                                                      );
                                                                    }}
                                                                    className="py-1 pl-12 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full hover:bg-yellow-100"
                                                                  >
                                                                    {
                                                                      subItem.description
                                                                    }
                                                                  </button>
                                                                </Popover.Panel>
                                                              </Transition>
                                                            </div>
                                                          )
                                                        )}
                                                      </div>
                                                    ) : option.description ===
                                                      'Produce' ? (
                                                      <div>
                                                        {produceSub.map(
                                                          (subItem) => (
                                                            <div>
                                                              <Transition
                                                                onClick={() => {
                                                                  navigate(
                                                                    '/search?text=' +
                                                                      subItem.description
                                                                  );
                                                                }}
                                                                show={open}
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0 translate-y-1"
                                                                enterTo="opacity-100 translate-y-0"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100 translate-y-0"
                                                                leaveTo="opacity-0 translate-y-1"
                                                              >
                                                                <Popover.Panel>
                                                                  <button
                                                                    onClick={() => {
                                                                      handleSubDeptChange3(
                                                                        subItem.description
                                                                      );
                                                                      navigate(
                                                                        '/search?text=' +
                                                                          subItem.description
                                                                      );
                                                                    }}
                                                                    className="py-1 pl-12 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full hover:bg-yellow-100"
                                                                  >
                                                                    {
                                                                      subItem.description
                                                                    }
                                                                  </button>
                                                                </Popover.Panel>
                                                              </Transition>
                                                            </div>
                                                          )
                                                        )}
                                                      </div>
                                                    ) : option.description ===
                                                      'Beer' ? (
                                                      <div>
                                                        {beerSub.map(
                                                          (subItem) => (
                                                            <div>
                                                              <Transition
                                                                onClick={() => {
                                                                  navigate(
                                                                    '/search?text=' +
                                                                      subItem.description
                                                                  );
                                                                }}
                                                                show={open}
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0 translate-y-1"
                                                                enterTo="opacity-100 translate-y-0"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100 translate-y-0"
                                                                leaveTo="opacity-0 translate-y-1"
                                                              >
                                                                <Popover.Panel>
                                                                  <button
                                                                    onClick={() => {
                                                                      handleSubDeptChange3(
                                                                        subItem.description
                                                                      );
                                                                      navigate(
                                                                        '/search?text=' +
                                                                          subItem.description
                                                                      );
                                                                    }}
                                                                    className="py-1 pl-12 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full hover:bg-yellow-100"
                                                                  >
                                                                    {
                                                                      subItem.description
                                                                    }
                                                                  </button>
                                                                </Popover.Panel>
                                                              </Transition>
                                                            </div>
                                                          )
                                                        )}
                                                      </div>
                                                    ) : option.description ===
                                                      'Wine' ? (
                                                      <div>
                                                        {wineSub.map(
                                                          (subItem) => (
                                                            <div>
                                                              <Transition
                                                                onClick={() => {
                                                                  navigate(
                                                                    '/search?text=' +
                                                                      subItem.description
                                                                  );
                                                                }}
                                                                show={open}
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0 translate-y-1"
                                                                enterTo="opacity-100 translate-y-0"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100 translate-y-0"
                                                                leaveTo="opacity-0 translate-y-1"
                                                              >
                                                                <Popover.Panel>
                                                                  <button
                                                                    onClick={() => {
                                                                      handleSubDeptChange3(
                                                                        subItem.description
                                                                      );
                                                                      navigate(
                                                                        '/search?text=' +
                                                                          subItem.description
                                                                      );
                                                                    }}
                                                                    className="py-1 pl-12 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full hover:bg-yellow-100"
                                                                  >
                                                                    {
                                                                      subItem.description
                                                                    }
                                                                  </button>
                                                                </Popover.Panel>
                                                              </Transition>
                                                            </div>
                                                          )
                                                        )}
                                                      </div>
                                                    ) : option.description ===
                                                      'Liquor' ? (
                                                      <div>
                                                        {liquorSub.map(
                                                          (subItem) => (
                                                            <div>
                                                              <Transition
                                                                onClick={() => {
                                                                  navigate(
                                                                    '/search?text=' +
                                                                      subItem.description
                                                                  );
                                                                }}
                                                                show={open}
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0 translate-y-1"
                                                                enterTo="opacity-100 translate-y-0"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100 translate-y-0"
                                                                leaveTo="opacity-0 translate-y-1"
                                                              >
                                                                <Popover.Panel>
                                                                  <button
                                                                    onClick={() => {
                                                                      handleSubDeptChange3(
                                                                        subItem.description
                                                                      );
                                                                      navigate(
                                                                        '/search?text=' +
                                                                          subItem.description
                                                                      );
                                                                    }}
                                                                    className="py-1 pl-12 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full hover:bg-yellow-100"
                                                                  >
                                                                    {
                                                                      subItem.description
                                                                    }
                                                                  </button>
                                                                </Popover.Panel>
                                                              </Transition>
                                                            </div>
                                                          )
                                                        )}
                                                      </div>
                                                    ) : option.description ===
                                                      'Tobacco' ? (
                                                      <div>
                                                        {tobaccoSub.map(
                                                          (subItem) => (
                                                            <div>
                                                              <Transition
                                                                onClick={() => {
                                                                  navigate(
                                                                    '/search?text=' +
                                                                      subItem.description
                                                                  );
                                                                }}
                                                                show={open}
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0 translate-y-1"
                                                                enterTo="opacity-100 translate-y-0"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100 translate-y-0"
                                                                leaveTo="opacity-0 translate-y-1"
                                                              >
                                                                <Popover.Panel>
                                                                  <button
                                                                    onClick={() => {
                                                                      handleSubDeptChange3(
                                                                        subItem.description
                                                                      );
                                                                      navigate(
                                                                        '/search?text=' +
                                                                          subItem.description
                                                                      );
                                                                    }}
                                                                    className="py-1 pl-12 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full hover:bg-yellow-100"
                                                                  >
                                                                    {
                                                                      subItem.description
                                                                    }
                                                                  </button>
                                                                </Popover.Panel>
                                                              </Transition>
                                                            </div>
                                                          )
                                                        )}
                                                      </div>
                                                    ) : null}
                                                  </div>
                                                )}
                                              </Popover>
                                            ))}
                                          </div>
                                        )
                                      )}
                                    </Popover.Panel>
                                  </div>
                                )}
                              </Popover>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Fragment>
            );
          }}
        </Popover>
        <div className="flex-1 lg:flex-none">
          <Autocomplete
            handleDeptChange5={onDepartChange5}
            className="block w-full lg:w-96 h-10 md:h-11"
            hasRoundedCorners={true}
            icon={SearchIcon}
            items={searchList}
            placeholder="What are you looking for?"
            type="search"
            onChange={(event) => handleChange(event)}
            onItemSelect={(item) => handleItemSelect(item)}
            value={value}
            aria-label="LABEL HERE OR ADD LABEL TAG"
            loading={loading}
          />
        </div>
        <div className="hidden lg:block lg:flex-1">
          <nav className="flex space-x-8 ml-4">
            <a
              href="https://www.coborns.com/circular"
              className="cbn-header__nav-link"
            >
              Weekly Ad
            </a>
          </nav>
        </div>
        <div className="flex items-center">
          <div className="hidden sm:block sm:ml-3 md:ml-4 lg:ml-6">
            <a
              href="/dispmyshoppinglistdetails"
              className="inline-flex rounded-sm items-center justify-center cbn-header__nav-link"
            >
              <span>My Lists</span>
              <img
                className="ml-3"
                src={listIcon}
                alt=""
                style={{ width: 27, height: 27 }}
              />
            </a>
          </div>
          <button
            onClick={() => setShowCart(true)}
            className="cbn-header__cart-button"
          >
            <img className="w-6 h-auto" src={cartIcon} alt="" />
            <span className="text-base md:text-lg font-bold ml-3">
              {cart.length}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  onDeptChange: PropTypes.func,
  onSubDeptChange3: PropTypes.func,
  theme: PropTypes.string,
  //BSWING: refactor user object as needed.
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string
  })
};

Header.defaultProps = {
  onDeptChange: () => {},
  onSubDeptChange3: () => {}
};

export default Header;
