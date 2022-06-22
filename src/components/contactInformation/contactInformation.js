import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useRef
} from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import './contactInformation.css';
import Button from 'components/button/button';
export default function ContactInformation(props) {
  const {
    className,
    defaultValue,
    disabled,
    onChange,
    item,
    isItemAdded = false,
    ...rest
  } = props;
  const navigate = useNavigate();
  const salutation = [
    { value: 'Mr', name: 'Mr' },
    { value: 'Mrs', name: 'Mrs' },
    { value: 'Ms', name: 'Ms' },
    { value: 'Dr', name: 'Dr' },
    { value: 'Rev', name: 'Rev' }
  ];
  const contactDetails = {
    salutation: 'Dr',
    name: 'albert',
    middleName: 'kr',
    lastName: 'ebt2',
    primaryPhone: '1234567808',
    alternatePhone: '7801234569',
    cellPhone: '7801234566',
    email: 'shilaja.kyatham@cobornsinc.com'
  };
  const returnToCheckout = () => {
    navigate('/Checkout');
  };
  return (
    <div className="wrapper">
      <div className="s-checkout__top mbot-1">
        <div className="container">
          <div className="b-step justify-center d-flex">
            <span className="b-step__title">Checkout - Review Information</span>
            <div className="nmbr">
              <span className="l-steps__count">1</span>
              <span className="b-step__count">2</span>
              <span className="l-steps__count">3</span>
            </div>
          </div>
        </div>
      </div>
      <div className="header-gray margin-20px-btm">
        <a
          href="/Checkout"
          // onclick="skipLeaveMessageWindow();"
        >
          <b>Checkout</b>
        </a>
        &gt; Contact Information
      </div>
      <div className="cnInfHead">
        <h2>Contact Information</h2>
        <p>
          Please make any necessary changes to the information below. Press
          "Save Changes" when you're done.
        </p>
      </div>
      <div className="contactInfoBox">
        <div className="contactInfoBoxHeader">
          USER NAME <span>EBTALB2</span>
        </div>
        <div className="contactInfoBoxRow">
          <h3>
            Required fields are marked with an asterisk "<span>*</span>"
          </h3>
          <div className="cibr">
            <label>Title</label>
            <div className="selectBox">
              <select name="country" value={contactDetails.salutation}>
                {salutation.map((data, key) => {
                  return (
                    <option
                      key={key}
                      value={data.value}
                      style={{ textAlign: 'center' }}
                    >
                      {data.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="cibr">
            <div className="cibrCol">
              <label>
                <span>*</span> First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                class="f-sign-up__field required-field"
                autofocus="autofocus"
                maxlength="20"
                value={contactDetails.name}
              ></input>
            </div>
            <div className="cibrCol">
              <label>
                <span>*</span> Middle Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                class="f-sign-up__field required-field"
                autofocus="autofocus"
                maxlength="20"
                value={contactDetails.middleName}
              ></input>
            </div>

            <div className="cibrCol">
              <label>
                <span>*</span> Last Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                class="f-sign-up__field required-field"
                autofocus="autofocus"
                maxlength="20"
                value={contactDetails.lastName}
              ></input>
            </div>
          </div>
        </div>
        <div className="contactInfoBoxRow">
          <h3>
            In case we need to contact you about your order, please enter your:
          </h3>
          <div className="cibr phn">
            <div className="cibrCol">
              <label>
                <span>*</span> Primary Phone
              </label>
              <div className="phRw">
                <div className="phnCol">
                  <input
                    type="tel"
                    value={contactDetails.primaryPhone.slice(0, 3)}
                  ></input>
                </div>
                <span>-</span>
                <div className="phnCol">
                  <input
                    type="tel"
                    value={contactDetails.primaryPhone.slice(3, 6)}
                  ></input>
                </div>
                <span>-</span>
                <div className="phnCol">
                  <input
                    type="tel"
                    value={contactDetails.primaryPhone.slice(6, 10)}
                  ></input>
                </div>
              </div>
            </div>
            <div className="cibrCol">
              <label>
                <span>*</span> Alternate Phone
              </label>
              <div className="phRw">
                <div className="phnCol">
                  <input
                    type="tel"
                    value={contactDetails.alternatePhone.slice(0, 3)}
                  ></input>
                </div>
                <span>-</span>
                <div className="phnCol">
                  <input
                    type="tel"
                    value={contactDetails.alternatePhone.slice(3, 6)}
                  ></input>
                </div>
                <span>-</span>
                <div className="phnCol">
                  <input
                    type="tel"
                    value={contactDetails.alternatePhone.slice(6, 10)}
                  ></input>
                </div>
              </div>
            </div>
            <div className="cibrCol">
              <label>
                <span>*</span> Cell Phone
              </label>
              <div className="phRw">
                <div className="phnCol">
                  <input
                    type="tel"
                    value={contactDetails.cellPhone.slice(0, 3)}
                  ></input>
                </div>
                <span>-</span>
                <div className="phnCol">
                  <input
                    type="tel"
                    value={contactDetails.cellPhone.slice(3, 6)}
                  ></input>
                </div>
                <span>-</span>
                <div className="phnCol">
                  <input
                    type="tel"
                    value={contactDetails.cellPhone.slice(6, 10)}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contactInfoBoxRow">
          <div className="cibr eml">
            <div className="cibrCol">
              <label>
                <span>*</span> Email
              </label>
              <input type="email" value={contactDetails.email}></input>
            </div>
            <div className="cibrCol">
              <label>
                <span>*</span> Re-enter Email
              </label>
              <input type="email" value={contactDetails.email}></input>
            </div>
          </div>
        </div>
      </div>
      <div className="checkoutButtonBox">
        {/* <button className='checkout-btn'></button> */}
        <Button
          className="checkout-btn"
          label="RETURN TO CHECKOUT"
          onClick={returnToCheckout}
        />
        <Button className="checkout-btn" label="SAVE CHANGES" />
      </div>
    </div>
  );
}
ContactInformation.propTypes = {
  defaultValue: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  item: PropTypes.object
};

ContactInformation.defaultProps = {
  defaultValue: 1,
  disabled: false
};
