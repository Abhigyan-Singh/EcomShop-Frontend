import React, {
    Fragment,
    useState,
    useEffect,
    useCallback,
    useRef
} from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import './showcommunicationpreferences.css';
import '../customerdeliverydayandtime/customerdeliverydayandtime.css';
import { useCountdown } from '../cartList/countDown';
import CheckGreen from '../../assets/images/checkGreen.gif';
export default function ShowCommunicationPreferences() {
    const navigate = useNavigate();

    return (
        <div>
            <div>




                <h1 className="myAccountHeader">My Account</h1><br/>
                    <b><a href="/myAccount">My&nbsp;Account&nbsp;Home</a> &gt; Communication&nbsp;Preferences</b>
                    <br/><br/>

                        <div className="banner1">
                            <span className="myAccountSubHeader">Sign up for Delivery Alerts</span>
                            <br/>
                                Want a closer estimate of when your delivery will arrive? Sign up to receive email or text message alerts.
                                <br/>
                                    <br/>
                                        <a href="showdeliveryalerts" style={{textDecoration: 'none'}}>
                                            <input className="btn_big_def" type="button" value="Delivery Alerts" onclick=""/>
                                        </a>
                                        <br/>
                                            <br/>
                                                {/* <img width="560" height="1" border="0" alt="" src="theme/cob_onestore/img/bg/speck_0d791e.gif"/> */}
                                                    <br/>
                                                        <br/>
                                                        </div>




                                                        <span className="myAccountSubHeader">
                                                            Communication Preferences<br/>
                                                        </span>
                                                        <br/>
                                                            <br/>
                                                                Keep informed about the latest deals and offerings from <span className="notBanner2">Coborn's.com</span> <span className="banner2">CashWiseDelivers.com</span>. Check the boxes next to the types of communications you'd like to receive from us,
                                                                and then click the <b>"Save changes"</b> button to save your preferences. You may change your preferences or unsubscribe at any time.
                                                                Items marked with 
                                                                <img src={CheckGreen} width="10" height="10" border="0" alt=""/> are required notifications and can't be unchecked.
                                                                    <br/>
                                                                        <br/>
                                                                            <br/>

                                                                                <form action="updatecustomercommpreferences.action" method="post" id="cpform" name="cpform">
                                                                                    <table>





                                                                                        <tbody>
                                                                                            <tr className="">
                                                                                            <td align="left" valign="top">
                                                                                                <input type="checkbox" id="commPreffId_0" name="selCommPrefList" value="1"/>
                                                                                            </td>
                                                                                            <td>
                                                                                                <label for="commPreffId_0"><b>Promotional Emails</b></label>

                                                                                              


                                                                                                <br/>
                                                                                                    Receive notice of limited specials, recently announced promotions and exclusive product and services offers typically not advertised to the general public.
                                                                                                    <br/>
                                                                                                        <span className="copy-small"><b>Frequency: sent occasionally, but no more than twice per week.</b></span>




                                                                                                    </td>
                                                                                                </tr>





                                                                                                <tr className="">
                                                                                                    <td align="left" valign="top">
                                                                                                        <input type="checkbox" id="commPreffId_1" name="selCommPrefList" value="2"/>
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        <label for="commPreffId_1"><b>Satisfaction Surveys</b></label>

                                                                                                        



                                                                                                        <br/>
                                                                                                            In an effort to continually improve our service and better meet your needs, we'll occasionally solicit your feedback via e-mail and/or telephone.



                                                                                                    </td>
                                                                                                </tr>





                                                                                                <tr className="">
                                                                                                    <td align="left" valign="top">
                                                                                                        <input type="checkbox" id="commPreffId_2" name="selCommPrefList" value="3"/>
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        <label for="commPreffId_2"><b>Weekly Special Email</b></label>

                                                                                                      

                                                                                                        <br/>
                                                                                                            Our version of the Sunday newspaper insert, featuring special offers, sale items, new products and news updates for the upcoming week.
                                                                                                            <br/>
                                                                                                                <span className="copy-small"><b>Frequency: sent once per week.</b></span>





                                                                                                            </td>
                                                                                                        </tr>





                                                                                                        <tr className="">
                                                                                                            <td align="left" valign="top">
                                                                                                                <input type="checkbox" id="commPreffId_3" name="selCommPrefList" value="4"/>
                                                                                                            </td>
                                                                                                            <td>
                                                                                                                <label for="commPreffId_3"><b>Telephone Promos</b></label>

                                                                                                               



                                                                                                                <br/>
                                                                                                                    We occasionally offer our customers limited time special deals via telephone.


                                                                                                            </td>
                                                                                                        </tr>





                                                                                                        <tr className="notVisible">
                                                                                                            <td align="left" valign="top">
                                                                                                                <input type="checkbox" id="commPreffId_4" name="selCommPrefList" value="10"/>
                                                                                                            </td>
                                                                                                            <td>
                                                                                                                <label for="commPreffId_4"><b>Estimated Delivery Time Notifications</b></label>

                                                                                                                <input type="radio" title="Delivery time notification. 5:00-6:00 am" name="selTime" value="5"/> 5:00-6:00 am
                                                                                                                    <input type="radio" title="Delivery time notification. 6:00-7:00 am" name="selTime" value="6"/> 6:00-7:00 am
                                                                                                                        <input type="radio" title="Delivery time notification. 7:00-8:00 am" name="selTime" value="7"/> 7:00-8:00 am

                                    



                                                                                                                        </td>
                                                                                                                    </tr>





                                                                                                                    <tr className="notVisible">
                                                                                                                        <td align="left" valign="top">
                                                                                                                            <input type="checkbox" id="commPreffId_5" name="selCommPrefList" value="11"/>
                                                                                                                        </td>
                                                                                                                        <td>
                                                                                                                            <label for="commPreffId_5"><b>Confirmation Delivery Notifications</b></label>






                                                                                                                        </td>
                                                                                                                    </tr>





                                                                                                                    <tr className="notVisible">
                                                                                                                        <td align="left" valign="top">
                                                                                                                            <input type="checkbox" id="commPreffId_6" name="selCommPrefList" value="12"/>
                                                                                                                        </td>
                                                                                                                        <td>
                                                                                                                            <label for="commPreffId_6"><b>Update Delivery Time Notifications</b></label>

                                                                                                                            





                                                                                                                        </td>
                                                                                                                    </tr>





                                                                                                                    <tr className="notVisible">
                                                                                                                        <td align="left" valign="top">
                                                                                                                            <input type="checkbox" id="commPreffId_7" name="selCommPrefList" value="14"/>
                                                                                                                        </td>
                                                                                                                        <td>
                                                                                                                            <label for="commPreffId_7"><b>SMS Notifications</b></label>

                                                                                                                            





                                                                                                                        </td>
                                                                                                                    </tr>





                                                                                                                    <tr className="">
                                                                                                                        <td align="left" valign="top">
                                                                                                                            <input type="checkbox" id="commPreffId_8" name="selCommPrefList" value="15"/>
                                                                                                                        </td>
                                                                                                                        <td>
                                                                                                                            <label for="commPreffId_8"><b>Email Invoices To Me</b></label>

                       





                                                                                                                            <br/>
                                                                                                                                <span className="copy-small"><b>Frequency: Once per order.</b></span>

                                                                                                                        </td>
                                                                                                                    </tr>

                                                                                                                    <tr>
                                                                                                                        <td align="left" valign="top">
                                                                                                                            <img  src={CheckGreen} width="10" height="10" border="0" alt="" vspace="2"/>
                                                                                                                        </td>
                                                                                                                        <td>
                                                                                                                            <b>Confirmations, Changes Notices, Receipts and Credits</b>
                                                                                                                            <br/>
                                                                                                                                In order to document transactions and changes to your account we will send one communication per instance or change. These communications are restricted to informational documentation only.
                                                                                                                                <br/>
                                                                                                                                    <span className="copy-small"><b>Frequency: One per occurrence.</b></span>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody></table>
                                                                                                                    <br/>
                                                                                                                        Please allow a few days for any changes to go into effect, during which time you might receive additional e-mail messages from us.
                                                                                                                        <br/>
                                                                                                                            <br/>
                                                                                                                                <br/>
                                                                                                                                    <b>Changing your e-mail address</b>
                                                                                                                                    <br/>
                                                                                                                                        <a href="#1"></a>
                                                                                                                                        Below is the e-mail address you have on file with us. If you would prefer to receive messages from Coborn's.com at a different e-mail address, please enter it here to change the default e-mail address for your account. Items marked with "
                                                                                                                                        <span className="copy-red"><b>*</b></span>
                                                                                                                                        " are required.
                                                                                                                                        <table>
                                                                                                                                            <tbody><tr>
                                                                                                                                                <td>
                                                                                                                                                    <input type="email" id="emailAddress" name="emailAddress" value="tamal.dutta@cobornsinc.com" size="30" maxlength="30"/>
                                                                                                                                                </td>
                                                                                                                                                <td>
                                                                                                                                                    <input type="email" id="reEmail" name="reEmail" value="tamal.dutta@cobornsinc.com" size="30" maxlength="30"/>

                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                                <tr>
                                                                                                                                                    <td>
                                                                                                                                                        <span className="copy-red">*</span><label for="emailAddress"><b>Email</b></label>
                                                                                                                                                    </td>
                                                                                                                                                    <td>
                                                                                                                                                        <span className="copy-red">*</span><label for="reEmail"><b>Re-enter Email</b></label>
                                                                                                                                                    </td>
                                                                                                                                                </tr>
                                                                                                                                                <tr><td>&nbsp;</td></tr>
                                                                                                                                                <tr>
                                                                                                                                                    <td colspan="2">
                                                                                                                                                        <input type="button" value="Save Changes" alt="Save Changes" className="btn_small_width" onclick="document.getElementById('cpform').submit();"/>

                                                                                                                                                            <input type="button" value="Cancel" alt="Cancel" className="btn_small_min" onclick="document.location.href = 'myaccountdetails.action';"/>

                                                                                                                                                            </td>

                                                                                                                                                        </tr>
                                                                                                                                                    </tbody></table>
                                                                                                                                            </form>










                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    );
}
