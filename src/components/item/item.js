import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ClipboardListIcon, HeartIcon } from '@heroicons/react/outline';
import Button from 'components/button/button';
import Counter from 'components/counter/counter';
import Select from 'components/select/select';
import saleRibbon from 'assets/images/sale-ribbon@2x.png';
import './item.css';

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

  const handleAddClick = () => {
    if (typeof onAddClick === 'function') {
      onAddClick({ item: item.productId, quantity, sizeOption });
    }
  };

  const handleFavoriteClick = () => {
    if (typeof onFavoriteClick === 'function') {
      onFavoriteClick({ item: item.productId });
    }
  };

  const handleListClick = () => {
    if (typeof onListClick === 'function') {
      onListClick({ item: item.productId });
    }
  };

  const handleViewClick = () => {
    if (typeof onViewClick === 'function') {
      onViewClick({ item: item.productId });
    }
  };

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
        <button className="block mb-2" onClick={handleFavoriteClick}>
          <HeartIcon className="h-6 w-6 text-gray-400" />
        </button>
        <button className="block" onClick={handleListClick}>
          <ClipboardListIcon className="h-6 w-6 text-gray-400" />
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
