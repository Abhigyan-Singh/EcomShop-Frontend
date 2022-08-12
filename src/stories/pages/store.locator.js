import { Fragment, useState, useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { CookiesAge } from 'apiConfig';
import { allStores } from 'services/facilities';
import { map } from 'lodash';
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
import { facilityStoremapping } from 'app/app';
 
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
  const { className, onFacilityChange, store} = props
  const [stores, setStores] = useState([]);
  const [storeDelivery, setStoreDelivery] = useState([]);
  const [cookies, setCookie] = useCookies();
  const { facility, dept, user, userInfo } = cookies;
  const [selected, setSelected] = useState(facility);
  const [selectedFacility, setFacility] = useState(cookies?.facility?.facilityName);
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
      setStores(res.data);
      console.log("NEW", res.data)
    });
  }, );

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
    //'map' refers to a <div> element with the ID map
    // L.mapquest.key = 'Gmjtd|luu2206zn9,8g=o5-lz2s1';
    //  var map = L.mapquest.map('map', {
    //       center: [45.23389900, -93.66082100],
    //       layers: L.mapquest.tileLayer('map'),
    //       zoom: 12
    //     });
    //     map.addControl(L.mapquest.control());
    let map = L.map('map', {
      center: [45.23389900, -93.66082100],
      zoom: 10
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }, [])
  
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
  },[])  

  const List = () => {
    return (
      <div>
        <ul>
          <li>
          {stores &&
            map(stores, (option, index) => (
            <Card style={{
              maxWidth: "100%",
              border: "1px solid",
              padding: 10,
              marginBottom: 10,
              boxShadow: 1,
              paddingBottom: 5, 
              paddingTop: 5, 
              paddingLeft: 10, 
              paddingRight: 10
            }} >
              <CardContent>
                <Typography variant="h5" component="div" target="_blank" rel="noreferrer">
                  <a
                    href={`https://www.coborns.com/Cobstore${facilityStoremapping[store?.facilityId]
                    ? facilityStoremapping[
                      store?.facilityId]?.toString()
                    : store?.facilityId?.toString()
                    }`}
                  >
                    {option.facilityName}
                  </a>
                </Typography>
                <Typography variant="body1" component="div" style={{ paddingTop:20 }}>
                  {option.address1}, {option.state} {option.zipCode}
                </Typography>
                <Typography variant="body1" component="div" style={{ paddingTop:20 }}>
                  <a href={`tel:${option.phoneNumber}`}>Store: {option.phoneNumber}</a>
                </Typography>
                <Typography variant="body1" component="div">
                  <a href={`tel:${option.customerRelationsPhone}`}>Customer Relations : {option.customerRelationsPhone}</a>
                </Typography>
                <Typography variant="body1" component="div" style={{ paddingTop:20 }}>
                  <div id="yext-facility-hours-getter" />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component="div">Shop This Store</Button>
              </CardActions>
            </Card>
          ))}
          </li>
        </ul>
      </div>
    )
  }

  const position = [45.23389900, -93.66082100]  
  return (
    <div>
      <Locator preStore={selectedFacility}/>
      <div  style={{fontSize: 30,  backgroundColor: "rgba(44, 107, 44, 0.5)"}}>Store Locator</div>
      <div style={{display:"flex", flexDirection: "row", height: "100vh",}}> 
      <div style={{width: "25vw", overflowX: "hidden", overflowY: "auto", paddingBottom: 10, paddingTop: 5, paddingLeft: 5, paddingRight: 5}}>
        <input style={{
          width: "33vw", 
          height: 50,
          backgroundColor: 'white',
        }} 
        placeholder={"Zip Code, City, State, or Store Name"}/>
        <List/>
      </div>
      <div id="map" style={{width: "75vw"}}>
      </div>
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
