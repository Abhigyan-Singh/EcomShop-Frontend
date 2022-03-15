import {
  ChevronDownIcon,
  ViewGridIcon,
  ViewListIcon
} from '@heroicons/react/solid';
import React, { Fragment } from 'react';
import { Disclosure, Popover, Transition } from '@headlessui/react';
import { CartState } from 'context/context';



const ShopSort = (props) => {


  const { itemState: {      
    sort,
    byAmys,
    byBanquet,
    byBrand,
    byAll,
    byLocal,
    byOrganic,
    byGlutenFree,
    byNew,
    bySale,
    byName,
    byPrice,
    bySize
  }, 
    itemDispatch } = CartState()


  return (
    <div className="relative inline-block text-left pr-4">
      <Popover className="relative">
        {({open}) => {
          return (
            <Fragment>
              <Popover.Button 
                className="inline-flex justify-center text-sm font-medium px-2 py-1"
                id="headlessui-popover-button-26"
                type="button"
                aria-expanded="false"
              >
                <span>Sort By: Default (Relevance)</span>
                <ChevronDownIcon
                  className="h-5 w-5 text-black-300"
                  aria-hidden="true"
                />
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
                  className="absolute ml-12 mt-0"
                  style={{ zIndex: 9999 }}
                  >
                  
                  <div className="relative border shadow-lg p--1 bg-white rounded justify-center"
                    style={{
                      backgroundColor: 'rgb(255, 255, 0, 1)',
                      margin: -3,
                      color: 'black',
                      width: 160,
                      height: 332
                    }}>
                      <button class="block px-4 py-2 text-sm" id="headlessui-menu-item-126" role="menuitem" tabindex="-1">Default (Relevance)</button>
                      <a href="#" class="block px-4 py-2 text-sm" id="headlessui-menu-item-127" role="menuitem" tabindex="-1">Name: A to Z</a>
                      <a href="#" class="block px-4 py-2 text-sm" id="headlessui-menu-item-16" role="menuitem" tabindex="-1">Name: Z to A</a>
                      <a href="#" class="block px-4 py-2 text-sm" id="headlessui-menu-item-17" role="menuitem" tabindex="-1">Brand: A to Z</a>
                      <a href="#" class="block px-4 py-2 text-sm" id="headlessui-menu-item-17" role="menuitem" tabindex="-1">Brand: A to Z</a>
                      <a href="#" class="block px-4 py-2 text-sm" id="headlessui-menu-item-17" role="menuitem" tabindex="-1">Brand: A to Z</a>
                      <button onClick={() => itemDispatch({type:"SORT_BY_PRICE", payload: "lowToHigh"})} class="block px-4 py-2 text-sm" id="headlessui-menu-item-20" role="menuitem" tabindex="-1">Price: Low to High</button>
                      <a href="#" class="block px-4 py-2 text-sm" id="headlessui-menu-item-20" role="menuitem" tabindex="-1">Price: High to Low</a>
                      <a href="#" class="block px-4 py-2 text-sm" id="headlessui-menu-item-22" role="menuitem" tabindex="-1">Size: Large to Small</a>

                  </div>
                </Popover.Panel>
              </Transition>
              <button type="button" className="p-1 ml-3 rounded-full ring-2 ring-gray-200">
                <span className="sr-only">View grid</span>
                <ViewGridIcon className="h-5 w-5 text-black-300" aria-hidden="true" />
              </button>
        
              <button type="button" className="p-1 ml-3 rounded-full">
                <span className="sr-only">View list</span>
                <ViewListIcon className="h-5 w-5 text-black-300" aria-hidden="true" />
              </button>

            </Fragment>
                          
          )
        }}
      </Popover>
    </div>
  );
};

export default ShopSort;
