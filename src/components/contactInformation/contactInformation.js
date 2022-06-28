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
  const [salu, setsalu] = useState('');
  const [name, setName] = useState('');
  const [Middname, setMiddname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [primaryPhone1, setprimaryPhone1] = useState('');
  const [primaryPhone2, setprimaryPhone2] = useState('');
  const [primaryPhone3, setprimaryPhone3] = useState('');
  const [primaryPhone, setprimaryPhone] = useState('');

  const [alternatePhone1, setalternatePhone1] = useState('');
  const [alternatePhone2, setalternatePhone2] = useState('');
  const [alternatePhone3, setalternatePhone3] = useState('');
  const [alternatePhone, setalternatePhone] = useState('');

  const [cellPhone1, setcellPhone1] = useState('');
  const [cellPhone2, setcellPhone2] = useState('');
  const [cellPhone3, setcellPhone3] = useState('');
  const [cellPhone, setcellPhone] = useState('');
  const [email, setemail] = useState('');
  const [Reenteremail, setReenteremail] = useState('');

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
  useEffect(() => {
    setName(contactDetails.name);
    setsalu(contactDetails.salutation);
    setMiddname(contactDetails.middleName);
    setLastname(contactDetails.lastName);
    setprimaryPhone1(contactDetails.primaryPhone.slice(0, 3));
    setprimaryPhone2(contactDetails.primaryPhone.slice(3, 6));
    setprimaryPhone3(contactDetails.primaryPhone.slice(6, 10));

    setalternatePhone1(contactDetails.alternatePhone.slice(0, 3));
    setalternatePhone2(contactDetails.alternatePhone.slice(3, 6));
    setalternatePhone3(contactDetails.alternatePhone.slice(6, 10));

    setcellPhone1(contactDetails.cellPhone.slice(0, 3));
    setcellPhone2(contactDetails.cellPhone.slice(3, 6));
    setcellPhone3(contactDetails.cellPhone.slice(6, 10));
    setemail(contactDetails.email);
  }, []);
  const returnToCheckout = () => {
    navigate('/Checkout');
  };
  const saveContactInfo = () => {
    let alternatePhone = alternatePhone1 + alternatePhone2 + alternatePhone3;
    let primaryPhone = primaryPhone1 + primaryPhone2 + primaryPhone3;
    let cellPhone = cellPhone1 + cellPhone2 + cellPhone3;
    setprimaryPhone(primaryPhone);
    setalternatePhone(alternatePhone);
    setcellPhone(cellPhone);
    console.log(salu, name, Middname, Lastname);
    console.log(
      'cellPhone--',
      cellPhone,
      'alternatePhone--',
      alternatePhone,
      '----',
      primaryPhone,
      '---------'
    );
    console.log(email);
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
          {/* <label>
            First Name is required 
            Last Name is required
             Email is required Email
            re-entered does not match
            Area code for Phone is required 
            Prefix for Phone is required 
            Phone line is required
          </label> */}
          <h3>
            Required fields are marked with an asterisk "<span>*</span>"
          </h3>
          <div className="cibr">
            <label>Title</label>
            <div className="selectBox">
              <select
                required=""
                value={salu}
                onChange={(event) => setsalu(event.target.value)}
              >
                {salutation.map((data, key) => {
                  return (
                    <option value={data.name} key={key}>
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
                value={name}
                class="f-sign-up__field required-field"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="cibrCol">
              <label>
                <span>*</span> Middle Name
              </label>
              <input
                type="text"
                class="f-sign-up__field required-field"
                value={Middname}
                onChange={(event) => setMiddname(event.target.value)}
              ></input>
            </div>

            <div className="cibrCol">
              <label>
                <span>*</span> Last Name
              </label>
              <input
                type="text"
                class="f-sign-up__field required-field"
                value={Lastname}
                onChange={(event) => setLastname(event.target.value)}
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
                    maxLength="3"
                    value={primaryPhone1}
                    onChange={(event) => setprimaryPhone1(event.target.value)}
                  ></input>
                </div>
                <span>-</span>
                <div className="phnCol">
                  <input
                    type="tel"
                    maxLength="3"
                    value={primaryPhone2}
                    onChange={(event) => setprimaryPhone2(event.target.value)}
                  ></input>
                </div>
                <span>-</span>
                <div className="phnCol">
                  <input
                    type="tel"
                    maxLength="4"
                    value={primaryPhone3}
                    onChange={(event) => setprimaryPhone3(event.target.value)}
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
                    value={alternatePhone1}
                    maxLength="3"
                    onChange={(event) => setalternatePhone1(event.target.value)}
                  ></input>
                </div>
                <span>-</span>
                <div className="phnCol">
                  <input
                    type="tel"
                    value={alternatePhone2}
                    maxLength="3"
                    onChange={(event) => setalternatePhone2(event.target.value)}
                  ></input>
                </div>
                <span>-</span>
                <div className="phnCol">
                  <input
                    type="tel"
                    value={alternatePhone3}
                    maxLength="4"
                    onChange={(event) => setalternatePhone3(event.target.value)}
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
                    value={cellPhone1}
                    maxLength="3"
                    onChange={(event) => setcellPhone1(event.target.value)}
                  ></input>
                </div>
                <span>-</span>
                <div className="phnCol">
                  <input
                    type="tel"
                    value={cellPhone2}
                    maxLength="3"
                    onChange={(event) => setcellPhone2(event.target.value)}
                  ></input>
                </div>
                <span>-</span>
                <div className="phnCol">
                  <input
                    type="tel"
                    value={cellPhone3}
                    maxLength="4"
                    onChange={(event) => setcellPhone3(event.target.value)}
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
              <input
                type="email"
                value={email}
                onChange={(event) => setemail(event.target.value)}
              />
            </div>
            <div className="cibrCol">
              <label>
                <span>*</span> Re-enter Email
              </label>
              <input
                type="email"
                value={Reenteremail}
                onChange={(event) => {
                  if (email == event.target.value)
                    setReenteremail(event.target.value);
                }}
              />
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
        <Button
          className="checkout-btn"
          label="SAVE CHANGES"
          onClick={saveContactInfo}
        />
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
