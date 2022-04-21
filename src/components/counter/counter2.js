import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';
import './counter.css';
import newId from 'utils/newId';
import { CartState } from 'context/context';
import Item from 'components/item/item';

// import useAtom from 'recoil';

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

  const componentClassName = classNames(
    'cbn-counter',
    { 'cbn-counter--disabled': disabled },
    className
  );

  const {
    state: { cart, total },
    dispatch
  } = CartState();

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

  return (
    <div className={componentClassName}>
      <button
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
