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
        <div>
            <div className="containerSingleColumn"><div>
                <h1 className="myAccountHeader">My Account</h1>
                <br />
                <b>
                    <a href="/myAccount">My Account Home</a> &gt; Delivery day &amp; time
                </b>
                <br />
                <br />
                <br />
                <span className="headerbig-green">Delivery day &amp; time</span>

                <form action="editcustomerdeliverydayandtime" name="editcustomerdeliverydayandtime">
                    <p>
                        Please choose your new regular delivery day from the choices below.
                        <b>Remember to click the "Save changes" button.</b>
                        <br />
                        <br />
                        We'll confirm your change via e-mail. If you have questions, please call <nobr>1 (844) 414-7467</nobr>
                        .
                    </p>

                    <div className="Element-100">
                        <div id="cob_dd">
                            <img src={CarImg} alt="" />
                        </div>
                        By selecting a delivery time below, I understand that some information will be shared with DoorDash in connection with my delivery order: name, address, telephone number.

                    </div><br />

                    <div className="Element-100">



                        <div>
                            <div colspan="3">
                                No delivery windows available
                            </div>
                        </div>


                    </div>
                    <br />


                    <a href="javascript:popUp('/wsPolicy',910, 520, '1', '0')">Wine &amp; Spirits delivery policy</a>

                    <br />
                    <br />
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
