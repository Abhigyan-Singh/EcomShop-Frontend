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
import { addList, saveListItem } from 'services/mylist';
import { useCart } from 'react-use-cart';
import Favorite from 'components/favorite/favorite';
import Wishlist from 'components/wishllist/wishlist';

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

  const [sizeOption, setSizeOption] = useState(
    item.sizeOptions && item.sizeOptions[0]
  );
  const [quantity, setQuantity] = useState(0);
  const [favourite, setFavourite] = useState(item.favorite);
  const { addItem } = useCart();
  const [formOpen, setForm] = useState(false);
  const [list, setList] = useState('');
  const navigate = useNavigate();

  const handleAddClick = () => {
    if (typeof onAddClick === 'function') {
      onAddClick({ item: item.productId, quantity, sizeOption });
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

  const createList = async (description) => {
    const userListRes = await addList({ description });
  };

  const saveListItemMethod = async (each) => {
    await saveListItem(item.productId, {
      listId: each.id,
      itemText: item.productName
    });
  };

  const color = favourite ? '#ea1b21' : null;
  let heartProps = {};
  if (color) {
    heartProps = { stroke: color, fill: color };
  }
  return (
    <div className={componentClassName} {...rest}>
      {item.onSale && (
        <img className="cbn-item__ribbon" src={saleRibbon} alt="Sale" />
      )}
      <div
        onClick={() =>
          navigate(`/item/${item.productId}`, { state: { item, listItems } })
        }
        className="cbn-item__media"
      >
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
        <div key={item.id} className="flex items-center space-x-2">
          <Counter disabled={item.isOutOfStock} onChange={setQuantity} />
          <Button
            disabled={item.isOutOfStock}
            label="Add"
            //onClick={""}//() => addItem(item)}
          />
        </div>
      </div>
      <div className="cbn-item__actions invisible group-hover:visible group-focus-within:visible">
        <Favorite
          isCard={true}
          favorite={item.isFavorite}
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
