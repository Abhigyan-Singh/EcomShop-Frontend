import { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Listbox, Transition } from '@headlessui/react';
import { TruckIcon } from '@heroicons/react/outline';
import {
  CheckIcon,
  ChevronDownIcon,
  LocationMarkerIcon
} from '@heroicons/react/solid';
import morerewardsLogo from 'assets/images/morerewards-logo@2x.png';
import locationOptions from 'data/locationOptions';
import './locator.css';
import Cart from '../../components/cart/cart.js';

const LocationOption = ({ option }) => (
  <Listbox.Option
    key={option.title}
    className={({ active }) =>
      classNames('cbn-locator__option', {
        'cbn-locator__option--active': active
      })
    }
    value={option}
  >
    {({ selected, active }) => (
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div>{option.title}</div>
          {selected ? (
            <span className={active ? 'text-white' : 'text-gray-500'}>
              <CheckIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          ) : null}
        </div>
      </div>
    )}
  </Listbox.Option>
);

const Locator = (props) => {
  const { className, onCartButtonClick, onLocationChange, ...rest } = props;
  const [selected, setSelected] = useState(locationOptions[0]);
  const componentClassName = classNames('cbn-locator', {}, className);
  const [show, setShow] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cookies, setCookie] = useCookies();
  const [store, setStore] = useState([null]);
  const { facility, user } = cookies;
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    !hasLoaded &&
      user &&
      allStores(7).then((res) => {
        setStore(res.data);
        console.log('FACILITY', res.data);
        setHasLoaded(true);
      });
  }, [user]);

  const [selected, setSelected] = useState(facility);

  const handleOnChange = (option) => {
    setSelected(option);

    if (typeof onLocationChange === 'function') {
      onLocationChange(option);
    }
  };


  
  const handleCartClick = (event) => {
    setShowCart(true)
  };

  const onClose=(event)=>{
    setShowCart(false)
  }

  console.log(selected);
  return (
    <div className={componentClassName} {...rest}>
      <div className="flex flex-1 md:flex-none items-center divide-x">
        <div className="relative sm:mr-3 flex-1 md:flex-none">
          <Listbox value={selected} onChange={handleOnChange}>
            {({ open }) => (
              <Fragment>
                <Listbox.Label className="sr-only">
                  Change location
                </Listbox.Label>
                <Listbox.Button className="cbn-locator__button w-full md:w-auto md:-ml-2">
                  <LocationMarkerIcon className="h-5 w-5" aria-hidden="true" />
                  <span className="block ml-2 mr-6 flex-1 md:flex-none leading-none">
                    <span className="block leading-none mb-0.5 md:mb-0">
                      {selected.title}
                    </span>
                    <span className="block text-xs leading-none md:hidden">
                      Delivery: Sat, Sep 18: 6pm - 7pm
                    </span>
                  </span>
                  <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                </Listbox.Button>
                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Listbox.Options className="origin-top-left absolute z-20 left-0 mt-2 w-72 rounded shadow-lg overflow-hidden bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="divide-y divide-gray-100">
                      <div>
                        <div className="cbn-locator__group-label">
                          Delivery &amp; Pick Up
                        </div>
                        {locationOptions
                          .filter((x) => !x.isPickupOnly)
                          .map((option) => (
                            <LocationOption
                              key={option.title}
                              option={option}
                            />
                          ))}
                      </div>
                      <div>
                        <div className="cbn-locator__group-label">
                          Pick Up Only
                        </div>
                        {locationOptions
                          .filter((x) => x.isPickupOnly)
                          .map((option) => (
                            <LocationOption
                              key={option.title}
                              option={option}
                            />
                          ))}
                      </div>
                    </div>
                  </Listbox.Options>
                </Transition>
              </Fragment>
            )}
          </Listbox>
        </div>
        <div className="hidden md:block pl-3">
          <a className="cbn-locator__button" href="#link">
            <TruckIcon className="h-6 w-6" aria-hidden="true" />
            <div className="ml-2 leading-none">
              <div className="leading-none mb-0.5">Delivery</div>
              <div className="text-xs leading-none">Sat, Sep 18: 6pm - 7pm</div>
            </div>
          </a>
        </div>
      </div>
      <div className="hidden sm:flex items-center">
        <div className="hidden lg:flex items-center mx-6">
          <img className="h-8 w-auto mr-4" src={morerewardsLogo} alt="" />
          <a
            className="text-xs underline"
            href="https://www.morerewards.com/"
            target="_blank"
          >
            My Rewards
          </a>
        </div>
        <div className="border-l border-yellow-200">
          <button
            className="bg-yellow-100 flex items-center h-16 px-6 text-lg font-bold"
            onClick={handleCartClick}
          >
            <span className="mr-12">Total</span>
            <span className="mr-3">$23.65</span>
            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            <Cart  open={showCart} onClose={onClose} />
          </button>      
        </div>
      </div>
    </div>
  );
};

Locator.propTypes = {
  onCartButtonClick: PropTypes.func,
  onLocationChange: PropTypes.func
};

Locator.defaultProps = {
  onCartButtonClick: () =>  {} ,
  onLocationChange: () => {}
};

export default Locator;
