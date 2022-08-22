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
import {
    addressDetails, StateArray, BuildingsArray, AddressValidation, getdeliveryaddress, AddressWeekdays,
    AddressopeningHours, updateAccount
} from 'services/myAccountapi';
import { userInfoService } from 'services/auth';
import { CartState } from '../../context/context';
import Checkbox from 'components/checkbox/checkbox';
import AddressModal from 'components/verifyAddress/addressModal';
import Radio from 'components/radio/radio';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

let response;
let body;
let globalVar = null;
let subRouteId;

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
    const [isdeliveryAddress, setisdeliveryAddress] = useState(false);
    const [isaddress, setisaddress] = useState(true);
    const [deliveryAddressArray, setdeliveryAddressArray] = useState([]);
    const [openmodal, setopenmodal] = useState(false);
    const [checkLocation, setLocation] = useState('');
    const [weekday, setweekday] = useState([]);
    const [showTime, setshowTime] = useState(false);
    const [Times, SetTimes] = useState([]);
    const [selctedDay, setSelctedDay] = useState(1)
    const [selectTime, setSelectTime] = useState('');
    const [Description, setDescription] = useState(false);
    const [showMap, SetshowMap] = useState(false);
    const [DateNTime, setDateNTime] = useState('');
    const [showDateNTime, setshowDateNTime] = useState(false);
    const [Instruction, setInstruction] = useState('');
    const Days = [
        { code: 1, name: "Sunday" },
        { code: 2, name: "Monday" },
        { code: 3, name: "Tuesday" },
        { code: 4, name: "Wednesday" },
        { code: 5, name: "Thursday" },
        { code: 6, name: "Friday" },
        { code: 7, name: "Saturday" }]
    useEffect(() => {

        if (!!cookies.userName && !!cookies.FacilityId) {
            getData(cookies.userName)
            StategetData(cookies.FacilityId)
            Building_getData()
        }


    }, [cookies.userName, cookies.FacilityId]);
    useEffect(() => {

        // console.log('globalVar', globalVar);

    }, [globalVar]);

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
        // console.log(street, unit, city, state, zipcode, typeOfHome, isChecked);
        body = {
            buildingType: typeOfHome,
            city: city,
            isValidatedAddress: 0,
            state: state,
            streetAddress: street,
            unit: unit,
            zipCode: zipcode
        }

        if (globalVar != null) {
            setisaddress(false)
            setisdeliveryAddress(true)
            getdeliveryPickup(body)
        } else checkaddress(body)
    }
    const checkaddress = (body) => {

        AddressValidation(body).then((res) => {
            console.log(res.data.data);
            response = res.data.data;
            if (response.buildingType == body.buildingType && response.city == body.city && response.state == body.state
                && response.streetAddress == body.streetAddress && response.unit == body.unit && response.zipCode == body.zipCode) {
                globalVar = 1;
                setisaddress(false)
                setisdeliveryAddress(true)
                getdeliveryPickup(body)
            } else {
                globalVar = 0;
                setopenmodal(true)
            }
        })
    }
    const updateAddress = (value, data) => {
        // console.log(value, data);
        const body = {
            buildingType: data.buildingType,
            city: data.city,
            isValidatedAddress: value,
            state: data.state,
            streetAddress: data.streetAddress,
            unit: data.unit,
            zipCode: data.zipCode
        }
        setStreet(data.streetAddress)
        setunit(data.unit)
        setcity(data.city)
        setstate(data.state)
        setzipcode(data.zipCode)
        settypeOfHome(data.buildingType)
        AddressValidation(body).then((res) => {
            // console.log(res.data.data);
            globalVar = value;
            setopenmodal(false)

        })
    }

    const getdeliveryPickup = (body) => {

        getdeliveryaddress(cookies.FacilityId, body).then((res) => {
            // console.log(res.data.data);
            setdeliveryAddressArray(res.data.data)
        })
    }
    const handleChangeLocation = (value, Available, id) => {
        // console.log(value, Available);
        subRouteId = id;
        setLocation(value)
        AddressWeekdays().then((res) => {
            setweekday(res.data.data)

        })
    }


    const timeDetails = () => {
        setshowTime(true)

        AddressopeningHours(subRouteId).then((res) => {
            // console.log(res.data.data);
            SetTimes(res.data.data)
        })
    }
    const UpdateAccount = () => {
        let Body = {
            address: {
                buildingType: typeOfHome,
                city: city,
                isValidatedAddress: 0,
                state: state,
                streetAddress: street,
                unit: unit,
                zipCode: zipcode
            },
            deliveryWindow: selectTime,
            description: Instruction,
            facility: cookies.FacilityId,
            subRoute: subRouteId
        }
        console.log(Body);
        // updateAccount(cookies.userName,Body).then((res) => {
        //     // console.log(res.data.data);

        // })
    }
    return (
        <div className="wrapper" >

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

            <div id="delivery-area" className="preference-container">
                <div className="f-sign-up__text">



                    Please enter your account address so we can provide you available options htmlFor delivery and/or pick up service.


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
                    {isaddress == true &&
                        <>
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
                                        <label htmlFor="delivery-area__street" className="f-sign-up__label">
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
                                        <label htmlFor="delivery-area__unit" className="f-sign-up__label">
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
                                        <label htmlFor="delivery-area__city" className="f-sign-up__label">
                                            <span className="asterisk">*</span> City
                                        </label>
                                        <input id="delivery-area__city" name="city" className="f-sign-up__field required-field"
                                            type="text" autofocus="autofocus" maxlength="50"
                                            value={city}
                                            onChange={(event) => setcity(event.target.value)} />
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
                                        <label htmlFor="delivery-area__state-styler" className="f-sign-up__label">
                                            <span className="asterisk">*</span> State1
                                        </label>
                                        {/* <div id="delivery-area__state-styler" data-placeholder="Please select" className="jq-selectbox jqselect required-field changed coborns-background" style={{ display: 'inlineBlock', position: 'relative', zIndex: '100' }}> */}
                                        {/* <select id="delivery-area__state" className="required-field" data-placeholder="Please select"
                                        required="" style={{
                                            margin: '0px', padding: '0px', position: 'absolute', left: '0px', top: '0px', width: '100%',
                                            height: '100%', opacity: 0
                                        }}>


                                    </select> */}
                                        <div className="contFrmColInner statSlct">

                                            <select

                                                value={state}

                                                onChange={(event) => {
                                                    // console.log(event.target.value);
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
                                        <label htmlFor="delivery-area__zip" className="f-sign-up__label">
                                            <span className="asterisk">*</span> Zip
                                        </label>
                                        <input name="zip" id="delivery-area__zip" className="f-sign-up__field required-field js-numOnly"
                                            type="tel" maxlength="10"
                                            value={zipcode}
                                            onChange={(event) => setzipcode(event.target.value)} />
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
                                        <label htmlFor="delivery-area__type-styler" className="f-sign-up__label" data-placeholder="Please select">
                                            <span className="asterisk">*</span> Type of <span className="customerTypeLabel">Home</span>
                                        </label>
                                        <div id="delivery-area__type-styler" className="jq-selectbox jqselect required-field coborns-background"
                                            style={{ display: 'inlineBlock', position: 'relative', zIndex: '100' }}>
                                            <div className="contFrmColInner statSlct">

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
                                            <li>You must be home htmlFor all To-the-Door deliveries.</li>
                                            <li>Due to fire codes and security issues, we cannot leave groceries
                                                unattended outside individual apartments or in common areas--even
                                                if your building offers Central Delivery--because To-the-Door Delivery
                                                dates and times are not authorized by your building management.</li>
                                            <li>If your building does not have an elevator, no deliveries will
                                                be made above the fourth floor.</li>
                                        </ol>
                                        <div className="b-info-tooltip__visivig auto-all">
                                            <p>No exceptions will be made to these rules. If you are not
                                                home htmlFor delivery, groceries will be returned
                                                to Coborn's and a
                                                restocking fee of $25 may be charged.</p>
                                        </div>
                                    </div>


                                    <div id="toTheDoor" className="_padding-0-10 margin-5px-btm to-the-door required-field visible" >
                                        <input id="beHome" name="beHome" className="f-sign-up__check" type="checkbox"
                                            value={isChecked}
                                            onChange={(e) => setIsChecked(e.target.checked)} />
                                        {/* <Checkbox
                id="checkbox-2"
                value={isChecked}
                onChange={(e)=>setIsChecked(e.target.checked)}
              /> */}
                                        <label className="f-sign-up__check-label" htmlFor="beHome">
                                            <span className="asterisk">*</span> By checking this box, I acknowledge that I am aware that I must be home every time my orders are delivered. If I am not home htmlFor delivery, my order will be returned to Coborn's and a restocking fee may be charged to my account.</label>
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
                                        <div className="f-sign-up__step-title secondTtl left">
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
                                <AddressModal displayModal={openmodal} closeModal={() => setopenmodal(false)} apidata={response || ''} loacalData={body || ''} globalVar={globalVar} updateAddress={(value, data) => updateAddress(value, data)} />

                            </div>
                        </>
                    }
                    {isdeliveryAddress == true &&
                        <div id="preference-area" className="active-block">
                            <div className="change-address-box inline-block">
                                <div className="change-address-header">
                                    <div className="f-sign-up _first-step clearfix clear-both" style={{ background: 'transparent' }}>
                                        <div className="f-sign-up__step-title left">
                                            ACCOUNT ADDRESS
                                        </div>
                                    </div>
                                </div>
                                <div className="change-address-header">
                                    <div className="f-sign-up _active _second-step clearfix clear-both" style={{ background: 'transparent' }}>
                                        <div className="f-sign-up__step-title secondTtl left">
                                            DELIVERY OR PICK UP PREFERENCE
                                        </div>
                                    </div>
                                </div>

                                <div id="store-preference" className="preference-container inline-block active-block" >
                                    <div className="f-sign-up__form col-md-10 col-md-offset-1 clearfix">
                                        <div id="store-preference__store-window">
                                            <div className="f-sign-up__form-top _margin-bottom-10 col-md-12">


                                                <div className="f-sign-up__text">
                                                    These are the services available based on the account address you entered.
                                                    <br />
                                                    Please choose one selection from the list below as your preferred store. You may change your
                                                    preferred store at any time.
                                                </div>


                                                <div className="store-preference f-sign-up__error-box">
                                                    <div className="store-preference f-sign-up__error-box-title">
                                                        Please correct the highlighted field(s) below:
                                                    </div>
                                                    <span className="f-sign-up__error-msg _required right-store-preference__preference preference">
                                                        Preferred Store selection is required.
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="f-sign-up__form-bottom col-md-12">


                                                <div className="row">

                                                    <div id="store-preference__preference" className="store-container row col-md-6 
                                                    _padding-0-10 _padding-left-30 _margin-bottom-25 _pos-relative store-preference-required"
                                                        style={{ width: '100%' }}>

                                                        <div className="store-container f-sign-up__radio-group" style={{ display: 'block', width: '100%' }}>
                                                            <span className="f-sign-up__delivery-address">Delivery Service</span>
                                                            <div className="delivery-stores" ><div className="row">

                                                            </div>
                                                                {deliveryAddressArray?.map(value => {
                                                                    // console.log('value.isDeliveryAvailable',value.deliveryAvailable, value.pickupAvailable);
                                                                    return (
                                                                        <>
                                                                            {value.deliveryAvailable == true &&
                                                                                // value.deliveryTypeCode == 'DeliveryOrPickup' &&
                                                                                <>
                                                                                    <span>

                                                                                        <input
                                                                                            className="f-sign-up__radio" name="deliveryOrPickupStore"
                                                                                            type="radio"
                                                                                            value={value.facilityId}
                                                                                            // checked={this.state.campaign === type.campaign_type}
                                                                                            onChange={(e) => { handleChangeLocation(e.target.value, 'deliveryAvailable', value.deliverySubrouteId); setDescription(true); SetshowMap(false) }}
                                                                                        />
                                                                                        <label className="f-sign-up__radio-label" htmlFor="delivery-605">{value.city},
                                                                                            {value.state}</label>
                                                                                    </span>
                                                                                </>
                                                                            }
                                                                        </>
                                                                    )
                                                                })}
                                                            </div>


                                                            <span className="f-sign-up__delivery-address"
                                                                style={{ marginTop: '15px' }}>Store Pick up Service</span>
                                                            <div className="pickup-stores" style={{ width: '100%' }}>
                                                                <div className="row"></div>
                                                                {deliveryAddressArray?.map(value => {

                                                                    return (<>
                                                                        {value.pickupAvailable == true &&
                                                                            // value.deliveryTypeCode == 'Pickup' &&
                                                                            <>
                                                                                <span>

                                                                                    <input
                                                                                        className="f-sign-up__radio" name="deliveryOrPickupStore"
                                                                                        type="radio"
                                                                                        value={value.facilityId}
                                                                                        // checked={this.state.campaign === type.campaign_type}
                                                                                        onChange={(e) => { handleChangeLocation(e.target.value, 'pickupAvailable', value.pickupSubrouteId); SetshowMap(true); setDescription(false) }}
                                                                                    />
                                                                                    <label className="f-sign-up__radio-label" htmlFor="delivery-605">{value.city},
                                                                                        {value.state}</label>
                                                                                </span>
                                                                            </>
                                                                        }
                                                                    </>
                                                                    )
                                                                })}


                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div id="store-map-quest" className="_map-quest inline-map col-md-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div id="delivery-preference" className="preference-container" style={{ display: 'none' }}>
                                    <div className="f-sign-up__form col-md-10 col-md-offset-1 clearfix">
                                        <div id="delivery-preference__delivery-window">
                                            <div className="f-sign-up__form-top _margin-bottom-10 col-md-12">
                                                <div className="f-sign-up__text">
                                                    Please select a default day from your neighborhood delivery schedule option. You may change this
                                                    delivery day at anytime.
                                                </div>

                                                <div className="delivery-preference f-sign-up__error-box">
                                                    <div className="delivery-preference f-sign-up__error-box-title">
                                                        Please correct the highlighted field(s) below:
                                                    </div>
                                                    <div>
                                                        <div className="summary-error delivery-preference__preference">
                                                            Delivery Preference
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="summary-error delivery-preference__instructions">
                                                            Delivery Instructions
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="f-sign-up__form-bottom col-md-10">
                                                <div className="f-sign-up__delivery-address error-label delivery-preference__preference _margin-bottom-40">
                                                    <div>
                                                        <span className="asterisk">*</span> Delivery Preferences
                                                    </div>
                                                    <div className="f-sign-up__required-msg">
                                                        Required fields are marked with an asterisk.
                                                    </div>
                                                </div>
                                                <div className="f-sign-up__error-msg _required right-delivery-preference__preference preference">
                                                    Delivery Preference is a required field.
                                                </div>

                                                <div id="delivery-preference__preference" className="day-container row _padding-0-10 _padding-left-30 _margin-bottom-25 _pos-relative delivery-preference-required">
                                                </div>
                                                <div className="row _padding-0-10 _pos-relative _margin-bottom-35">
                                                    <div className="f-sign-up__validation-directive">
                                                        <span className="f-sign-up__delivery-address error-label delivery-preference__instructions">
                                                            DELIVERY INSTRUCTIONS <span className="optional" style={{
                                                                textTransform: 'lowercase', color: 'grey',
                                                                fontWeight: '400'
                                                            }}>(optional)</span>
                                                            <div className="b-info-tooltip _top-0">
                                                                <div className="b-info-tooltip__visivig">
                                                                    Type instructions htmlFor our driver - which door to bring your groceries to, whether or
                                                                    not to ring the bell, <span id="instructionText"></span>etc. - the more
                                                                    specific the better! 255 character limit
                                                                </div>
                                                            </div>
                                                        </span>
                                                        <textarea id="delivery-preference__instructions" name="instructions" className="f-sign-up__textarea delivery-preference-required" maxlength="255" rows="7">                        </textarea>
                                                        <div className="f-sign-up__error-msg _required right-delivery-preference__instructions _pattern preference">
                                                            Delivery Instructions contains invalid characters.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {!!checkLocation &&

                                    <div id="pick-up-preference" className="preference-container" >
                                        <div className="f-sign-up__form col-md-10 col-md-offset-1 clearfix">
                                            <div id="pick-up-preference__pick-up-window">
                                                {showMap == true &&
                                                    <div className='mapdiv'></div>
                                                }

                                                <div className="f-sign-up__form-top _margin-bottom-10 col-md-12">
                                                    <div className="f-sign-up__text">
                                                        Please select a default day from your pick up schedule option. You may change this pick up day at anytime.
                                                    </div>

                                                    <div className="pick-up-preference f-sign-up__error-box">
                                                        <div className="pick-up-preference f-sign-up__error-box-title">
                                                            Please correct the highlighted field(s) below:
                                                        </div>
                                                        <div className="summary-error pick-up-preference__preference">
                                                            Pick Up Preference
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="f-sign-up__form-bottom col-md-10">
                                                    <div>
                                                        <div className="f-sign-up__delivery-address error-label pick-up-preference__preference _margin-bottom-40">
                                                            <div>
                                                                <span className="asterisk">*</span> PICK UP PREFERENCES
                                                            </div>
                                                            <div className="f-sign-up__required-msg">
                                                                Required fields are marked with an asterisk.
                                                            </div>
                                                        </div>
                                                        <div className="f-sign-up__error-msg _required right-pick-up-preference__preference preference">
                                                            Pick up Preference is a required field.
                                                        </div>
                                                    </div>
                                                    <div id="pick-up-preference__preference" className="day-container customSc row _padding-0-10 _padding-left-30 _margin-bottom-25 _pos-relative pick-up-preference-required">
                                                        <div className="b-order-due ordDue" style={{ left: 0, display: 'block' }}>Order Due By: <span>
                                                            {/* {DateNTime} */}
                                                            Sunday, 2:00 PM
                                                        </span>
                                                        </div>
                                                        {Days.map(days => {
                                                            return (
                                                                <div className="accorSec">
                                                                    <Accordion onClick={(event) => { event.preventDefault(); timeDetails(days.code); setSelctedDay(days.code) }}>
                                                                        <AccordionSummary
                                                                            expandIcon={<ExpandMoreIcon />}
                                                                            aria-controls="panel1a-content"
                                                                            id="panel1a-header"
                                                                        >
                                                                            <Typography>
                                                                                <a href="/" className="f-sign-up__radio-group-title ng-binding 
                                                        ng-isolate-scope" toggle-next="" onClick={(event) => { event.preventDefault(); timeDetails(days.code); setSelctedDay(days.code) }}>{days.name}
                                                                                </a>
                                                                            </Typography>
                                                                        </AccordionSummary>
                                                                        <AccordionDetails>

                                                                            {(showTime == true) &&
                                                                                <>
                                                                                    <Typography>
                                                                                        {Times.map((days, key) => {
                                                                                            return days.workingHoursDtos.map((day, index) => {
                                                                                                return (
                                                                                                    <>
                                                                                                        {(key + 1 === selctedDay) &&
                                                                                                            <div className="time-container f-sign-up__radio-group" >
                                                                                                                <input className="f-sign-up__radio" name="deliveryWindows" type="radio"
                                                                                                                    required="required" style={{ width: '100%' }} id={day.id} value={day.id} onChange={() => {
                                                                                                                        setSelectTime(day.id);
                                                                                                                        setDateNTime(day.time, days.name)
                                                                                                                    }} />
                                                                                                                <label className="f-sign-up__radio-label" >{day.time}</label>

                                                                                                            </div>
                                                                                                        }
                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        })

                                                                                        }
                                                                                    </Typography>
                                                                                </>
                                                                            }

                                                                            {/* </Typography> */}
                                                                        </AccordionDetails>
                                                                    </Accordion>


                                                                </div>
                                                                //         <div className="day f-sign-up__radio-row ng-scope">
                                                                //             <a href="/" className="f-sign-up__radio-group-title ng-binding 
                                                                // ng-isolate-scope" toggle-next="" onClick={(event) => { event.preventDefault(); timeDetails(days.code); setSelctedDay(days.code) }}>{days.name}
                                                                // </a>

                                                                // {(showTime == true) &&
                                                                //     <>
                                                                //         {Times.map((days, key) => {
                                                                //             return days.workingHoursDtos.map((day, index) => {


                                                                //                 return (
                                                                //                     <>
                                                                //                         {(key + 1 === selctedDay) &&
                                                                //                             <div className="time-container f-sign-up__radio-group" >
                                                                //                                 <input className="f-sign-up__radio" name="deliveryWindows" type="radio"
                                                                //                                     required="required" style={{ width: '100%' }} id="1311931" value="1311931" />
                                                                //                                 <label className="f-sign-up__radio-label" for="1311931">{day.time}</label>

                                                                //                             </div>
                                                                //                         }
                                                                //                     </>
                                                                //                 )
                                                                //             })
                                                                //         })



                                                                //         }
                                                                //     </>
                                                                // }

                                                                //         </div>
                                                            )
                                                        })}


                                                    </div>
                                                    {Description == true &&
                                                        <div className="f-sign-up__validation-directive">
                                                            <span className="f-sign-up__delivery-address error-label delivery-preference__instructions">
                                                                DELIVERY INSTRUCTIONS <span className="optional" style={{ textTransform: 'lowercase', color: 'grey', fontWeight: '400' }}>
                                                                    (optional)
                                                                </span>
                                                                <div className="b-info-tooltip _top-0">
                                                                    <div className="b-info-tooltip__visivig">
                                                                        Type instructions for our driver - which door to bring your groceries to, whether or
                                                                        not to ring the bell, <span id="instructionText"></span>etc. - the more
                                                                        specific the better! 255 character limit
                                                                    </div>
                                                                </div>
                                                            </span>
                                                            <textarea id="delivery-preference__instructions" name="instructions" className="f-sign-up__textarea delivery-preference-required"
                                                                maxlength="255" rows="7" onChange={(event) => setInstruction(event.target.value)} />
                                                            <div className="f-sign-up__error-msg _required right-delivery-preference__instructions _pattern preference">
                                                                Delivery Instructions contains invalid characters.
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>

                            <div className="button-box">
                                <button id="store-preference__previous" name="PreviousBtnThirdStep" className="btn-responsive f-sign-up__btn js-previous left">
                                    Previous
                                </button>
                                <button id="store-preference__update-account" type="button" onClick={UpdateAccount} name="CreateAccountBtn" className="btn-responsive f-sign-up__btn js-create-account _step-3-next-btn right">
                                    Update account
                                </button>
                            </div>
                        </div>
                    }
                </div>
            </div>

        </div >

    )
}