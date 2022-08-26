import React, {
    Fragment,
    useState,
    useEffect,
    useCallback,
    useRef
} from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import '../deliveryDaySlot/deliverySlot.css';
import './customerdeliverydayandtime.css';
import CarImg from '../../assets/images/delOptions-doordash-cob.jpg';
import moment from 'moment';
import { useCountdown } from '../cartList/countDown';


export default function CustomerdeliveryDayandTime() {
    const navigate = useNavigate();

    return (
        <div className='wrapper'>
            <div className="containerSingleColumn"><div>
                <h1 className="myAccountHeader">My Account</h1>
                <b>
                    <a href="/myAccount">My Account Home</a> &gt; Delivery day &amp; time
                </b>
                <br/>
                <br/>
                <br/>
                <span className="headerbig-green">Delivery day &amp; time</span>

                <form action="editcustomerdeliverydayandtime" name="editcustomerdeliverydayandtime">
                    <p>
                        Please choose your new regular delivery day from the choices below.
                        <b>Remember to click the "Save changes" button.</b>
                        <br/>
                        <br/>
                        We'll confirm your change via e-mail. If you have questions, please call <nobr/>1 (844) 414-7467<nobr/>
                        .
                    </p>

                    <div className="Element-100">
                        <div id="cob_dd">
                            <img src={CarImg} alt="" />
                        </div>
                        By selecting a delivery time below, I understand that some information will be shared with DoorDash in connection with my delivery order: name, address, telephone number.

                    </div><br/>
                    {/* <div className="Element-100">
        
            
                <div>
                    <div>
                        <b> Delivery Slot </b>

                                <span style="float: right;">
                                    <b> Order Due By </b>
                                </span>
                    </div>
                </div>
                <div className="Element-100">
                    <div className="Element-100">
                        <ul className="slots-font Element-100">
                            
                                <li onmouseover="$(this).children('span').toggleclassName('highlight');" onmouseout="$(this).children('span').toggleclassName('highlight')">
                                            <span onclick="$(this).next('ul').toggle(300);" style="cursor: pointer" className="">
                                                Sunday<br/>
                                            </span>
                                    <ul className="slots Element-100">
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 10:00 am - 11:00 am" onclick="submitAndGoBack(false)" value="130855/6"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        10:00 am - 11:00 am
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Sunday, 8:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Sun, 8AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 11:00 am - Noon" onclick="submitAndGoBack(false)" value="1308558"/>/
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        11:00 am - Noon
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Sunday, 9:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Sun, 9AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: Noon - 1:00 pm" onclick="submitAndGoBack(false)" value="1308560"/>
/                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        Noon - 1:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Sunday, 10:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Sun, 10AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 1:00 pm - 2:00 pm" onclick="submitAndGoBack(false)" value="1308562"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        1:00 pm - 2:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Sunday, 11:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Sun, 11AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 2:00 pm - 3:00 pm" onclick="submitAndGoBack(false)" value="1308564"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        2:00 pm - 3:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Sunday, 12:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Sun, 12PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 3:00 pm - 4:00 pm" onclick="submitAndGoBack(false)" value="1308566"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        3:00 pm - 4:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Sunday, 1:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Sun, 1PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 4:00 pm - 5:00 pm" onclick="submitAndGoBack(false)" value="1308568"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        4:00 pm - 5:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Sunday, 2:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Sun, 2PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 5:00 pm - 6:00 pm" onclick="submitAndGoBack(false)" value="1308570"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        5:00 pm - 6:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Sunday, 3:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Sun, 3PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                    </ul>
                                </li>
                            
                                <li onmouseover="$(this).children('span').toggleclassName('highlight');" onmouseout="$(this).children('span').toggleclassName('highlight')">
                                            <span onclick="$(this).next('ul').toggle(300);" style="cursor: pointer" className="">
                                                Monday<br/>
                                            </span>
                                    <ul className="slots Element-100">
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 10:00 am - 11:00 am" onclick="submitAndGoBack(false)" value="130857/2"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        10:00 am - 11:00 am
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Monday, 8:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Mon, 8AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 11:00 am - Noon" onclick="submitAndGoBack(false)" checked="checked" value="1308574"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        11:00 am - Noon
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Monday, 9:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Mon, 9AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: Noon - 1:00 pm" onclick="submitAndGoBack(false)" value="1308576"/>
/                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        Noon - 1:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Monday, 10:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Mon, 10AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 1:00 pm - 2:00 pm" onclick="submitAndGoBack(false)" value="1308578"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        1:00 pm - 2:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Monday, 11:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Mon, 11AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 2:00 pm - 3:00 pm" onclick="submitAndGoBack(false)" value="1308580"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        2:00 pm - 3:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Monday, 12:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Mon, 12PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 3:00 pm - 4:00 pm" onclick="submitAndGoBack(false)" value="1308582"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        3:00 pm - 4:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Monday, 1:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Mon, 1PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 4:00 pm - 5:00 pm" onclick="submitAndGoBack(false)" value="1308584"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        4:00 pm - 5:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Monday, 2:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Mon, 2PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 5:00 pm - 6:00 pm" onclick="submitAndGoBack(false)" value="1308586"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        5:00 pm - 6:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Monday, 3:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Mon, 3PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 6:00 pm - 7:00 pm" onclick="submitAndGoBack(false)" value="1308588"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        6:00 pm - 7:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Monday, 4:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Mon, 4PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 7:00 pm - 8:00 pm" onclick="submitAndGoBack(false)" value="1308590"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        7:00 pm - 8:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Monday, 5:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Mon, 5PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                    </ul>
                                </li>
                            
                                <li onmouseover="$(this).children('span').toggleclassName('highlight');" onmouseout="$(this).children('span').toggleclassName('highlight')">
                                            <span onclick="$(this).next('ul').toggle(300);" style="cursor: pointer" className="">
                                                Tuesday<br/>
                                            </span>
                                    <ul className="slots Element-100">
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: Noon - 1:00 pm" onclick="submitAndGoBack(false)" value="1308596"/>
/                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        Noon - 1:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Tuesday, 10:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Tue, 10AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 1:00 pm - 2:00 pm" onclick="submitAndGoBack(false)" value="1308598"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        1:00 pm - 2:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Tuesday, 11:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Tue, 11AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 2:00 pm - 3:00 pm" onclick="submitAndGoBack(false)" value="1308600"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        2:00 pm - 3:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Tuesday, 12:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Tue, 12PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 3:00 pm - 4:00 pm" onclick="submitAndGoBack(false)" value="1308602"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        3:00 pm - 4:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Tuesday, 1:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Tue, 1PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 4:00 pm - 5:00 pm" onclick="submitAndGoBack(false)" value="1308604"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        4:00 pm - 5:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Tuesday, 2:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Tue, 2PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 5:00 pm - 6:00 pm" onclick="submitAndGoBack(false)" value="1308606"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        5:00 pm - 6:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Tuesday, 3:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Tue, 3PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 6:00 pm - 7:00 pm" onclick="submitAndGoBack(false)" value="1308608"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        6:00 pm - 7:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Tuesday, 4:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Tue, 4PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 7:00 pm - 8:00 pm" onclick="submitAndGoBack(false)" value="1308610"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        7:00 pm - 8:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Tuesday, 5:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Tue, 5PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                    </ul>
                                </li>
                            
                                <li onmouseover="$(this).children('span').toggleclassName('highlight');" onmouseout="$(this).children('span').toggleclassName('highlight')">
                                            <span onclick="$(this).next('ul').toggle(300);" style="cursor: pointer" className="">
                                                Wednesday<br/>
                                            </span>
                                    <ul className="slots Element-100">
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 10:00 am - 11:00 am" onclick="submitAndGoBack(false)" value="130861/2"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        10:00 am - 11:00 am
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Wednesday, 8:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Wed, 8AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 11:00 am - Noon" onclick="submitAndGoBack(false)" value="1308614"/>
/                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        11:00 am - Noon
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Wednesday, 9:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Wed, 9AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: Noon - 1:00 pm" onclick="submitAndGoBack(false)" value="1308616"/>
 /                                                       &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        Noon - 1:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Wednesday, 10:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Wed, 10AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 1:00 pm - 2:00 pm" onclick="submitAndGoBack(false)" value="1308618"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        1:00 pm - 2:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Wednesday, 11:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Wed, 11AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 2:00 pm - 3:00 pm" onclick="submitAndGoBack(false)" value="1308620"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        2:00 pm - 3:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Wednesday, 12:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Wed, 12PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 3:00 pm - 4:00 pm" onclick="submitAndGoBack(false)" value="1308622"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        3:00 pm - 4:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Wednesday, 1:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Wed, 1PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 4:00 pm - 5:00 pm" onclick="submitAndGoBack(false)" value="1308624"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        4:00 pm - 5:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Wednesday, 2:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Wed, 2PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 5:00 pm - 6:00 pm" onclick="submitAndGoBack(false)" value="1308626"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        5:00 pm - 6:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Wednesday, 3:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Wed, 3PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 6:00 pm - 7:00 pm" onclick="submitAndGoBack(false)" value="1308628"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        6:00 pm - 7:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Wednesday, 4:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Wed, 4PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 7:00 pm - 8:00 pm" onclick="submitAndGoBack(false)" value="1308630"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        7:00 pm - 8:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Wednesday, 5:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Wed, 5PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                    </ul>
                                </li>
                            
                                <li onmouseover="$(this).children('span').toggleclassName('highlight');" onmouseout="$(this).children('span').toggleclassName('highlight')">
                                            <span onclick="$(this).next('ul').toggle(300);" style="cursor: pointer" className="">
                                                Thursday<br/>
                                            </span>
                                    <ul className="slots Element-100">
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 10:00 am - 11:00 am" onclick="submitAndGoBack(false)" value="1308632"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        10:00 am - 11:00 am
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Thursday, 8:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Thu, 8AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 11:00 am - Noon" onclick="submitAndGoBack(false)" value="1308634"/>
/                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        11:00 am - Noon
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Thursday, 9:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Thu, 9AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: Noon - 1:00 pm" onclick="submitAndGoBack(false)" value="1308636"/>
 /                                                       &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        Noon - 1:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Thursday, 10:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Thu, 10AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 1:00 pm - 2:00 pm" onclick="submitAndGoBack(false)" value="1308638"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        1:00 pm - 2:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Thursday, 11:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Thu, 11AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 2:00 pm - 3:00 pm" onclick="submitAndGoBack(false)" value="1308640"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        2:00 pm - 3:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Thursday, 12:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Thu, 12PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 3:00 pm - 4:00 pm" onclick="submitAndGoBack(false)" value="1308642"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        3:00 pm - 4:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Thursday, 1:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Thu, 1PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 4:00 pm - 5:00 pm" onclick="submitAndGoBack(false)" value="1308644"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        4:00 pm - 5:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Thursday, 2:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Thu, 2PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 5:00 pm - 6:00 pm" onclick="submitAndGoBack(false)" value="1308646"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        5:00 pm - 6:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Thursday, 3:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Thu, 3PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 6:00 pm - 7:00 pm" onclick="submitAndGoBack(false)" value="1308648"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        6:00 pm - 7:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Thursday, 4:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Thu, 4PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 7:00 pm - 8:00 pm" onclick="submitAndGoBack(false)" value="1308650"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        7:00 pm - 8:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Thursday, 5:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Thu, 5PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                    </ul>
                                </li>
                            
                                <li onmouseover="$(this).children('span').toggleclassName('highlight');" onmouseout="$(this).children('span').toggleclassName('highlight')">
                                            <span onclick="$(this).next('ul').toggle(300);" style="cursor: pointer" className="">
                                                Friday<br/>
                                            </span>
                                    <ul className="slots Element-100">
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 10:00 am - 11:00 am" onclick="submitAndGoBack(false)" value="1308652"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        10:00 am - 11:00 am
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Friday, 8:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Fri, 8AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 11:00 am - Noon" onclick="submitAndGoBack(false)" value="1308654"/>
/                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        11:00 am - Noon
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Friday, 9:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Fri, 9AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: Noon - 1:00 pm" onclick="submitAndGoBack(false)" value="1308656"/>
 /                                                       &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        Noon - 1:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Friday, 10:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Fri, 10AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 1:00 pm - 2:00 pm" onclick="submitAndGoBack(false)" value="1308658"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        1:00 pm - 2:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Friday, 11:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Fri, 11AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 2:00 pm - 3:00 pm" onclick="submitAndGoBack(false)" value="1308660"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        2:00 pm - 3:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Friday, 12:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Fri, 12PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 4:00 pm - 5:00 pm" onclick="submitAndGoBack(false)" value="1308664"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        4:00 pm - 5:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Friday, 2:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Fri, 2PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 5:00 pm - 6:00 pm" onclick="submitAndGoBack(false)" value="1308666"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        5:00 pm - 6:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Friday, 3:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Fri, 3PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 6:00 pm - 7:00 pm" onclick="submitAndGoBack(false)" value="1308668"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        6:00 pm - 7:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Friday, 4:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Fri, 4PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 7:00 pm - 8:00 pm" onclick="submitAndGoBack(false)" value="1308670"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        7:00 pm - 8:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Friday, 5:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Fri, 5PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                    </ul>
                                </li>
                            
                                <li onmouseover="$(this).children('span').toggleclassName('highlight');" onmouseout="$(this).children('span').toggleclassName('highlight')">
                                            <span onclick="$(this).next('ul').toggle(300);" style="cursor: pointer" className="">
                                                Saturday<br/>
                                            </span>
                                    <ul className="slots Element-100">
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 10:00 am - 11:00 am" onclick="submitAndGoBack(false)" value="1308672"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        10:00 am - 11:00 am
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Saturday, 8:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Sat, 8AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 11:00 am - Noon" onclick="submitAndGoBack(false)" value="1308674"/>
/                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        11:00 am - Noon
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Saturday, 9:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Sat, 9AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: Noon - 1:00 pm" onclick="submitAndGoBack(false)" value="1308676"/>
 /                                                       &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        Noon - 1:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Saturday, 10:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Sat, 10AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 1:00 pm - 2:00 pm" onclick="submitAndGoBack(false)" value="1308678"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        1:00 pm - 2:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Saturday, 11:00 AM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Sat, 11AM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 2:00 pm - 3:00 pm" onclick="submitAndGoBack(false)" value="1308680"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        2:00 pm - 3:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Saturday, 12:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Sat, 12PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 3:00 pm - 4:00 pm" onclick="submitAndGoBack(false)" value="1308682"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        3:00 pm - 4:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Saturday, 1:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Sat, 1PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 4:00 pm - 5:00 pm" onclick="submitAndGoBack(false)" value="1308684"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        4:00 pm - 5:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Saturday, 2:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Sat, 2PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                            <li className="slots-item Element-100">
                                                <div className="Element-100">
                                                    <div className="slot-rb-wrapper">
                                                        <input className="small-font" type="radio" name="windowId" title="Delivery window: 5:00 pm - 6:00 pm" onclick="submitAndGoBack(false)" value="1308686"/>
                                                        &nbsp;
                                                    </div>
                                                    <div className="slot-data small-font">
                                                        5:00 pm - 6:00 pm
                                                        
                                                    </div>
                                                    <div className="small-font data-wide-screen" style="float: right;">
                                                        Saturday, 3:00 PM
                                                    </div>
                                                    
                                                    <div className="small-font data-narrow-screen" style="float: right;">
                                                        Sat, 3PM
                                                    </div>
                                                </div>
                                            </li>
                                        
                                    </ul>
                                </li>
                            
                        </ul>
                    </div>
                </div>
            
            
        
    </div> */}

                    {/* <div className="Element-100">



                        <div>
                            <div colspan="3">
                                No delivery windows available
                            </div>
                        </div>


                    </div> */}
                    <br/>


                    <a href="javascript:popUp('/wsPolicy',910, 520, '1', '0')">Wine &amp; Spirits delivery policy</a>

                    <br/>
                    <br/>
                    <table>
                        <tbody><tr>

                            <td align="left">
                                <input type="button" value="Cancel" alt="Cancel" className="btn_small_min" onclick={() => navigate('/myAccount')} />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
            </div>
        </div>
    );
}
