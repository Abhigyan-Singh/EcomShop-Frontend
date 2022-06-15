import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useRef
} from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import './checkoutReview.css';

export default function CheckoutReview(props) {
  const {
    className,
    defaultValue,
    disabled,
    onChange,
    item,
    isItemAdded = false,
    ...rest
  } = props;
  //   console.log(props, 'props');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);
  return (
    <div className="wrapper">
      <div className="s-checkout__top mbot-1">
        <div className="container">
          <div className="b-step justify-center d-flex">
            <span className="b-step__title">Checkout - Review Information</span>
            <div className="nmbr">
              <span className="b-step__count">1</span>
              <span className="l-steps__count">2</span>
              <span className="l-steps__count">3</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="checkboxErrors">
          Please correct the highlighted field(s) below:
          <div className="confirmCheckbox checkbox-error-top">
            Confirm Checkbox
          </div>
          <div className="confirmCheckboxes checkbox-error-top">
            Confirm Checkboxes
          </div>
        </div>
        <div className="b-review-info">
          <p className="b-review-info__text" style={{ display: 'none' }}>
            <span style={{ color: 'red', fontWeight: 700 }}>
              A second form of payment is required for non-EBT eligible items
              and fees. Click the
              <a
                href="showAdditionalPayments"
                // onclick="skipLeaveMessageWindow();"
              >
                UPDATE
              </a>
              button to add a
              <a
                href="javascript:;"
                // onclick="skipLeaveMessageWindow(); document.showAdditionalPayments.submit();"
              >
                UPDATE
              </a>
              button to add a second form of payment. If you do not have a
              second form of payment, click the
              <a
                href="chkoutreviewcart"
                // onclick="skipLeaveMessageWindow();"
              >
                PREVIOUS
              </a>
              button to adjust your cart.
            </span>
          </p>
          <div className="b-review-info__table">
            <div className="b-review-info__left">
              <p className="b-review-info__text">
                Please make sure that your contact, payment, and pick up
                information is correct before placing your order.
              </p>
              <div className="b-review-info__dl">
                <div className="b-review-info__dl-row">
                  <a
                    // href="checkaccountinformation"
                    className="btn-a"
                    //  onclick={skipLeaveMessageWindow}
                  >
                    Change
                  </a>
                  <div className="b-review-info__dt">Contact Information</div>
                  <div className="b-review-info__dd">albert ebt2</div>
                  <div className="b-review-info__dd">
                    shilaja.kyatham@cobornsinc.com
                  </div>
                  <div className="b-review-info__dd">(320)&nbsp;534-2768</div>
                </div>
                <div className="b-review-info__dl-row">
                  <a
                    // href="changepaymentinformation"
                    className="btn-a"
                    // onclick="skipLeaveMessageWindow();"
                  >
                    Update
                  </a>
                  <div className="b-review-info__dt">Payment</div>
                  <div className="b-review-info__dd">
                    EBT-SNAP 6251 – $15.15
                  </div>
                  <div className="b-review-info__dd">
                    Remaining Amount – $5.00
                  </div>
                </div>
                <div className="b-review-info__dl-row">
                  <div className="b-review-info__dt dladrs">
                    Delivery address
                  </div>
                  <a
                    className="i-question"
                    onclick="void(0)"
                    style={{ top: '4px' }}
                  >
                    <div className="i-question__text i-question__text-right-side">
                      Changes to delivery address are applicable to this order
                      only. Please go to <span>My Account</span> to permanently
                      change your address.
                    </div>
                  </a>
                  <div className="b-review-info__dd">Coborn's Pick up</div>
                  <div className="b-review-info__dd">
                    {'5698 LaCentre Ave NE'}
                  </div>
                  <div className="b-review-info__dd">
                    {' Albertville, MN 55301-3972'}
                  </div>
                  <div className="b-review-info__dd">
                    Phone Number: {'(763) 497-0182'}
                  </div>
                </div>
              </div>
              <a
                href="CartList"
                className="btn-a"
                // onClick={navigate('/CartList')}
                // onclick="skipLeaveMessageWindow();"
              >
                PREVIOUS
              </a>
            </div>
            <div className="b-review-info__right">
              <div className="f-order-summ">
                <div className="f-order-summ__block">
                  <div className="f-order-summ__title">Order Summary</div>
                </div>
                <div className="f-order-summ__block">
                  <div className="f-order-summ__subtitle">Pick Up time</div>
                  <div className="f-order-summ__table">
                    <div className="f-order-summ__left">
                      <div className="f-order-summ__date">{'Tue, Jun 14'}</div>
                      <div className="f-order-summ__time">{'7PM-8PM'}</div>
                      <div className="f-order-summ__deadline-title">
                        Time until order deadline:
                      </div>
                      <div
                        className="f-order-summ__deadline-text"
                        id="defaultCountdown"
                      >
                        {' 00d: 10h: 46m: 49s'}
                      </div>
                    </div>
                    <div className="f-order-summ__right">
                      <a
                        // href="changewindowfromcheckout"
                        className="btn-a"
                        // onclick="skipLeaveMessageWindow();"
                      >
                        Change
                      </a>
                    </div>
                  </div>
                </div>
                <div className="f-order-summ__block">
                  <dl className="b-total">
                    <div className="b-total__row">
                      <dt className="b-total__dt">
                        <b>{'Subtotal'}</b>
                      </dt>
                      <div className="b-total__dd">
                        <b>${'15.15'}</b>
                      </div>
                    </div>

                    <div className="b-total__row">
                      <dt className="b-total__dt disc-padding">
                        Manufacturer's Coupons
                      </dt>
                      <div className="b-total__dd copy-red disc-margin">
                        {' ($0.00)'}
                      </div>
                    </div>

                    <div className="b-total__row">
                      <dt className="b-total__dt disc-padding">
                        Coborn's Promo Code Discounts
                      </dt>
                      <div className="b-total__dd copy-red disc-margin">
                        {'($0.00)'}
                      </div>
                    </div>
                    <div className="b-total__row">
                      <dt className="b-total__dt disc-padding">
                        Store Credit Applied
                      </dt>
                      <div className="b-total__dd copy-red disc-margin">
                        {'($0.00)'}
                        <input
                          type="hidden"
                          id="availedStoreCreditAmount"
                          value="0.0"
                        />
                      </div>
                    </div>

                    <div className="b-total__row notBanner1">
                      <dt className="b-total__dt">Shopping Fee</dt>
                      <div className="b-total__dd" id="shoppingFee">
                        {'$5.00'}
                      </div>
                    </div>
                    <div className="b-total__row">
                      <dt className="b-total__dt">Pick Up Fee</dt>
                      <div className="b-total__dd">${'0.00'}</div>
                    </div>
                    <div
                      id="deliveryFeeDiscountRow"
                      className="b-total__row"
                      //   style="display: none"
                    >
                      <dt className="b-total__dt disc-padding">
                        Delivery Fee Discounts
                      </dt>
                      <div
                        className="b-total__dd copy-red disc-margin"
                        id="deliveryFeeDiscount"
                      >
                        {'($0.00)'}
                      </div>
                    </div>
                    <div className="b-total__row">
                      <dt className="b-total__dt">Tax</dt>
                      <div className="b-total__dd">$0.00</div>
                    </div>
                    <div className="b-total__row notBanner1">
                      <div className="b-total__dt without-right-padding">
                        Accept Substitutions
                      </div>
                    </div>
                    <div
                      className="b-total__row"
                      // style="display: none;"
                    >
                      <dt className="b-total__dt">Paid Amount</dt>
                      <div className="copy-green b-total__dd">
                        {'$0.00'}
                        <input type="hidden" id="paidAmount" value="0.0" />
                      </div>
                    </div>

                    <div className="b-total__row">
                      <dt className="b-total__dt">EBT Paid Amount</dt>

                      <div className="b-total__dd">$15.15</div>
                    </div>

                    <div
                      className="b-total__row"
                      id="remainingAmountRow"
                      //   style="display: ;"
                    >
                      <dt className="b-total__dt">Remaining Amount</dt>
                      <div className="b-total__dd" id="remainingAmount">
                        $5.00
                        <input
                          type="hidden"
                          id="remainingAmountVal"
                          value="5.0"
                        />
                        <input
                          type="hidden"
                          id="amountToAuthorizeBox"
                          value="5.0"
                          minfractiondigits="2"
                        />
                      </div>
                    </div>
                  </dl>
                </div>
                <div className="f-order-summ__block">
                  <dl className="b-total">
                    <div className="b-total__row">
                      <dt className="b-total__dt _fz18">
                        <b>TOTAL</b>
                      </dt>
                      <dd className="b-total__dd _fz18" id="total">
                        {'$20.15'}
                      </dd>
                    </div>
                  </dl>
                  <label className="f-order-summ__label notBanner1">
                    <p>Special Shopping Instructions</p>
                    <textarea
                      rows="3"
                      cols="35"
                      name="specialShoppingInstructions"
                      // readonly=""
                      disabled=""
                    ></textarea>
                  </label>
                  <label className="f-order-summ__label"></label>

                  <label
                    // style="display: "
                    className="f-order-summ__label"
                  >
                    <div
                      id="deliveryDateTriangleError"
                      className="errorTriangle"
                    ></div>

                    <label
                      for="checkDeliveryDate"
                      className="step-two-checkbox-label"
                    >
                      Check the checkbox to confirm above information is correct
                      AND that you understand your order is for pick up and NOT
                      for delivery.
                    </label>

                    <input
                      type="checkbox"
                      id="checkDeliveryDate"
                      name="checkDeliveryDate"
                    />

                    <div
                      id="checkDeliveryDateLabel"
                      className="f-order-summ__label-box"
                    ></div>
                  </label>

                  <div
                    id="checkDeliveryDateError"
                    className="checkbox-error-before-label"
                  >
                    To continue, please check the checkbox to confirm
                    information is correct.
                  </div>

                  <form
                    name="orderSummaryForm"
                    action="pleaseWaitOrderInProgress"
                    id="orderSummaryForm"
                    method="post"
                  >
                    <input
                      type="hidden"
                      value="20.15"
                      name="amountTotal"
                      id="amountTotal"
                    />
                    <input
                      type="hidden"
                      name="struts.token.name"
                      value="token"
                    />
                    <input
                      type="hidden"
                      name="token"
                      value="L0THOHYCTRK6OZVZW4U88Q29PIWB2AXV"
                    />

                    <input
                      type="hidden"
                      name="amountToAuthorize"
                      value=""
                      id="amountToAuthorize"
                    />
                  </form>
                  <form
                    name="showAdditionalPayments"
                    action="showAdditionalPayments"
                    method="post"
                  >
                    <input
                      type="hidden"
                      name="additionalPaymentForEbt"
                      value="true"
                    />
                  </form>
                  <input
                    type="button"
                    value="PLACE ORDER"
                    className="btn-d"
                    // onclick="doSubmitIfPossible();"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
CheckoutReview.propTypes = {
  defaultValue: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  item: PropTypes.object
};

CheckoutReview.defaultProps = {
  defaultValue: 1,
  disabled: false
};
