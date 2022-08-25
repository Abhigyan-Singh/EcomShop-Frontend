import React, {
    Fragment,
    useState,
    useEffect,
    useCallback,
    useRef
} from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import './showOrderHistory.css';
// import '../customerdeliverydayandtime/customerdeliverydayandtime.css';
import { useCountdown } from '../cartList/countDown';
import Speck from '../../assets/images/speck_0d791e.gif';
export default function ShowOrderHistory() {
    const navigate = useNavigate();

    return (
        <div>

            <div>

                <div className="containerSingleColumn">
                    <div>
                        <h1 className="myAccountHeader">My Account</h1><br />
                        <b><a href="/myAccount">My Account Home</a> &gt; Order History</b>
                        <br /><br />
                        <span className="myAccountSubHeader">Order History</span>
                    </div>
                </div>

                <form name="" action="">
                    <div className="containerSingleColumn"><div>
                        Use your Order History as a shopping list. This feature provides you
                        with easy access to your past grocery orders, which may help you place
                        your orders quickly and more efficiently. Just click the order number
                        or the "See details" link to pull up a list of the items you purchased
                        with today's prices.
                    </div></div>
                    <br />


                    <br />


                    <div className="containerSingleColumn"><div>
                        <h3>
                            Current Orders
                        </h3>
                    </div></div>

                    <table className="responsiveTable" id="orderHistoryTable">
                        <thead>
                            <tr>
                                <th scope="col">
                                    Order Number
                                </th>
                                <th scope="col">
                                    Requested Ship Date
                                </th>
                                <th scope="col">
                                    Total Value
                                </th>
                                <th scope="col">
                                    Store
                                </th>
                                <th scope="col">
                                    Status
                                </th>
                                <th scope="col" style={{color: 'rgba(0,0,0,0)'}}>
                                    Invoice
                                </th>
                            </tr>
                        </thead>
                        <tbody><tr>
                            <td colSpan="7">
                                {/* <img width="100%" height="2" border="0" alt="" src={Speck} /> */}
                            </td>
                        </tr>
                        </tbody><tbody>


                            <tr>
                                <td data-label="Order Number">
                                    <a href="showorderdetailswithtodaysprice?orderId=6114846T">6114846T </a>
                                </td>
                                <td data-label="Requested Ship Date">
                                    08/08/2022
                                </td>
                                <td data-label="Total Value">



                                    $8.99


                                </td>
                                <td data-label="Store">
                                    Albertville, MN
                                </td>
                                <td data-label="Status">
                                    NEW
                                </td>
                                <td style={{color: 'rgba(0,0,0,0)'}}>Get__Report</td>
                            </tr>

                            <tr>
                                <td data-label="Order Number">
                                    <a href="showorderdetailswithtodaysprice?orderId=6114844T">6114844T </a>
                                </td>
                                <td data-label="Requested Ship Date">
                                    08/06/2022
                                </td>
                                <td data-label="Total Value">



                                    $23.96


                                </td>
                                <td data-label="Store">
                                    Albertville, MN
                                </td>
                                <td data-label="Status">
                                    NEW
                                </td>
                                <td style={{color: 'rgba(0,0,0,0)'}}>Get__Report</td>
                            </tr>

                            <tr>
                                <td data-label="Order Number">
                                    <a href="showorderdetailswithtodaysprice?orderId=6114843T">6114843T </a>
                                </td>
                                <td data-label="Requested Ship Date">
                                    08/05/2022
                                </td>
                                <td data-label="Total Value">



                                    $13.99


                                </td>
                                <td data-label="Store">
                                    Albertville, MN
                                </td>
                                <td data-label="Status">
                                    NEW
                                </td>
                                <td style={{color: 'rgba(0,0,0,0)'}}>Get__Report</td>
                            </tr>

                            <tr>
                                <td data-label="Order Number">
                                    <a href="showorderdetailswithtodaysprice?orderId=6114832T">6114832T </a>
                                </td>
                                <td data-label="Requested Ship Date">
                                    08/03/2022
                                </td>
                                <td data-label="Total Value">



                                    $17.98


                                </td>
                                <td data-label="Store">
                                    Albertville, MN
                                </td>
                                <td data-label="Status">
                                    NEW
                                </td>
                                <td style={{color: 'rgba(0,0,0,0)'}}>Get__Report</td>
                            </tr>

                            <tr>
                                <td data-label="Order Number">
                                    <a href="showorderdetailswithtodaysprice?orderId=6114831T">6114831T </a>
                                </td>
                                <td data-label="Requested Ship Date">
                                    08/02/2022
                                </td>
                                <td data-label="Total Value">



                                    $28.68


                                </td>
                                <td data-label="Store">
                                    Albertville, MN
                                </td>
                                <td data-label="Status">
                                    NEW
                                </td>
                                <td style={{color: 'rgba(0,0,0,0)'}}>Get__Report</td>
                            </tr>

                            <tr>
                                <td data-label="Order Number">
                                    <a href="showorderdetailswithtodaysprice?orderId=6114752T">6114752T </a>
                                </td>
                                <td data-label="Requested Ship Date">
                                    08/03/2022
                                </td>
                                <td data-label="Total Value">



                                    $9.79


                                </td>
                                <td data-label="Store">
                                    Albertville, MN
                                </td>
                                <td data-label="Status">
                                    NEW
                                </td>
                                <td style={{color: 'rgba(0,0,0,0)'}}>Get__Report</td>
                            </tr>

                            <tr>
                                <td data-label="Order Number">
                                    <a href="showorderdetailswithtodaysprice?orderId=6114750T">6114750T </a>
                                </td>
                                <td data-label="Requested Ship Date">
                                    07/20/2022
                                </td>
                                <td data-label="Total Value">



                                    $8.69


                                </td>
                                <td data-label="Store">
                                    Albertville, MN
                                </td>
                                <td data-label="Status">
                                    NEW
                                </td>
                                <td style={{color: 'rgba(0,0,0,0)'}}>Get__Report</td>
                            </tr>

                            <tr>
                                <td data-label="Order Number">
                                    <a href="showorderdetailswithtodaysprice?orderId=6114748T">6114748T </a>
                                </td>
                                <td data-label="Requested Ship Date">
                                    07/16/2022
                                </td>
                                <td data-label="Total Value">



                                    $13.99


                                </td>
                                <td data-label="Store">
                                    Albertville, MN
                                </td>
                                <td data-label="Status">
                                    NEW
                                </td>
                                <td style={{color: 'rgba(0,0,0,0)'}}>Get__Report</td>
                            </tr>

                            <tr>
                                <td data-label="Order Number">
                                    <a href="showorderdetailswithtodaysprice?orderId=6114747T">6114747T </a>
                                </td>
                                <td data-label="Requested Ship Date">
                                    07/13/2022
                                </td>
                                <td data-label="Total Value">



                                    $27.45


                                </td>
                                <td data-label="Store">
                                    Albertville, MN
                                </td>
                                <td data-label="Status">
                                    NEW
                                </td>
                                <td style={{color: 'rgba(0,0,0,0)'}}>Get__Report</td>
                            </tr>

                            <tr>
                                <td data-label="Order Number">
                                    <a href="showorderdetailswithtodaysprice?orderId=6114746T">6114746T </a>
                                </td>
                                <td data-label="Requested Ship Date">
                                    07/15/2022
                                </td>
                                <td data-label="Total Value">



                                    $16.13


                                </td>
                                <td data-label="Store">
                                    Albertville, MN
                                </td>
                                <td data-label="Status">
                                    NEW
                                </td>
                                <td style={{color: 'rgba(0,0,0,0)'}}>Get__Report</td>
                            </tr>


                        </tbody>
                        <tbody><tr>
                            <td colSpan="7">
                                {/* <img width="100%" height="2" border="0" alt="" src={Speck} /> */}
                            </td>
                        </tr>
                        </tbody></table>
                    <br />

                    <div className="containerSingleColumn"><div>
                        <h3>
                            Past Orders
                        </h3>
                        <br />
                    </div></div>

                    <table className="responsiveTable" id="orderHistoryTable">
                        <thead>
                            <tr>
                                <th scope="col">
                                    Order Number
                                </th>
                                <th scope="col">
                                    Requested Ship Date
                                </th>
                                <th scope="col">
                                    Total Value
                                </th>
                                <th scope="col">
                                    Store
                                </th>
                                <th scope="col">
                                    Status
                                </th>
                                <th scope="col">
                                    Invoice
                                </th>
                            </tr>
                        </thead>
                        <tbody><tr>
                            <td colSpan="7">
                                {/* <img width="100%" height="2" border="0" alt="" src={Speck} /> */}
                                </td>
                        </tr>
                        </tbody><tbody>






                            <tr>
                                <td data-label="Order Number">
                                    <a href="showorderdetailswithtodaysprice?orderId=6110586T">6110586T </a>
                                </td>
                                <td data-label="Requested Ship Date">
                                    03/18/2020
                                </td>
                                <td data-label="Total Value">



                                    $51.47


                                </td>
                                <td data-label="Store">
                                    Albertville, MN
                                </td>
                                <td data-label="Status">
                                    CLOSED
                                </td>
                                <td data-label="Invoice">

                                    <a href="generateOrderReport?userName=ALBTEST5&amp;orderNumber=6110586T">Get Report</a>

                                </td>
                            </tr>

                            <tr>
                                <td data-label="Order Number">
                                    <a href="showorderdetailswithtodaysprice?orderId=6110581T">6110581T </a>
                                </td>
                                <td data-label="Requested Ship Date">
                                    03/20/2020
                                </td>
                                <td data-label="Total Value">



                                    $64.95


                                </td>
                                <td data-label="Store">
                                    Albertville, MN
                                </td>
                                <td data-label="Status">
                                    CLOSED
                                </td>
                                <td data-label="Invoice">

                                    <a href="generateOrderReport?userName=ALBTEST5&amp;orderNumber=6110581T">Get Report</a>

                                </td>
                            </tr>

                            <tr>
                                <td data-label="Order Number">
                                    <a href="showorderdetailswithtodaysprice?orderId=6110577T">6110577T </a>
                                </td>
                                <td data-label="Requested Ship Date">
                                    03/21/2020
                                </td>
                                <td data-label="Total Value">



                                    $59.97


                                </td>
                                <td data-label="Store">
                                    Albertville, MN
                                </td>
                                <td data-label="Status">
                                    CLOSED
                                </td>
                                <td data-label="Invoice">

                                    <a href="generateOrderReport?userName=ALBTEST5&amp;orderNumber=6110577T">Get Report</a>

                                </td>
                            </tr>






                        </tbody>
                        <tbody><tr>
                            <td colSpan="7">
                                {/* <img width="100%" height="2" border="0" alt="" src={Speck} /> */}
                            </td>
                        </tr>
                        </tbody></table>





                    <div className="containerSingleColumn"><div>
                        <br />
                        <b>Looking for your Custom Shopping Lists?</b><br />
                        This feature is a huge time-saver ? it organizes everything you've purchased over the last twelve orders so you can place future grocery orders in just a couple minutes.
                        <a href="dispmyshoppinglistdetails?facilityId=2039&amp;locationCode=MASTER_SHOPPING_LIST">View your Shopping Lists</a>.
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div></div>
                </form>











            </div>
        </div>

    );
}
