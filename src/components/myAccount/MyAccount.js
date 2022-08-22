import React, {
    Fragment,
    useState,
    useEffect,
    useCallback,
    useRef
} from 'react';
import './MyAccount.css';
import my_account_arrow_right from '../../assets/images/commonimages/my_account_arrow_right.gif';


export default function MyAccount() {
    return (
        <div className="wrapper">
            <div className="headDivide">
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
            <div className='myAccountSec'>
                <h1 className="myAccountHeader">My Account</h1>
                <p>
                    Please use this page to keep your account information and
                    communication preferences up to date so we can serve you better. If
                    you have any questions please send us an email auth
                    <a href="/">feedback@cobornsdelivers.com</a>
                    {/* <a href="mailto:feedback@cobornsdelivers.com">feedback@cobornsdelivers.com</a> */}
                </p>
                <div className='arrow'>
                    <img alt="Account and Password preferences" src={my_account_arrow_right} />
                    <a className="header-green" href="/myaccountinformation"> Account & Password</a>
                </div>
                <div className='arrow'>
                    <img alt="Account and Password preferences" src={my_account_arrow_right} />
                    <a className="header-green" href="/">  Change Preferred Store</a>
                </div>
                <div className='arrow'>
                    <img alt="Account and Password preferences" src={my_account_arrow_right} />
                    <a className="header-green" href="/"> Delivery Preferences</a>
                </div>
                <div className='arrow'>
                    <img alt="Account and Password preferences" src={my_account_arrow_right} />
                    <a className="header-green" href="/">Communication Preferences</a>
                </div>
                <div className='arrow'>
                    <img alt="Account and Password preferences" src={my_account_arrow_right} />
                    <a className="header-green" href="/"> Product Display Preferences</a>
                </div>
                <div className='arrow'>
                    <img alt="Account and Password preferences" src={my_account_arrow_right} />
                    <a className="header-green" href="/"> Order History</a>
                </div>
                <div className='arrow'>
                    <img alt="Account and Password preferences" src={my_account_arrow_right} />
                    <a className="header-green" href="/checkoutPayment"> Payment Information</a>
                </div>
                <div className='arrow'>
                    <img alt="Account and Password preferences" src={my_account_arrow_right} />
                    <a className="header-green" href="/">MORE rewards</a>
                </div>
                {/* <div className='arrow'>
                <img alt="Account and Password preferences" src={my_account_arrow_right}/>
                <a className="header-green" href="/">  Change Preferred Store</a>
                </div> */}
            </div>
        </div>
    )
}