import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useRef
} from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import './pleasewait.css';
import Bigtruck from '../../assets/img/bigtruck.png'
export default function PleaseWait() {
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <div className="s-checkout__top mbot-1">
        <div className="container">
          <div className="b-step headMid d-flex">
            <span className="s-processed-a__title">Please wait while your order is processed...</span>

          </div>
        </div>
      </div>
      <div className="container text-center mt-3" onClick={()=>navigate('/checkoutEBTLanding')}>
                <img src={Bigtruck} className="s-processed-a__truck" />
                <div className="s-processed-a__attention">PLEASE DO NOT CLOSE YOUR BROWSER OR CLICK "BACK" OR "STOP."</div>
                <div className="s-processed-a__text">Your Order Confirmation page will appear within 30-60 seconds.
                    <span className="block">If it doesn't appear, please contact:</span>
                </div>
                <div className="s-processed-a__title-a">Customer Relations</div>
                <div className="s-processed-a__text">1 (844) 414-7467</div>
                <div className="s-processed-a__text">Mon-Sat 8 AM - 11 PM CST</div>
                <div className="s-processed-a__text">Sun 9:30 AM -11 PM CST</div>
            </div>
    </div>
  );
}
