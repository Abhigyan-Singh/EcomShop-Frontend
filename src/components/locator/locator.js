import { Fragment, useState, useEffect } from 'react';
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
import './locator.css';
import { map } from 'lodash';
import { allStores } from 'services/facilities';
import { useCookies } from 'react-cookie';
import { CookiesAge } from 'apiConfig';
import Cart from '../../components/cart/cart.js';
import { CartState } from '../../context/context';

const LocationOption = ({ option }) => (
  <Listbox.Option
    key={option.facilityName}
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
          <div>{option.facilityName}</div>
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
  const { className, onLocationChange, ...rest } = props;
  const componentClassName = classNames('cbn-locator', {}, className);
  const [cookies, setCookie] = useCookies();
  const [store, setStore] = useState([null]);
  const [storeDelivery, setStoreDelivery] = useState([null]);
  const { facility, user } = cookies;
  const [hasLoaded, setHasLoaded] = useState(false);
  const [showCart, setShowCart] = useState(false);
  //const [total, setTotal] = useState();
  const {
    state: { cart, total },
    dispatch
  } = CartState();

  useEffect(() => {
    !hasLoaded &&
      allStores(5).then((res) => {
        setStore(res.data);
        console.log('FACILITY', res.data);
        const defaultFacility = res.data.facilitiesPickup.filter(
          (each) => each.facilityDtl.facilityId !== user.defaultFacilityId
        );
        setSelected(defaultFacility[0]?.facilityDtl);
        setHasLoaded(true);
      });
  }, [user]);

  useEffect(() => {
    !hasLoaded &&
      allStores(7).then((res) => {
        setStoreDelivery(res.data);
        setHasLoaded(true);
      });
  }, [user]);

  const [selected, setSelected] = useState(facility);

  const handleOnChange = (option) => {
    setSelected(option);
    setCookie('facility', option, {
      path: '/',
      maxAge: CookiesAge
    });
    if (typeof onLocationChange === 'function') {
      onLocationChange(option);
    }
  };

  const handleCartClick = (event) => {
    setShowCart(true);
  };

  const onClose = (event) => {
    setShowCart(false);
  };

  return (
    <div id="change_location" className={componentClassName} {...rest}>
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
                    Store
                    <span className="block leading-none mb-0.5 md:mb-0">
                      {selected?.facilityName}
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
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="origin-top-left absolute z-10 left-0 mt-2 w-72 rounded shadow-lg overflow-hidden bg-white ring-1 ring-black ring-opacity-5 focus:outline-none max-height-80">
                    <div className="divide-y divide-gray-100">
                      <div>
                        <div className="cbn-locator__group-label">
                          Delivery &amp; Pick Up
                        </div>
                        {store &&
                          map(
                            storeDelivery.facilitiesDeliveryOrPickup,
                            (option) => (
                              <LocationOption
                                key={option.facilityDtl.facilityName}
                                option={option.facilityDtl}
                              />
                            )
                          )}
                      </div>
                      <div>
                        <div className="cbn-locator__group-label">
                          Pick Up Only
                        </div>
                        {store &&
                          map(store.facilitiesPickup, (option) => (
                            <LocationOption
                              key={option.facilityDtl.facilityName}
                              option={option.facilityDtl}
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
          <a className="cbn-locator__button">
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
            <span className="mr-12">Total:</span>
            {isNaN(total) ? (
              <span className="mr-3">
                ${Number(parseFloat(total || 0).toFixed(2))}
              </span>
            ) : (
              <span className="mr-3">${parseFloat(total).toFixed(2)}</span>
            )}

            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            <Cart open={showCart} onClose={onClose} />
          </button>
        </div>
      </div>
    </div>
  );
};

Locator.propTypes = {
  onLocationChange: PropTypes.func
};

Locator.defaultProps = {
  onLocationChange: () => {}
};

export default Locator;
