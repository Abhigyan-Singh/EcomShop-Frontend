import { Fragment, useState, useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { CookiesAge } from 'apiConfig';
import { allStores } from 'services/facilities';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import { Transition, Popover, Dialog } from '@headlessui/react';
import Radio from 'components/radio/radio';
import Locator from 'components/locator/locator';
import { useNavigate } from 'react-router-dom';
import qs from 'qs'
import axios from 'axios'

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
  const { className, onFacilityChange } = props
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
  const [center, setCenter] = useState([50.879, 4.6997])
  const [zoom, setZoom] = useState(11)
  // facility update

  // update root 

  //

  const updateDefaultFacility = () => {
    axios({
      method: 'put',
      url: `http://localhost:8009/customer/${user.userName}/facility`,
      data: qs.stringify({
        facility: facility.faciltyId
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
  }

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

  const handleYesClick = (selected) => {
    if (user && selected) {
      handleFacilityChange(selected)
      window.scrollTo(0, 0)
    }
  }
  const handleSaveClick = () => {
    setIsOpen(true)
    updateDefaultFacility()
  }

  const [selected2, setSelected2] = useState()
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    console.log("STORE.LOCATER SELECTED", selectedFacility)
    console.log("STORE.LOCATER Cookies", cookies)

  })

  const onChange = (option) => {
    setFacility(option.facilityDtl.facilityName)
    setSelected2(option.facilityDtl)
  }

  useEffect(() => {
    if (!facility) {
      alert("please go back and select a store")
    }
  })


  // //'map' refers to a <div> element with the ID map
  // const map = () => {
  //   window.onload = function () {
  //     console.log("STARTED")
  //     L.mapquest.key = 'Gmjtd|luu2206zn9,8g=o5-lz2s1';
  //     var map = L.mapquest.map('map', {
  //       center: [37.7749, -122.4194],
  //       layers: L.mapquest.tileLayer('map'),
  //       zoom: 7
  //     });
  //     map.addControl(L.mapquest.control());
  //   }
  // }


  return (
    <div>
      <Locator preStore={selectedFacility} />
      <div>
        <div>

        </div>
        <body>
          <div id='map' style={{ width: "50%", height: "530px" }}></div>
        </body>
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
                paddingRight: 9
              }}
              className="flex"
            > Preferred Store
              <Popover.Button
                onMouseEnter={() => onHover(open, "onMouseEnter")}
                onMouseLeave={() => onHover(open, "onMouseLeave")}
                ref={buttonRef}
                type="button"
                onClick={() => handleClick(open)}
                style={{ marginLeft: 15, paddingTop: 5 }}
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
      </div>
      <div>
        <div style={{ paddingLeft: 20, paddingBottom: 10 }}>
          DELIVERY SERVICE
        </div>
        {storeDelivery &&
          map(storeDelivery.facilitiesDeliveryOrPickup, (option, index) => (
            <Radio
              className="mb-4"
              id="checkbox-1"
              key={option.facilityDtl.facilityName}
              label={option.facilityDtl.facilityName}
              style={{ paddingBottom: 10, marginLeft: 50, paddingTop: 5 }}
              checked={option.facilityDtl.facilityName == selectedFacility}
              onChange={() => onChange(option)}
            />
          ))}
      </div>
      <div>
        <div style={{ paddingLeft: 20, paddingBottom: 10 }}>
          STORE PICK UP SERVICE
        </div>
        {store &&
          map(store.facilitiesPickup, (option, index) => (
            <Radio
              className="mb-4"
              id="checkbox-1"
              key={option.facilityDtl.facilityName}
              label={option.facilityDtl.facilityName}
              style={{ paddingBottom: 10, marginLeft: 50, fontWeight: 'bold' }}
              checked={option.facilityDtl.facilityName == selectedFacility}
              onChange={() => onChange(option)}
            />
          ))}
      </div>
      <div >
        <>
          <div style={{ paddingBottom: 20, paddingLeft: 10 }} className="flex justify-left">
            <button
              type="button"
              onClick={() => {
                navigate('/')
                window.scrollTo(0, 0)
                setIsOpen(false)
              }}
              style={{
                width: 190,
                height: 40,
                borderRadius: 7,
                backgroundColor: '#9ac035',
                borderColor: '#9ac035',
                borderWidth: 3,
                fontSize: 20,
                marginLeft: 10
              }}>Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                handleSaveClick()
              }}
              style={{
                width: 190,
                height: 40,
                borderRadius: 7,
                backgroundColor: '#9ac035',
                borderColor: '#9ac035',
                borderWidth: 3,
                fontSize: 20,
                marginLeft: 30
              }}>Save
            </button>
          </div>
          <Transition.Root appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              onClose={() => setIsOpen(false)}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>
              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Overlay className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Save Successful
                      </Dialog.Title>
                      <div>
                        <p className="text-sm text-gray-500">
                          Your account change has been saved.
                          Do you want to navigate to your new preferred store now?
                        </p>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }} >
                        <button
                          onClick={() => {
                            setIsOpen(false)
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
                            marginTop: 20

                          }}>
                          NO
                        </button>
                        <button
                          onClick={() => {
                            handleYesClick(selected2)
                            setIsOpen(false)
                            navigate("/")
                          }}
                          style={{
                            width: 190,
                            height: 40,
                            borderRadius: 7,
                            backgroundColor: '#9ac035',
                            borderColor: '#9ac035',
                            borderWidth: 3,
                            fontSize: 20,
                            marginLeft: 20,
                            marginTop: 20
                          }}>
                          YES
                        </button>
                      </div>
                    </Dialog.Overlay>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </>
      </div>
    </div>
  );
};

StoreLocator.propTypes = {
  onFacilityChange: PropTypes.func
};

StoreLocator.defaultProps = {
  onFacilityChange: () => { }
};




