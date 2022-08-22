
import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useRef
} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../checkoutPaymentInformation/checkoutPaymentInformation.css';
import './MyAccountInformation.css'
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
  //  alert()
    if (!!cookies.userName) {
      getData(cookies.userName)
    }
    

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
      <div>
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
          <div className="paymentOptionsBox poBxSec">
            <h2>USER NAME { }</h2>
            <div className="pmntOptnBxHd">
              <h3>Password</h3>
              <p>**********</p>
              {/* <div className="paymentOptionsBoxCol">Credit Card</div>
                  <div className="paymentOptionsBoxCol">Name on Card</div>
                  <div className="paymentOptionsBoxCol">Expiration</div> */}
              <Button className="checkout-btn" label="Edit Password" // onClick={CardDetails}
              />
            </div>

            <div className="pmntOptnBxDivid"></div>
            <div className="pmntOptnBxHd drcChk">
              <h3>Contact Information</h3>
              <p>albtest5 albert</p>
              <p>(912) 699-8908</p>
              <p><a href="mailto:Tamal.Dutta@cobornsinc.com">Tamal.Dutta@cobornsinc.com</a></p>
              {/* <div className="paymentOptionsBoxCol">Direct Check™</div>
                    <div className="paymentOptionsBoxCol">Acct Holder Name</div>
                  <div className="paymentOptionsBoxCol">Routing Num</div>
                  <div className="paymentOptionsBoxCol">Bank Name</div> */}
              <Button className="checkout-btn" label="Edit Contact" // onClick={CardDetails}
              />
            </div>
            
            <div className="pmntOptnBxDivid"></div>
            <div className="pmntOptnBxHd">
              <h3>Account Address</h3>
              {address?.map((data, key) => {
                console.log(data)
                return <div key={key}>
                  <p>{data.addressLine1}</p>
                  <p>{data.city},{data.state} {data.zipCode}</p>
                </div>
              })}
              <Button className='checkout-btn ' label="Edit Address"  onClick={() => navigate('/updateaccountaddress')}/>
            </div>
            <div className="paymentOptionsBoxRowSec">

              
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