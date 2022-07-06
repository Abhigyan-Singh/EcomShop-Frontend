import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Dialog, Transition } from '@headlessui/react';
import { ClipboardListIcon, HeartIcon, XIcon } from '@heroicons/react/outline';
import saleRibbon from 'assets/images/sale-ribbon@2x.png';
import Button from 'components/button/button';
import Counter from 'components/counter/counter';
import './cartList.css';
import { CartState } from '../../context/context';
import Favorite from 'components/favorite/favorite';
import Wishlist from 'components/wishllist/wishlist';

const ViewModal = (props) => {
  const divStyle = {
    display: props.displayModal ? 'block' : 'none'
  };
  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }
  const [quantity, setQuantity] = useState(0);
  //   const [favourite, setFavourite] = useState(data.favorite);
  const {
    state: { cart },
    dispatch
  } = CartState();
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
              src={`https://cdn1.cobornsinc.com/cdwebimages/350x350/${props.item.imagePath}`}
              alt=""
            />
          </div>
          <div className="proViewInnerRight">
            <h4>{props.item.productName}</h4>
            <div className="proViewInnerRightMiddle">
              <div className="proViewMiddleLft">
                <h5>
                  SALE: ${props.item.normalPrice?.toFixed(2)}
                  <span>
                    Save: $ {(
                      props.item.normalPrice - props.item.currentPrice
                    )?.toFixed(2)}
                  </span>
                </h5>
              </div>
              <div className="proViewMiddleRght">
                <div className="proViewMiddleRghtTp">
                  <p>
                    Item Size: <span>{props.item?.sizeString} 
                    
                </span>
                  </p>
                  <p>
                    Item Number: <span>{props.item?.productId}</span>
                  </p>
                  <p>
                    Price Per OZ: <span>$0.19</span>
                  </p>
                </div>
                <div className="qtyBox">
                  <h6>QUANTITY</h6>
                  <div className="countMinus"></div>
                  <input type="tel" placeholder="1"></input>
                  <div className="countPlus"></div>
                  <button class="bttn">Add to cart</button>
                </div>
              </div>
            </div>
            <div className="proViewInnerRightBottom">
              Non-fat Greek yogurt. No artificial flavors. No gluten. 0%
              milkfat. No GMO ingredients. Only natural ingredients. Billions of
              probiotics. 9 essential amino acids. Authentically crafted. No
              fake fruit. No artificial sweeteners. No preservatives. No rBST
              (According to the FDA, no significant difference has been shown
              between milk derived from rBST and milk derived from non-rBST
              cows). Grade A. chobani.com. Questions or comments?
              1-877-847-6181. A portion of profits for a better world. Tear off
              label and recycle cup. A portion of profits for a better world.
            </div>
          </div>
        </div>
        {/* <div className="modFootSec">
          <div className="modFootSecLft"><Button className="checkout-btn" label="Cancel" onClick={closeModal} /></div>
        </div> */}
      </div>
    </div>
  );
};
export default ViewModal;
