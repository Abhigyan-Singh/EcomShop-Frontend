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
import Button from 'components/button/button';
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
  const checkoutInfo = {
    contactInfo: {
      firstName: 'albert',
      lastName: 'ebt2',
      email: 'shilaja.kyatham@cobornsinc.com',
      phoneNo: '(320) 534-2768'
    },
    paymentDetails: [
      { lable: 'EBT-SNAP 6251', value: '$15.15' },
      { lable: 'Remaining Amount', value: '$5.00' }
    ],
    address: {
      address1: '5698 LaCentre Ave NE',
      address2: 'Albertville, MN 55301-3972'
    },
    alternateno: '(763) 497-0182'
  };
  const amount = {
    pickUpTime: { date: 'Tue, Jun 14', time: '7PM-8PM', timer: '' },
    subTotal: { Subtotal: '$15.15' },
    paymentDetails: [
      { lable: "Manufacturer's Coupons", value: '($0.00)', paymentType: 1 },
      {
        lable: "Coborn's Promo Code Discounts",
        value: '($0.00)',
        paymentType: 1
      },
      { lable: 'Store Credit Applied', value: '($0.00)', paymentType: 1 },
      { lable: 'Shopping Fee', value: '$5.00', paymentType: 0 },
      { lable: 'Pick Up Fee', value: '$0.00', paymentType: 0 },
      { lable: 'Delivery Fee Discounts', value: '($0.00)', paymentType: 1 },
      { lable: 'Tax', value: '$0.00', paymentType: 0 }
    ],
    acceptSubstitution: [
      { lable: 'Paid Amount', value: '$0.00', paymentType: 0 },
      { lable: 'EBT Paid Amount', value: '$15.15', paymentType: 0 },
      { lable: 'Remaining Amount', value: '$5.00', paymentType: 0 }
    ],
    totalAmount: '$20.15'
  };
  const [message, setMessage] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [onChecked, setOnChecked] = useState(false);
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleCheckBox = (event) => {
    console.log('handleCheckBox',event.target.checked)
    setIsChecked(event.target.checked);
    if (isChecked == false) setOnChecked(false);
  };
  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);
  const onFormSubmit = () => {
    navigate('/contactInformation');
  };
  const PreviousSubmit = () => {
    navigate('/CartList');
  };
  const updateCard = () => {
    navigate('/checkoutPayment');
  };
  const ChangedeliverySlot = () => {
    navigate('/deliverySlot');
  };
  const placeOrder = () => {
    // console.log(message);
    // console.log(isChecked);
    // console.log(onChecked);
    if (isChecked == false) {
      setOnChecked(true);
    } else {
      setOnChecked(false);
      // console.log(onChecked);
      navigate('/pleaseWait');
    }

    //
  };
  return (
    <div className="wrapper">
      <div className="s-checkout__top mbot-1">
        <div className="container">
          <div className="b-step headMid d-flex">
            <span className="b-step__title">Checkout - Review Information</span>
            <div className="nmbr">
              <span className="l-steps__count">1</span>
              <span className="b-step__count">2</span>
              <span className="l-steps__count">3</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container chkOt">
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
                  <Button
                    className="btn-a"
                    label="Change"
                    onClick={onFormSubmit}
                  />
                  <div className="b-review-info__dt">Contact Information</div>
                  <div className="b-review-info__dd">
                    {checkoutInfo.contactInfo.firstName}{' '}
                    {checkoutInfo.contactInfo.lastName}
                  </div>
                  <div className="b-review-info__dd">
                    {checkoutInfo.contactInfo.email}
                  </div>
                  <div className="b-review-info__dd">
                    {checkoutInfo.contactInfo.phoneNo}
                  </div>
                </div>
                <div className="b-review-info__dl-row">
                  <Button
                    className="btn-a"
                    label="Update"
                    onClick={updateCard}
                  />

                  <div className="b-review-info__dt">Payment</div>
                  {/* <div className="b-review-info__dd">
                   {checkoutInfo.paymentDetails.}
                    EBT-SNAP 6251 – $15.15 
                  </div>*/}
                  {checkoutInfo.paymentDetails.map((data, key) => {
                    return (
                      <div className="b-review-info__dd" key={key}>
                        {data.lable} - {data.value}
                      </div>
                    );
                  })}
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
                    {checkoutInfo.address.address1}
                  </div>
                  <div className="b-review-info__dd">
                    {checkoutInfo.address.address2}
                  </div>

                  <div className="b-review-info__dd">
                    Phone Number: {checkoutInfo.alternateno}
                  </div>
                </div>
              </div>

              <Button
                className="btn-a"
                label="PREVIOUS"
                onClick={PreviousSubmit}
              />
            </div>
            <div className="b-review-info__right">
              <div className="f-order-summ">
                <div className="f-order-summ__block">
                  <div className="f-order-summ__title">Order Summary</div>
                </div>
                <div className="f-order-summ__block">
                  <div className="f-order-summ__subtitle">Pick Up time</div>
                  <div className="f-order-summ__table pickTime">
                    <div className="f-order-summ__left">
                      <div className="f-order-summ__date">
                        {amount.pickUpTime.date}
                      </div>
                      <div className="f-order-summ__time">
                        {amount.pickUpTime.time}
                      </div>
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
                      <Button
                        className="btn-a"
                        label="Change"
                        onClick={ChangedeliverySlot}
                      />
                    </div>
                  </div>
                </div>
                <div className="f-order-summ__block">
                  <dl className="b-total">
                    <div className="b-total__row">
                      <dt className="b-total__dt">
                        <b>Subtotal</b>
                      </dt>
                      <div className="b-total__dd">
                        <b>{amount.subTotal.Subtotal}</b>
                      </div>
                    </div>

                    {amount.paymentDetails.map((data, key) => {
                      return (
                        <div className="b-total__row" key={key}>
                          <dt className="b-total__dt disc-padding">
                            {data.lable}
                          </dt>
                          <div
                            className={
                              data.paymentType == 1
                                ? 'b-total__dd copy-red disc-margin'
                                : 'b-total__dd '
                            }
                          >
                            {data.value}
                          </div>
                        </div>
                      );
                    })}

                    <div className="b-total__row notBanner1">
                      <div className="b-total__dt without-right-padding">
                        Accept Substitutions
                      </div>
                    </div>
                    {amount.acceptSubstitution.map((data, key) => {
                      return (
                        <div className="b-total__row" key={key}>
                          <dt className="b-total__dt">{data.lable}</dt>
                          <div className=" b-total__dd">{data.value}</div>
                        </div>
                      );
                    })}
                  </dl>
                </div>
                <div className="f-order-summ__block">
                  <dl className="b-total">
                    <div className="b-total__row">
                      <dt className="b-total__dt _fz18">
                        <b>TOTAL</b>
                      </dt>
                      <dd className="b-total__dd _fz18" id="total">
                        {amount.totalAmount}
                      </dd>
                    </div>
                  </dl>
                  <label className="f-order-summ__label notBanner1">
                    <p>Special Shopping Instructions</p>
                    <textarea
                      rows="3"
                      cols="35"
                      name="specialShoppingInstructions"
                      disabled=""
                      value={message}
                      onChange={handleMessageChange}
                    ></textarea>
                  </label>
                  <label className="f-order-summ__label"></label>

                  <label className="f-order-summ__label">
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
                      value={isChecked}
                      onChange={handleCheckBox}
                    />

                    <div
                      id="checkDeliveryDateLabel"
                      className="f-order-summ__label-box"
                    ></div>
                  </label>
                  {onChecked === true ? (
                    <>
                      <div
                        id="checkDeliveryDateError"
                        className="checkbox-error-before-label"
                      >
                        To continue, please check the checkbox to confirm
                        information is correct.
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        id="checkDeliveryDateError"
                        // className="checkbox-error-before-label"
                        style={{ display: 'none' }}
                      >
                        To continue, please check the checkbox to confirm
                        information is correct.
                      </div>
                    </>
                  )}

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

                  <Button
                    className="btn-d"
                    label="PLACE ORDER"
                    onClick={placeOrder}
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
