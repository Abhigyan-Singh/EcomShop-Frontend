import {
  ChevronDownIcon,
  ViewGridIcon,
  ViewListIcon
} from '@heroicons/react/solid';
import React, { Fragment, useEffect, useState } from 'react';
import { Disclosure, Popover, Transition } from '@headlessui/react';
import { CartState } from 'context/context';

const ShopSort = (props) => {
  const { list, filteredList } = props;
  const [listr, setListr] = useState(list);

  const handleAbcSort = () => {
    if (list) {
      setListr(list.sort((a, b) =>
      a.productName.localeCompare(b.productName)
      ))
    }
    return listr
  
  }

  const handleZyxSort = () => {
    return list.sort((a, b) =>
      b.productName.localeCompare(a.productName)  
    )
  }

  // const handleAbcBrandSort = () => {
  //   filteredList.sort((a, b) =>
  //     a.productName.localeCompare(b.productName)  
  //   )
  //   return filteredList
  // }

  // const handleZxyBrandSort = () => {
  //   filteredList.sort((a, b) =>
  //     a.productName.localeCompare(b.productName)  
  //   )
  //   return filteredList
  // }
  
  const handleLowPriceSort = () => {
    list.sort((a, b) => (a.currentPrice > b.currentPrice) ? 1 : -1)
  }
  
  const handleHighPriceSort = () => {
    list.sort((a, b) => (a.currentPrice < b.currentPrice) ? 1 : -1)
  }

  const handleSmallSizeSort = () => {
   list.sort((a, b) => (a.sizeNumber < b.sizeNumber) ? 1 : -1)
  }

  const handleLargeSizeSort = () => {
    list.sort((a, b) => (a.sizeNumber > b.sizeNumber) ? 1 : -1)
  }

  const defaultList = () => {
    return list
  }
  
  function refreshPage() { 
    window.location.reload(false);
  }

  useEffect(() => {
    handleAbcSort()
  }, [listr])
  


  
  return (
    <div className="relative inline-block text-left pr-4">
      <Popover className="relative">
        {({ open }) => {
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
                  <div
                    className="relative border shadow-lg p--1 bg-white rounded justify-center"
                    style={{
                      backgroundColor: 'rgb(255, 255, 0, 1)',
                      margin: -3,
                      color: 'black',
                      width: 160,
                      height: 332
                    }}
                    onClick={() => refreshPage()}
                  >
                    <button
                      class="block px-4 py-2 text-sm font-medium hover:shadow-xl"
                      id="headlessui-menu-item-126"
                      role="menuitem"
                      tabindex="-1"
                      onClick={() => defaultList()}
                    >
                      Default (Relevance)
                    </button>
                    <button
                      class="block px-4 py-2 text-sm font-medium hover:shadow-xl"
                      id="headlessui-menu-item-127"
                      role="menuitem"
                      tabindex="-1"
                      onClick={() => handleAbcSort()}
                    >
                      Name: A to Z
                    </button>
                    <button
                      class="block px-4 py-2 text-sm font-medium hover:shadow-xl"
                      id="headlessui-menu-item-16"
                      role="menuitem"
                      tabindex="-1"
                      onClick={() => handleZyxSort()}
                    >
                      Name: Z to A
                    </button>
                    <button
                      class="block px-4 py-2 text-sm font-medium hover:shadow-xl"
                      id="headlessui-menu-item-17"
                      role="menuitem"
                      tabindex="-1"
                      onClick={() => handleAbcSort()}
                    >
                      Brand: A to Z
                    </button>
                    <button
                      class="block px-4 py-2 text-sm font-medium hover:shadow-xl"
                      id="headlessui-menu-item-17"
                      role="menuitem"
                      tabindex="-1"
                      onClick={() => handleZyxSort()}
                    >
                      Brand: Z to A
                    </button>
                    <button
                      class="block px-4 py-2 text-sm font-medium hover:shadow-xl"
                      id="headlessui-menu-item-17"
                      role="menuitem"
                      tabindex="-1"
                      onClick={() => handleLowPriceSort()}
                    >
                      Price: Low to High
                    </button>
                    <button
                      class="block px-4 py-2 text-sm font-medium hover:shadow-xl"
                      id="headlessui-menu-item-20"
                      role="menuitem"
                      tabindex="-1"
                      onClick={() => handleHighPriceSort()}
                    >
                      Price: High to Low
                    </button>
                    <button
                      class="block px-4 py-2 text-sm font-medium hover:shadow-xl"
                      id="headlessui-menu-item-20"
                      role="menuitem"
                      tabindex="-1"
                      onClick={() => handleSmallSizeSort()}
                    >
                      Size: Small to Large
                    </button>
                    <button
                      class="block px-4 py-2 text-sm font-medium hover:shadow-xl"
                      id="headlessui-menu-item-22"
                      role="menuitem"
                      tabindex="-1"
                      onClick={() => handleLargeSizeSort()}
                    >
                      Size: Large to Small
                    </button>
                  </div>
                </Popover.Panel>
              </Transition>
              <button
                type="button"
                className="p-1 ml-3 rounded-full ring-2 ring-gray-200"
              >
                <span className="sr-only">View grid</span>
                <ViewGridIcon
                  className="h-5 w-5 text-black-300"
                  aria-hidden="true"
                />
              </button>

              <button type="button" className="p-1 ml-3 rounded-full">
                <span className="sr-only">View list</span>
                <ViewListIcon
                  className="h-5 w-5 text-black-300"
                  aria-hidden="true"
                />
              </button>
            </Fragment>
          );
        }}
      </Popover>
    </div>
  );
};

export default ShopSort;
