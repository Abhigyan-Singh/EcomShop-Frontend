import React, { useState } from 'react';
// import MyModal from 'components/modalView/modal';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import './cartList.css';
import Select from 'components/select/select';
export function LeftArrow() {
  const {
    getPrevItem,
    isFirstItemVisible,
    scrollToItem,
    visibleItemsWithoutSeparators,
    initComplete
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  // NOTE: for scroll 1 item
  const clickHandler = () => {
    const prevItem = getPrevItem();
    scrollToItem(prevItem?.entry?.target, 'smooth', 'start');
  };
  return <Arrow onClick={() => clickHandler()}> </Arrow>;
}

export function RightArrow() {
  const {
    getNextItem,
    isLastItemVisible,
    scrollToItem,
    visibleItemsWithoutSeparators
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  // NOTE: for scroll 1 item
  const clickHandler = () => {
    const nextItem = getNextItem();
    scrollToItem(nextItem?.entry?.target, 'smooth', 'end');
  };
  return <Arrow onClick={clickHandler}></Arrow>;
}
export function Card({ item, title, itemId, key }) {
  const visibility = React.useContext(VisibilityContext);
  const [sizeOption, setSizeOption] = React.useState(
    item.sizeOptions && item.sizeOptions[0]
  );
  return (
    <div
      // onClick={() => onClick(visibility)}
      tabIndex={0}
      style={{
        width: '160px'
      }}
      className="pr-product"
    >
      <div className="pr-product__img-wrap">
        <img
          src={`https://cdn1.cobornsinc.com/cdwebimages/100x100/${item.imagePath}`}
          alt=""
        />
      </div>
      <div
        class="pr-product__title"
        // onclick="getProductDetails('93717', 'OOPS_LIST')"
      >
        <span>{item.productName}</span>
      </div>
      <div className="pr-product__row">
        <div className="pr-product__price _red">${item.price}</div>
        <div>
          <Select
            className="w-full"
            hasRoundedCorners={true}
            // onChange={(event) => setSizeOption(event.target.value)}
            aria-label="Size Options"
          >
            <option>
              {item.productQTY1} {item.sizeString}
            </option>
            <option>
              {item.productQTY2} {item.sizeString}
            </option>
            <option>
              {item.productQTY3} {item.sizeString}
            </option>
          </Select>
        </div>

        <button className="btn-a">Add to cart</button>
      </div>
    </div>
  );
}
function Arrow({ children, onClick }) {
  return (
    <div onClick={onClick} className="slideArrow">
      {children}
    </div>
  );
}
