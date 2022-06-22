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

export default function HeaderInner(props) {
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
  return (
    <header className="hdContainer innerHeader" {...rest}>
      <div id="home" className="flex justify-between items-center px-4 lg:px-6">
        {theme === 'coborns' && (
          <div className="">
            <a href="/">
              <img
                src={cobornsLogo}
                alt=""
                style={{
                  backgroundSize: '100%',
                  display: 'inlineblock',
                  width: '250px',
                  height: '30px',
                }}
              />
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
        {/* <div className="flex items-center justify-between text-right float right">
              <div className="hidden md:block">
                <div className="text-lg font-medium">
                  {user && `Welcome Back, ${user.firstName}`}
                  {!user && 'Grocery Shopping Made Easy'}
                </div>
                <div className="text-xs font-medium space-x-2">
                  <a className="underline" href="/store-locator">
                    Store Locator
                  // </a>
                  {user && (
                    <a
                      className="underline"
                      href="https://devweb2.shop.coborns.com/myaccountdetails"
                    >
                      My Account
                    </a>
                  )}
                
                </div>
              </div>
            
            </div> */}
        <nav className="m-header">
          <div className="hbr_icon" onclick="void(0)">
            <div className="hbr_icon_line"></div>
            <div className="hbr_icon_line"></div>
            <div className="hbr_icon_line"></div>
          </div>
          <ul className="m-header__ul">
            <li className="m-header__li">
              <a
                // href="loginMessage"
                className="m-header__link"
                // onclick="skipLeaveMessageWindow();"
              >
                Return to Shopping
              </a>
            </li>
            <li className="m-header__li">
              <a
                // href="#"
                className="m-header__link"
                // onclick="skipLeaveMessageWindow();popUp('/checkouthelpstep1',725, 350, '1', '0')"
              >
                Checkout Help
              </a>
            </li>
            <li className="m-header__li">
              <a  className="m-header__link" onClick={props.logout}>
                Log Out
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
