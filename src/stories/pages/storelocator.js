import { Fragment, useState, useEffect, useCallback } from 'react';
import { useCookies } from 'react-cookie';
import { CookiesAge } from 'apiConfig';
import { allStores } from 'services/facilities';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Listbox, Transition } from '@headlessui/react';

import {
  CheckIcon,
  ChevronDownIcon,
  LocationMarkerIcon
} from '@heroicons/react/solid';
import itemStories from './item.stories';
import Checkbox from 'components/checkbox/checkbox';
import Locator from 'components/locator/locator';

export default {
  title: 'Pages/Home',
  argTypes: {
    isAuthenticated: {
      name: 'Show Authenticated State',
      control: 'boolean',
      defaultValue: true
    }
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const StoreLocator = (props) => {
  const { className, onFacilityChange, store2} = props
  const [storePickup, setStorePickup] = useState([null]);
  const [storeDelivery, setStoreDelivery] = useState([null]);
  const [cookies, setCookie] = useCookies();
  const { facility, dept, user } = cookies;
  const [selected, setSelected] = useState(facility);
  const [check, setCheckBoxChecked] = useState();

  useEffect(() => {
    allStores(5).then((res) => {
      setStorePickup(res.data);
    });
  }, []);

  useEffect(() => {
    allStores(7).then((res) => {
      setStoreDelivery(res.data);
      console.log("FACILITY2", facility)
    });
  }, []);

  const handleFacilityChange = (option) => {
    setSelected(option);
    setCookie('facility', option, {
      path: '/',
      maxAge: CookiesAge
    });
    if (typeof onFacilityChange === 'function') {
      onFacilityChange(option);
    
    }
    
  };

  const onChangeAttribute = (value) => {
    console.log(value);
    setCheckBoxChecked(value);
  };

  return (
    <div>
      <div
        style={{
          color: '#9ac035',
          fontSize: 30,
          paddingBottom: 10,
          paddingTop: 10,
          paddingLeft: 10
        }}
      >
      Preferred Store : {store2}

      </div>
      <div>
        <div style={{ paddingLeft: 20, paddingBottom: 10 }}>
          DELIVERY SERVICE
        </div>

        {storeDelivery &&
          map(storeDelivery.facilitiesDeliveryOrPickup, (option) => (
            <Checkbox
              key={option.facilityDtl.facilityName}
              option={option.facilityDtl}
              className="mb-4"
              id="checkbox-1"
              value={selected}
              label={option.facilityDtl.facilityName}
              style={{ paddingBottom: 10, marginLeft: 50, paddingTop: 5 }}
              onClick={() =>  handleFacilityChange(option.facilityDtl.facilityName)}
            />
          ))}
      </div>
      <div>
        <div style={{ paddingLeft: 20, paddingBottom: 10 }}>
          STORE PICK UP SERVICE
        </div>
        {storePickup &&
          map(storePickup.facilitiesPickup, (option) => (
            <Checkbox
              key={option.facilityDtl.facilityName}
              option={option.facilityDtl}
              style={{ paddingBottom: 10, marginLeft: 50, fontWeight: 'bold' }}
              className="mb-4"
              id="checkbox-1"
              value={selected}
              label={option.facilityDtl.facilityName}
              onClick={() => handleFacilityChange(option.facilityDtl.facilityName)}
            />
          ))}
      </div>
    </div>
  );
};

StoreLocator.propTypes = {
  onFacilityChange: PropTypes.func
};

StoreLocator.defaultProps = {
  onFacilityChange: () => {}
};
