import { Fragment, useState, useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { CookiesAge } from 'apiConfig';
import { allStores } from 'services/facilities';
//import { map } from 'lodash';
import PropTypes from 'prop-types';
import { Transition, Popover, Dialog} from '@headlessui/react';
import Radio from 'components/radio/radio';
import Locator from 'components/locator/locator';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet'
import qs from 'qs'
import axios from 'axios'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { searchFacilities } from 'services/store.locator.facilities'

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
  const [store, setStore] = useState([]);
  const [storeDelivery, setStoreDelivery] = useState([]);
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
          facility : facility.faciltyId
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
  }

  useEffect(() => {
    searchFacilities(2031).then((res) => {
      setStore(res.data);
      console.log("NEW", res.data)
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
    if ( user && selected) {
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
  
  },)

  const onChange = (option) => {
    setFacility(option.facilityDtl.facilityName)
    setSelected2(option.facilityDtl)
  }
  
  useEffect(() => {
    if (!facility) {
      alert("please go back and select a store")
    }
  }, )

  useEffect(() => {
    let map = L.map('map', {
      center: [45.23389900, -93.66082100],
      zoom: 10
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

  }, [])
  
    //'map' refers to a <div> element with the ID map
    // L.mapquest.key = 'Gmjtd|luu2206zn9,8g=o5-lz2s1';
    // L.mapquest.open = true;
    // L.mapquest.map('map', {
    //   center: [45.23389900, -93.66082100],
    //   layers: L.mapquest.tileLayer('map'),
    //   zoom: 12
    // });

  // const List = () => {
  //   return (
  //     <div>
  //       <ul>
  //         <li>
  //         {store &&
  //           map(store, (option, index) => (
  //           <Card style={{ maxWidth: "25%", borderBottomWidth: 1, borderBottomColor: 'black' }}>
  //             <CardContent>
  //               <Typography variant="h5" component="div">
  //                 {option.facilityName}
  //               </Typography>
  //               <Typography variant="body2" style={{ paddingTop:20 }}>
  //                 {option.address1}, {option.state} {option.zipCode}
  //               </Typography>
  //               <Typography variant="body2" style={{ paddingTop:20 }}>
  //                 Store: {option.phoneNumber}
  //               </Typography>
  //               <Typography variant="body2">
  //                 Customer Relations : {option.customerRelationsPhone}
  //               </Typography>
  //               <Typography variant="body2" style={{ paddingTop:20 }}>
  //                 <div id="yext-facility-hours-getter" />
  //               </Typography>
  //             </CardContent>
  //             <CardActions>
  //               <Button size="small">Shop This Store</Button>
  //             </CardActions>
  //           </Card>
  //         ))}
  //         </li>
  //       </ul>
  //     </div>
  //   )
  // }

  const setHoursHtml = () => {
    if (
      document.getElementById('yext-facility-hours-getter') &&
      document.getElementById('yext-facility-hours-setter')
    ) {
      document.getElementById('yext-facility-hours-getter').innerHTML =
      document.getElementById('yext-facility-hours-setter').innerHTML;
    }
  };

  useEffect(() => {
    setHoursHtml()
  }, [])

  const position = [45.23389900, -93.66082100]  
  return (
    <div>
      <Locator preStore={selectedFacility} />
      <input style={{height: 50, width:"25%"}}></input>
      <div id="map" style={{width: 500, height: 500}}></div>
      
    </div>
  );
};

StoreLocator.propTypes = {
  onFacilityChange: PropTypes.func
};

StoreLocator.defaultProps = {
  onFacilityChange: () => {}
};
