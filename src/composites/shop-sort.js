import {
  ChevronDownIcon,
  ViewGridIcon,
  ViewListIcon
} from '@heroicons/react/solid';
import React, { Fragment, useEffect, useState } from 'react';
import { Disclosure, Popover, Transition } from '@headlessui/react';
import { LowPrioritySharp } from '../../node_modules/@mui/icons-material/index';
import classNames from 'classnames';

const ShopSort = (props) => {
  const {list, list2, filteredList, setGridView, setListView, gridView, listView} = props;

  function refreshPage() {     
    window.location.reload(false);
  }

  const handleAbcSort = () => {
    return list.sort((a, b) =>
    a.productName.localeCompare(b.productName)
    )
  }

  const handleZyxSort = () => {
    return list.sort((a, b) =>
      b.productName.localeCompare(a.productName)  
    )
  }

  const handleAbcBrandSort = () => {
    return list.sort((a, b) =>
      a.productName.localeCompare(b.productName)  
    )
  }

  const handleZxyBrandSort = () => {
    return list.sort((a, b) =>
      b.productName.localeCompare(a.productName)  
    )
  }
  
  const handleLowPriceSort = () => {
    list.sort((a, b) => (a.currentPrice > b.currentPrice) ? 1 : -1)
  }
  
  const handleHighPriceSort = () => {
    list.sort((a, b) => (a.currentPrice < b.currentPrice) ? 1 : -1)
  }

  const handleSmallSizeSort = () => {
   list.sort((a, b) => (a.sizeNumber > b.sizeNumber) ? 1 : -1)
  }

  const handleLargeSizeSort = () => {
    list.sort((a, b) => (a.sizeNumber < b.sizeNumber) ? 1 : -1)
  }

  const defaultList = () => {
    return list
  }

  const [abcSort, setAbcSort] = useState(() => {
    const saved = localStorage.getItem("abcSort");
    const initialValue = JSON.parse(saved);
    return initialValue || null;  
  })

  const [zxySort, setZxySort] = useState(() => {
    const saved = localStorage.getItem("zxySort");
    const initialValue = JSON.parse(saved);
    return initialValue || null;  
  })

  const [abcBrandSort, setAbcBrandSort] = useState(() => {
    const saved = localStorage.getItem("abcBrandSort");
    const initialValue = JSON.parse(saved);
    return initialValue || null;  
  })

  const [zxyBrandSort, setZxyBrandSort] = useState(() => {
    const saved = localStorage.getItem("zxyBrandSort");
    const initialValue = JSON.parse(saved);
    return initialValue || null;  
  })

  const [lowPriceSort, setLowPriceSort] = useState(() => {
    const saved = localStorage.getItem("lowPriceSort");
    const initialValue = JSON.parse(saved);
    return initialValue || null;  
  })

  const [highPriceSort, setHighPriceSort] = useState(() => {
    const saved = localStorage.getItem("highPriceSort");
    const initialValue = JSON.parse(saved);
    return initialValue || null;  
  })

  const [smallSizeSort, setSmallSizeSort] = useState(() => {
    const saved = localStorage.getItem("smallSizeSort");
    const initialValue = JSON.parse(saved);
    return initialValue || null;  
  })

  const [largeSizeSort, setLargeSizeSort] = useState(() => {
    const saved = localStorage.getItem("largeSizeSort");
    const initialValue = JSON.parse(saved);
    return initialValue || null;  
  })

  useEffect(() => {
    localStorage.setItem("abcSort", abcSort);
    localStorage.setItem("zxySort", zxySort);
    localStorage.setItem("abcBrandSort", abcBrandSort);
    localStorage.setItem("zxyBrandSort", zxyBrandSort);
    localStorage.setItem("lowPriceSort", lowPriceSort);
    localStorage.setItem("highPriceSort", highPriceSort);
    localStorage.setItem("smallSizeSort", smallSizeSort);
    localStorage.setItem("largeSizeSort", largeSizeSort);
  }, [abcSort, zxySort, lowPriceSort, highPriceSort, smallSizeSort, largeSizeSort])

  useEffect(() => {
    if (!abcSort && !zxySort && !lowPriceSort && !highPriceSort && !smallSizeSort && !largeSizeSort) {
      defaultList();
    } 
    if (abcSort === true) {
      handleAbcSort();
    }
    if (zxySort === true) {
      handleZyxSort();      
    }
    if (abcBrandSort === true) {
      handleAbcBrandSort();
    }
    if (zxyBrandSort === true) {
      handleZxyBrandSort(); 
    }
    if (lowPriceSort == true) {
      handleLowPriceSort();
    }
    if (highPriceSort === true) {
      handleHighPriceSort();
    }
    if (smallSizeSort === true) {
      handleSmallSizeSort();
    }
    if (largeSizeSort === true) {
      handleLargeSizeSort();
    }
  },)
  
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
                <span>
                  Sort By:
                  {!abcSort 
                    && !zxySort
                    && !abcBrandSort
                    && !zxyBrandSort 
                    && !largeSizeSort 
                    && !smallSizeSort 
                    && !highPriceSort 
                    && !lowPriceSort
                      ? <span> Default (Relevance)</span> 
                      : abcSort === true
                      ?   <span> Name: A to Z</span>
                      : zxySort === true
                      ?   <span> Name: Z to A</span> 
                      : abcBrandSort === true
                      ?   <span> Brand: A to Z</span>
                      : zxyBrandSort === true
                      ?   <span> Brand: Z to A</span> 
                      : largeSizeSort === true
                      ?   <span> Size: Large to Small</span>
                      : smallSizeSort === true
                      ?   <span> Size: Small to Large</span> 
                      : highPriceSort === true
                      ?   <span> Price: High to Low</span>
                      : lowPriceSort === true
                      ?   <span> Price: Low to High </span> 
                      : null
                  }
                </span>
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
                      height: 332,
                      right: 50
                    }}
                  >
                    <button
                      class="block px-4 py-2 text-sm font-medium hover:underline"
                      id="headlessui-menu-item-126"
                      role="menuitem"
                      tabindex="-1"
                      onClick={() => {
                        refreshPage() 
                        setAbcSort(false)
                        setZxySort(false)
                        setAbcBrandSort(false)
                        setZxyBrandSort(false)
                        setHighPriceSort(false)
                        setLowPriceSort(false)
                        setLargeSizeSort(false)
                        setSmallSizeSort(false)
                      }}
                    >
                      Default (Relevance)
                    </button>
                    <button
                      class="block px-4 py-2 text-sm font-medium hover:underline"
                      id="headlessui-menu-item-127"
                      role="menuitem"
                      tabindex="-1"
                      onClick={() => {
                        refreshPage() 
                        setAbcSort(true)
                        setZxySort(false)
                        setAbcBrandSort(false)
                        setZxyBrandSort(false)
                        setLowPriceSort(false)
                        setHighPriceSort(false)
                        setSmallSizeSort(false)
                        setLargeSizeSort(false)
                      }}
                    >
                      Name: A to Z
                    </button>
                    <button
                      class="block px-4 py-2 text-sm font-medium hover:underline"
                      id="headlessui-menu-item-16"
                      role="menuitem"
                      tabindex="-1"
                      onClick={() => {
                        refreshPage() 
                        setZxySort(true)
                        setAbcSort(false)
                        setAbcBrandSort(false)
                        setZxyBrandSort(false)
                        setLowPriceSort(false)
                        setHighPriceSort(false)
                        setSmallSizeSort(false)
                        setLargeSizeSort(false) 
                      }}
                    >
                      Name: Z to A
                    </button>
                    <button
                      class="block px-4 py-2 text-sm font-medium hover:underline"
                      id="headlessui-menu-item-17"
                      role="menuitem"
                      tabindex="-1"
                      onClick={() => {
                        refreshPage() 
                        setAbcBrandSort(true)
                        setZxySort(false)
                        setZxyBrandSort(false)
                        setLowPriceSort(false)
                        setHighPriceSort(false)
                        setSmallSizeSort(false)
                        setLargeSizeSort(false)
                        
                      }}
                    >
                      Brand: A to Z
                    </button>
                    <button
                      class="block px-4 py-2 text-sm font-medium hover:underline"
                      id="headlessui-menu-item-17"
                      role="menuitem"
                      tabindex="-1"
                      onClick={() => {
                        refreshPage() 
                        setZxyBrandSort(true)
                        setAbcSort(false)
                        setAbcBrandSort(false)
                        setLowPriceSort(false)
                        setHighPriceSort(false)
                        setSmallSizeSort(false)
                        setLargeSizeSort(false)
                      }}
                    >
                      Brand: Z to A
                    </button>
                    <button
                      class="block px-4 py-2 text-sm font-medium hover:underline"
                      id="headlessui-menu-item-17"
                      role="menuitem"
                      tabindex="-1"
                      onClick={() => {
                        refreshPage()
                        setLowPriceSort(true)
                        setAbcSort(false)
                        setAbcBrandSort(false)
                        setZxyBrandSort(false)
                        setHighPriceSort(false)
                        setSmallSizeSort(false)
                        setLargeSizeSort(false)
                      }}
                    >
                      Price: Low to High
                    </button>
                    <button
                      class="block px-4 py-2 text-sm font-medium hover:underline"
                      id="headlessui-menu-item-20"
                      role="menuitem"
                      tabindex="-1"
                      onClick={() => {
                        refreshPage()
                        setHighPriceSort(true)
                        setAbcBrandSort(false)
                        setZxyBrandSort(false)
                        setAbcSort(false)
                        setLowPriceSort(false)
                        setSmallSizeSort(false)
                        setLargeSizeSort(false)
                      }}
                    >
                      Price: High to Low
                    </button>
                    <button
                      class="block px-4 py-2 text-sm font-medium hover:underline"
                      id="headlessui-menu-item-20"
                      role="menuitem"
                      tabindex="-1"
                      onClick={() => {
                        refreshPage()
                        setSmallSizeSort(true)
                        setAbcBrandSort(false)
                        setZxyBrandSort(false)
                        setAbcSort(false)
                        setLowPriceSort(false)
                        setHighPriceSort(false)
                        setLargeSizeSort(false)
                      }}
                    >
                      Size: Small to Large
                    </button>
                    <button
                      class="block px-4 py-2 text-sm font-medium hover:underline"
                      id="headlessui-menu-item-22"
                      role="menuitem"
                      tabindex="-1"
                      onClick={() => {
                        refreshPage()
                        setLargeSizeSort(true)
                        setAbcBrandSort(false)
                        setZxyBrandSort(false)
                        setAbcSort(false)
                        setLowPriceSort(false)
                        setHighPriceSort(false)
                        setSmallSizeSort(false)
                      }}
                    >
                      Size: Large to Small
                    </button>
                  </div>
                </Popover.Panel>
              </Transition>
              <button
                type="button"
                className={classNames(
                  gridView ? 'p-1 ml-3 rounded-full ring-2 ring-gray-200' :
                  'p-1 ml-3 rounded-full ring-gray-200'
                )}
                onClick={() => {
                  setGridView(true)
                  setListView(false)
                }}
              >
                <span className="sr-only">View grid</span>
                <ViewGridIcon
                  onClick={() => {
                    setGridView(true)
                    setListView(false)
                  }}
                  className="h-5 w-5 text-black-300"
                  aria-hidden="true"
                />
              </button>
              <button 
                type="button"
                className={classNames(
                  listView ? 'p-1 ml-3 rounded-full ring-2 ring-gray-200' :
                  'p-1 ml-3 rounded-full'
                )} 
                onClick={() => {
                  console.log("LISTVIEW")
                  setListView(true)
                  setGridView(false) 
                }}>
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
