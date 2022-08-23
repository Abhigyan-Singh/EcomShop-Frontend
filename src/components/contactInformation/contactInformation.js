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
import { useCookies } from 'react-cookie';
export default function ContactInformation(props) {
  var path = window.location.pathname;
  console.log(path);
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
  const [namevalidation, setNameValidation] = useState(false);

  const [Middname, setMiddname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [Lastnamevalidation, setLastNameValidation] = useState(false);

  const [primaryPhone1, setprimaryPhone1] = useState('');
  const [primaryPhoneValidation1, setprimaryPhone1validation] = useState(false);
  const [primaryPhone2, setprimaryPhone2] = useState('');
  const [primaryPhoneValidation2, setprimaryPhone2validation] = useState(false);
  const [primaryPhone3, setprimaryPhone3] = useState('');
  const [primaryPhone, setprimaryPhone] = useState('');
  const [primaryPhoneValidatin, setprimaryPhoneValidation] = useState(false);

  const [alternatePhone1, setalternatePhone1] = useState('');
  const [alternatePhone2, setalternatePhone2] = useState('');
  const [alternatePhone3, setalternatePhone3] = useState('');
  const [alternatePhone, setalternatePhone] = useState('');
  const [alternatePhoneValidatin, setalternatePhoneeValidation] =
    useState(false);

  const [cellPhone1, setcellPhone1] = useState('');
  const [cellPhone2, setcellPhone2] = useState('');
  const [cellPhone3, setcellPhone3] = useState('');
  const [cellPhone, setcellPhone] = useState('');
  const [cellPhoneValidation, setcellPhoneValidation] = useState(false);

  const [email, setemail] = useState('');
  const [emailValidation, setemailvalidation] = useState(false);
  const [IncurrectemailValidation, setIncurrectemailvalidation] =
    useState(false);
  const [Reenteremail, setReenteremail] = useState('');
  const [Reenteremailvalidation, setReenteremailValidation] = useState(false);
  const [IncurrectREemailValidation, setIncurrectREemailvalidation] =
    useState(false);
    const [cookies, setCookie] = useCookies();
    const { } = cookies;
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
    setReenteremail(contactDetails.email);
  }, []);
  useEffect(() => {

   
}, [cookies.userName,]);

  const returnToCheckout = () => {
    navigate('/Checkout');
  };
  const emailIdValidation = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      console.log('ok');
      return false;
    } else return true;
  };
  const saveContactInfo = () => {
    let primaryPH = primaryPhone1 + primaryPhone2 + primaryPhone3;
    let alternatePh = alternatePhone1 + alternatePhone2 + alternatePhone3;
    let cellPh = cellPhone1 + cellPhone2 + cellPhone3;
    setprimaryPhone(primaryPH);
    setalternatePhone(alternatePh);
    setcellPhone(cellPh);
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
    if (!name) setNameValidation(true);
    else if (!Lastname) setLastNameValidation(true);
    else if (!primaryPhone1) {
      setprimaryPhone1validation(true);
      setprimaryPhoneValidation(true);
    } else if (!primaryPhone2) {
      setprimaryPhone2validation(true);
      setprimaryPhoneValidation(true);
    } else if (primaryPH.length < 10) {
      setprimaryPhoneValidation(true);
    } else if (!alternatePhone1) {
      setprimaryPhone1validation(true);
      setalternatePhoneeValidation(true);
    } else if (!alternatePhone2) {
      setprimaryPhone2validation(true);
      setalternatePhoneeValidation(true);
    } else if (alternatePh.length < 10) {
      setalternatePhoneeValidation(true);
    } else if (!cellPhone1) {
      setprimaryPhone1validation(true);
      setcellPhoneValidation(true);
    } else if (!cellPhone2) {
      setprimaryPhone2validation(true);
      setcellPhoneValidation(true);
    } else if (cellPh.length < 10) {
      setcellPhoneValidation(true);
    } else if (!email) setemailvalidation(true);

    if (!!email && !emailIdValidation(email)) {
      setIncurrectemailvalidation(true);
    } else setIncurrectemailvalidation(false);

    if (!!email != !!Reenteremail) setReenteremailValidation(true);
    else if (!!Reenteremail && !emailIdValidation(Reenteremail)) {
      setIncurrectREemailvalidation(true);
    } else setIncurrectREemailvalidation(false);

    console.log('primaryPhoneValidatin---', primaryPhoneValidatin);
    console.log('primaryPhoneValidatin---', primaryPhoneValidatin);
  };
  return (
    <div className="wrapper">
      {path != '/contactInformation/edit' &&
        <>
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
        </>
      }
      {path == '/contactInformation/edit' &&
        <div className="header-gray"><a href="/myAccount">My Account</a> &gt;
          <a href="/myaccountinformation">Account &amp; Password</a> &gt; Contact Information</div>
      }
      <div className="cnInfHead">
        <h2>Contact Information</h2>
        <p>
          Please make any necessary changes to the information below. Press
          "Save Changes" when you're done.
        </p>
      </div>
      <div className="contactInfoBox">
        <div className="contactInfoBoxHeader">
          USER NAME <span>{cookies.userName}</span>
        </div>
        <div className="contactInfoBoxRow">
          <div
            className={
              namevalidation == true ? 'contFrmRow nameCard' : 'contFrmRow'
            }
          >
            {namevalidation == true ? (
              <label>First Name is required </label>
            ) : (
              ''
            )}
            <div
              className={
                Lastnamevalidation == true
                  ? 'contFrmRow nameCard'
                  : 'contFrmRow'
              }
            >
              {Lastnamevalidation == true ? (
                <label>Last Name is required</label>
              ) : (
                ''
              )}
            </div>
          </div>
          <div
            className={
              primaryPhoneValidation1 == true
                ? 'contFrmRow nameCard'
                : 'contFrmRow'
            }
          >
            {primaryPhoneValidation1 == true ? (
              <label> Area for Phone is required </label>
            ) : (
              ''
            )}
          </div>
          <div
            className={
              primaryPhoneValidation2 == true
                ? 'contFrmRow nameCard'
                : 'contFrmRow'
            }
          >
            {primaryPhoneValidation2 == true ? (
              <label>Prefix for Phone is required </label>
            ) : (
              ''
            )}
          </div>
          <div
            className={
              primaryPhoneValidatin == true
                ? 'contFrmRow nameCard'
                : 'contFrmRow'
            }
          >
            {primaryPhoneValidatin == true ? (
              <label>Phone line is required</label>
            ) : (
              ''
            )}
          </div>
          <div
            className={
              alternatePhoneValidatin == true
                ? 'contFrmRow nameCard'
                : 'contFrmRow'
            }
          >
            {alternatePhoneValidatin == true ? (
              <label>Alternative Phone line is invalid</label>
            ) : (
              ''
            )}
          </div>
          <div
            className={
              cellPhoneValidation == true ? 'contFrmRow nameCard' : 'contFrmRow'
            }
          >
            {cellPhoneValidation == true ? (
              <label>Cell Phone line is invalid</label>
            ) : (
              ''
            )}
          </div>
          <div
            className={
              emailValidation == true ? 'contFrmRow nameCard' : 'contFrmRow'
            }
          >
            {emailValidation == true ? <label>Email is required </label> : ''}
          </div>
          <div
            className={
              IncurrectemailValidation == true
                ? 'contFrmRow nameCard'
                : 'contFrmRow'
            }
          >
            {IncurrectemailValidation == true ? (
              <label> Email is Invalid </label>
            ) : (
              ''
            )}
          </div>
          <div
            className={
              Reenteremailvalidation == true
                ? 'contFrmRow nameCard'
                : 'contFrmRow'
            }
          >
            {Reenteremailvalidation == true ? (
              <label>Re-entered Email does not match</label>
            ) : (
              ''
            )}
          </div>
          <div
            className={
              IncurrectREemailValidation == true
                ? 'contFrmRow nameCard'
                : 'contFrmRow'
            }
          >
            {IncurrectREemailValidation == true ? (
              <label>Re-entered Email is Invalid</label>
            ) : (
              ''
            )}
          </div>
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
                className="f-sign-up__field required-field"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="cibrCol">
              <label>
                <span></span> Middle Name
              </label>
              <input
                type="text"
                className="f-sign-up__field required-field"
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
                className="f-sign-up__field required-field"
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
                    onKeyUp={(event) => {
                      if (!!event.key) {
                        setprimaryPhone1validation(false);
                        setprimaryPhoneValidation(false);
                      }
                    }}
                  ></input>
                </div>
                <span>-</span>
                <div className="phnCol">
                  <input
                    type="tel"
                    maxLength="3"
                    value={primaryPhone2}
                    onChange={(event) => setprimaryPhone2(event.target.value)}
                    onKeyUp={(event) => {
                      if (!!event.key) {
                        setprimaryPhone2validation(false);
                        setprimaryPhoneValidation(false);
                      }
                    }}
                  ></input>
                </div>
                <span>-</span>
                <div className="phnCol">
                  <input
                    type="tel"
                    maxLength="4"
                    value={primaryPhone3}
                    onChange={(event) => setprimaryPhone3(event.target.value)}
                    onKeyUp={(event) => {
                      if (!!event.key) setprimaryPhoneValidation(false);
                    }}
                  ></input>
                </div>
              </div>
            </div>
            <div className="cibrCol">
              <label>
                <span></span> Alternate Phone
              </label>
              <div className="phRw">
                <div className="phnCol">
                  <input
                    type="tel"
                    value={alternatePhone1}
                    maxLength="3"
                    onChange={(event) => setalternatePhone1(event.target.value)}
                    onKeyUp={(event) => {
                      if (!!event.key) {
                        setprimaryPhone1validation(false);
                        setalternatePhoneeValidation(false);
                      }
                    }}
                  ></input>
                </div>
                <span>-</span>
                <div className="phnCol">
                  <input
                    type="tel"
                    value={alternatePhone2}
                    maxLength="3"
                    onChange={(event) => setalternatePhone2(event.target.value)}
                    onKeyUp={(event) => {
                      if (!!event.key) {
                        setprimaryPhone2validation(false);
                        setalternatePhoneeValidation(false);
                      }
                    }}
                  ></input>
                </div>
                <span>-</span>
                <div className="phnCol">
                  <input
                    type="tel"
                    value={alternatePhone3}
                    maxLength="4"
                    onChange={(event) => setalternatePhone3(event.target.value)}
                    onKeyUp={(event) => {
                      if (!!event.key) setalternatePhoneeValidation(false);
                    }}
                  ></input>
                </div>
              </div>
            </div>
            <div className="cibrCol">
              <label>
                <span></span> Cell Phone
              </label>
              <div className="phRw">
                <div className="phnCol">
                  <input
                    type="tel"
                    value={cellPhone1}
                    maxLength="3"
                    onChange={(event) => setcellPhone1(event.target.value)}
                    onKeyUp={(event) => {
                      if (!!event.key) setalternatePhoneeValidation(false);
                    }}
                  ></input>
                </div>
                <span>-</span>
                <div className="phnCol">
                  <input
                    type="tel"
                    value={cellPhone2}
                    maxLength="3"
                    onChange={(event) => setcellPhone2(event.target.value)}
                    onKeyUp={(event) => {
                      if (!!event.key) setalternatePhoneeValidation(false);
                    }}
                  ></input>
                </div>
                <span>-</span>
                <div className="phnCol">
                  <input
                    type="tel"
                    value={cellPhone3}
                    maxLength="4"
                    onChange={(event) => setcellPhone3(event.target.value)}
                    onKeyUp={(event) => {
                      if (!!event.key) setalternatePhoneeValidation(false);
                    }}
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
                onKeyUp={(event) => {
                  if (!!event.key) setemailvalidation(false);
                }}
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
                  // if (email == event.target.value)
                  setReenteremail(event.target.value);
                }}
                onKeyUp={(event) => {
                  if (!!event.key) setIncurrectREemailvalidation(false);
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
