import React, {
    Fragment,
    useState,
    useEffect,
    useCallback,
    useRef
} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './updateaccountaddress.css';
import Button from 'components/button/button';
import { useCookies } from 'react-cookie';
import { addressDetails } from 'services/myAccountapi';
import { userInfoService } from 'services/auth';
import { CartState } from '../../context/context';


export default function UpdateAccountAddress() {
    return (
        <div className="wrapper" >
            {/* <div className="s-checkout__top mbot-1">
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
        </div> */}
            <div className="payInfoWrapper">
                <div className="header-gray margin-20px-btm">
                    <a
                        href="/Checkout"
                    // onclick="skipLeaveMessageWindow();"
                    >
                        <b>My Account</b>
                    </a>
                    &gt; <a href="/myaccountinformation">Account & Password</a>
                    &gt; Account Address
                </div>
                <div className="payInfoHead">

                </div>
            </div>
            <div className="headerbig-green margin-20px-btm">
                Account Address
            </div>
            {/*  */}
            <div id="delivery-area" className="preference-container">
                <div className="f-sign-up__text">



                    Please enter your account address so we can provide you available options for delivery and/or pick up service.


                </div>
                <div id="delivery-area__normal-area" className="f-sign-up__form _first-step-normal-area clearfix">
                    <div className="f-sign-up__form-top">
                        <div className="f-sign-up__error-box">
                            <div className="f-sign-up__error-box-title">
                                Please correct the highlighted field(s) below:
                            </div>
                            <div>
                                <p className="summary-error delivery-area__street">
                                    Street Address
                                </p>
                            </div>
                            <div>
                                <p className="summary-error delivery-area__unit">
                                    Unit
                                </p>
                            </div>
                            <div>
                                <p className="summary-error delivery-area__city">
                                    City
                                </p>
                            </div>
                            <div>
                                <p className="summary-error delivery-area__state-styler">
                                    State
                                </p>
                            </div>
                            <div>
                                <p className="summary-error delivery-area__zip">
                                    Zip
                                </p>
                            </div>
                            <div>
                                <p className="summary-error delivery-area__type-styler">
                                    Type of <span className="customerTypeLabel">Home</span>
                                </p>
                            </div>
                            <div>
                                <p className="summary-error toTheDoor">
                                    Checkbox field
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="change-address-box">
                        <div className="change-address-header">


                            <div className="f-sign-up _active _first-step clearfix clear-both" style={{background: 'transparent'}}>
                                <div className="f-sign-up__step-title left">
                                    ACCOUNT ADDRESS
                                </div>
                            </div>



                        </div>
                        <div className="pad margin-20px-btm">
                            Required fields are marked with an asterisk.
                        </div>
                        <div className="pad margin-5px-btm">
                            <div className="f-sign-up__validation-directive">
                                <label for="delivery-area__street" className="f-sign-up__label">
                                    <span className="asterisk">*</span> Street Address
                                </label>
                                <input id="delivery-area__street" name="streetAddress" className="f-sign-up__field required-field" type="text" autofocus="autofocus" maxlength="45"/>
                                    <span className="f-sign-up__error-msg _required delivery-area__street">
                                        Street Address is a required field.
                                    </span>
                                    <span className="f-sign-up__error-msg _required invalid-delivery-area__street">
                                        Street Address contains invalid characters.
                                    </span>
                            </div>
                        </div>

                        <div className="pad margin-5px-btm">
                            <div className="f-sign-up__validation-directive">
                                <label for="delivery-area__unit" className="f-sign-up__label">
                                    Unit / Apt. # <span className="optional">(Optional)</span>
                                </label>
                                <input id="delivery-area__unit" name="unit" className="f-sign-up__field required-field" type="text" maxlength="8"/>
                                    <span className="f-sign-up__error-msg _required invalid-delivery-area__unit">
                                        Unit contains invalid characters.
                                    </span>
                            </div>
                        </div>

                        <div className="pad margin-5px-btm">
                            <div className="f-sign-up__validation-directive">
                                <label for="delivery-area__city" className="f-sign-up__label">
                                    <span className="asterisk">*</span> City
                                </label>
                                <input id="delivery-area__city" name="city" className="f-sign-up__field required-field" type="text" autofocus="autofocus" maxlength="50"/>
                                    <span className="f-sign-up__error-msg _required delivery-area__city">
                                        City is a required field.
                                    </span>
                                    <span className="f-sign-up__error-msg _required invalid-delivery-area__city">
                                        City contains invalid characters.
                                    </span>
                            </div>
                        </div>

                        <div className="pad margin-5px-btm inline-block" style={{width:'100%'}}>
                            <div className="half-block left">
                                <label for="delivery-area__state-styler" className="f-sign-up__label">
                                    <span className="asterisk">*</span> State
                                </label>
                                <div id="delivery-area__state-styler" data-placeholder="Please select" className="jq-selectbox jqselect required-field changed coborns-background" style={{display: 'inlineBlock', position: 'relative', zIndex:'100'}}><select id="delivery-area__state" className="required-field" data-placeholder="Please select" required="" style={{margin: '0px', padding: '0px', position: 'absolute', left: '0px', top: '0px', width: '100%', height: '100%', opacity: 0}}>

                                    <option>AK</option>
                                    <option>AL</option>
                                    <option>AR</option>
                                    <option>AZ</option>
                                    <option>CA</option>
                                    <option>CO</option>
                                    <option>CT</option>
                                    <option>DE</option>
                                    <option>FL</option><option>GA</option><option>HI</option><option>IA</option><option>ID</option>
                                    <option>IL</option><option>IN</option><option>KS</option><option>KY</option><option>LA</option>
                                    <option>MA</option><option>MD</option><option>ME</option><option>MI</option>
                                    <option selected="selected" className="coborns-background">MN</option>
                                    <option>MO</option><option>MS</option><option>MT</option><option>NC</option>
                                    
                                    <option>ND</option><option>NE</option><option>NH</option><option>NJ</option>
                                    <option>NM</option><option>NV</option><option>NY</option><option>OH</option>
                                    <option>OK</option><option>OR</option><option>PA</option><option>RI</option>
                                    <option>SC</option><option>SD</option><option>TN</option><option>TX</option>
                                    <option>UT</option><option>VA</option><option>VT</option><option>WA</option>
                                    <option>WI</option><option>WV</option><option>WY</option></select>
                                    <div className="jq-selectbox__select" style={{position: 'relative'}}>
                                        <div className="jq-selectbox__select-text">MN</div>
                                        <div className="jq-selectbox__trigger"><div className="jq-selectbox__trigger-arrow">
                                            </div></div></div><div className="jq-selectbox__dropdown" style={{position: 'absolute', display: 'none'}}>
                                                <ul style={{position: 'relative', listStyle: 'none', overflow: 'auto', overflowX: 'hidden'}}>
                                                    <li >AK</li><li >AL</li><li >AR</li><li >AZ</li><li >CA</li>
                                                     {/*<li style="">CO</li><li style="">CT</li><li style="">DE</li><li style="">FL</li><li style="">GA</li>
                                                    <li style="">HI</li><li style="">IA</li><li style="">ID</li><li style="">IL</li><li style="">IN</li>
                                                    <li style="">KS</li><li style="">KY</li><li style="">LA</li><li style="">MA</li><li style="">MD</li>
                                                    <li style="">ME</li><li style="">MI</li><li data-jqfs-className="coborns-background" className="selected sel coborns-background" style="">MN</li>
                                                    <li style="">MO</li><li style="">MS</li><li style="">MT</li><li style="">NC</li><li style="">ND</li><li style="">NE</li>
                                                    <li style="">NH</li><li style="">NJ</li><li style="">NM</li><li style="">NV</li><li style="">NY</li><li style="">OH</li>
                                                    <li style="">OK</li><li style="">OR</li><li style="">PA</li><li style="">RI</li><li style="">SC</li><li style="">SD</li>
                                                    <li style="">TN</li><li style="">TX</li><li style="">UT</li><li style="">VA</li><li style="">VT</li><li style="">WA</li>
                                                    <li style="">WI</li><li style="">WV</li><li style="">WY</li> */}
                                                    </ul></div></div>
                                <span className="f-sign-up__error-msg _required delivery-area__state-styler">
                                    State is a required field.
                                </span>
                            </div>

                            <div className="f-sign-up__validation-directive half-block phone-top-margin right">
                                <label for="delivery-area__zip" className="f-sign-up__label">
                                    <span className="asterisk">*</span> Zip
                                </label>
                                <input name="zip" id="delivery-area__zip" className="f-sign-up__field required-field js-numOnly" type="tel" maxlength="10"/>
                                    <span className="f-sign-up__error-msg _required delivery-area__zip">
                                        Zip is a required field.
                                    </span>
                                    <span className="f-sign-up__error-msg _required invalid-delivery-area__zip">
                                        Zip contains invalid characters.
                                    </span>
                                    <span className="f-sign-up__error-msg _required not-matched-delivery-area__zip">
                                        Please enter a valid zip code.
                                    </span>
                            </div>

                        </div>


                        <div className="pad margin-5px-btm inline-block" style={{width: '100%'}}>
                            <div className="f-sign-up__validation-directive">
                                <label for="delivery-area__type-styler" className="f-sign-up__label" data-placeholder="Please select">
                                    <span className="asterisk">*</span> Type of <span className="customerTypeLabel">Home</span>
                                </label>
                                <div id="delivery-area__type-styler" className="jq-selectbox jqselect required-field coborns-background" style={{display: 'inlineBlock', position: 'relative', zIndex:'100'}}><select id="delivery-area__type" className="required-field" onchange="selectToggleDiv(this.value)" required="" style={{margin: '0px', padding: '0px', position: 'absolute', left: '0px', top: '0px', width: '100%', height: '100%', opacity: 0}}>
                                    <option id="APT" selected="selected" className="coborns-background">Apartment</option><option id="BUS">Business</option><option id="CON">Condominium</option><option id="MLT">Duplex/Triplex</option><option id="RES">Single Family Home</option><option id="TH">Townhome</option></select><div className="jq-selectbox__select" style={{position: 'relative'}}><div className="jq-selectbox__select-text">Apartment</div><div className="jq-selectbox__trigger"><div className="jq-selectbox__trigger-arrow"></div></div></div><div className="jq-selectbox__dropdown" style={{position: 'absolute', display: 'none'}}><ul style={{position: 'relative', listStyle: 'none', overflow: 'auto', overflowX: 'hidden'}}><li data-jqfs-className="coborns-background" className="selected sel coborns-background" id="APT-styler" style={{}}>Apartment</li><li id="BUS-styler" style={{}}>Business</li><li id="CON-styler" style={{}}>Condominium</li><li id="MLT-styler" style={{}}>Duplex/Triplex</li><li id="RES-styler" style={{}}>Single Family Home</li><li id="TH-styler" style={{}}>Townhome</li></ul></div></div>
                                <div className="f-sign-up__msg-box _city-contain">
                                    <div className="_box f-sign-up__validation-directive">
                                        <span className="f-sign-up__error-msg _required delivery-area__type-styler">
                                            Type of <span className="customerTypeLabel">Home</span> is a required field.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="pad margin-5px-btm">
                            <div id="showDiv" className="b-info-tooltip margin-20px-btm auto-all" style={{position: 'relative', width: '100%'}}>
                                <div className="b-info-tooltip__title auto-all">To-the-Door Delivery</div>
                                <button className="close-classic" onclick="hideDiv()"></button>
                                <div className="b-info-tooltip__subtitle auto-all">(This option is available in most apartment buildings)</div>
                                <div className="b-info-tooltip__visivig margin-20px-btm auto-all">
                                    <p>Groceries are delivered directly to your individual apartment.
                                        You choose from a list of times we're in your area each week,
                                        and you must be home to let our Neighborhood Service Rep into
                                        your building and to accept your groceries.</p>
                                </div>
                                <div className="b-info-tooltip__list-title auto-all">RESTRICTIONS APPLY:</div>
                                <ol>
                                    <li>You must be home for all To-the-Door deliveries.</li>
                                    <li>Due to fire codes and security issues, we cannot leave groceries
                                        unattended outside individual apartments or in common areas--even
                                        if your building offers Central Delivery--because To-the-Door Delivery
                                        dates and times are not authorized by your building management.</li>
                                    <li>If your building does not have an elevator, no deliveries will
                                        be made above the fourth floor.</li>
                                </ol>
                                <div className="b-info-tooltip__visivig auto-all">
                                    <p>No exceptions will be made to these rules. If you are not
                                        home for delivery, groceries will be returned
                                        to Coborn's and a
                                        restocking fee of $25 may be charged.</p>
                                </div>
                            </div>


                            <div id="toTheDoor" className="_padding-0-10 margin-5px-btm to-the-door required-field visible" >
                                <input id="beHome" name="beHome" className="f-sign-up__check" type="checkbox"/>
                                    <label className="f-sign-up__check-label" for="beHome">
                                        <span className="asterisk">*</span> By checking this box, I acknowledge that I am aware that I must be home every time my orders are delivered. If I am not home for delivery, my order will be returned to Coborn's and a restocking fee may be charged to my account.</label>
                                    {/* <validation-label errors="vm.errorValidationList" field-name="personalInformation.beHome"></validation-label> */}
                                    <div className="f-sign-up__msg-box _city-contain to-the-door-error">
                                        <div className="_box f-sign-up__validation-directive">
                                            <span className="f-sign-up__error-msg _required toTheDoor" style={{width: '100%'}}>
                                                Please check box to acknowledge To-The-Door Delivery restrictions.
                                            </span>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className="change-address-header">
                            <div className="f-sign-up _second-step clearfix clear-both" style={{background: 'transparent'}}>
                                <div className="f-sign-up__step-title left">
                                    DELIVERY OR PICK UP PREFERENCE
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="button-box">








                        <button id="delivery-area__next" name="NextBtnSecondStep" className="btn-responsive f-sign-up__btn js-next _step-2-next-btn right">
                            Next
                        </button>
                        <button id="delivery-area__cancel-global" name="PreviousBtnSecondStep" className="btn-responsive f-sign-up__btn js-previous ng-isolate-scope left">
                            CANCEL
                        </button>


                    </div>
                </div>
            </div>
            {/*  */}
        </div>
    )
}