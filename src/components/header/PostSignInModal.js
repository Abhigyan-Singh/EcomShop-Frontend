import './PostSignInModal.css';
import React, { useState } from 'react';
import useCart from 'services/addtocart';
import { CartState } from 'context/context';

const PostSignInModal = ({ onClose }) => {

  const { replaceCart, mergeCart, ignoreCart } = useCart();
  const handleReplace = () => {
    replaceCart()
    onClose();
  }
  const handleMerge = () => {
    mergeCart()
    onClose();
  }
  const handleIgnore = () => {
    ignoreCart();
    onClose();
  }
  return (
    <div className="post-signin-modal-card">
      <div>
        <p className='modal-info'>We already having shopping cart assinged to your name in our databse. Please select one of the following options.</p>
        <div className='modal-options-container'>
          <div className='modal-option'>
            <p>Choose <b>REPLACE</b> if you would like to use current shooping cart only.</p>
            <button className="modal-option-btn" type="button" onClick={handleReplace}>
              Replace
            </button>
          </div>
          <div className='modal-option'>
            <p>Choose <b>MERGE</b> if you would like to combine current shooping cart with cart from previous session.</p>
            <button className="modal-option-btn" type="button" onClick={handleMerge}>
              Merge
            </button>
          </div>
          <div className='modal-option'>
            <p>Choose <b>IGNORE</b> if you wish to dsicard your current cart and use your previous shooping cart only </p>
            <button className="modal-option-btn" type="button" onClick={handleIgnore}>
              Ignore
            </button>
          </div>
        </div>
      </div>

    </div >
  );
};
export default PostSignInModal;
