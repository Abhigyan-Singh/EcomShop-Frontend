import React, {
    Fragment,
    useState,
    useEffect,
    useCallback,
    useRef
} from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';

 import './moreRewards.css';
import More_logo from '../../assets/img/more_logo.jpg';
import moment from 'moment';
import { useCountdown } from '../cartList/countDown';


export default function MoreRewards() {
    const navigate = useNavigate();

    return (
        <div className="wrapper" >

            <div className="float-left display-block mrRwrdHead">
                <h1 className="myAccountHeader">My Account</h1>
                <b><a href="/myAccount">My Account Home</a> &gt; MORE Rewards</b>
            </div>
            <div className="float-left display-block">
                <img alt="MORE rewards" src={More_logo} className="more-rewards-image" />
            </div>
            <div className="clear-both">
                <br />


                <p>To earn and redeem MORE Rewards, you must have a registered account. To enroll in MORE Rewards, please visit <a href="https://morerewards.com/?webSyncID=08784290-a718-2372-e991-24986697b1c0&amp;sessionGUID=746ade08-92ac-76ee-a0cc-ab5d5e8540e3" target="_blank">moreRewards.com</a>.</p>
                <br />
                <p>Once you have registered, please provide your phone number below. Any earned rewards will be deposited into your account once your order has been invoiced (delivered/picked-up).</p>
                <br />
                <p>To view your MORE Rewards balance, visit <a href="https://morerewards.com/?webSyncID=08784290-a718-2372-e991-24986697b1c0&amp;sessionGUID=746ade08-92ac-76ee-a0cc-ab5d5e8540e3" target="_blank">moreRewards.com</a>.  To opt out of MORE Rewards, please call <span>1-844-700-MORE</span></p>

                <br />
                <span className="inline-block">Enter Phone Number Associated with Your MORE Rewards Account:&nbsp;&nbsp;</span>
                <br />
                <div className="more-rewards-div">
                    <input type="tel" maxlength="3" size="4" title="Area code" name="areaCodeNumber" id="areaCodeNumber" className="more-rewards-input inline-block" value="" />
                    -
                    <input type="tel" maxlength="3" size="4" title="Prefix" name="prefixNumber" id="prefixNumber" className="more-rewards-input inline-block" value="" />
                    -
                    <input type="tel" maxlength="4" size="4" title="Phone number" name="phoneLineNumber" id="phoneLineNumber" className="more-rewards-input inline-block" value="" />
                </div>
                <div style={{clear: 'both', height: '23px'}}>
                    <span id="responseMessage" style={{display: 'none'}}></span>
                </div>
                <br />
                <br />
                <div style={{clear:'both'}}>
                    <a href="/myAccount" style={{textDecoration: 'none'}} className="inline-block">
                        <input type="submit" value="Cancel" alt="Cancel" className="btn_small_min" />
                    </a>
                    <input type="button" id="saveButton" value="Save" alt="Save" className="btn_small_width more-rewards-save-btn inline-block" />
                </div>
                <br />
                <br />
            </div>
        </div>
    );
}
