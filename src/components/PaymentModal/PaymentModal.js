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

const PaymentModal = (props) => {
  // console.log(props.title);
  const divStyle = {
    display: props.displayModal ? 'block' : 'none'
  };
  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }
  const [title, settitle] = useState(false);
  const [years, SetYear] = useState([]);
  const location = ['AK', 'AL', 'AR', 'MN'];
  const [nameOfCard, setNameOfCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [month, setMonth] = useState([]);
  const [year, setYear] = useState([]);
  const [cvv, setCVV] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [unit, setUnit] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState([]);
  const [zipCode, setZipCode] = useState('');
  const [isVAlid, SetValid] = useState(false);
  const [isnameOfCardVAlid, SetnameOfCardValid] = useState(false);
  const [iscardNumberVAlid, SetcardNumberValid] = useState(false);
  const [iscardNumberLengthVAlid, SetcardNumberLengthValid] = useState(false);
  const [isyearVAlid, SetyearValid] = useState(false);
  const [ismonthVAlid, SetmonthValid] = useState(false);
  const [iscvvdVAlid, SetcvvValid] = useState(false);
  const [iscvvNumberLengthVAlid, SetcvvNumberLengthValid] = useState(false);
  const [isstreetAddressVAlid, SetstreetAddressValid] = useState(false);
  const [iscityVAlid, SetcityValid] = useState(false);
  const [isstateVAlid, SetstateValid] = useState(false);
  const [iszipCodeVAlid, SetzipCodeValid] = useState(false);
  const [iszipCodeNumberVAlid, SetzipCodeNumberValid] = useState(false);
  const [isrecaptchaVAlid, SetrecaptchaValid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [imgVisaselect, setImgVisaselect] = useState(false);
  const [imgMasterselect, setImgMasterselect] = useState(false);
  const [imgAmericaselect, setImgAmericaselect] = useState(false);
  const [imgDiscoverselect, setImgDiscoverselect] = useState(false);
  const [noCardImg, SetNoCardImg] = useState(false);
  const [disabledInput, setdisabledInput]= useState(false);

  const checkcard = (event) => {
    // console.log(event.target.value);
    // console.log(props.title);
    // console.log(document.getElementById('visa').id);
    var prefix = event.target.value;
    if (prefix != '' && prefix != null && prefix != undefined) {
      if (/^4/.test(prefix)) {
        if (document.getElementById('visa').id == 'visa')
          setImgVisaselect(true);
        SetNoCardImg(false);
      } else if (/^5[1-5]/.test(prefix)) {
        if (document.getElementById('master').id == 'master')
          setImgMasterselect(true);
        SetNoCardImg(false);
      } else if (/^3[47]/.test(prefix)) {
        if (document.getElementById('american').id == 'american')
          setImgAmericaselect(true);
        SetNoCardImg(false);
      } else if (
        /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/.test(
          prefix
        )
      ) {
        if (document.getElementById('discover').id == 'discover')
          setImgDiscoverselect(true);
        SetNoCardImg(false);
      } else {
        console.log('error');
        setImgVisaselect(false);
        setImgMasterselect(false);
        setImgAmericaselect(false);
        setImgDiscoverselect(false);
        SetNoCardImg(true);
      }
      // if(!!prefix && (cardNumber.length > 16 || cardNumber.length < 15))
    } else {
      setImgVisaselect(false);
      setImgMasterselect(false);
      setImgAmericaselect(false);
      setImgDiscoverselect(false);
    }
  };

  const saveChanges = (event) => {
    event.preventDefault();
    console.log('cardNumber.length', cardNumber.length);
    if (
      !nameOfCard &
      !cardNumber &
      !cvv &
      !streetAddress &
      !city &
      !zipCode &
      (year == '') &
      (month == '') &
      (state == '')
    ) {
      SetValid(true);
      SetnameOfCardValid(true);
      SetcardNumberValid(true);
      SetcvvValid(true);
      SetmonthValid(true);
      SetyearValid(true);
      SetstreetAddressValid(true);
      SetcityValid(true);
      SetstateValid(true);
      SetzipCodeValid(true);
      // SetrecaptchaValid(true)
    }
    if (!nameOfCard) {
      SetnameOfCardValid(true);
    } else SetnameOfCardValid(false);

    if (!cardNumber) {
      SetcardNumberValid(true);
    } else SetcardNumberValid(false);
    if (!!cardNumber && (cardNumber.length > 16 || cardNumber.length < 15)) {
      //console.log('cardNumber.length',cardNumber.length)
      SetcardNumberLengthValid(true);
    } else SetcardNumberLengthValid(false);

    if ((year == '') & (month == '')) {
      SetmonthValid(true);
      SetyearValid(true);
    } else if ((!!year && month == '') || (year == '' && !!month)) {
      SetmonthValid(true);
      SetyearValid(true);
    } else {
      SetmonthValid(false);
      SetyearValid(false);
    }

    if (!cvv) {
      SetcvvValid(true);
    } else SetcvvValid(false);
    if (!!cvv && (cvv.length > 4 || cvv.length < 3)) {
      SetcvvNumberLengthValid(true);
    } else SetcvvNumberLengthValid(false);

    if (!streetAddress) {
      SetstreetAddressValid(true);
    } else SetstreetAddressValid(false);

    if (!city) {
      SetcityValid(true);
    } else SetcityValid(false);

    if (state == '') {
      SetstateValid(true);
    } else SetstateValid(false);

    if (!zipCode) {
      SetzipCodeValid(true);
    } else SetzipCodeValid(false);
    if (!!zipCode && !validationpostcode(zipCode)) {
      SetzipCodeNumberValid(true);
    } else SetzipCodeNumberValid(false);
    // console.log(isnameOfCardVAlid);
    console.log(
      'nameOfCard--' + nameOfCard,
      'cardNumber--' + cardNumber,
      'month--' + month,
      'year--' + year,
      'cvv--' + cvv,
      'streetAddress--' + streetAddress,
      'unit--' + unit,
      'city--' + city,
      'state--' + state,
      'zipCode--' + zipCode
    );
  };
  const address = {
    streetAddress: '6415 Labeaux Ave NE',
    city: 'Albertville',
    state: 'MN',
    zipCode: '55301-3972'
  };
  const hanldeFilterChange = (e) => {
    console.log(e.target.checked);

    if (e.target.checked == true) {
      setStreetAddress(address.streetAddress);
      setCity(address.city);
      setState(address.state);
      setZipCode(address.zipCode);
    } else {
      setStreetAddress('');
      setCity('');
      setState([]);
      setZipCode('');
    }
    // setIsChecked(e.target.checked);
    // if (isChecked == false) setOnChecked(false);
  };
  useEffect(() => {
    const d = new Date();
    let year = d.getFullYear();
    for (let i = year; i < year + 20; i++) {
      years.push(i);
    }
    SetYear(years);
    /////////////
    if (props.title == 'edit') {
      settitle(true);
    } else settitle(false);
    ////////////
  }, [props.title]);
  const validationpostcode = (text) => {
    console.log(text);
    let reg = /^\d{5}([\-]?\d{4})?$/;
    //let reg= /^\\d{5}(?:[- ]\\d{4})?$/;
    if (reg.test(text) === false) {
      console.log('ok');
      return false;
    } else return true;
  };
  return (
    <div className="modal" onClick={closeModal} style={divStyle}>
      <div
        className="modal-content payment"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Payment Method: CRADIT CARD</h3>
        {isVAlid == true ? (
          <>
            <div style={{ color: 'red', background: '#e0e0e0', padding: '7px 20px', lineHeight: '15px' , fontSize: '13px' }}>
              <div>Please correct the hignlighted field(s) below:</div>
              <div>Please Select reCAPTCHA</div>
              <div>Name on Card</div>
              <div>Card Number</div>
              <div>Expiration Date</div>
              <div>CVV</div>
              <div>Street Address</div>
              <div>City</div>
              <div>State</div>
              <div>Zip</div>
            </div>
          </>
        ) : (
          ''
        )}

        <div className="boxcontent">
          <div className="boxcontentLft">
            <h4>CRADIT CARD INFORMATION</h4>

            <div className="chkArea">
              <Checkbox className="mb-4" id="checkbox-1" />
              <p>Make this card the default payment method</p>
            </div>
            <div className="actp">
              <p>Accepted Card Types</p>

              <p className="crdd">
                <img
                  className="card-img"
                  id="visa"
                  src={imgVisaselect == true ? VisaoutSelected : Visaout}
                />
                <img
                  className="card-img"
                  id="master"
                  src={imgMasterselect == true ? MasterSeleted : Master}
                />
                <img
                  className="card-img"
                  id="american"
                  src={imgAmericaselect == true ? AmericanSelected : American}
                />
                <img
                  className="card-img"
                  id="discover"
                  src={imgDiscoverselect == true ? DiscoverSelected : Discover}
                />
              </p>
            </div>
            <div
              className={
                isnameOfCardVAlid == true ? 'contFrmRow nameCard' : 'contFrmRow'
              }
            >
              <label>
                <span className="asterisk">*</span> Name on Card
              </label>
              <input
                type="text"
                value={nameOfCard}
                onChange={(text) => setNameOfCard(text.target.value)}
                onKeyDown={(event) => {
                  if (!!event.key) SetnameOfCardValid(false);
                }}
                disabled={title}
              />
              {isnameOfCardVAlid == true ? (
                <label>Name on Card is a required field.</label>
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
                onKeyUp={checkcard}
                disabled={title}
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

            <div className="contFrmRowCol">
              <div
                className={
                  isyearVAlid == true || ismonthVAlid == true
                    ? 'contFrmCol exdate'
                    : 'contFrmCol'
                }
              >
                <label>
                  <span className="asterisk">*</span> Expiration Date
                </label>
                <div className="contFrmColInner">
                  <select
                    title="Expiry Month Add CC"
                    required=""
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    onClick={(event) => {
                      setMonth(event.target.value);
                      // if(!!event.target.options[event.target.selectedIndex].text)SetmonthValid(false)
                    }}
                  >
                    <option value="" style={{ display: 'none' }} selected="">
                      MM
                    </option>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
                    <option value="6"> 6 </option>
                    <option value="7"> 7 </option>
                    <option value="8"> 8 </option>
                    <option value="9"> 9 </option>
                    <option value="10"> 10 </option>
                    <option value="11"> 11 </option>
                    <option value="12"> 12 </option>
                  </select>
                  <select
                    title="Expiry Year Add CC"
                    required=""
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    onClick={(event) => {
                      if (
                        !!event.target.options[event.target.selectedIndex]
                          .text &&
                        !!month
                      )
                        SetyearValid(false);SetmonthValid(false)
                    }}
                  >
                    <option style={{ display: 'none' }} selected="" value="">
                      YYYY
                    </option>
                    {years.map((data, key) => {
                      return (
                        <option value={data} key={key}>
                          {data}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {isyearVAlid == true ? (
                  <label className="digitvalid">
                    Expiration Date is a required field.
                  </label>
                ) : (
                  ''
                )}
              </div>
              <div
                // className="contFrmCol"
                className={
                  iscvvdVAlid == true ? 'contFrmCol cvv' : 'contFrmCol'
                }
              >
                <label>
                  <span className="asterisk">*</span> CVV
                  <a className="i-question" onclick="void(0)">
                    <div className="i-question__text i-question__text-right-side cvvInfoPopup">
                      <div className="header">Card Validation Value (CVV)</div>
                      <div
                        className="left inline-block"
                        style={{ width: '48%' }}
                      >
                        Card security code is usually found on the back of the
                        card.
                      </div>
                      <div
                        className="hard-right inline-block"
                        style={{ width: ' 50%' }}
                      >
                        <img className="cvv-img" src={Checkout} />
                      </div>
                    </div>
                  </a>
                </label>
                <input
                  type="number"
                  value={cvv}
                  onChange={(event) => setCVV(event.target.value)}
                  onKeyUp={(event) => {if(!!event.key)SetcvvValid(false)}}
                  disabled={title}
                />
                {iscvvdVAlid == true ? (
                  <label className="digitvalid">CVV is a required field.</label>
                ) : (
                  ''
                )}
                {iscvvNumberLengthVAlid == true ? (
                  <label className="digitvalid">
                    Invalid CVV. Please enter 4 digits for American Express Card
                    Type and 3 digits for remaining Card Types.
                  </label>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
          <div className="boxcontentRght">
            <h4>CRADIT CARD BILLING ADDRESS</h4>
            <div className="chkArea">
              <Checkbox
                id="checkbox-2"
                value={isChecked}
                onChange={hanldeFilterChange}
              />

              <p>Same as delivery address</p>
            </div>
            <div className="adressMail">
              {address.streetAddress} <br />
              {address.city},{address.state} {address.zipCode}
            </div>
            <div
              className={
                isstreetAddressVAlid == true
                  ? 'contFrmRow address'
                  : 'contFrmRow'
              }
            >
              <label>
                <span className="asterisk">*</span> Street Address
              </label>
              <input
                type="text"
                value={streetAddress}
                onChange={(event) => setStreetAddress(event.target.value)}
                onKeyUp={(event) => {if(!!event.key)SetstreetAddressValid(false)}}
              />
              {isstreetAddressVAlid == true ? (
                <label className="digitvalid">
                  Street Address is a required field.
                </label>
              ) : (
                ''
              )}
            </div>
            <div className="contFrmRow">
              <label>
                Unit / Apt #<span className="lght">(optional)</span>
              </label>
              <input
                type="text"
                value={unit}
                onChange={(event) => setUnit(event.target.value)}
              />
            </div>
            <div
              className={iscityVAlid == true ? 'contFrmRow city' : 'contFrmRow'}
            >
              <label>
                <span className="asterisk">*</span> City
              </label>
              <input
                type="text"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                onKeyUp={(event) => {if(!!event.key)SetcityValid(false)}}
              />
              {iscityVAlid == true ? (
                <label className="digitvalid">City is a required field.</label>
              ) : (
                ''
              )}
            </div>
            <div className="contFrmRowCol">
              <div
                className={
                  isstateVAlid == true ? 'contFrmCol state' : 'contFrmCol'
                }
              >
                <label>
                  <span className="asterisk">*</span> State
                </label>
                <div className="contFrmColInner">
                  <select
                    required=""
                    value={state}
                    onChange={(event) => setState(event.target.value)}
                    onClick={(event) => {
                      if (!!event.target.options[event.target.selectedIndex].text)SetstateValid(false);
                        
                    }}
                  >
                    <option style={{ display: 'none' }} value="">
                      Please select
                    </option>
                    {location.map((data, key) => {
                      return (
                        <option value={data} key={key}>
                          {data}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {isstateVAlid == true ? (
                  <label className="digitvalid">
                    State is a required field.
                  </label>
                ) : (
                  ''
                )}
              </div>
              <div
                className={
                  iszipCodeVAlid == true ? 'contFrmCol zipcode' : 'contFrmCol'
                }
              >
                <label>
                  <span className="asterisk">*</span> Zip
                </label>
                <input
                  type="text"
                  value={zipCode}
                  onChange={(event) => {
                    setZipCode(event.target.value);
                  }}
                  onKeyUp={(event) => {if(!!event.key)SetzipCodeNumberValid(false);SetzipCodeValid(false)}}
                />
                {iszipCodeVAlid == true ? (
                  <label className="digitvalid">Zip is a required field.</label>
                ) : (
                  ''
                )}
                {iszipCodeNumberVAlid == true ? (
                  <label className="digitvalid">
                    Please enter a valid zip code.
                  </label>
                ) : (
                  ''
                )}
              </div>
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
export default PaymentModal;
