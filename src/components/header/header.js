import { Fragment, useState, useEffect, useCallback } from 'react';
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


const Header = (props) => {
  // BSWING: 'theme' can be passed through like this or pulled from another context - refactor if desired.
  // BSWING: 'user' or another authentication object can be passed through like this or pulled from another context - refactor if desired.

  const [searchList, setSearchList] = useState([]);
  const [data, setData] = useState();
  const fetch = async (itemName) => {
    if (itemName) {
      const sData = await search(itemName, 2037, 2);
      setSearchList(sData?.data?.suggestionList);
    }
  };
  const setHoursHtml = () => {
    if (
      document.getElementById('yext-facility-hours-getter') &&
      document.getElementById('yext-facility-hours-setter')
    ) {
      document.getElementById(
        'yext-facility-hours-getter'
      ).innerHTML = document.getElementById(
        'yext-facility-hours-setter'
      ).innerHTML;
    }
  };
  useEffect(() => {
    grocery().then((res) => {
      setData(res.data);
      console.log('DATA', res.data);
    });
  }, [props]);

  const list = () => {
    var lst = [];
    for (var i = 0; i < data.length; i++) {
      lst.push(data[i].description);
      console.log('LIST', lst);
    }
    return lst.map((dept) => (
      <a className="py-2 pl-6 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full text-gray-500 hover:bg-yellow-100">
        {dept}
      </a>
    ));
  };

  const { className, theme, user, onMobileButtonClick, ...rest } = props;
  const componentClassName = classNames('cbn-header', {}, className);
  const [value, setValue] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const facilityId = 2029;

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

  const handleCheckoutCart = () => {
    const urlObj = {
      "localhost" : "https://devweb.shop.coborns.com",
      "dev" : "https://devweb.shop.coborns.com",
      "prod" : "https://shop.coborns.com"
    };
    const path = "/checkautomaticpromotions";
    const host = window.location.host;
    let url = "";
    if(host.includes("localhost")){
      url = urlObj["localhost"];
    }
    else if(host.includes("devweb.shop.coborns.com")){
      url = urlObj["dev"];
    }
    else if(host.includes("shop.coborns.com")){
      url = urlObj["prod"];
    }
    else{
      url = urlObj["localhost"];
    }
    // window.location.replace(url + path)
    window.location.href=url + path;
  }

  return (
    <header className={componentClassName} {...rest}>
      <div className="flex justify-between items-center px-4 lg:px-6 h-16 md:h-28">
        {theme === 'coborns' && (
          <div className="flex flex-1 -mb-1 md:-mb-2">
            <a href="#link">
              <span className="sr-only">Coborn's</span>
              <img className="h-6 md:h-14 w-auto" src={cobornsLogo} alt="" />
            </a>
          </div>
        )}
        {theme === 'cashwise' && (
          <div className="flex flex-1">
            <a href="#link">
              <span className="sr-only">Cashwise</span>
              <img className="h-12 md:h-24 w-auto" src={cashwiseLogo} alt="" />
            </a>
          </div>
        )}
        {theme === 'marketplace' && (
          <div className="flex flex-1 -mb-1 md:-mb-2">
            <a href="#link">
              <span className="sr-only">MarketPlace Foods</span>
              <img
                className="h-6 md:h-14 w-auto"
                src={marketplaceLogo}
                alt=""
              />
            </a>
          </div>
        )}
        <div className="flex items-center justify-between text-right">
          <div className="hidden md:block">
            <div className="text-lg font-medium">
              {user && `Welcome Back, ${user.firstName}`}
              {!user && 'Grocery Shopping Made Easy'}
            </div>
            <div className="text-xs font-medium space-x-2">
              <a className="underline" href="#link">
                Store Locator
              </a>
              {user && (
                <a className="underline" href="#link">
                  My Account
                </a>
              )}
              {!user && (
                <a
                  className="underline"
                  href="https://testweb.shop.coborns.com/createaccount"
                >
                  Register
                </a>
              )}
              {user && (
                <a className="underline" href="#link" onClick={props.logout}>
                  Sign Out
                </a>
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
                    style={{ zIndex: 9999 }}
                  >
                    <div className="rounded shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative bg-white p-3">
                        <div className="rounded bg-yellow-100 mb-3 p-4">
                          <div className="font-bold leading-tight">
                            Saint Cloud, MN
                          </div>
                          <div className="text-sm font-medium mb-1">
                            <div id="yext-facility-hours-getter" />
                          </div>
                          <div className="text-xs font-medium">
                            <a
                              className="underline"
                              href={`https://www.coborns.com/Cobstore${facilityId}`}
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
                              <Disclosure as="div" key={item.name}>
                                {({ open }) => (
                                  <>
                                    <Disclosure.Button className="p-3 flex items-center rounded transition ease-in-out duration-150 w-full text-gray-500 hover:bg-yellow-100">
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
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="space-y-1">
                                      {item.children.map((subItem) =>
                                        subItem.name === 'our brands' ? (
                                          <a
                                            key={subItem.name}
                                            href={subItem.href}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="py-2 pl-6 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full text-gray-500 hover:bg-yellow-100"
                                          >
                                            {subItem.name}
                                          </a>
                                        ) : subItem.name == 'four brothers' ? (
                                          <a
                                            key={subItem.name}
                                            href={subItem.href}
                                            className="py-2 pl-6 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full text-gray-500 hover:bg-yellow-100"
                                          >
                                            {subItem.name}
                                          </a>
                                        ) : (
                                          list()
                                        )
                                      )}
                                    </Disclosure.Panel>
                                  </>
                                )}
                              </Disclosure>
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
          <button className="cbn-header__cart-button" onClick={handleCheckoutCart}>
            <img className="w-6 h-auto" src={cartIcon} alt="" />
            <span className="text-base md:text-lg font-bold ml-3">5</span>
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.string,
  // BSWING: refactor user object as needed.
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string
  })
};

export default Header;
