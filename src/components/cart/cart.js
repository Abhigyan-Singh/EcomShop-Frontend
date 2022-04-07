import { Fragment, useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import Button from 'components/button/button';
import Counter from 'components/counter/counter';
import productData from 'data/product.json';
import './cart.css';
import { useCart } from 'react-use-cart';
import EmptyCart from '../../assets/images/CART.png';
import { CartState } from 'context/context';
import { mockData } from 'composites/home-get-started.js';

// COBORNS TODO: Replace this with actual data from data source

const Cart = (props) => {
  const {
    state: { cart, total ,qty },
    dispatch
  } = CartState();
  const { open, onClose } = props;

  const handleCartClose = (event) => {
    if (typeof onClose === 'function') {
      onClose(false);
    }
  };

  const handleCheckoutCart = () => {
    console.log('clicked...');
    const urlObj = {
      localhost: 'https://devweb2.shop.coborns.com',
      dev: 'https://devweb2.shop.coborns.com',
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

  const CartItem = (item) => {
    const dept1 = item.item.prodDepartment;
    // COBORNS TODO: Pull data from props instead of imported JSON
    return (
      <div className="cbn-cart__item group" {...item}>
        <div className="flex items-start space-x-3">
          <Counter
            item={item.item}
            value={item.item.qty}
          
            disabled={item.item.isOutOfStock}
            onChange={() =>  {}}
            min="1"
          />
          <div>
            <div className="text-sm leading-tight mb-1">
              {item.item.productName}
            </div>
            <div className="text-xs text-gray-400 leading-none mb-3">
              {item.item.sizeString} $0.{item.item.sizeNumber} /
              {item.item.sizeUom}
            </div>
            <div className="flex justify-between">
              <div
                className="text-xs leading-none"
                style={{ fontWeight: 'bold' }}
              >
                {item.item.currentPrice}
              </div>
              <button
                onClick={() =>
                  dispatch({ type: 'REMOVE_FROM_CART', payload: item.item })
                }
                className="invisible font-medium text-xs leading-none underline group-hover:visible"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="cbn-cart" onClose={handleCartClose}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="relative max-w-sm w-full h-full bg-white shadow flex flex-col md:max-w-xs">
              <div className="border-b flex items-start justify-between p-4">
                <Dialog.Title className="text-lg font-medium">
                  Shopping Cart ({cart.length})
                </Dialog.Title>

                <div className="ml-3 h-7 flex items-center">
                  <button
                    className="cbn-cart__close-button"
                    onClick={handleCartClose}
                  >
                    <span className="sr-only">Close panel</span>
                    <XIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="relative flex-1 overflow-y-auto">
                {cart.length == 0 ? (
                  <div>
                    <img src={EmptyCart} style={{ paddingLeft: 25 }} />
                  </div>
                ) : (
                  <ul>
                    {cart.map((item) => {
                      <li
                        key={item.productId}
                        style={{
                          height: 30,
                          justifyContent: 'center',
                          marginTop: 15,
                          marginBottom: 5,
                          marginLeft: 10
                        }}
                      >
                        {item.prodDepartment} ({item.qty})
                      </li>
                    })}
                    {cart.map((item) => (
                      <li key={item.productId}>
                        <CartItem item={item}></CartItem>
                        <li></li>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="bg-yellow-100 p-3">
                <div className="text-lg mb-2 text-center" >
                  Order Total: {isNaN(total) ? <span className="mr-3">${Number(parseFloat(total|| 0).toFixed(2))}</span>: <span className="mr-3">${parseFloat(total).toFixed(2)}</span> }
                </div> 
                <Button
                  onClick={handleCheckoutCart}
                  className="block w-full"
                  label="Checkout"
                />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

Cart.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
};

Cart.defaultProps = {
  open: false
};

export default Cart;
