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
import moneyIcon from 'assets/icons/services-icon-money@2x.png';
import postageIcon from 'assets/icons/services-icon-postage@2x.png';
import { CookiesAge } from 'apiConfig';
import { grocery } from 'services/groceryTree';
import { useCookies } from 'react-cookie';


const HomeServices = (props, onDepartChange4) => {
  const { store, stores, ...rest } = props;
  const [cookies, setCookie] = useCookies();
  const { facility, dept } = cookies;
  const [selected, setSelected] = useState(facility);
  const [serv, setServ] = useState([]);
  const [data2, setData2] = useState();
  const [selected2, setSelected2] = useState(dept);
  

  useEffect(() => {
    servicesList();
  }, []);

  const servicesList = () => {
    if (selected) {
      inStoreServices(selected.facilityId).then((res) => {
        setServ(res.data);
      });
    }
  };

  useEffect(async () => {
    await grocery(4433).then((res) => {
      setData2(res.data);
    });
  }, []);
  

  const handleDeptChange4 = (option) => {
    setCookie('subdept', " ");
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
                <li key={option.name}  onClick={() => handleDeptChange4( option.name)}>
                  {option.href && <a href={option.href}>{option.name}</a>}
                  {!option.href && <span>{option.name}</span>}
                </li>
              ))}
            </ul>
            <ul className="list-none space-y-2" >
              {shopNavigation2.map((option) => (
                <li key={option.name} onClick={() => handleDeptChange4( option.name)} >
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
        <a
          href={`https://www.coborns.com/Cobstore${selected?.facilityId.toString()}`}
          target="_blank"
          rel="noreferrer"
          id="Services"
          className="font-serif text-lg tracking-widest uppercase"
        >
          In Store Services
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-3 text-center">
        {serv.map((item) => (
          <div id="text" className="flex flex-col items-center" key={item.name}>
            <div className="mb-2">
              {item.name === 'Flower Shoppe' ? (
                <img className="w-20 h-20" src={flowerIcon} alt="" />
              ) : null}

              {item.name === 'Coffee Shops' ? (
                <img className="w-20 h-20" src={coffeeIcon} alt="" />
              ) : null}

              {item.name === 'Convenience Stores' ? (
                <img className="w-20 h-20" src={convenienceIcon} alt="" />
              ) : null}

              {item.name === 'Custom Cakes' ? (
                <img className="w-20 h-20" src={cakesIcon} alt="" />
              ) : null}

              {item.name === 'Lottery' ? (
                <img className="w-20 h-20" src={lotteryIcon} alt="" />
              ) : null}

              {item.name === 'Money Orders' ? (
                <img className="w-20 h-20" src={moneyIcon} alt="" />
              ) : null}

              {item.name === 'Postage' ? (
                <img className="w-20 h-20" src={postageIcon} alt="" />
              ) : null}

              {item.name === "Coborn's Pharmacy" ? (
                <img className="w-20 h-20" src={pharmacyIcon} alt="" />
              ) : null}
            </div>
            <div className="text-sm">{item.name}</div>
            <div className="text-xs"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
