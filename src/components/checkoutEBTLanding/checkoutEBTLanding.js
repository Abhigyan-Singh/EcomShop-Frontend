import React, {
    Fragment,
    useState,
    useEffect,
    useCallback,
    useRef
} from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import './checkoutEBTLanding.css';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

//   import { CartState } from '../../context/context';

export default function CheckoutEBTLanding(props) {

    return (
        <div className="wrapper">
            <div className="s-checkout__top mbot-1">
                <div className="container">
                    <div className="b-step headMid d-flex">
                        <span className="b-step__title">Checkout - Order Confirmation</span>
                        <div className="nmbr">
                            <span className="l-steps__count">1</span>
                            <span className="l-steps__count">2</span>
                            <span className="b-step__count">3</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="b-review-info">
                    <div className="b-review-info__table">
                        <div className="b-review-info__left">
                            <p className="b-review-info__title">Thank you for your order - we appreciate your business!</p>
                            <p className="b-review-info__text">Your invoice will be emailed to you after your order has been processed.</p>
                            <dl className="b-review-info__dl">
                                <div className="b-review-info__dl-row">
                                    <dt className="b-review-info__dt">CUSTOMER RELATIONS</dt>
                                    <dd className="b-review-info__dd _pl0">1 (844) 414-7467</dd>
                                    <dd className="b-review-info__dd _pl0">MON - SAT 8 AM - 11 PM</dd>
                                    <dd className="b-review-info__dd _pl0">SUN 9:30 AM - 11 PM</dd>
                                </div>
                            </dl>
                        </div>
                        <div className="b-review-info__right">
                            <form className="f-order-summ _3-step">
                                <div className="f-order-summ__block">
                                    <div className="f-order-summ__title">Order Confirmation</div>
                                </div>
                                <div className="f-order-summ__block">
                                    <dl className="f-order-summ__dl _margin">
                                        <div className="f-order-summ__dl-row">
                                            <dt className="f-order-summ__dt">Order Number:</dt>
                                            <dd className="f-order-summ__dd">6114859T</dd>
                                        </div>
                                        <div className="f-order-summ__dl-row">
                                            <dt className="f-order-summ__dt">Username:</dt>
                                            <dd className="f-order-summ__dd">ALBTEST1</dd>
                                        </div>
                                    </dl>
                                    <div className="f-order-summ__subtitle">


                                        Delivery time



                                    </div>
                                    <div className="f-order-summ__date">Tue, Aug 30</div>
                                    <div className="f-order-summ__time">2PM-3PM</div>
                                    <div className="f-order-summ__attention">

                                    </div><a href="#" className="btn-a _print" onclick="self.print();">PRINT</a>
                                </div>
                                <div className="f-order-summ__block">
                                    <dl className="b-total _tac">
                                        <div className="b-total__row">
                                            <dt className="b-total__dt _fz18"><b>TOTAL</b></dt>
                                            <dd className="b-total__dd _fz18"><b>$9.29</b>
                                            </dd>
                                        </div>
                                    </dl>

                                    <button type="button" className="btn-d" onclick="popUp('/checkoutInvoice;jsessionid=CFDC4572717F26C39DD723BAB5087F07?_csrf=920793a6-55fa-4ba4-bbbc-ce87f2a3eddf&amp;_csrf=920793a6-55fa-4ba4-bbbc-ce87f2a3eddf%2C920793a6-55fa-4ba4-bbbc-ce87f2a3eddf&amp;token=JT46I43H4RJPPN2LXPFRJG2JEAA6WJUF&amp;token=H1FNZEVJK1NI9XK0OKQWO7XNTG9JOIYV&amp;AccuLanguage=en-US&amp;sessionId=6925B9E8B27DB466DEAF8DE4A4D39C90&amp;orderNumber=6114859T&amp;transactionId=c9d38d92-5cbf-4b1b-9b8e-c77db23db95f&amp;banner=com.cobornsdelivers.b2c.olg.common.jpa.entities.banner.Banner%4026&amp;deliveryStore=605&amp;userName=ALBTEST1&amp;facilityId=605&amp;snapEBTOrderSubTotal=4.29&amp;struts.token.name=token&amp;AccuId=904f72c1-18fe-4feb-b17c-6961b17b5873&amp;AccuResponseCode=ACCU000&amp;AccuResponseMsg=SUCCESS&amp;orderTotal=9.29', 910, 520, '1', '0');">VIEW ORDER DETAILS</button>
                                    <button type="button" className="btn-d" onclick="javascript:document.location.href='homepage.action'">RETURN TO SHOPPING</button>
                                    <button type="button" className="btn-d" onclick="trackEventCheckout3('Logout', 'Logout'); parent.location='logout.action'"><msreadoutspan className="msreadout-line-highlight msreadout-inactive-highlight">LOG <msreadoutspan className="msreadout-word-highlight">OUT</msreadoutspan></msreadoutspan></button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <span className="orderPayments">Credit Card</span>

                    <span className="orderPayments">EBT-SNAP</span>


                    <span className="orderPayments">Credit Card</span>

                    <span className="orderPayments">Credit Card</span>

                    <span className="orderPayments">Credit Card</span>

                    <span className="orderPayments">Credit Card</span>


                </div>
            </div>

        </div>
    )
}