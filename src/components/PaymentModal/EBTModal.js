import React, { useState, useEffect } from 'react';
import Button from 'components/button/button';
import './paymentModal.css';
import Checkbox from 'components/checkbox/checkbox';
import Visaout from '../../assets/images/paymentdetails/visa_out.png';
import VisaoutSelected from '../../assets/images/paymentdetails/visa_hover_selected.png';
import Master from '../../assets/images/paymentdetails/master_out.png';
import MasterSeleted from '../../assets/images/paymentdetails/master_hover_selected.png';
import American from '../../assets/images/paymentdetails/american_out.png';
import AmericanSelected from '../../assets/images/paymentdetails/american_hover_selected.png';
import Discover from '../../assets/images/paymentdetails/discover_out.png';
import DiscoverSelected from '../../assets/images/paymentdetails/discover_hover_selected.png';
import Checkout from '../../assets/images/paymentdetails/checkout_cvv.jpg';

const EBTModal = (props) => {
  // console.log(props.title);
  const divStyle = {
    display: props.displayModal ? 'block' : 'none'
  };
  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }
  const [isVAlid, SetValid] = useState(false);
  const [firstname, setFirstName] = useState('');
  const [isnameVAlid, setFirstNameValid] = useState(false);
  const [lastname, setLastName] = useState('');
  const [islastnameVAlid, setLastNameValid] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [iscardNumberVAlid, SetcardNumberValid] = useState(false);
  const [iscardNumberLengthVAlid, SetcardNumberLengthValid] = useState(false);
  const [noCardImg, SetNoCardImg] = useState(false);
  const [isrecaptchaVAlid, SetrecaptchaValid] = useState(false);

  const saveChanges = (event) => {
    event.preventDefault();
    console.log('cardNumber.length', cardNumber.length);
    if (
      !isnameVAlid & !islastnameVAlid &
      !cardNumber 
    ) {
      SetValid(true);
      setFirstNameValid(true);
      setLastNameValid(true)
      SetcardNumberValid(true);
      // SetrecaptchaValid(true)
    } else SetValid(false);

    if (!firstname) {
      setFirstNameValid(true);
    } else setFirstNameValid(false);

    if (!lastname) {
      setLastNameValid(true);
    } else setLastNameValid(false);

    if (!cardNumber) {
      SetcardNumberValid(true);
    } else SetcardNumberValid(false);
    if (!!cardNumber && (cardNumber.length > 16 || cardNumber.length < 15)) {
      //console.log('cardNumber.length',cardNumber.length)
      SetcardNumberLengthValid(true);
    } else SetcardNumberLengthValid(false);

    console.log(
      'firstname--' + firstname,
      'lastname--' + lastname,
      'cardNumber--' + cardNumber,
    );
  };

  useEffect(() => {}, []);

  return (
    <div className="modal ebtMod" onClick={closeModal} style={divStyle}>
      <div
        className="modal-content payment"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Payment Method: EBT</h3>
        {isVAlid == true ? (
          <>
            <div style={{ color: 'red', background: '#e0e0e0', padding: '7px 20px', lineHeight: '15px' , fontSize: '13px' }}>
              <div>Please correct the hignlighted field(s) below:</div>
              <div>Please Select reCAPTCHA</div>
              <div>First Name </div>
              <div>Last Name</div>
              <div>Card Number</div>
            </div>
          </>
        ) : (
          ''
        )}

        <div className="boxcontent">
          <div className="boxcontentRght">
            <h4>ACCOUNT INFORMATION</h4>

            <div className="chkArea">
              <Checkbox className="mb-4" id="checkbox-1" />
              <p>Make this card the default payment method</p>
            </div>

            <div
              className={
                isnameVAlid == true ? 'contFrmRow nameCard' : 'contFrmRow'
              }
            >
              <label>
                <span className="asterisk">*</span>First Name
              </label>
              <input
                type="text"
                value={firstname}
                onChange={(text) => setFirstName(text.target.value)}
                onKeyDown={(event) => {
                  if (!!event.key) setFirstNameValid(false);
                }}
              />
              {isnameVAlid == true ? (
                <label>First Name is a required field.</label>
              ) : (
                ''
              )}
            </div>
            <div
              className={
                islastnameVAlid == true ? 'contFrmRow nameCard' : 'contFrmRow'
              }
            >
              <label>
                <span className="asterisk">*</span>Last Name
              </label>
              <input
                type="text"
                value={lastname}
                onChange={(text) => setLastName(text.target.value)}
                onKeyDown={(event) => {
                  if (!!event.key) setLastNameValid(false);
                }}
              />
              {islastnameVAlid == true ? (
                <label>Last Name is a required field.</label>
              ) : (
                ''
              )}
            </div>
            <div
              // className="contFrmRow"
              className={
                iscardNumberVAlid == true ? 'contFrmRow Cardno' : 'contFrmRow'
              }
            >
              <label>
                <span className="asterisk">*</span> Card Number
              </label>
              <input
                type="number"
                value={cardNumber}
                minLength={16}
                onChange={(event) => setCardNumber(event.target.value)}
                onKeyDown={(event) => {
                  if (!!event.key) SetcardNumberValid(false);
                }}
              />
              {iscardNumberVAlid == true ? (
                <label className="digitvalid">
                  Card Number is a required field.
                </label>
              ) : (
                ''
              )}
              {iscardNumberLengthVAlid == true ? (
                <label className="digitvalid">
                  Card Number should be a 15 or 16 digit number
                </label>
              ) : (
                ''
              )}
              {noCardImg == true ? (
                <label className="digitvalid">
                  Cannot recognize card type.
                </label>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>

        <div className="modFootSec">
          <div className="modFootSecLft">
            <Button
              className="checkout-btn"
              label="Cancel"
              onClick={closeModal}
            />
            <Button
              className="checkout-btn"
              label="SAVE CHANGES"
              onClick={saveChanges}
            />
          </div>
          <div className="modFootSecRgt">
            <label>
              <span className="asterisk">*</span> reCAPTCHA
            </label>
            <div className="re-captchaborder"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EBTModal;
