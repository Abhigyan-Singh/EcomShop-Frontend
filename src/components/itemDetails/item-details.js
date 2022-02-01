/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useCallback } from 'react';
import {
  PlusIcon,
  ClipboardListIcon,
  HeartIcon,
  MinusIcon
} from '@heroicons/react/outline';
import { useParams, useLocation } from 'react-router-dom';
// import { productDetails } from '../../services/search';
const ItemDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [itemDetailsData, setItemDetailsData] = useState(location.state);
  console.log(itemDetailsData);
  // const [isLoading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const [tab, setTab] = useState('pd');

  // const sendQuery = useCallback(async () => {
  //   try {
  //     await setLoading(true);
  //     await setError(false);
  //     const res = await productDetails(id);
  //     if (res) {
  //       setItemDetailsData(res.data);
  //       setLoading(false);
  //     }
  //   } catch (err) {
  //     setError(err);
  //   }
  // }, [id]);

  // useEffect(() => {
  //   sendQuery();
  // }, [id]);

  // if (isLoading) {
  //   return (
  //     <div
  //       style={{
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center'
  //       }}
  //     >
  //       <p>Loading ...</p>
  //     </div>
  //   );
  // }

  return (
    <>
      <div>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
          <div className="w-full lg:max-w-lg">
            <img
              src={`https://cdn1.cobornsinc.com/cdwebimages/100x100/${itemDetailsData?.imagePath}`}
              alt=""
              className="object-center object-contain"
            />
          </div>
          <div className="">
            <h2 className="font-bold text-2xl leading-none mb-1 lg:mb-2">
              {itemDetailsData?.productName}
            </h2>
            <section aria-labelledby="information-heading">
              <h3 id="information-heading" className="sr-only">
                Product information
              </h3>
              <div className="text-xs text-gray-300 mb-8">
                Item Size: {itemDetailsData?.sizeString} |{' '}
                {(
                  itemDetailsData?.currentPrice / itemDetailsData?.sizeNumber
                ).toFixed(2)}{' '}
                / {itemDetailsData?.sizeUom} - Item #:{' '}
                {itemDetailsData?.productId} - Price per count: $0.99
              </div>
              <div className="flex items-end space-x-2 mb-4">
                <div className="font-bold text-xl leading-none">
                  ${itemDetailsData?.currentPrice}
                </div>
              </div>
            </section>
            <section aria-labelledby="options-heading">
              <h3 id="options-heading" className="sr-only">
                Product options
              </h3>
              <div className="flex items-center space-x-2 mb-6">
                <div className="cbn-counter">
                  <button className="cbn-counter__button cbn-counter__button--left">
                    <MinusIcon className="h-4 w-4" />
                    <span className="sr-only">Decrement</span>
                  </button>
                  <label for="counter-1" className="sr-only">
                    Quantity
                  </label>
                  <input
                    className="cbn-counter__input"
                    name="counter-value"
                    id="counter-1"
                    type="number"
                    min="1"
                    value="1"
                  />
                  <button className="cbn-counter__button cbn-counter__button--right">
                    <PlusIcon className="h-4 w-4" />
                    <span className="sr-only">Increment</span>
                  </button>
                </div>
                <button className="cbn-button">
                  <span>Add to Cart</span>
                </button>
              </div>
              <div className="flex space-x-4">
                <button className="relative rounded-sm inline-flex items-center font-medium text-sm text-left">
                  <HeartIcon className="h-6 w-6 font-medium" />
                  <span className="ml-2">Favorite</span>
                </button>
                <button className="relative rounded-sm inline-flex items-center font-medium text-sm text-left">
                  <ClipboardListIcon className="h-6 w-6 font-medium" />
                  <span className="ml-2">Add to List</span>
                </button>
              </div>
            </section>
          </div>
        </div>

        <div className="bg-yellow-100 my-5 p-5">
          <div className="cbn-tabs mb-5">
            <div className="sm:hidden">
              <label for="tabs" className="sr-only">
                Select a tab
              </label>
              <select className="cbn-select block w-full" id="tabs" name="tabs">
                <option selected="">Product Description</option>
                <option>Ingredients</option>
                <option>Nutrition</option>
              </select>
            </div>
            <div className="hidden sm:block">
              <nav className="cbn-tabs__nav" aria-label="Tabs">
                <a
                  className={`cbn-tab cursor-pointer ${
                    tab === 'pd' ? 'cbn-tab--current' : ''
                  }`}
                  aria-current="page"
                  onClick={() => setTab('pd')}
                >
                  Product Description
                </a>
                <a
                  className={`cbn-tab cursor-pointer ${
                    tab === 'id' ? 'cbn-tab--current' : ''
                  }`}
                  onClick={() => setTab('id')}
                >
                  Ingredients
                </a>
                <a
                  className={`cbn-tab cursor-pointer ${
                    tab === 'nu' ? 'cbn-tab--current' : ''
                  }`}
                  onClick={() => setTab('nu')}
                >
                  Nutrition
                </a>
              </nav>
            </div>
          </div>
          {tab === 'pd' && (
            <p className="max-w-4xl text-sm">
              {itemDetailsData?.productDetails}
            </p>
          )}
          {tab === 'id' && (
            <p className="max-w-4xl text-sm">{itemDetailsData?.ingredients}</p>
          )}
          {tab === 'nu' && (
            <p className="max-w-4xl text-sm">
              {itemDetailsData?.hasNutritionString}
            </p>
          )}
        </div>
        <button
          className="underline font-medium mb-2 flex items-center"
          id="headlessui-disclosure-button-5"
          type="button"
          aria-expanded="false"
        >
          Important Note About Product Information
          <PlusIcon className="h-4 w-4 font-medium" />
        </button>
      </div>
      <div className="font-serif text-lg tracking-widest uppercase mb-2 lg:mb-0">
        {' '}
        Best Sellers
      </div>
    </>
  );
};

export default ItemDetails;
