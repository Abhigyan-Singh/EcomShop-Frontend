import { Fragment, useState, useEffect, useCallback, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { CookiesAge } from 'apiConfig';
import { allStores } from 'services/facilities';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Listbox, Transition, Popover } from '@headlessui/react';
import {
  CheckIcon,
  ChevronDownIcon,
  LocationMarkerIcon
} from '@heroicons/react/solid';
import itemStories from './item.stories';
import Checkbox from 'components/checkbox/checkbox';
import Radio from 'components/radio/radio';
import Locator from 'components/locator/locator';
import { userInfoService } from 'services/auth';
import { LabelRounded, Navigation, SelectAllRounded } from '../../../node_modules/@mui/icons-material/index';
import { useNavigate } from 'react-router-dom';




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
  const { className, onFacilityChange} = props
  const [store, setStore] = useState([null]);
  const [storeDelivery, setStoreDelivery] = useState([null]);
  const [cookies, setCookie] = useCookies();
  const { facility, dept, user, userInfo } = cookies;
  const [selected, setSelected] = useState(facility);
  const [selectedFacility, setFacility] = useState(cookies.facility.facilityName);
  const navigate = useNavigate();
  let timeout 
  const timeoutDuration = 100
  const buttonRef = useRef(null)
  const [openState, setOpenState] = useState(false)

  
  useEffect(() => {
    allStores(5).then((res) => {
      setStore(res.data);
    });
  }, []);

  useEffect(() => {
    allStores(7).then((res) => {
      setStoreDelivery(res.data);
    });
  }, []);
    
  const toggleMenu = (open) => {
    setOpenState((openState) => !openState)
    buttonRef?.current?.click()
  }

  const onHover = (open, action) => {
    if (
      (!open && !openState && action === "onMouseEnter") ||
      (open && openState && action === "onMouseLeave")
    ) {
      clearTimeout(timeout)
      timeout = setTimeout(() => toggleMenu(open), timeoutDuration)
    }
  }

  const handleClick = (open) => {
    setOpenState(!open) 
    clearTimeout(timeout) 
  }

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      event.stopPropagation()
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  })


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

  const handleSaveClick = (selected) => {
    if ( user && selected) {
      handleFacilityChange(selected)
      window.scrollTo(0, 0)
      navigate("/")
    } else if (!selected) {
      alert("Please select a store");
    } else {
      alert("Please login or create a new account");
    }
  }
  const handleOnChange = (option) => {
    
    handleSaveClick(option)
  }

  useEffect(() => {
    console.log("SELECTED", selectedFacility)
    console.log("COOKIES", cookies)
  }, )
  

  return (
    <div>
      <Locator preStore={selectedFacility} />
      <div>
        <Popover>
          {({ open }) => (
            <div
              href="#"
              style={{
                color: '#9ac035',
                fontSize: 20,
                paddingBottom: 10,
                paddingTop: 10,
                paddingLeft: 20,
                paddingRight: 10
              }}
              className="flex"
            > Preferred Store
              <Popover.Button
                onMouseEnter={() => onHover(open, "onMouseEnter")}
                onMouseLeave={() => onHover(open, "onMouseLeave")}
                ref={buttonRef}  
                type="button"
                onClick={() => handleClick(open)}
                style={{paddingLeft: 10,paddingTop: 5}}
                className="bg-white text-sm font-medium text-black hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                What does preferred store mean? 
              </Popover.Button>
              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel  
                  static
                  className="relative -ml-0 mt-1"
                  style={{ zIndex: 9999 }}>
                  <p
                    class="overflow-auto absolute border shadow-lg p-4 bg-white rounded justify-center"
                    style={{
                      backgroundColor: 'rgb(255, 255, 255, 1)',
                      margin: -3,
                      color: 'black',
                      width: 800,
                      height: 155
                    }}>
                    What does preferred store mean? Your preferred store
                    is intended to be the store you shop more frequently.
                    Your preferred store is selected during account sign
                    up or may be changed anytime in My Account. You may
                    shop stores other than your preferred store at any time.
                  </p>

                </Popover.Panel>
              </Transition>
            </div>
          )}
        </Popover>
        </div><div>
            <div style={{ paddingLeft: 20, paddingBottom: 10 }}>
              DELIVERY SERVICE
            </div>
            {storeDelivery &&
              map(storeDelivery.facilitiesDeliveryOrPickup, (option, index) => (
                <Radio
                  className="mb-4"
                  id="checkbox-1"
                  option={option.facilityDtl}
                  key={option.facilityDtl.facilityName}
                  label={option.facilityDtl.facilityName}
                  style={{ paddingBottom: 10, marginLeft: 50, paddingTop: 5 }}
                  checked={option.facilityDtl == selectedFacility}
                  onChange={() => {setFacility(option.facilityDtl)}}
                />
              ))}
          </div><div>
            <div style={{ paddingLeft: 20, paddingBottom: 10 }}>
              STORE PICK UP SERVICE
            </div>
            {store &&
              map(store.facilitiesPickup, (option, index) => (
                <Radio
                  className="mb-4"
                  id="checkbox-1"
                  option={option.facilityDtl}
                  key={option.facilityDtl.facilityName}
                  label={option.facilityDtl.facilityName}
                  style={{ paddingBottom: 10, marginLeft: 50, fontWeight: 'bold'}}
                  checked={option.facilityDtl == selectedFacility}
                  onChange={() => {setFacility(option.facilityDtl)}}/>
              ))}
          </div>
          <div style={{ paddingLeft: "1%", paddingTop: 10, paddingBottom: 25}}>
          <Popover>
            {({open}) => (
              <div>
                <button
                  onClick={() => {
                      navigate("/")
                      window.scrollTo(0, 0)
                    }}
                  style={{
                    width: 190,
                    height: 40,
                    borderRadius: 7, 
                    backgroundColor: '#9ac035',
                    borderColor: '#9ac035',
                    borderWidth: 3,
                    fontSize: 20
                  }}>Cancel
                </button>
                <Popover.Button
                  style={{
                    width: 190,
                    height: 40,
                    borderRadius: 7, 
                    backgroundColor: '#9ac035',
                    borderColor: '#9ac035',
                    borderWidth: 3,
                    fontSize: 20,
                    marginLeft: 25
                  }}>Save
                </Popover.Button>
                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel
                    style={{
                      width: 500,
                      height: 200,
                      borderRadius: 7, 
                      backgroundColor: 'light-grey',
                      borderColor: 'light-grey',
                      borderWidth: 3,
                      fontSize: 20,
                      marginRight: "50%",
                      alignItems: 'center',
                      justifyContent: 'center',
                      flex: 1,
                      paddingLeft: 10
                    }}
                  >
                    <p>
                      Your account change has been saved.
                      Do you want to navigate to your new preferred store now?
                    </p>
                      <button
                        onClick={() => {
                          handleSaveClick(selectedFacility)
                        }}
                        style={{
                        width: 190,
                        height: 40,
                        borderRadius: 7, 
                        backgroundColor: '#9ac035',
                        borderColor: '#9ac035',
                        borderWidth: 3,
                        fontSize: 20,
                        marginTop: 10,
                        marginLeft: 30
                        }}>
                          YES
                      </button>
                      <button
                        onClick={() => {
                          window.scrollTo(0, 0)
                        }}
                        style={{
                          width: 190,
                          height: 40,
                          borderRadius: 7, 
                          backgroundColor: '#9ac035',
                          borderColor: '#9ac035',
                          borderWidth: 3,
                          fontSize: 20,
                          marginTop: 10,
                          marginLeft:20 
                        }}>
                          NO
                      </button>
                  </Popover.Panel>
                </Transition>
              </div>  
            )}
          </Popover>
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
