import './deliveryeligibility.css';
import React, {
    Fragment,
    useState,
    useEffect,
    useCallback,
    useRef
} from 'react';
export default function DeliveryEligibility() {
    return (
        <div className='wrapper'>
        <div>
            <div>
                <div class="default-content-size">
                    <b><a href="/myAccount">My Account Home</a> &gt; Delivery Eligibility</b>
                </div>
                <div class="myAccountSubHeader">Delivery Eligibility</div>

                <div id="store-preference" class="preference-container default-content-size active-block" >
                    <div class="f-sign-up__form dlvrElgblSec clearfix float-disable">
                        <div id="store-preference__store-window">
                            <div class="f-sign-up__form-top _margin-bottom-10 col-md-12">


                                <div class="store-preference f-sign-up__error-box">
                                    <div class="store-preference f-sign-up__error-box-title">
                                        No Store change has been selected.
                                    </div>
                                    <span class="f-sign-up__error-msg _required right-store-preference__preference preference f-sign-up__error-box-title">
                                    </span>
                                </div>
                            </div>

                            <div class="f-sign-up__form-bottom col-md-12">


                                <div id="deliveryInstructionsBlock">
                                    <div id="q-preference__preference" class="col-md-12 store-container adjstPad row _padding-0-10 _padding-left-30 _margin-bottom-25 _pos-relative store-preference-required"><div class="store-container" style={{display: 'block',width: '100%'}}>
                                        Congratulations! Your address is eligible for delivery from the following store(s):
                                        <div class="delivery-stores padtop padleft" style={{width: '100%'}}>
                                            <div class="dstoreRow">
                                                <input class="f-sign-up__radio" name="deliveryOrPickupStore" type="radio" required="required" style={{width: '100%'}} id="delivery-605" value="531704" islegacy="0" />
                                                <label class="f-sign-up__radio-label col-md-3" for="delivery-605">Albertville, MN</label>
                                                <label style={{fontWeight: 'bold', fontStyle: 'italic',whiteSpace: 'nowrap', }}> - Delivered by  DoorDash*</label>
                                            </div>
                                            <div class="dstoreRow">
                                                <input class="f-sign-up__radio" name="deliveryOrPickupStore" type="radio" required="required" style={{width: '100%'}} id="delivery-2031" value="531730" islegacy="0" />
                                                <label class="f-sign-up__radio-label col-md-3" for="delivery-2031">Big Lake, MN</label>
                                                <label style={{fontWeight: 'bold', fontStyle: 'italic',whiteSpace: 'nowrap', }}> - Delivered by  DoorDash*</label>
                                            </div>
                                            <div class="dstoreRow">
                                                <input class="f-sign-up__radio" name="deliveryOrPickupStore" type="radio" required="required" style={{width: '100%'}} id="delivery-2047" value="531718" islegacy="0" />
                                                <label class="f-sign-up__radio-label col-md-3" for="delivery-2047">Otsego, MN</label>
                                                <label style={{fontWeight: 'bold', fontStyle: 'italic',whiteSpace: 'nowrap', }}> - Delivered by  DoorDash*</label>
                                            </div>
                                            <div class="dstoreRow">
                                                <input class="f-sign-up__radio" name="deliveryOrPickupStore" type="radio" required="required" style={{width: '100%'}} id="delivery-2033" value="531731" islegacy="0" />
                                                <label class="f-sign-up__radio-label col-md-3" for="delivery-2033">Ramsey, MN</label>
                                                <label style={{fontWeight: 'bold', fontStyle: 'italic',whiteSpace: 'nowrap', }}> - Delivered by  DoorDash*</label>
                                            </div>
                                        </div>
                                        <div style={{fontSize: '18px', fontWeight: 'bold', fontStyle: 'italic', float: 'left', padding: '20px', color: 'blue'}}>*Delivery fee is $8.99 for the first 3 miles from the store to your delivery address and $.65 for each additional mile. All grocery orders must be over $50 to avoid additional charges.</div>
                                        <div class="padtop"><p>Select the location above from which you'd prefer to receive your delivery.Please include special delivery instructions below — which door to bring your groceries to,whether or not to ring the bell, etc. — the more specific the better! 255 character limit.</p></div>
                                        <div class="dlInsSec"><label for="DeliveryInstructions"><b>DELIVERY INSTRUCTIONS</b> (optional)</label><textarea className='textbackgroundcolor' id="deliveryInstructions" name="deliveryInstructions" rows="8" cols="60" maxlength="255"></textarea>
                                        </div></div></div>
                                </div>
                            </div>
                            <div class="f-sign-up__form-bottom">

                                <div class="row dpo-buttons-block mt-5">
                                    <div class="col-6">
                                        <button id="savePreferredStoreChanges" type="button" class="f-sign-up__btn _full-width">
                                            OK
                                        </button>
                                    </div>
                                    <div class="col-6 rgtAlgn">
                                        <a href="/myaccountdetails" id="closeScreenBtn" class="f-sign-up__btn _full-width">CANCEL</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="deliveryNotAvailable" class="padleft" style={{display: 'none',width: '40%', fontSize: '14px'}}>
                    <div class="padtop">
                        Delivery is not currently available for the account address you entered. Please check back periodically as we continue to expand our delivery service.
                        <div class="dpo-buttons-block" style={{width:'10%'}}>
                            <a href="/myaccountdetails" id="okBtn" class="f-sign-up__btn _full-width">OK</a>
                        </div>
                    </div>
                </div>

                <div>



                    {/* <script type="text/javascript">

    var spinnerObject = createSpinner();

    function createSpinner() {
        var color;
        var facility = window.facilityId;
        switch (facility) {
            case 501:
            case 502:
            case 503:
                color = '#993300';
                break;
            default:
                color = '#339246';
        }

        return new Spinner({
            lines: 13 // The number of lines to draw
            , length: 26 // The length of each line
            , width: 5 // The line thickness
            , radius: 22 // The radius of the inner circle
            , scale: 1 // Scales overall size of the spinner
            , corners: 1 // Corner roundness (0..1)
            , color: color // #rgb or #rrggbb or array of colors
            , opacity: 0.5 // Opacity of the lines
            , rotate: 0 // The rotation offset
            , direction: 1 // 1: clockwise, -1: counterclockwise
            , speed: 1 // Rounds per second
            , trail: 60 // Afterglow percentage
            , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
            , zIndex: 2e9 // The z-index (defaults to 2000000000)
            , className: 'spinner' // The CSS class to assign to the spinner
            , top: '50%' // Top position relative to parent
            , left: '50%' // Left position relative to parent
            , shadow: false // Whether to render a shadow
            , hwaccel: false // Whether to use hardware acceleration
            , position: 'absolute' // Element positioning
        });
    }

    function runSpinner(spinner, spinName){
        var spinDiv = useDefaultIfNull(spinName, 'spin') + 'Div';
        var spinOverlayDivId = useDefaultIfNull(spinName, 'spin') + 'OverlayDiv';
        $('body').append('<div class="spinOverlayDiv" id="' + spinOverlayDivId + '"></div> <div class="spinDiv" id="' + spinDiv + '"></div>');
        $("#" + spinOverlayDivId).show();
        $("#" + spinDiv).show();
        spinner.spin(document.getElementById(spinDiv));
    }

    function stopSpinner(spinner, spinName){
        var spinDiv = useDefaultIfNull(spinName, 'spin') + 'Div';
        var spinOverlayDivId = useDefaultIfNull(spinName, 'spin') + 'OverlayDiv';
        $("#" + spinOverlayDivId).remove();
        $("#" + spinDiv).remove();
        spinner.stop();
    }

    function useDefaultIfNull(value, defaultValue) {
        if (!value) {
            value = defaultValue;
        }
        return value;
    }

    runSpinner(spinnerObject);
</script> */}
                </div>
                {/* <input id="currentCustomerAddress" type="hidden" />

                <div class="bsw-modal bsw-modal-no-close" data-modal="goToSelectedStore">
                    <div class="bsw-modal-content">
                        <div class="bsw-modal-close"></div>
                        <h1>Before Continuing...</h1>
                        <p>
                            You are choosing to leave <b>St. Joseph, MN</b> and will be redirected to <b id="selectedStoreName">selected Store Name</b>.
                            Please note that product selection varies between store locations and some items may not be available
                        </p>
                        <p id="bsw-model-crossdomain-message">If you choose to leave <b>St. Joseph, MN</b> now, you will need to login again to continue shopping.</p>
                        <p>
                            Do you wish to continue?
                        </p>

                        <div class="row dpo-buttons-block">
                            <div class="col-md-3">
                                <button id="previousBtn" type="button" class="f-sign-up__btn _full-width js-previous">
                                    GO BACK
                                </button>
                            </div>
                            <div class="col-md-3">
                                <button id="continueBtn" type="button" class="f-sign-up__btn _full-width js-create-account">
                                    CONTINUE
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div></div></div>
    )

}