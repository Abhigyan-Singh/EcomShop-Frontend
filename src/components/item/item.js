import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ClipboardListIcon, HeartIcon } from '@heroicons/react/outline';
import Button from 'components/button/button';
import Counter from 'components/counter/counter';
import Select from 'components/select/select';
import saleRibbon from 'assets/images/sale-ribbon@2x.png';
import { addFavorite, deleteFavorite } from 'services/favorites';
import './item.css';
import { Menu, Transition } from '@headlessui/react';
import {
  ChevronLeftIcon,
  ChevronDownIcon,
  SwitchHorizontalIcon,
  PlusIcon,
  DocumentDupl
} from '@heroicons/react/solid';
// import Button from 'components/button/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Item = (props) => {
  const {
    className,
    item,
    layout,
    onAddClick,
    onFavoriteClick,
    onListClick,
    onViewClick,
    ...rest
  } = props;
  const componentClassName = classNames(
    'cbn-item group',
    { 'cbn-item--row': layout === 'row', 'cbn-item--sale': item.onSale },
    className
  );

  const [sizeOption, setSizeOption] = useState(
    item.sizeOptions && item.sizeOptions[0]
  );
  const [quantity, setQuantity] = useState(0);
  const [favourite, setFavourite] = useState(null);

  const handleAddClick = () => {
    if (typeof onAddClick === 'function') {
      onAddClick({ item: item.productId, quantity, sizeOption });
    }
  };

  const handleFavoriteClick = async () => {
    if (typeof onFavoriteClick === 'function') {
      onFavoriteClick({ item: item.productId });
      if (!favourite) {
        await addFavorite({ productId: item.productId, username: 'ITEST03' });
        setFavourite(item.productId);
      } else {
        await deleteFavorite({
          productId: item.productId,
          username: 'ITEST03'
        });
        setFavourite(null);
      }
    }
  };

  const handleListClick = () => {
    if (typeof onListClick === 'function') {
      onListClick({ item: item.productId });
    }
  };

  const handleViewClick = () => {
    alert('hello');
    if (typeof onViewClick === 'function') {
      onViewClick({ item: item.productId });
    }
  };

  const color = favourite === item.productId ? '#ea1b21' : null;
  let heartProps = {};
  if (color) {
    heartProps = { stroke: color, fill: color };
  }
  return (
    <div className={componentClassName} {...rest}>
      {item.onSale && (
        <img className="cbn-item__ribbon" src={saleRibbon} alt="Sale" />
      )}
      <div className="cbn-item__media">
        <a className="cbn-item__image-link" href="#link">
          <img
            className="cbn-item__image"
            src={`https://cdn1.cobornsinc.com/cdwebimages/100x100/${item.imagePath}`}
            alt=""
          />
          <span className="sr-only">{item.productName}</span>
        </a>
        <Button
          className="cbn-item__view-button invisible group-hover:visible group-focus-within:visible"
          label="Quick View"
          onClick={handleViewClick}
        />
      </div>
      <div className="cbn-item__information">
        <div>
          <div className="cbn-item__name">
            <a className="block" href="#link">
              {item.productName}
            </a>
          </div>
          <div className="cbn-item__number">Item #: {item.productId}</div>
        </div>
        <div className="cbn-item__size">
          {item.sizeString} | {(item.currentPrice / item.sizeNumber).toFixed(2)}{' '}
          / {item.sizeUom}
        </div>
      </div>
      <div className="cbn-item__pricing">
        <div className="cbn-item__price">$ {item.currentPrice}</div>
        {item.onSale && (
          <div className="cbn-item__savings">
            Save: $ {(item.normalPrice - item.currentPrice).toFixed(2)}
          </div>
        )}
        {item.isOutOfStock && (
          <div className="cbn-item__sold-out">Sold Out</div>
        )}
      </div>
      <div className="cbn-item__controls">
        {item.keywords && (
          <div className="mb-2">
            <Select
              className="w-full"
              hasRoundedCorners={true}
              onChange={(event) => setSizeOption(event.target.value)}
              aria-label="Size Options"
            >
              {item.keywords.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </Select>
          </div>
        )}
        <div className="flex items-center space-x-2">
          <Counter disabled={item.isOutOfStock} onChange={setQuantity} />
          <Button
            disabled={item.isOutOfStock}
            label="Add"
            onClick={handleAddClick}
          />
        </div>
      </div>
      <div className="cbn-item__actions invisible group-hover:visible group-focus-within:visible">
        <button style={{ marginLeft: 15 }} className="block mb-2 ml-15" onClick={handleFavoriteClick}>
          <HeartIcon className="h-6 w-6 text-gray-400" {...heartProps} />
        </button>
        {/* <button className="block" onClick={handleListClick}>
        <ClipboardListIcon className="h-6 w-6 text-gray-400" />
        </button> */}
        <button className="block" onClick={handleListClick}>
          <Menu
            as="div"
            className="relative inline-block text-left"
            style={{ zIndex: 99 }}
          >
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium  rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <ClipboardListIcon className="h-6 w-6 text-gray-400" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-100 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <ul className="list-none py-2 m-0">
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-sm py-1 hover:underline"
                      >
                        <span className="block flex-1  text-gray-300">
                          My Lists
                        </span>
                      </a>
                      <ul className="list-none pl-3">
                        <Menu.Item>
                          <li>
                            <a
                              href="#"
                              className="flex items-center text-sm py-1 hover:underline"
                            >
                              <span className="block flex-1 pl-1">
                                Previously Purchased
                              </span>
                            </a>
                          </li>
                        </Menu.Item>
                        <Menu.Item>
                          <li>
                            <a
                              href="#"
                              className="flex items-center text-sm py-1 hover:underline"
                            >
                              <HeartIcon
                                className="h-5 w-5 text-gray-300 transform"
                                aria-hidden="true"
                              />
                              <span className="block flex-1 pl-1">
                                Favorites
                              </span>
                            </a>
                          </li>
                        </Menu.Item>
                        
                      </ul>
                    </li>
                  </ul>
                  <ul className="list-none py-2 m-0 border-t border-gray-100">
                    {true && (
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-sm py-1 hover:underline"
                         
                        >
                          <PlusIcon
                            className="h-5 w-5 text-gray-300 transform"
                            aria-hidden="true"
                          />
                          <span className="block flex-1 pl-1">Create</span>
                        </a>
                      </li>
                    )}
                    {false && (
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-sm py-1 hover:underline"
                        >
                          <div>
                            <input
                              name="list-input"
                              id="list-input"
                             
                              type="text"
                            />
                            <Button
                              style={{ marginTop: 5, marginLeft: 50 }}
                              className="cbn-item__view-button group-hover:visible group-focus-within:visible"
                              label="Create"
                              
                            />
                          </div>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </button>
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    href: PropTypes.string,
    image: PropTypes.string,
    isOnSale: PropTypes.bool,
    isOutOfStock: PropTypes.bool,
    price: PropTypes.string,
    size: PropTypes.string,
    sizeOptions: PropTypes.arrayOf(PropTypes.string)
  }),
  layout: PropTypes.oneOf(['card', 'row']),
  onAddClick: PropTypes.func,
  onFavoriteClick: PropTypes.func,
  onListClick: PropTypes.func,
  onViewClick: PropTypes.func
};

Item.defaultProps = {
  item: null,
  layout: 'card',
  onAddClick: () => {},
  onFavoriteClick: () => {},
  onListClick: () => {},
  onViewClick: () => {}
};

export default Item;
