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
import { addressDetails, StateArray, BuildingsArray } from 'services/myAccountapi';
import { userInfoService } from 'services/auth';
import { CartState } from '../../context/context';
import Checkbox from 'components/checkbox/checkbox';


export default function UpdateAccountAddress() {
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies();
    const { } = cookies;
    const [States, setStates] = useState([])
    const [Building, setBuilding] = useState([])
    const [address, setAddress] = useState([])
    const [street, setStreet] = useState('')
    const [unit, setunit] = useState('')
    const [city, setcity] = useState('')
    const [state, setstate] = useState('')
    const [zipcode, setzipcode] = useState('')
    const [typeOfHome, settypeOfHome] = useState('')


    useEffect(() => {

        if (!!cookies.userName && !!cookies.FacilityId) {
            getData(cookies.userName)
            StategetData(cookies.FacilityId)
            Building_getData()
        }


    }, [cookies.userName, cookies.FacilityId]);
    const getData = (name) => {

        addressDetails(name).then((resp) => {
            // console.log(resp.data.data)
            setAddress(resp.data.data)
            resp.data.data.map((data, key) => {
                // console.log(data);
                setStreet(data.addressLine1)
                setunit('')
                setcity(data.city)
                setstate(data.state)
                setzipcode(data.zipCode)
                settypeOfHome(data.dwellingTypeCode)
            })
        });
    }
    const StategetData = (FacilityId) => {

        StateArray(FacilityId).then((resp) => {
            // console.log(resp.data.data)
            setStates(resp.data.data)
        });
    }
    const Building_getData = () => {

        BuildingsArray().then((resp) => {
            // console.log(resp.data.data)
            setBuilding(resp.data.data)
        });
    }
    const saveData = () => {
        console.log(street, unit, city, state, zipcode, typeOfHome,isChecked);
    }
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


                            <div className="f-sign-up _active _first-step clearfix clear-both" style={{ background: 'transparent' }}>
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
                                <input id="delivery-area__street" name="streetAddress" className="f-sign-up__field required-field"
                                    type="text" autofocus="autofocus" maxlength="45"
                                    value={street}
                                    onChange={(event) => setStreet(event.target.value)}
                                // onKeyUp={(event) => { if (!!event.key) SetcvvValid(false) }}
                                />
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
                                <input id="delivery-area__unit" name="unit" className="f-sign-up__field required-field"
                                    type="text" maxlength="8"
                                    value={unit}
                                    onChange={(event) => setunit(event.target.value)}
                                     />
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
                                <input id="delivery-area__city" name="city" className="f-sign-up__field required-field"
                                    type="text" autofocus="autofocus" maxlength="50"
                                    value={city} 
                                    onChange={(event) => setcity(event.target.value)}/>
                                <span className="f-sign-up__error-msg _required delivery-area__city">
                                    City is a required field.
                                </span>
                                <span className="f-sign-up__error-msg _required invalid-delivery-area__city">
                                    City contains invalid characters.
                                </span>
                            </div>
                        </div>

                        <div className="pad margin-5px-btm inline-block" style={{ width: '100%' }}>
                            <div className="half-block left">
                                <label for="delivery-area__state-styler" className="f-sign-up__label">
                                    <span className="asterisk">*</span> State
                                </label>
                                {/* <div id="delivery-area__state-styler" data-placeholder="Please select" className="jq-selectbox jqselect required-field changed coborns-background" style={{ display: 'inlineBlock', position: 'relative', zIndex: '100' }}> */}
                                {/* <select id="delivery-area__state" className="required-field" data-placeholder="Please select"
                                        required="" style={{
                                            margin: '0px', padding: '0px', position: 'absolute', left: '0px', top: '0px', width: '100%',
                                            height: '100%', opacity: 0
                                        }}>


                                    </select> */}
                                <div className="contFrmColInner">

                                    <select

                                        value={state}

                                        onChange={(event) => {
                                            console.log(event.target.value);
                                            setstate(event.target.value)
                                        }}

                                    // onClick={(event) => {
                                    //     console.log(event.target.options[event.target.selectedIndex].text);
                                    //     //   if (!!event.target.options[event.target.selectedIndex].text)SetstateValid(false);

                                    // }}
                                    >
                                        <option style={{ display: 'none' }} value="">
                                            Please select
                                        </option>
                                        {States.map((data, key) => {
                                            return (
                                                <option value={data.stateCode} key={key}>
                                                    {data.stateCode}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                                {/* <div className="jq-selectbox__select" >
                                    <div className="jq-selectbox__select-text">MN</div>
                                    <div className="jq-selectbox__trigger"><div className="jq-selectbox__trigger-arrow">
                                    </div>
                                    </div>
                                </div> */}

                                

                                {/* </div> */}
                                <span className="f-sign-up__error-msg _required delivery-area__state-styler">
                                    State is a required field.
                                </span>
                            </div>

                            <div className="f-sign-up__validation-directive half-block phone-top-margin right">
                                <label for="delivery-area__zip" className="f-sign-up__label">
                                    <span className="asterisk">*</span> Zip
                                </label>
                                <input name="zip" id="delivery-area__zip" className="f-sign-up__field required-field js-numOnly"
                                    type="tel" maxlength="10"
                                    value={zipcode} 
                                    onChange={(event) => setzipcode(event.target.value)}/>
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


                        <div className="pad margin-5px-btm inline-block" style={{ width: '100%' }}>
                            <div className="f-sign-up__validation-directive">
                                <label for="delivery-area__type-styler" className="f-sign-up__label" data-placeholder="Please select">
                                    <span className="asterisk">*</span> Type of <span className="customerTypeLabel">Home</span>
                                </label>
                                <div id="delivery-area__type-styler" className="jq-selectbox jqselect required-field coborns-background"
                                    style={{ display: 'inlineBlock', position: 'relative', zIndex: '100' }}>
                                    <div className="contFrmColInner">

                                        <select

                                            value={typeOfHome}
                                            onChange={(event) => settypeOfHome(event.target.value)}
                                        // onClick={(event) => {
                                        //     console.log(event.target.options[event.target.selectedIndex].text);
                                        //     //   if (!!event.target.options[event.target.selectedIndex].text)SetstateValid(false);

                                        // }}
                                        >
                                            <option style={{ display: 'none' }} value="">
                                                Please select
                                            </option>
                                            {Building.map((data, key) => {

                                                return (
                                                    <option value={data.codeValue.code} key={key}>
                                                        {data.description}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>


                                    <div className="jq-selectbox__dropdown" style={{ position: 'absolute', display: 'none' }}>
                                        <ul style={{ position: 'relative', listStyle: 'none', overflow: 'auto', overflowX: 'hidden' }}><li data-jqfs-className="coborns-background" className="selected sel coborns-background" id="APT-styler" style={{}}>Apartment</li><li id="BUS-styler" style={{}}>Business</li><li id="CON-styler" style={{}}>Condominium</li><li id="MLT-styler" style={{}}>Duplex/Triplex</li><li id="RES-styler" style={{}}>Single Family Home</li><li id="TH-styler" style={{}}>Townhome</li></ul></div></div>
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
                            <div id="showDiv" className="b-info-tooltip margin-20px-btm auto-all" style={{ position: 'relative', width: '100%' }}>
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
                                <input id="beHome" name="beHome" className="f-sign-up__check" type="checkbox"
                                 value={isChecked}
                                 onChange={(e)=>setIsChecked(e.target.checked)} />
                                {/* <Checkbox
                id="checkbox-2"
                value={isChecked}
                onChange={(e)=>setIsChecked(e.target.checked)}
              /> */}
                                <label className="f-sign-up__check-label" for="beHome">
                                    <span className="asterisk">*</span> By checking this box, I acknowledge that I am aware that I must be home every time my orders are delivered. If I am not home for delivery, my order will be returned to Coborn's and a restocking fee may be charged to my account.</label>
                                {/* <validation-label errors="vm.errorValidationList" field-name="personalInformation.beHome"></validation-label> */}
                                <div className="f-sign-up__msg-box _city-contain to-the-door-error">
                                    <div className="_box f-sign-up__validation-directive">
                                        <span className="f-sign-up__error-msg _required toTheDoor" style={{ width: '100%' }}>
                                            Please check box to acknowledge To-The-Door Delivery restrictions.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="change-address-header">
                            <div className="f-sign-up _second-step clearfix clear-both" style={{ background: 'transparent' }}>
                                <div className="f-sign-up__step-title left">
                                    DELIVERY OR PICK UP PREFERENCE
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="button-box">








                        <button id="delivery-area__next" name="NextBtnSecondStep" className="btn-responsive f-sign-up__btn js-next _step-2-next-btn right" onClick={saveData}>
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