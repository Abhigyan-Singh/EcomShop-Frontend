import React, {
    Fragment,
    useState,
    useEffect,
    useCallback,
    useRef
} from 'react';
import './MyAccount.css';
import my_account_arrow_right from '../../assets/images/commonimages/my_account_arrow_right.gif';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate, } from 'react-router-dom';

export default function MyAccount() {
    const navigate = useNavigate();
    return (
        <div className="wrapper">
            {/* <div className="headDivide">
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
           
            <div  className='myAccountSec '>
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

                    {/*  */}
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography><img alt="Account and Password preferences" src={my_account_arrow_right} />
                                <a className="header-green" href="#"> Delivery Preferences</a></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <div id="divDeliveryInfo" style={{ display: 'block', visibility: 'visible' }}>
                                    <table cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <td width="6"></td>
                                                <td className="tableGreenSeparatorVertical"></td>
                                                <td width="10">
                                                    {/* <img src={my_account_arrow_right} width="10" height="1" border="0" alt="" /> */}
                                                    </td>
                                                <td valign="top">

                                                    <img className='mt-15' width="1" height="4" border="0" alt="" src={my_account_arrow_right} />
                                                    <input className="btn_big_def" type="button" value="Delivery Options" onClick={() => navigate('/displaydeliveryoptions')}/>
                                                    <img width="1" height="4" border="0" alt="" src={my_account_arrow_right} />
                                                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                                        <tbody>
                                                           
                                                            <tr>
                                                                <td>
                                                                <br/>
                                                                    Your regular delivery day/time is:
                                                                    <br/><br/>
                                                                    <b>Saturday, August 27 (3:00 pm - 4:00 pm)</b><br/>
                                                                    <b>(orders must be placed by Saturday, 1:00 PM )</b><br/><br/>

                                                                    Won't work for you this week? See your <a href="changewindowfromcheckout">Neighborhood Delivery Schedule</a> and
                                                                    choose a different grocery delivery day for your next order. Otherwise, change your regular delivery day and
                                                                    time below:
                                                                    <br/><br/>
                                                                    <img width="1" height="4" border="0" alt="" src={my_account_arrow_right} />
                                                                    <input className="btn_big_def" type="button" value="Change Delivery Day &amp; Time" onClick={()=>navigate('/displaycustomerdeliverydayandtime')} />
                                                                    <img width="1" height="15" border="0" alt="" src={my_account_arrow_right} /><br/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tableGreenSeparator"></td><br/>
                                                            </tr>
                                                            <tr>
                                                                <td>

                                                                    <div className="banner1">
                                                                        <b>Unattended delivery:</b>
                                                                        You have not specified whether you are usually home for delivery.
                                                                    </div>
                                                                    <b>Delivery instructions:</b><br/>ok<br/><br/>

                                                                    <input className="btn_big_def" type="button" value="Edit Delivery Instructions" onClick={()=>navigate('/deliveryNotesInstructions')} />

                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget. */}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                    {/* <a id="aDeliveryInfo" className="linkmini" onclick="showHideMyAccount('DeliveryInfo');return false;" href="#">(Close)</a>
                     */}
                    {/*  */}
                </div>
                <div className='arrow'>
                    <img alt="Account and Password preferences" src={my_account_arrow_right} />
                    <a className="header-green" href="/showcommunicationpreferences">Communication Preferences</a>
                </div>
                <div className='arrow'>
                    <img alt="Account and Password preferences" src={my_account_arrow_right} />
                    <a className="header-green" href="/"> Product Display Preferences</a>
                </div>
                <div className='arrow'>
                    <img alt="Account and Password preferences" src={my_account_arrow_right} />
                    <a className="header-green" href="/showorderhistory"> Order History</a>
                </div>
                <div className='arrow'>
                    <img alt="Account and Password preferences" src={my_account_arrow_right} />
                    <a className="header-green" href="/displayclubpreferences">Club Preferences</a>
                </div>
                <div className='arrow'>
                    <img alt="Account and Password preferences" src={my_account_arrow_right} />
                    <a className="header-green" href="/viewpaymentinfo"> Payment Information</a>
                </div>
                <div className='arrow'>
                    <img alt="Account and Password preferences" src={my_account_arrow_right} />
                    <a className="header-green" href="/more-rewards">MORE rewards</a>
                </div>
                {/* <div className='arrow'>
                <img alt="Account and Password preferences" src={my_account_arrow_right}/>
                <a className="header-green" href="/">  Change Preferred Store</a>
                </div> */}
            </div>
            </div>
        
    )
}