import React, { useState, useEffect } from 'react';
import Button from 'components/button/button';
import './addressModal.css'
import { AddressValidation, getdeliveryaddress } from 'services/myAccountapi';

const AddressModal = (props) => {
    // console.log(props.loacalData,props.apidata);
    const apiData = props.apidata;
    const LoacalData = props.loacalData;
    let globalVar;
    const divStyle = {
        display: props.displayModal ? 'block' : 'none'
    };
    function closeModal(e) {
        e.stopPropagation();
        props.closeModal();
    }
    useEffect(() => {

        // console.log('globalVar',globalVar);

    }, [props.globalVar]);
    const verifyAddress = (e) => {
        const body = {
            buildingType: apiData.buildingType,
            city: apiData.city,
            isValidatedAddress: 1,
            state: apiData.state,
            streetAddress: apiData.streetAddress,
            unit: apiData.unit,
            zipCode: apiData.zipCode
        }
        AddressValidation(body).then((res) => {
            console.log(res.data.data);
            // globalVar = null;
           // e.stopPropagation();
           //props.closeModal();
          

        })
    }
    const editAddress = (e) => {
        const body = {
            buildingType: LoacalData.buildingType,
            city: LoacalData.city,
            isValidatedAddress: 0,
            state: LoacalData.state,
            streetAddress: LoacalData.streetAddress,
            unit: LoacalData.unit,
            zipCode: LoacalData.zipCode
        }
        AddressValidation(body).then((res) => {
            console.log(res.data.data);
            // globalVar= null;
           // e.stopPropagation();
          // props.closeModal();
            

        })
    }

    return (
        <div className="modal-card"  style={divStyle}>
            <div className="b-choose-address" >
                <div className="b-choose-address__title margin-5-btm" style={{ marginTop: '2px' }}>
                    Help us verify your account!
                </div>
                <div className="b-choose-address__table container">
                    <div className="col-md-5">
                        <div className="b-choose-address__dt" style={{ marginTop: '2px', marginBottom: '5px' }}>
                            USPS Verified Address:
                        </div>
                        <div className="b-choose-address__dd" style={{
                            marginBottom: '5px', borderStyle: 'solid',
                            borderColor: '#a2d750', borderWidth: '1px'
                        }}>
                            <ul style={{ marginTop: '5px' }}>
                                <li id="choose-address-popup__verified-street">{apiData.streetAddress}</li>
                                <li id="choose-address-popup__verified-city">{apiData.city}</li>
                                <li id="choose-address-popup__verified-state" >{apiData.state}</li>
                                <li id="choose-address-popup__verified-zip">{apiData.zipCode}</li>
                            </ul>
                        </div>
                        <div className="col-md-12">
                            <button className="b-choose-address__btn _use-verified-address-btn" name="useVerifiedAddressBtn"
                                id="choose-address-popup__use-verified-address" onClick={()=>props.updateAddress(1,apiData)}>
                                USE VERIFIED ADDRESS
                            </button>
                        </div>
                    </div>
                    <div className="col-md-5 col-md-offset-2">
                        <div className="b-choose-address__dt" style={{ marginTop: '2px', marginBottom: '5px' }}>
                            You Entered:
                        </div>
                        <div className="b-choose-address__dd" style={{
                            marginBottom: '5px', borderStyle: 'solid',
                            borderColor: '#a2d750', borderWidth: '1px'
                        }}>
                            <ul style={{ marginTop: '5px' }}>
                                <li id="choose-address-popup__customer-street">{LoacalData.streetAddress}</li>
                                <li id="choose-address-popup__customer-city">{LoacalData.city}</li>
                                <li id="choose-address-popup__customer-state">{LoacalData.state}</li>
                                <li id="choose-address-popup__customer-zip">{LoacalData.zipCode}</li>
                            </ul>
                        </div>
                        <div className="col-md-11 col-md-offset-1">
                            <button className="b-choose-address__btn" name="useThisAddressBtn"
                             id="choose-address-popup__use-customer-address" onClick={()=>props.updateAddress(0,LoacalData)}>
                                USE THIS ADDRESS
                            </button>
                        </div>
                        <div className="col-md-11 col-md-offset-1">
                            <button className="b-choose-address__btn" onClick={closeModal} name="editThisAddressBtn" id="choose-address-popup__edit-this-address">
                                EDIT THIS ADDRESS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddressModal;