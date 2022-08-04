
import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useRef
} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../checkoutPaymentInformation/checkoutPaymentInformation.css';
import Button from 'components/button/button';
import { useCookies } from 'react-cookie';
import { addressDetails } from 'services/myAccountapi';
import { userInfoService } from 'services/auth';
import { CartState } from '../../context/context';


export default function MyAccountInformation() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();
  const { facility, userInfo } = cookies;
  const [address, setAddress] = useState([])
  // const { dispatchUser } = CartState();
  const {
    userStore: { user, state },
    dispatchUser
  } = CartState();
  useEffect(() => {
    alert(cookies.userName)
    if (!!cookies.userName) {
      getData(cookies.userName)
    }
    //    console.log(cookies.userName)

  }, [cookies.userName]);
  const getData = (name) => {

    addressDetails(name).then((resp) => {
      console.log(resp.data.data)
      setAddress(resp.data.data)
    });
  }

  return (

    <div className="wrapper" >
      <div className="s-checkout__top mbot-1">
        <div className="container">
          <div className="b-step headMid d-flex">
            <span className="b-step__title"></span>
            <div className="nmbr">
              <span className=""></span>
              <span className=""></span>
              <span className=""></span>
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
            <b>My Account</b>
          </a>
          &gt; Account & Password
        </div>
        <div className="payInfoHead">

        </div>
        <div className="paymentOptionsBoxOuter">
          <div className="paymentOptionsBox">
            <h2>USER NAME { }</h2>
            <div className="paymentOptionsBoxHd">
              <div className="paymentOptionsBoxCol">Password</div>
              {/* <div className="paymentOptionsBoxCol">Credit Card</div>
                  <div className="paymentOptionsBoxCol">Name on Card</div>
                  <div className="paymentOptionsBoxCol">Expiration</div> */}
            </div>
            <div className="paymentOptionsBoxRowSec">

            </div>
            <div className="adCrtBotSec">
              <Button
                className="checkout-btn"
                label="Edit Password"
              // onClick={CardDetails}
              />

            </div>

            <h2 className="bdrd"></h2>
            <div className="paymentOptionsBoxHd drcChk">
              <div className="paymentOptionsBoxCol">Contact Information</div>
              {/* <div className="paymentOptionsBoxCol">Direct Check™</div>
                    <div className="paymentOptionsBoxCol">Acct Holder Name</div>
                  <div className="paymentOptionsBoxCol">Routing Num</div>
                  <div className="paymentOptionsBoxCol">Bank Name</div> */}
            </div>
            <div className="paymentOptionsBoxRowSec">
              <div className="paymentOptionsBoxRow drcChk">
                {/* <p>
                      Interested in paying by Direct Check? Contact our Customer
                      Relations department at 1 (844) 414-7467 for more information.
                    </p> */}
              </div>
            </div>
            <div className="adCrtBotSec">
              <Button
                className="checkout-btn"
                label="Edit Contact"
              // onClick={CardDetails}
              />

            </div>
            <h2 className="bdrd"></h2>
            <div className="paymentOptionsBoxHd">
              <div className="paymentOptionsBoxCol">Account Address</div>

            </div>
            <div className="paymentOptionsBoxRowSec">

              {address.map((data, key) => {
                console.log(data)
                return <div key={key}>
                  <div>{data.addressLine1}</div>
                  <div>{data.city},{data.state} {data.zipCode}-{ }</div>
                </div>
              })}
              <div className="adCrtBotSec">
                <Button
                  className='checkout-btn '
                  label="Edit Address"
                  onClick={() => navigate('/updateaccountaddress')}
                />

              </div>
            </div>
          </div>
        </div>
        {/* <div className="button-box m-lss">
              <Button
                className="checkout-btn left"
                label="CANCEL"
                // onClick={returnToCheckout}
              />
              <Button
                className="checkout-btn hard-right"
                label="SAVE CHANGES"
                // onClick={returnToCheckout}
              />
            </div> */}
      </div>
    </div>
  );
}