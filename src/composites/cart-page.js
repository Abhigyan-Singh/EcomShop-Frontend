import React, { useState, useEffect } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  CheckIcon,
  ChevronDownIcon,
  LocationMarkerIcon
} from '@heroicons/react/solid';
import { useCart } from "react-use-cart";
import { mockData } from 'composites/home-get-started.js'
import { Counter } from  '../components/counter/counter';
import '../components/cart/cart.css';
import productData from 'data/product.json';
import Button from '../components/button/button.js';

const cartData = {
  sections: [
    { id: 'groceries', label: 'Groceries', products: [...Array(15)] },
    { id: 'wine-spirits', label: 'Wine & Spirits', products: [...Array(3)] }
  ],
  total: '$23.65'
};



const CartItem = (props) => {
  const {
    items,
    removeItem,
  } = useCart();
  
  // COBORNS TODO: Pull data from props instead of imported JSON
  return (
    <div className="cbn-cart__item group " {...props}>
      <div className="flex items-start space-x-3">
        <Counter disabled={productData.isOutOfStock} onChange={() => {}} />
        <div>
          <div className="text-sm leading-tight mb-1">{productData.name}</div>
          <div className="text-xs text-gray-400 leading-none mb-3">
            {productData.size}
          </div>
          <div className="flex justify-between">
            <div className="text-xs leading-none">{productData.price}</div>
            <button onClick={removeItem} className="invisible font-medium text-xs leading-none underline group-hover:visible">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Basket = (props) => {
  const {
    items,
    isEmpty,
    totalUniqueItems,
    updateItemQuantity,
    removeItem,

  } = useCart();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const [quantity, setQuantity] = useState(0);

    return (
    <div className="border-l border-yellow-200 me-2">
      <button className="bg-yellow-100 flex items-center h-16 px-6 text-lg font-bold" onClick={toggleShow}>
        <span className="mr-12" style={{color: 'black'}}>Total</span>
        <span className="mr-3" style={{color: 'black'}}>$23.65</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      <Offcanvas className="max-w-sm w-full h-full bg-white shadow flex flex-col md:max-w-xs" backdrop={true} placement='end' show={show} onHide={handleClose}  autofocus={true} >
          <Offcanvas.Header className="border-b flex items-start justify-between p-4" closeButton>
            <Offcanvas.Title><div className="text-lg font-medium">Shopping Cart</div></Offcanvas.Title>
          </Offcanvas.Header>
            <Offcanvas.Body onHide={handleClose}>
            <div className="relative flex-1 text-lg font-medium cbn-cart cbn-cart__item " style={{textDecorationLine: 'underline', textDec}} >
              {cartData.sections.map((section) => (
                <div className="" key={section.id}>
                  <div className="p-3">
                    {section.label} ({section.products.length})
                  </div>
                  {section.products.map((product, index) => (
                    <CartItem key={index} />
                  ))}
                </div>
              ))}
              </div>
              <div className="bg-yellow-100 p-3">
                <div className="text-lg mb-2 text-right">
                  Order Total: {cartData.total}
                </div>
                <Button className="block w-full" label="Checkout" />
              </div>
            </Offcanvas.Body>
          </Offcanvas>
      </div>     
    )
};

export default Basket;
