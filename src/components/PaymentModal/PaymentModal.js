import React, { useState, useEffect } from 'react';
import Button from 'components/button/button';
import './paymentModal.css';
import Checkbox from 'components/checkbox/checkbox';
import Visaout from '../../assets/images/paymentdetails/visa_out.png';
import Master from '../../assets/images/paymentdetails/master_out.png';
import American from '../../assets/images/paymentdetails/american_out.png';
import Discover from '../../assets/images/paymentdetails/discover_out.png';
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
  const [title, settitle] = useState('');
  const [years, SetYear] = useState([]);
  const location =['AK','AL','AR']
  useEffect(() => {
    const d = new Date();
    let year = d.getFullYear();
    for (let i = year; i < year + 20; i++) {
      years.push(i);
    }
    SetYear(years);
    /////////////
    if (props.title == 'ADD CREDIT CARD') {
      settitle('CREDIT');
    } else settitle('EBT');
    ////////////

  }, [props.title]);
  return (
    <div className="modal" onClick={closeModal} style={divStyle}>
      <div
        className="modal-content payment"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Payment Method: {title} CARD</h3>

        <div className="boxcontent">
          <div className="boxcontentLft">
            <h4>{title} CARD INFORMATION</h4>
            <div className="chkArea">
              <Checkbox className="mb-4" id="checkbox-1" />{' '}
              <p>Make this card the default payment method</p>
            </div>
            <div className="actp">
              <p>Accepted Card Types</p>
              <p className="crdd">
                <img class="card-img" src={Visaout} />
                <img class="card-img" src={Master} />
                <img class="card-img" src={American} />
                <img class="card-img" src={Discover} />
              </p>
            </div>
            <div className="contFrmRow">
              <label>
                <span class="asterisk">*</span> Name on Card
              </label>
              <input type="text" />
            </div>
            <div className="contFrmRow">
              <label>
                <span class="asterisk">*</span> Card Number
              </label>
              <input type="number" />
            </div>
            <div className="contFrmRowCol">
              <div className="contFrmCol">
                <label>
                  <span class="asterisk">*</span> Expiration Date
                </label>
                <div className="contFrmColInner">
                  <select title="Expiry Month Add CC" required="">
                    <option value="" style={{ display: 'none' }} selected="">
                      MM
                    </option>
                    <option value="0"> 1 </option>
                    <option value="1"> 2 </option>
                    <option value="2"> 3 </option>
                    <option value="3"> 4 </option>
                    <option value="4"> 5 </option>
                    <option value="5"> 6 </option>
                    <option value="6"> 7 </option>
                    <option value="7"> 8 </option>
                    <option value="8"> 9 </option>
                    <option value="9"> 10 </option>
                    <option value="10"> 11 </option>
                    <option value="11"> 12 </option>
                  </select>
                  <select title="Expiry Year Add CC" required="">
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
              </div>
              <div className="contFrmCol">
                <label>
                  <span class="asterisk">*</span> CVV
                  <a class="i-question" onclick="void(0)">
                    <div class="i-question__text i-question__text-right-side cvvInfoPopup">
                      <div class="header">Card Validation Value (CVV)</div>
                      <div class="left inline-block" style={{ width: '48%' }}>
                        Card security code is usually found on the back of the
                        card.
                      </div>
                      <div
                        class="hard-right inline-block"
                        style={{ width: ' 50%' }}
                      >
                        <img class="cvv-img" src={Checkout} />
                      </div>
                    </div>
                  </a>
                </label>
                <input type="number" />
              </div>
            </div>
          </div>
          <div className="boxcontentRght">
            <h4>{title} CARD BILLING ADDRESS</h4>
            <div className="chkArea">
              <Checkbox id="checkbox-2" /> <p>Same as delivery address</p>
            </div>
            <div className="adressMail">
              6415 Labeaux Ave NE <br />
              Albertville, MN 55301-9812
            </div>
            <div className="contFrmRow">
              <label>
                <span class="asterisk">*</span> Street Address
              </label>
              <input type="text" />
            </div>
            <div className="contFrmRow">
              <label>
                Unit / Apt #<span className="lght">(optional)</span>
              </label>
              <input type="text" />
            </div>
            <div className="contFrmRow">
              <label>
                <span class="asterisk">*</span> City
              </label>
              <input type="text" />
            </div>
            <div className="contFrmRowCol">
              <div className="contFrmCol">
                <label>
                  <span class="asterisk">*</span> State
                </label>
                <div className="contFrmColInner">
                  <select required="">
                    <option style={{ display: 'none' }} selected="">
                     
                      Please select
                    </option>
                    {location.map((data,key)=>{
                      return <option value="AK" key={key}>{data}</option>
                    })}
                    
                    {/* <option value="AL">AL</option>
                    <option value="AR">AR</option>
                    <option value="AZ">AZ</option>
                    <option value="CA">CA</option>
                    <option value="CO">CO</option>
                    <option value="CT">CT</option>
                    <option value="DC">DC</option>
                    <option value="DE">DE</option>
                    <option value="FL">FL</option>
                    <option value="GA">GA</option>
                    <option value="HI">HI</option>
                    <option value="IA">IA</option>
                    <option value="ID">ID</option>
                    <option value="IL">IL</option>
                    <option value="IN">IN</option>
                    <option value="KS">KS</option>
                    <option value="KY">KY</option>
                    <option value="LA">LA</option>
                    <option value="MA">MA</option>
                    <option value="MD">MD</option>
                    <option value="ME">ME</option>
                    <option value="MI">MI</option>
                    <option value="MN">MN</option>
                    <option value="MO">MO</option>
                    <option value="MS">MS</option>
                    <option value="MT">MT</option>
                    <option value="NC">NC</option>
                    <option value="ND">ND</option>
                    <option value="NE">NE</option>
                    <option value="NH">NH</option>
                    <option value="NJ">NJ</option>
                    <option value="NM">NM</option>
                    <option value="NV">NV</option>
                    <option value="NY">NY</option>
                    <option value="OH">OH</option>
                    <option value="OK">OK</option>
                    <option value="OR">OR</option>
                    <option value="PA">PA</option>
                    <option value="RI">RI</option>
                    <option value="SC">SC</option>
                    <option value="SD">SD</option>
                    <option value="TN">TN</option>
                    <option value="TX">TX</option>
                    <option value="UT">UT</option>
                    <option value="VA">VA</option>
                    <option value="VT">VT</option>
                    <option value="WA">WA</option>
                    <option value="WI">WI</option>
                    <option value="WV">WV</option>
                    <option value="WY">WY</option> */}
                  </select>
                </div>
              </div>
              <div className="contFrmCol">
                <label>
                  <span class="asterisk">*</span> Zip
                </label>
                <input type="tel" />
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
            <Button className="checkout-btn" label="SAVE CHANGES" />
          </div>
          <div className="modFootSecRgt">
            <label>
              <span class="asterisk">*</span> reCAPTCHA
            </label>
            <div className="re-captchaborder"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentModal;
