import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Dialog, Transition } from '@headlessui/react';
import { ClipboardListIcon, HeartIcon, XIcon } from '@heroicons/react/outline';
import saleRibbon from 'assets/images/sale-ribbon@2x.png';
import Button from 'components/button/button';
import Counter from 'components/counter/counter';
import './quickview.css';
import { CartState } from '../../context/context';
import Favorite from 'components/favorite/favorite';
import Wishlist from 'components/wishllist/wishlist';

const Quickview = (props) => {
  const {
    data,
    isOpen,
    onClose,
    onAddClick,
    onFavoriteClick,
    onListClick,
    className,
    item,
    layout,
    listItems = []
  } = props;

  const [quantity, setQuantity] = useState(0);
  const [favourite, setFavourite] = useState(data.favorite);
  const {
    state: { cart },
    dispatch
  } = CartState();

  const handleOnClose = (event) => {
    if (typeof onClose === 'function') {
      onClose(event);
    }
  };

  const handleAddClick = () => {
    if (typeof onAddClick === 'function') {
      onAddClick('');
    }
  };

  const handleFavoriteClick = () => {
    if (typeof onFavoriteClick === 'function') {
      onFavoriteClick({ item: data.id });
    }
  };

  const handleListClick = () => {
    if (typeof onListClick === 'function') {
      onListClick({ item: item.id });
    }
  };

  const color = favourite ? '#ea1b21' : null;
  let heartProps = {};
  if (color) {
    heartProps = { stroke: color, fill: color };
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="cbn-quickview" onClose={handleOnClose}>
        <div
          className="flex min-h-screen text-center md:block md:px-2 lg:px-4"
          style={{ fontSize: 0 }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="hidden fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity md:block" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden md:inline-block md:align-middle md:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enterTo="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 md:scale-100"
            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          >
            <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
              <div className="w-full relative rounded flex items-center bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                  onClick={handleOnClose}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {data.onSale && (
                  <img
                    className="cbn-quickview__ribbon"
                    src={saleRibbon}
                    alt="Sale"
                  />
                )}

                <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                  <div className="sm:col-span-4 lg:col-span-5">
                    <div className="aspect-w-1 aspect-h-1 rounded bg-white-100 overflow-hidden">
                      <img
                        src={`https://cdn1.cobornsinc.com/cdwebimages/100x100/${data.imagePath}`}
                        style={{ marginLeft: '35%', marginTop: 50 }}
                        //className="cbn-quickview__image"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <a href="#" className="cbn-quickview__name">{data.productName}</a>
                    <section aria-labelledby="information-heading">
                      <h3 id="information-heading" className="sr-only">
                        Product information
                      </h3>
                      <div className="text-xs text-gray-300 mb-4">
                        Item Size: {data.sizeString} |
                        Item #: {data.productId} | Price per count: {data.pricePerUnit} 
                      </div>
                      <div className="mb-6">
                        <h4 className="sr-only">Description</h4>
                      </div>
                      <div className="flex items-end space-x-2 mb-4">
                        <div className="cbn-quickview__price">${data.normalPrice}</div>
                        {data.isOnSale && (
                          <div className="cbn-quickview__savings">
                            Save: {data.savings}
                          </div>
                        )}
                        {data.isOutOfStock && (
                          <div className="cbn-quickview__sold-out">
                            Sold Out
                          </div>
                        )}
                      </div>
                    </section>

                    <section aria-labelledby="options-heading">
                      <h3 id="options-heading" className="sr-only">
                        Product options
                      </h3>

                      <div className="flex items-center space-x-2 mb-6">
                        <Counter
                          disabled={data.isOutOfStock}
                          onChange={setQuantity}
                        />
                        {cart.some((i) => i.productId === data.productId) 
                          ? (<Button
                              disabled={data.isOutOfStock}
                              label="Added to Cart"
                              onClick={() =>
                                dispatch({ type: 'ADD_TO_CART', payload: data })
                              }
                            />
                            )
                          : (
                          <Button
                            disabled={data.isOutOfStock}
                            label="Add to Cart"
                            onClick={() =>
                              dispatch({ type: 'ADD_TO_CART', payload: data })
                            }
                          />
                        )}
                      </div>
                      <div className="flex space-x-3" >
                        <Favorite
                          isCard={true}
                          favorite={data.isFavorite}
                          productId={data.productId}
                        />
                        <span style={{marginTop: 6, fontSize: 15}}>
                          {data.isFavorited ? 'Favorited' : 'Favorite'}
                        </span>
                        <button className="cbn-quickview__action-button" >
                          <Wishlist item={data} listItems={listItems}/>
                          <span style={{marginBottom:10, marginTop:10, fontSize: 15 }}>Add to List</span>                         
                        </button>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

Quickview.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    href: PropTypes.string,
    imageSrc: PropTypes.string,
    isOnSale: PropTypes.bool,
    isOutOfStock: PropTypes.bool,
    price: PropTypes.string,
    size: PropTypes.string,
    sizeOptions: PropTypes.arrayOf(PropTypes.string)
  }),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onAddClick: PropTypes.func,
  onFavoriteClick: PropTypes.func,
  onListClick: PropTypes.func
};

Quickview.defaultProps = {
  data: null,
  isOpen: false,
  onClose: () => {},
  onAddClick: () => {},
  onFavoriteClick: () => {},
  onListClick: () => {}
};

export default Quickview;
