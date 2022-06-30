import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useRef
} from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import './checkoutPaymentInformation.css';
import Button from 'components/button/button';
import PaymentModal from '../PaymentModal/PaymentModal';
export default function CheckoutPaymentInformation() {
  const navigate = useNavigate();
  const [showModal, setModal] = useState(false);
  const [show, setShow] = useState(false);
  const [title,setTitle] = useState('');
  const CardArray = {
    craditCard: [
      {
        cardNumber: 'Visa-xxxx-xxxx-xxxx-2345',
        holderName: 'K Naskar',
        expire: '05/2027'
      },
      {
        cardNumber: 'Visa-xxxx-xxxx-xxxx-2346',
        holderName: 'S Naskar',
        expire: '05/2027'
      }
    ],
    ebtCard: [
      // {
      //   cardNumber: 'Visa-xxxx-xxxx-xxxx-2347',
      //   holderName: 'K Naskar',
      //   expire: '05/2027',
      // }
    ],
    sellectedCheckbox: 'Visa-xxxx-xxxx-xxxx-2347'
  };

  const CardDetails = (e) => {
    console.log(e.target.innerText)
    e.preventDefault();
    setTitle(e.target.innerText)
    setShow(true);
    // setModal(true);
    // navigate('/contactInformation');
  };
  const onSiteChanged = (event) => {
    console.log(event.target.value);
  };
  const onClose = (event) => {
    setModal(false);
  };
  const returnToCheckout =()=>{
    navigate('/Checkout');
  }
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
      <div className="payInfoWrapper">
        <div className="header-gray margin-20px-btm">
          <a
            href="/Checkout"
            // onclick="skipLeaveMessageWindow();"
          >
            <b>Checkout</b>
          </a>
          &gt; Payment Information
        </div>
        <div className="payInfoHead">
          <h2>Payment Information</h2>
        </div>
        <div className="paymentOptionsBoxOuter">
        <div className="paymentOptionsBox">
          <h2>CREDIT CARD</h2>
          <div className="paymentOptionsBoxHd">
            <div className="paymentOptionsBoxCol">Default</div>
            <div className="paymentOptionsBoxCol">Credit Card</div>
            <div className="paymentOptionsBoxCol">Name on Card</div>
            <div className="paymentOptionsBoxCol">Expiration</div>
          </div>
          <div className="paymentOptionsBoxRowSec">
            {CardArray.craditCard.map((data, key) => {
              return (
                <div className="paymentOptionsBoxRow" key={key}>
                  <div className="paymentOptionsBoxCol">
                    <input
                      type="radio"
                      class="phone-cc-drop"
                      title="Make Default"
                      name="defaultPaymentType"
                      value={data.cardNumber}
                      // checked={data.checked === 1}
                      onChange={onSiteChanged}
                    />
                  </div>
                  <div className="paymentOptionsBoxCol">{data.cardNumber}</div>
                  <div className="paymentOptionsBoxCol">{data.holderName}</div>
                  <div className="paymentOptionsBoxCol">{data.expire}</div>
                  <div className="paymentOptionsBoxCol">
                    <input
                      type="button"
                      name="delete['0']"
                      id="deleteButtonCC0"
                      class="i-delete-pay right"
                      onclick="deletePaymentOption(this)"
                    />
                    <input
                      type="button"
                      name="update['0']"
                      id="editButtonCC0"
                      class="i-edit-pay right"
                      onclick="openEditCCModal('0')"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="adCrtBotSec">
            <Button
              className="checkout-btn"
              label="Add Credit Card"
              onClick={CardDetails}
            />
            <PaymentModal
              displayModal={show}
              closeModal={() => setShow(false)}
              title={title}
            />
          </div>

          <h2 className="bdrd">DIRECT CHECK™</h2>
          <div className="paymentOptionsBoxHd drcChk">
            <div className="paymentOptionsBoxCol">Default</div>
            <div className="paymentOptionsBoxCol">Direct Check™</div>
            <div className="paymentOptionsBoxCol">Acct Holder Name</div>
            <div className="paymentOptionsBoxCol">Routing Num</div>
            <div className="paymentOptionsBoxCol">Bank Name</div>
          </div>
          <div className="paymentOptionsBoxRowSec">
            <div className="paymentOptionsBoxRow drcChk">
              <p>
                Interested in paying by Direct Check? Contact our Customer
                Relations department at 1 (844) 414-7467 for more information.
              </p>
            </div>
          </div>
          <h2 className="bdrd">EBT CARD</h2>
          <div className="paymentOptionsBoxHd">
            <div className="paymentOptionsBoxCol">Default</div>
            <div className="paymentOptionsBoxCol">EBT Card</div>
            <div className="paymentOptionsBoxCol">Name on Card</div>
          </div>
          <div className="paymentOptionsBoxRowSec">
            {CardArray.ebtCard.map((data, key) => {
              return (
                <div className="paymentOptionsBoxRow ebtcrd" key={key}>
                  <div className="paymentOptionsBoxCol">
                    <input
                      type="radio"
                      class="phone-cc-drop"
                      title="Make Default"
                      name="defaultPaymentType"
                      value={data.cardNumber}
                      // checked={data.checked === 1}
                      onChange={onSiteChanged}
                    />
                  </div>
                  <div className="paymentOptionsBoxCol">{data.cardNumber}</div>
                  <div className="paymentOptionsBoxCol">{data.holderName}</div>
                  <div className="paymentOptionsBoxCol">
                    <input
                      type="button"
                      name="delete['0']"
                      id="deleteButtonCC0"
                      class="i-delete-pay right"
                      onclick="deletePaymentOption(this)"
                    />
                    <input
                      type="button"
                      name="update['0']"
                      id="editButtonCC0"
                      class="i-edit-pay right"
                      onclick="openEditCCModal('0')"
                    />
                  </div>
                </div>
              );
            })}

            <div className="adCrtBotSec">
              <Button
                className={
                  CardArray.ebtCard.length != 0
                    ? 'checkout-btn ckoutdisable'
                    : 'checkout-btn '
                }
                label="Add EBT Card"
                onClick={CardDetails}
              />
              <PaymentModal
                displayModal={show}
                closeModal={() => setShow(false)}
                title={title}
              />
            </div>
          </div>
        </div>
        </div>
        <div class="button-box m-lss">
          <Button
            className="checkout-btn left"
            label="CANCEL"
            onClick={returnToCheckout}
          />
          <Button
            className="checkout-btn hard-right"
            label="SAVE CHANGES"
            onClick={returnToCheckout}
          />
        </div>
      </div>
    </div>
  );
}
