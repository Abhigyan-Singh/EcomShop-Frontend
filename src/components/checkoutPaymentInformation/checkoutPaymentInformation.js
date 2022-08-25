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
import EBTModal from 'components/PaymentModal/EBTModal';
import { cardDetails, ebtDetails, DeleteCards } from 'services/cardDetails';
import { useCookies } from 'react-cookie';
import { CartState } from '../../context/context';

export default function CheckoutPaymentInformation() {
  const navigate = useNavigate();
  const [showModal, setModal] = useState(false);
  const [show, setShow] = useState(false);
  const [ebtshow, setebtShow] = useState(false);
  const [title, setTitle] = useState('');
  const [cookies, setCookie] = useCookies();
  const { facility, user, userInfo } = cookies;
  const [loading, setLoading] = useState(false);
  const { dispatchUser } = CartState();
  const [craditCard, SetCraditcard] = useState([])
  const [ebtCard, SetEbtitcard] = useState([])
  const [selectedvalue, setselectedvalue] = useState(1)
  const [userName, SetuserName] = useState("")

  const CardArray = {
    // craditCard: [
    //   {
    //     cardNumber: 'Visa-xxxx-xxxx-xxxx-2345',
    //     holderName: 'K Naskar',
    //     expire: '05/2027'
    //   },
    //   {
    //     cardNumber: 'Visa-xxxx-xxxx-xxxx-2346',
    //     holderName: 'S Naskar',
    //     expire: '05/2027'
    //   }
    // ],
    // ebtCard: [
    //   {
    //     cardNumber: 'Visa-xxxx-xxxx-xxxx-2347',
    //     holderName: 'K Naskar',
    //     expire: '05/2027',
    //   }
    // ],
    // sellectedCheckbox: 'Visa-xxxx-xxxx-xxxx-2347'
  };
  useEffect(() => {
    if (!userInfo && user) {
      SetuserName(cookies.userName)
      getCardData(cookies.userName);
      getEbtData(cookies.userName)
    }



  }, [cookies.userName]);
  const CardDetails = (e) => {
    console.log(e.target.name);
    e.preventDefault();
    setTitle(e.target.name);
    setShow(true);
    // setModal(true);
    // navigate('/contactInformation');
  };
  const getCardData = (name) => {
    // alert(name)
    cardDetails(name).then((resp) => {
      console.log(resp.data.data)
      SetCraditcard(resp.data.data)
    });

  }
  const getDate = (date) => {
    if (!date)
      return null;
    const d = new Date(date);
    const m = (d.getMonth() + 1).toString().padStart(2, 0)
    const y = d.getFullYear()
    // const date = m+'/'+y
    return `${m}/${y}`
  }
  const cardnumber = (card) => {
    // let reg= card.replace(/\d(?=\d{4})/g,"x")
    // console.log(card);
    let finalString = ''
    for (let i = 0; i < Math.ceil((card.length - 4) / 4); i++) {
      finalString += 'xxxx-';
    }
    finalString += card.toString().substring(card.length - 4);
    // console.log(finalString)
    return finalString
  }
  const getEbtData = (name) => {
    ebtDetails(name).then((res) => {
      console.log(res.data.data)
      SetEbtitcard(res.data.data)
    });
  }
  const deletePaymentOption = (id) => {
    console.log(userName, id);
    DeleteCards(userName, id).then((res) => {
      console.log(res.data.data)
      getCardData(userName);
      getEbtData(userName)
      // SetEbtitcard(res.data.data)SGFS
    });
  }

  const CardDetailsEbt = (e) => {
    console.log(e.target.innerText);
    e.preventDefault();
    setTitle(e.target.innerText);
    setebtShow(true);
  };
  const onSiteChanged = (event) => {
    console.log(event.target.value)
    setselectedvalue(event.target.value)
  };
  const onClose = (event) => {
    setModal(false);
  };
  const returnToCheckout = () => {
    navigate('/Checkout');
  };
  return (

    <div className="wrapper" loading={loading}>
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
              {craditCard.map((data, key) => {

                return (
                  <div className="paymentOptionsBoxRow" key={key}>
                    <div className="paymentOptionsBoxCol">
                      <input
                        type="radio"
                        className="phone-cc-drop"
                        title="Make Default"
                        name="defaultPaymentType"
                        value={data.paymentToken}
                        // id={data.paymentToken}
                        // checked={data.defaultFlag ==1}
                        checked={selectedvalue == data.defaultFlag}
                        onChange={onSiteChanged}
                      />
                    </div>
                    <div className="paymentOptionsBoxCol">
                      {data.dataLine1.split(" ")[0] + '-' + cardnumber(data.paymentToken)}
                    </div>
                    <div className="paymentOptionsBoxCol">
                      {data.nameOnAccount}
                    </div>
                    <div className="paymentOptionsBoxCol">{getDate(data.paymentExpirationDate)}</div>
                    <div className="paymentOptionsBoxCol">
                      <input
                        type="button"
                        name="delete['0']"
                        id="deleteButtonCC0"
                        className="i-delete-pay right"
                        onClick={() => deletePaymentOption(data.paymentToken)}
                      />
                      <input
                        type="button"
                        name="edit"
                        id="editButtonCC0"
                        className="i-edit-pay right"
                        onClick={CardDetails}
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
              {ebtCard.map((data, key) => {
                return (
                  <div className="paymentOptionsBoxRow ebtcrd" key={key}>
                    <div className="paymentOptionsBoxCol">
                      <input
                        type="radio"
                        className="phone-cc-drop"
                        title="Make Default"
                        name="defaultPaymentType"
                        value={data.paymentToken}
                        // id={data.paymentToken}
                        // checked={data.defaultFlag ==1}
                        checked={selectedvalue == data.defaultFlag}
                        onChange={onSiteChanged}
                      />
                    </div>
                    <div className="paymentOptionsBoxCol">
                      {cardnumber(data.paymentToken)}
                      {/* {data.dataLine1} */}

                    </div>
                    <div className="paymentOptionsBoxCol">

                      {data.nameOnAccount}

                    </div>
                    <div className="paymentOptionsBoxCol">
                      <input
                        type="button"
                        name="delete['0']"
                        id="deleteButtonCC0"
                        className="i-delete-pay right"
                        onClick={() => deletePaymentOption(data.paymentToken)}
                      />
                      <input
                        type="button"
                        name="update['0']"
                        id="editButtonCC0"
                        className="i-edit-pay right"
                        onclick="openEditCCModal('0')"
                      />
                    </div>
                  </div>
                );
              })}

              <div className="adCrtBotSec">
                <Button
                  className={
                    ebtCard.length != 0
                      ? 'checkout-btn ckoutdisable'
                      : 'checkout-btn '
                  }
                  label="Add EBT Card"
                  onClick={CardDetailsEbt}
                />
                <EBTModal
                  displayModal={ebtshow}
                  closeModal={() => setebtShow(false)}
                  title={title}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="button-box m-lss">
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
