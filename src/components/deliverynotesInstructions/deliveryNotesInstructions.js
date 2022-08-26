import React, {
    Fragment,
    useState,
    useEffect,
    useCallback,
    useRef
} from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import './deliveryNotesInstructions.css';
import '../customerdeliverydayandtime/customerdeliverydayandtime.css';
import { useCountdown } from '../cartList/countDown';


export default function DeliveryNotesInstructions() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>
                {/* <script type="text/javascript">
                    function validateInstructions() {
                    var Instructions_Length = 255;
                    var oDetails;
                    var sOrig;
                    var sNew;
                    if (document.delivery_info.DeliveryInstructions) {
                        oDetails = document.delivery_info.DeliveryInstructions;

                    sOrig = oDetails.value;
        
                        if (sOrig.length > Instructions_Length) {
                        sNew = sOrig.substring(0, Instructions_Length) +
                        "&lt;###" +
                        sOrig.substring(Instructions_Length, sOrig.length);
                    oDetails.value = sNew;
                    document.delivery_info.DeliveryInstructions.focus();
                    alert("The delivery instructions you entered were too long.  The characters " +
                    "'&lt;###'" +
                    "have been added at the point where your comments exceeded the current limit of " +
                    Instructions_Length + "characters."
                    );
                        }
                    }
                }
                </script> */}
            </h1>
            <h3>
            </h3><h1 className="myAccountHeader">My Account</h1>

            <b><a href="/myAccount">My Account Home</a> &gt; Delivery notes &amp; instructions </b>
            <br />
            <br />
            <br />
            <span className="headerbig-green">Delivery notes &amp; instructions<br /></span>
            Please make any necessary changes to the information below. Press "Save changes" when you're done.
            <br />
            <br />
            <label for="altDeliveryInstructions">
                <b>In general, will someone be home to receive your grocery delivery?</b>
            </label>
            <br />
            <form name="delivery_info" action="updatedeliveryinfo.action">
                <select id="altDeliveryInstructions" name="altDeliveryInstructions" className="copy">
                    <option value="" selected="selected">&nbsp;</option>


                    <option value="Yes">
                        Yes
                    </option>

                    <option value="No">
                        No
                    </option>


                </select>
                <br />
                <br />
                <label for="DeliveryInstructions">
                    <b>Delivery instructions:</b>
                    <br />
                    Please enter delivery instructions for your Neighborhood Service Representative.
                    <br />
                    <span className="copy-small">(255 character limit)</span>
                    <br />
                </label>
                <br />
                <textarea id="DeliveryInstructions" name="DeliveryInstructions" rows="8" cols="60" maxlength="255" onblur="validateInstructions();" className="copy">                        </textarea>
            </form>
            <br />
            <br />
            <span style={{ float: 'left' }}>
                <input type="button" value="Save Changes" alt="Save Changes" className="btn_small_width" onclick="document.delivery_info.submit()" />
                &nbsp;&nbsp;
                <input type="button" value="Cancel" alt="Cancel" className="btn_small_min" onClick={() => navigate('/myAccount')} />

            </span>
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}
