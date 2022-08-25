import React, {
    Fragment,
    useState,
    useEffect,
    useCallback,
    useRef
} from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import './displayClubPreferences.css';
import { useCountdown } from '../cartList/countDown';


export default function DisplayClubPreferences() {
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="myAccountHeader">My Account</h1><br />
            <b><a href="/myAccount">My Account Home</a> &gt; Club Preferences</b>
            <br /><br />
            <span className="myAccountSubHeader">Club Preferences</span>

            <div>
            </div>
            <h3>Available Clubs</h3>


            <form method="post" name="enrolltoclubs" action="enrolltoclubs">

                <div className="table-clubs">
                    <table>


                        <tbody><tr>
                            <td>
                                <input type="checkbox" title="Select/unselect Wine Club" name="clubId[0]" value="WINE_CLUB" />
                            </td>
                            <td>
                                Wine Club
                            </td>
                        </tr>

                            <tr>
                                <td style={{border: 'none', padding: '1px'}} colspan="2">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style={{border: 'none', padding: '1px'}} colspan="2">
                                    <input type="submit" value="enroll" /></td>
                            </tr>
                        </tbody></table>
                </div>

            </form>

            <div className="no-table-clubs">
                No enrolled clubs
            </div>
        </div>
    );
}
