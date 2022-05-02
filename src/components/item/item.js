import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ClipboardListIcon, HeartIcon } from '@heroicons/react/outline';
import Button from 'components/button/button';
import Counter2 from 'components/counter/counter2';
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
import { addList, saveListItem } from 'services/mylist';
import Favorite from 'components/favorite/favorite';
import Wishlist from 'components/wishllist/wishlist';
import Quickview from '../quickview/quickview';
import { CartState } from '../../context/context';
import useCart from 'services/addtocart';
import addtocart from 'services/addtocart';
import { useCookies } from 'react-cookie';

const Item = (props) => {
  const {
    className,
    item,
    layout,
    onAddClick,
    onFavoriteClick,
    onListClick,
    onViewClick,
    listItems = [],
    ...rest
  } = props;
  const componentClassName = classNames(
    'cbn-item group',
    { 'cbn-item--row': layout === 'row', 'cbn-item--sale': item.onSale },
    className
  );

  const [cookies, setCookie] = useCookies();
  const { facility, user } = cookies;

  const [sizeOption, setSizeOption] = useState(
    item.sizeOptions && item.sizeOptions[0]
  );
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);

  const {
    state: { cart, counter },
    dispatch
  } = CartState();
  const { updateCart } = useCart();
  //addToCarts("albtest3", 95436, 1, 2037 )

  const handleViewClick = () => {
    if (typeof onViewClick === 'function') {
      onViewClick({ item: item.productId });
      setShowCart(true);
    }
  };

  const onClose = (event) => {
    setShowCart(false);
  };

  const addtocartapi = () => {
    //do something
    dispatch({ type: 'ADD_TO_CART', payload: item, qty: item.qty + quantity });
  };

  return (
    <div className={componentClassName} {...rest} style={{height:325,}}>
      {item.onSale && (
        <img className="cbn-item__ribbon" src={saleRibbon} alt="Sale" />
      )}
      <div className="cbn-item__media">
        <a className="cbn-item__image-link">
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
        <Quickview
          isOpen={showCart}
          listItems={listItems}
          data={item}
          onClose={onClose}
        />
      </div>
      <div className="cbn-item__information">
        <div
          onClick={() =>
            navigate(`/item/${item.productId}`, { state: { item, listItems } })
          }
        >
          <div className="cbn-item__name">
            <a href="#" className="block">
              {item.productName}
            </a>
          </div>
          <div className="cbn-item__number">Item #: {item.productId}</div>
        </div>
        <div className="cbn-item__size">
          {item.sizeString} | {(item.sizeNumber / item.sizeNumber).toFixed(2)}{' '}
          / {item.sizeUom}
        </div>
      </div>
      <div className="cbn-item__pricing">
        <div className="cbn-item__price">$ {item.currentPrice?.toFixed(2)}</div>
        {item.onSale && (
          <div className="cbn-item__savings">
            Save: $ {(item.normalPrice - item.currentPrice)?.toFixed(2)}
          </div>
        )}
        {item.isOutOfStock && (
          <div className="cbn-item__sold-out">Sold Out</div>
        )}
      </div>
      <div className="cbn-item__controls">
        {item.randomWeightFlag !== 0 ? (
          <div>
            {item.keywords && (
              <div className="mb-2">
                <Select
                  className="w-full"
                  hasRoundedCorners={true}
                  onChange={(event) => setSizeOption(event.target.value)}
                  aria-label="Size Options"
                >
                  <div>{item.productQTY1} {item.sizeString}</div>
                  <div>{item.productQTY2} {item.sizeString}</div>
                  <div>{item.productQTY3} {item.sizeString}</div>            
                </Select>
              </div>
            )}
          </div>
        ) : null}
        <a key={item.id} className="flex items-center space-x-2">
          <Counter2
            item={item}
            disabled={item.isOutOfStock}
            onChange={(value) => setQuantity(value)}
            isItemAdded={cart.some((i) => i.productId === item.productId)}
          />
        </a>
      </div>
      <div className="cbn-item__actions invisible group-hover:visible group-focus-within:visible">
        <Favorite
          isCard={true}
          favorite={item.favorite}
          productId={item.productId}
        />
        <Wishlist item={item} listItems={listItems} />
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
