import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';
import './counter.css';
import newId from 'utils/newId';
import { CartState } from 'context/context';
import Item from 'components/item/item';
import addToCarts from 'services/addtocart';
import Button from 'components/button/button';
import { useCookies } from 'react-cookie';
import { useCart } from 'react-use-cart';
import { config, API } from 'apiConfig';
import apiClient from 'services/api';

export const Counter2 = (props) => {
  const {
    className,
    defaultValue = 1,
    disabled,
    onChange,
    item,
    isItemAdded = false,
    ...rest
  } = props;
  const inputRef = useRef(null);
  const [id] = useState(newId('counter'));
  const [value, setValue] = useState(defaultValue);
  const [cookies, setCookie] = useCookies();
  const { user, userInfo, facility } = cookies;
  const [name, setName] = useState(userInfo);
  const componentClassName = classNames(
    'cbn-counter',
    { 'cbn-counter--disabled': disabled },
    className
  );

  const {
    state: { cart, total, count },
    dispatch
  } = CartState();
  const { updateCart } = useCart();

  const handleOnChange = (event) => {
    // prevent leading zeroes - assumes counter should always have a positive integer
    setValue(parseInt(event.target.value.replace(/^0+/, '')) || '');
  };

  const handleDecrementClick = () => {
    if (value > 1) {
      setValue((value) => parseInt(value - 1));
    }
  };

  const handleIncrementClick = () => {
    setValue((value) => parseInt(value + 1));
  };

  const handleOnBlur = (event) => {
    if (event.target.value === '') {
      setValue(1);
    }
  };

  useEffect(() => {
    if (!isNaN(parseInt(value))) {
      onChange(parseInt(value));
    }
  }, [value]);

  const AddToCartApi = (userName, productId, qty, facilityId) => {
    if (user) {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer' + ' ' + user.token
        }
      };
      fetch(
        `${config.baseUrl}${API.add_to_cart}/${userName}/${productId}/${qty}/${facilityId}`,
        requestOptions
      )
        .then((res) => res.json())
        .then((json) => console.log('ADDED TO CART', json));
    }
  };
  const addToGuestCart = async (productId, qty, facilityId) => {
    await apiClient.get(
      `${config.baseUrl}${API.add_to_guest_cart}/${productId}/${qty}/${facilityId}`
    );
  };

  return (
    <div className={componentClassName}>
      <div className="plsMinus">
        <button
          style={{ right: 13 }}
          className="cbn-counter__button cbn-counter__button--left"
          disabled={disabled}
          onClick={() => {
            handleDecrementClick();
            if (isItemAdded) {
              dispatch({ type: 'INPUT_QTY', payload: item, qty: value });
            }
          }}
        >
          <MinusSmIcon className="cbn-counter__icon ml-0.5" />
          <span className="sr-only">Decrement</span>
        </button>
        <label htmlFor={id} className="sr-only">
          Quantity
        </label>
        <input
          style={{ right: 13 }}
          className="cbn-counter__input"
          disabled={disabled}
          name="counter-value"
          id={id}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          ref={inputRef}
          type="number"
          min="1"
          value={value}
          {...rest}
        />
        <button
          style={{ right: 13 }}
          className="cbn-counter__button cbn-counter__button--right"
          disabled={disabled}
          onClick={() => {
            handleIncrementClick();
            if (isItemAdded) {
              dispatch({ type: 'INPUT_QTY', payload: item, qty: item.qty });
            }
          }}
        >
          <PlusSmIcon className="cbn-counter__icon mr-0.5" />
          <span className="sr-only">Increment</span>
        </button>
      </div>
      {cart.some((i) => i.productId === item.productId) ? (
        <button
          style={{ marginLeft: -11, width: 99 }}
          className="cbn-button"
          onClick={async () => {
            console.log(facility);
            if (!user) {
              await addToGuestCart(
                item.productId,
                item.qty ? item.qty + value : value,
                facility.facilityId
              );
            } else {
              AddToCartApi(
                user.userName,
                item.productId,
                item.qty,
                facility.facilityId
              );
            }
            dispatch({
              type: 'ADD_TO_CART',
              payload: item,
              qty: item.qty ? item.qty + value : value
            });
          }}
        >
          <span style={{ fontSize: 12 }}>Added to Cart</span>
        </button>
      ) : (
        <button
          style={{ marginLeft: -7, width: 92 }}
          className="cbn-button"
          onClick={async () => {
            if (!user) {
              await addToGuestCart(
                item.productId,
                item.qty ? item.qty + value : value,
                facility.facilityId
              );
            } else {
              AddToCartApi(
                user.userName,
                item.productId,
                item.qty,
                facility.facilityId
              );
            }
            dispatch({
              type: 'ADD_TO_CART',
              payload: item,
              qty: item.qty ? item.qty + value : value
            });
          }}
        >
          <span style={{ fontSize: 12 }}>Add to Cart</span>
        </button>
      )}
    </div>
  );
};

Counter2.propTypes = {
  defaultValue: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  item: PropTypes.object
};

Counter2.defaultProps = {
  defaultValue: 1,
  disabled: false
};

export default Counter2;
