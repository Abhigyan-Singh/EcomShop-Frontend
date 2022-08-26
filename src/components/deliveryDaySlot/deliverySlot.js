import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useRef
} from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import './deliverySlot.css';
import Button from 'components/button/button';
import Radio from 'components/radio/radio';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CarImg from '../../assets/images/delOptions-doordash-cob.jpg';
import moment from 'moment';
import { useCountdown } from '../cartList/countDown';
export default function DeliverySlot() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);
  var moment = require('moment');

  const handleChange = (key) => (event, isExpanded) => {
    setExpanded(isExpanded ? key : false);
  };
  const DateList = [
    {
      lable: 'Tuesday, July 14, 2022',
      value: [
        {
          lable: 'Tuesday, July 14 (10:00 am - 11:00 am)',
          value: 'Tuesday, 8:00 AM'
        },
        {
          lable: 'Tuesday, July 14 (11:00 am - Noon)',
          value: 'Tuesday, 9:00 AM'
        },
        {
          lable: 'Tuesday, July 14 (Noon - 1:00 pm)',
          value: 'Tuesday, 10:00 AM'
        },
        {
          lable: 'Tuesday, July 14 (1:00 pm - 2:00 pm)',
          value: 'Tuesday, 11:00 AM'
        },
        {
          lable: 'Tuesday, July 14 (2:00 pm - 3:00 pm)',
          value: 'Tuesday, 12:00 PM'
        },
        {
          lable: 'Tuesday, July 14 (3:00 pm - 4:00 pm)',
          value: 'Tuesday, 1:00 PM'
        },
        {
          lable: 'Tuesday, July 14 (4:00 pm - 5:00 pm)',
          value: 'Tuesday, 2:00 PM'
        },
        {
          lable: 'Tuesday, July 14 (5:00 pm - 6:00 pm)',
          value: 'Tuesday, 3:00 PM'
        },
        {
          lable: 'Tuesday, July 14 (6:00 pm - 7:00 pm)',
          value: 'Tuesday, 4:00 PM'
        },
        {
          lable: 'Tuesday, July 14 (7:00 pm - 8:00 pm)',
          value: 'Tuesday, 5:00 PM'
        }
      ]
    },
    {
      lable: 'Friday, July 15, 2022',
      value: [
        {
          lable: 'Friday, July 15 (10:00 am - 11:00 am)',
          value: 'Friday, 8:00 AM'
        },
        {
          lable: 'Friday, July 15 (11:00 am - Noon)',
          value: 'Friday, 9:00 AM'
        },
        {
          lable: 'Friday, July 15 (Noon - 1:00 pm)',
          value: 'Friday, 10:00 AM'
        },
        {
          lable: 'Friday, July 15 (1:00 pm - 2:00 pm)',
          value: 'Friday, 11:00 AM'
        },
        {
          lable: 'Friday, July 15 (2:00 pm - 3:00 pm)',
          value: 'Friday, 12:00 PM'
        },
        {
          lable: 'Friday, July 15 (3:00 pm - 4:00 pm)',
          value: 'Friday, 1:00 PM'
        },
        {
          lable: 'Friday, July 15 (4:00 pm - 5:00 pm)',
          value: 'Friday, 2:00 PM'
        },
        {
          lable: 'Friday, July 15 (5:00 pm - 6:00 pm)',
          value: 'Friday, 3:00 PM'
        },
        {
          lable: 'Friday, July 15 (6:00 pm - 7:00 pm)',
          value: 'Friday, 4:00 PM'
        },
        {
          lable: 'Friday, July 15 (7:00 pm - 8:00 pm)',
          value: 'Friday, 5:00 PM'
        }
      ]
    }
  ];
  const [deliveryTimer, setdeliveryTimer] = useState();
  const [days, hours, minutes, seconds] = useCountdown(deliveryTimer);
  const onRadioChange = (e, f) => {
    console.log(e + ' ' + moment(f).format('MMM DD YYYY'));
    let time = e + ' ' + moment(f).format('MMM DD YYYY');
    console.log(time);
    setdeliveryTimer(time);
  };
  return (
    <div className="cont">
      <div className="label_topic">Delivery and Pick up Options</div>
      <div>
        Below are the days and times we'll be delivering in your neighborhood.
        You may also choose to pick up your groceries at our Superstore in
        Albertville, MN
      </div>
      <div className="deliPick">
        <a href="#">See Delivery/Pick up Fees</a>
        <br />
        <a href="#">Sign Up for Delivery Alerts</a>{' '}
        <span>of estimated arrival time.</span>
      </div>
      <div className="chosPick">
        <p>Choose one of the following delivery or pick up options:</p>
        <p>
          <img src={CarImg} alt="" />
        </p>
        <p>
          By selecting a delivery time below, I understand that some information
          will be shared with DoorDash in connection with my delivery order:
          name, address, telephone number.
        </p>
        <p className="dlsl">
          <span>
            Delivery Slot - Click on the day to see available time windows
          </span>
          <span>Order Due By</span>
        </p>
      </div>
      {DateList.map((data, key) => {
        return (
          <div className="accorSec">
            <Accordion expanded={expanded === key} onChange={handleChange(key)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '100%', flexShrink: 0 }}>
                  {data.lable}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {data.value.map((i, j) => {
                    return (
                      <div className="acorRow">
                        <Radio
                          className="mb-4"
                          id="checkbox-1"
                          name="c1"
                          key={j}
                          label={i.value}
                          // checked={option.facilityDtl.facilityName == selectedFacility}
                          onChange={() => onRadioChange(i.value, data.lable)}
                        />

                        <span>{i.value}</span>
                      </div>
                    );
                  })}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
      <div className="dapuf">DELIVERY AND PICK UP FEES:</div>
      <div className="ndDlvry">
        <div className="ndDlvryLft">Next-day Delivery</div>
        <div className="ndDlvryRht">Same-day Delivery</div>
      </div>
      <div className="ndDlvryRow mt-3">
        <div className="ndDlvryRowLft">
          <strong>DoorDash Delivery</strong>
        </div>
        <div className="ndDlvryRowRght">
          $8.99 delivery fee within 3 miles of the store. Addresses beyond the 3
          miles will result in a .65 additional fee for every additional mile.{' '}
        </div>
      </div>
      <div className="ndDlvryRowHead">Order Fees</div>
      <div className="ndDlvryRow">
        <div className="ndDlvryRowLft">
          <b>Pick up fee</b>
        </div>
        <div className="ndDlvryRowRght">FREE!</div>
      </div>
      <div className="ndDlvryRowSubHead">Shopping fee</div>
      <div className="ndDlvryRow">
        <div className="ndDlvryRowLft">Orders of $50 or more</div>
        <div className="ndDlvryRowRght">No additional fee</div>
      </div>
      <div className="ndDlvryRow">
        <div className="ndDlvryRowLft">Orders of $49.99 or less</div>
        <div className="ndDlvryRowRght">$5.00</div>
      </div>
      <div className="ndDlvryRowSubHead">
        <b>Phone order fee</b>
      </div>
      <div className="ndDlvryRow">
        <div className="ndDlvryRowLft">Orders of $100 or more</div>
        <div className="ndDlvryRowRght">No additional fee</div>
      </div>
      <div className="ndDlvryRow">
        <div className="ndDlvryRowLft">Orders of $99.99 or less</div>
        <div className="ndDlvryRowRght">Additional $5</div>
      </div>
      <div className="ndDlvryRow mt-3">
        <div className="ndDlvryRowLft">
          <b>Grocery restocking fee*</b>
        </div>
        <div className="ndDlvryRowRght">$25.00</div>
      </div>
      <div className="ndDlvryRowFoot">
        *If an order is not picked up for the day it is scheduled and no contact
        is made with Coborn's to reschedule it will be cancelled and you will be
        charged a $25 restocking fee.{' '}
      </div>
    </div>
  );
}
