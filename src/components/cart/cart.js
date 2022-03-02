import { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import Button from 'components/button/button';
import Counter from 'components/counter/counter';
import productData from 'data/product.json';
//import { useCart } from "react-use-cart";
import './cart.css';

// COBORNS TODO: Replace this with actual data from data source
const cartData = {
  sections: [
    { id: 'groceries', label: 'Groceries', products: [...Array(1)] },
    { id: 'wine-spirits', label: 'Wine & Spirits', products: [...Array(0)] }
  ],
  total: '$23.65'
};


const CartItem = (props) => {
  
  // COBORNS TODO: Pull data from props instead of imported JSON
  return (
    <div className="cbn-cart__item group" {...props}>
      <div className="flex items-start space-x-3">
        <Counter disabled={productData.isOutOfStock} onChange={() => {}} />
        <div>
          <div className="text-sm leading-tight mb-1">{productData.name}</div>
          <div className="text-xs text-gray-400 leading-none mb-3">
            {productData.size}
          </div>
          <div className="flex justify-between">
            <div className="text-xs leading-none">{productData.price}</div>
            <button  className="invisible font-medium text-xs leading-none underline group-hover:visible">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = (props) => {
  const { open, onClose } = props;
  const handleCartClose = (event) => {
    if (typeof onClose === 'function') {
      onClose(false)
    }
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
                  Shopping Cart
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
              {cartData ?
                <div className="relative flex-1 overflow-y-auto">
                {cartData.sections.map((section) => (
                  <div className="border-b" key={section.id}>
                    <div className="p-3">
                      {section.label} ({section.products.length})
                    </div>
                    {section.products.map((product, index) => (
                      <CartItem key={index} />
                    ))}
                  </div>
                ))}
              </div>
               : <div>HELLO</div> }


              <div className="bg-yellow-100 p-3">
                <div className="text-lg mb-2 text-right">
                  Order Total: {cartData.total}
                </div>
                <Button className="block w-full" label="Checkout" />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

Cart.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
};

Cart.defaultProps = {
  open: false
};

export default Cart;
