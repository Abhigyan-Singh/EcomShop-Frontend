import React, { useEffect, useState } from 'react';
import Button from 'components/button/button';
import './cartList.css';
import { CartState } from '../../context/context';

const ViewModal = (props) => {
  const divStyle = {
    display: props.displayModal ? 'block' : 'none'
  };
  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }
  const defaultValue = 1;
  const [quantity, setQuantity] = useState(0);
  const [value, setValue] = useState(defaultValue);
  const [items, setItems] = useState({});
  //   const [favourite, setFavourite] = useState(data.favorite);
  const {
    state: { cart, counter, total, qty },
    dispatch
  } = CartState();
  useEffect(() => {
    setItems(props.item);
  }, [props]);
  const cartItem = () => {
    console.log(items);
    // if (!user) {
    //   await addToGuestCart(item.productId, item.qty ? item.qty + value : value, facility.facilityId);
    // }

    dispatch({
      type: 'ADD_TO_CART',
      payload: items,
      qty: items.qty ? items.qty + value : value
    });
    console.log(cart);
  };
  const handleDecrementClick = () => {
    if (value > 1) {
      setValue((value) => parseInt(value - 1));
    }
  };

  const handleIncrementClick = () => {
    console.log(value);
    setValue((value) => parseInt(value + 1));
  };
  return (
    <div className="modal proViewOuter" onClick={closeModal} style={divStyle}>
      <div
        className="modal-content proView"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="qtyBoxClose" onClick={closeModal}>
          Close
        </div>
        <div className="proViewInner">
          <div className="proViewInnerLeft">
            <img
              src={`https://cdn1.cobornsinc.com/cdwebimages/350x350/${items.imagePath}`}
              alt=""
            />
          </div>
          <div className="proViewInnerRight">
            <h4>{items.productName}</h4>
            <div className="proViewInnerRightMiddle">
              <div className="proViewMiddleLft">
                <h5>
                  SALE: ${items.normalPrice?.toFixed(2)}
                  <span>
                    Save: $
                    {(items.normalPrice - items.currentPrice)?.toFixed(2)}
                  </span>
                </h5>
              </div>
              <div className="proViewMiddleRght">
                <div className="proViewMiddleRghtTp">
                  <p>
                    Item Size: <span>{items?.sizeString}</span>
                  </p>
                  <p>
                    Item Number: <span>{items?.productId}</span>
                  </p>
                  <p>
                    Price Per OZ: <span>{}</span>
                  </p>
                </div>
                <div className="qtyBox">
                  <h6>QUANTITY</h6>
                  <div
                    className="countMinus"
                    onClick={() => {
                      handleDecrementClick();
                      dispatch({
                        type: 'DECREASE_ITEM_QTY',
                        payload: items,
                        qty: items.qty
                      });
                    }}
                  ></div>
                  <input type="tel" placeholder="1" value={value}></input>
                  <div
                    className="countPlus"
                    onClick={() => {
                      handleIncrementClick();
                      dispatch({
                        type: 'INCREASE_ITEM_QTY',
                        payload: items,
                        qty: items.qty
                      });
                    }}
                  ></div>
                  <Button className="bttn" onClick={cartItem} label="Add to cart" />
                </div>
              </div>
            </div>
            <div className="proViewInnerRightBottom">{items.ingredients}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default ViewModal;
