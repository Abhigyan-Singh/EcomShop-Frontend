import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';
import './counter.css';
import newId from 'utils/newId';
import { CartState } from 'context/context';
import Item from 'components/item/item';

import useAtom from 'recoil';


export const Counter2 = (props) => {
    const { className, defaultValue, disabled, onChange, item, ...rest } = props;
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
   
   
    }, [onChange, value, ]);




    // const useProductOperations = () => {
    //   const [products, setProducts] = useAtom(products); 
    //   const addQuantityToProduct = (productId: string, quantityDelta: number) => {
    //     setProducts(old => {
    //       const clone = [...old];
    //       const index = clone.findIndex(product => product.productId === productId);
    //       if (index === -1) {
    //         return clone;
    //       }
    //       const productClone = clone[index];
    //       const newProduct = {...productClone, quantity: productClone.quantity + quantityDelta};
    //       clone[index] = newProduct;
    //       return clone;
    //     });
    //   }
    //   const increaseQuantity = (productId: string) => addQuantityToProduct(productId, 1);
    //   const decreaseQuantity = (productId: string) => addQuantityToProduct(productId, -1);
    //   return {increaseQuantity, decreaseQuantity};``

    // }
  
    return (
      <div className={componentClassName}>
        <button
          className="cbn-counter__button cbn-counter__button--left"
          disabled={disabled}
          onClick={() => {
            handleDecrementClick()
            dispatch({ type: 'DECREASE_QTY_INPUT', payload: item, qty: item.qty });                 
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
          onChange={handleIncrementClick}
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
            handleIncrementClick()
            dispatch({ type: 'INCREASE_QTY_INPUT', payload: item, qty: item.qty });
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