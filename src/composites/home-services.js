import { ChevronRightIcon } from '@heroicons/react/solid';
import {
  shopNavigation1,
  shopNavigation2,
  servicesNavigation
} from 'data/shopNavigation';
import { useState, useEffect } from 'react';
import { inStoreServices } from 'services/storeServices';
import pharmacyIcon from 'assets/icons/services-icon-pharmacy@2x.png';
import flowerIcon from 'assets/icons/services-icon-flower@2x.png';
import coffeeIcon from 'assets/icons/services-icon-coffee@2x.png';
import convenienceIcon from 'assets/icons/services-icon-convenience@2x.png';
import cakesIcon from 'assets/icons/services-icon-cakes@2x.png';
import lotteryIcon from 'assets/icons/services-icon-lottery@2x.png';
import carWashIcon from 'assets/icons/carwash.png';
import cashNCarryIcon from 'assets/icons/CashCarryFloral.png';
import cateringIcon from 'assets/icons/Catering.png';
import dryCleaningIcon from 'assets/icons/Drycleaning.png';
import DunnCoffeeIcon from 'assets/icons/Dunn BrothersCoffee.png';
import expressGasIcon from 'assets/icons/ExpressGasStation.png';
import groceryDeliveryIcon from 'assets/icons/Grocerydelivery.png';
import liquorStoreIcon from 'assets/icons/Liquorstore.png';
import postOfficeIcon from 'assets/icons/postoffice.png';
import ebtIcon from 'assets/icons/EBTforCurbside.png';
import moneyIcon from 'assets/icons/services-icon-money@2x.png';
import postageIcon from 'assets/icons/services-icon-postage@2x.png';
import { CookiesAge } from 'apiConfig';
import { grocery } from 'services/groceryTree';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const HomeServices = (props, onDepartChange4) => {
  const { store, stores, ...rest } = props;
  const [cookies, setCookie, removeCookie] = useCookies();
  const { facility, dept } = cookies;
  const [selected, setSelected] = useState(facility);
  const [services, setServices] = useState([]);
  const [data2, setData2] = useState();
  const [selected2, setSelected2] = useState(dept);
  const navigate = useNavigate();

  const facilityStoremapping = {
    605: 2029,
    500: 2032,
    604: 2038,
    603: 2042,
    600: 2046,
    2005: 2029
  };



  useEffect(() => {
    if (facility) {
      inStoreServices(facilityStoremapping[store?.facilityId]
        ? facilityStoremapping[
          store?.facilityId]?.toString()
        : facility.facilityId
      )
        .then((response) => response.json())
        .then((data => {
          if (data?.response?.services) {
            setServices(data.response.services);
          }
        }))
      console.log("RESPONSE", services)
    }
  }, [facility]);

  useEffect(() => {
    grocery(4433).then((res) => {
      setData2(res.data);
    });
  }, []);

  const handleDeptChange4 = (option) => {
    removeCookie('subdept');
    setSelected2(option);
    setCookie('dept', option, {
      path: '/',
      maxAge: CookiesAge
    });
  };

  return (
    <div className="bg-yellow-100 p-4 md:p-6">
      <div className="flex flex-col mb-5 lg:items-end lg:flex-row lg:space-x-10">
        <div className="font-serif text-lg tracking-widest uppercase mb-2 lg:mb-0">
          At Your Store
        </div>
        <div className="flex-1 mb-2 lg:mb-0">
        </div>
        <div>
          <a>
            <span className="flex items-center">
              <span>More From Your Store</span>
              <ChevronRightIcon className="h-5 w-5 ml-2" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="bg-white rounded-sm overflow-hidden col-span-2 p-5 md:p-6">
          <div className="grid grid-cols-1 space-y-2 md:grid-cols-2 md:space-y-0">
            <ul className="list-none space-y-2" >
              {shopNavigation1.map((option) => (
                <li key={option.name} onClick={() => handleDeptChange4(option.name)}>
                  {option.href && <a href={option.href}>{option.name}</a>}
                  {!option.href && <span>{option.name}</span>}
                </li>
              ))}
            </ul>
            <ul className="list-none space-y-2" >
              {shopNavigation2.map((option) => (
                <li key={option.name} onClick={() => handleDeptChange4(option.name)}>
                  {option.href && <a href={option.href}>{option.name}</a>}
                  {!option.href && <span>{option.name}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative hidden rounded-sm overflow-hidden bg-white h-64 md:block lg:h-auto">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1588347818036-558601350947?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
        <div className="relative hidden rounded-sm overflow-hidden bg-white h-64 md:block lg:h-auto">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1506617564039-2f3b650b7010?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col mt-6 mb-5 lg:items-end lg:flex-row lg:space-x-10">
        <div
          target="_blank"
          rel="noreferrer"
          id="Services"
          className="font-serif text-lg tracking-widest uppercase align-items-center justify-content-center text-center"

        >
          In Store Services
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-1 xl:grid-cols-9 text-center">
        {services.map((item) => (
          <div id="text" className="flex flex-col items-center" key={item.name}>
            <div style={{ marginLeft: 10 }} >
              {item === 'Floral Shop' ? (
                <img className="w-20 h-20" src={flowerIcon} alt="" />
              ) : null}
              {item === 'Curbside Pickup' ? (
                <img className="w-20 h-20"
                  src={moneyIcon} alt="" />
              ) : null}
              {item === 'Grocery Delivery' ? (
                <img className="w-20 h-20" src={groceryDeliveryIcon} alt="" />
              ) : null}
              {item === 'Post Office' ? (
                <img className="w-20 h-20" src={postageIcon} alt="" />
              ) : null}
              {item === 'Dry Cleaning' ? (
                <img className="w-20 h-20" src={dryCleaningIcon} alt="" />
              ) : null}
              {item === 'Catering' ? (
                <img className="w-20 h-20" src={cateringIcon} alt="" />
              ) : null}
              {item === 'Dunn Brothers Coffee' ? (
                <img className="w-20 h-20" src={DunnCoffeeIcon} alt="" />
              ) : null}
              {item === 'Caribou Coffee' ? (
                <img className="w-20 h-20" src={coffeeIcon} alt="" />
              ) : null}
              {item === 'Convenience Stores' ? (
                <img className="w-20 h-20" src={convenienceIcon} alt="" />
              ) : null}
              {item === `Coborn's Express Gas Station` ? (
                <img className="w-20 h-20" src={convenienceIcon} alt="" />
              ) : null}
              {item === 'Gas Station' ? (
                <img className="w-20 h-20" src={expressGasIcon} alt="" />
              ) : null}
              {item === 'Custom Cake Orders' ? (
                <img className="w-20 h-20" src={cakesIcon} alt="" />
              ) : null}
              {item === "Pharmacy" ? (
                <img className="w-20 h-20" src={pharmacyIcon} alt="" />
              ) : null}
              {item === "Liquor Store" ? (
                <img className="w-20 h-20" src={liquorStoreIcon} alt="" />
              ) : null}
              {item === "Liquor" ? (
                <img className="w-20 h-20" src={liquorStoreIcon} alt="" />
              ) : null}
              {item === "Little Dukes Gas Station" ? (
                <img className="w-20 h-20" src={expressGasIcon} alt="" />
              ) : null}
              {item === 'Cash-N-Carry Floral' ? (
                <img className="w-20 h-20" src={cashNCarryIcon} alt="" />
              ) : null}
              {item === 'Floral Dept' ? (
                <img className="w-20 h-20" src={flowerIcon} alt="" />
              ) : null}
              {item === 'Floral Department' ? (
                <img className="w-20 h-20" src={flowerIcon} alt="" />
              ) : null}
              {item === 'EBT On Curbside Pickup' ? (
                <img className="w-20 h-20" src={ebtIcon} alt="" />
              ) : null}
              {item === 'Car Wash' ? (
                <img className="w-20 h-20" src={carWashIcon} alt="" />
              ) : null}
            </div>
            <div className="text-sm">{item}</div>
            <a className="text-xs" href='#'>Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
