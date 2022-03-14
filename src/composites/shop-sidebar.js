import {
  ChevronLeftIcon,
  ChevronDownIcon,
  SwitchHorizontalIcon,
  HeartIcon
} from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom'    
import React, { Fragment, useState, useEffect } from 'react';
import { grocery } from 'services/groceryTree';
import { useCookies } from 'react-cookie';
import { map } from 'lodash';
import { CookiesAge } from 'apiConfig';
import PropTypes from 'prop-types';


const ShopSidebar = (onSubDeptChange) => {
  const navigate = useNavigate()
  const [cookies, setCookie] = useCookies();
  const [data, setData] = useState();
  const { facility, dept, subdept } = cookies;
  const [selected, setSelected] = useState(subdept);



  useEffect(() => {
    if (dept === "Baby") {
      grocery(109791).then((res) => {
        setData(res.data);
      })
    } else if (dept === "Bakery") {
      grocery(109792).then((res) => {
        setData(res.data);
      })
    } else if (dept === "Butcher") {
      grocery(109793).then((res) => {
        setData(res.data);
      })
    } else if (dept === "Dairy") {
      grocery(109794).then((res) => {
        setData(res.data);
      })
    } else if (dept === "Deli") {
      grocery(109795).then((res) => {
        setData(res.data);
      })
    } else if (dept === "Floral") {
      grocery(109796).then((res) => {
        setData(res.data);
      })
    } else if (dept === "General Merchandise") {
      grocery(109797).then((res) => {
        setData(res.data);
      })
    } else if (dept === "Grocery") {
      grocery(109798).then((res) => {
        setData(res.data);
      })
    } else if (dept === "Frozen") {
      grocery(109799).then((res) => {
        setData(res.data);
      })
    } else if (dept === "Health & Beauty") {
      grocery(109800).then((res) => {
        setData(res.data);
      })
    } else if (dept === "Household & Laundry") {
      grocery(109801).then((res) => {
        setData(res.data);
      })
    } else if (dept === "Pet") {
      grocery(109802).then((res) => {
        setData(res.data);
      })
    } else if (dept === "Produce") {
      grocery(109803).then((res) => {
        setData(res.data);
      })
    } else if (dept === "Beer") {
      grocery(109804).then((res) => {
        setData(res.data);
      })
    } else if (dept === "Wine") {
      grocery(109805).then((res) => {
        setData(res.data);
      })
    } else if (dept === "Liquor") {
      grocery(109806).then((res) => {
        setData(res.data);
      })
    } else if (dept === "Tobacco") {
      grocery(109807).then((res) => {
        setData(res.data);
      })
    } else if (dept === "Floral") {
      grocery(109808).then((res) => {
        setData(res.data);
      })
    }
      console.log('SIDEBAR SUBCATE DATA', data)
      console.log("SUBDEPARTMENT COMING IN", subdept)
  }, [onSubDeptChange]);


  const handleSubDept = (option) => {
    setSelected(option);
    setCookie('subdept', option, {
      path: '/',
      maxAge: 1
    });
  };
  
  const tree = () => {
    return (
      <div className="list-none pl-3">
      <div>
        <div>
          <div  >   
          {map(data, (option)=> ( 
            <div >
              <button style={{justifyContent: 'right'}} className="flex items-center text-sm py-1 hover:underline" onClick={() => handleSubDept(option.description)} >
                {option.description}
              </button>  
            </div>
          ))}                            
          </div>
        </div>
      </div>
    </div>
    )  
  };
  
  function refreshPage() {
    window.location.reload(false);
  }




  return (
    <div className="flex">
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex-1 flex flex-col py-5 overflow-y-auto">
              <div className="flex-1 flex flex-col px-5 border-r">
                <div className="flex-shrink-0 font-serif uppercase tracking-widest mb-4">
                  Departments
                </div>
                <nav className="flex-1" aria-label="Sidebar Navigation">
                  <ul className="list-none py-2 m-0 border-t border-gray-100">
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-sm py-1 hover:underline"
                      >
                        <ChevronLeftIcon
                          className="h-5 w-5 text-gray-300 transform"
                          aria-hidden="true"
                        />
                        <span className="block flex-1">All Departments</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="list-none py-2 m-0 border-t border-gray-100">
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-sm py-1 hover:underline"
                      >
                        <span className="block flex-1">{dept}</span>

                        <ChevronDownIcon
                          className="h-5 w-5 text-gray-300 transform"
                          aria-hidden="true"
                        />
                      </a>
                      {tree()}
                    </li>
                  </ul>


                  <ul className="list-none py-2 m-0 border-t border-gray-100">
                    <li>
                      <a
                        href="/dispmyshoppinglistdetails"
                        className="flex items-center text-sm py-1 hover:underline"
                      >
                        <SwitchHorizontalIcon
                          className="h-5 w-5 text-gray-300 transform"
                          aria-hidden="true"
                        />
                        <span className="block flex-1 pl-1">
                          Previously Purchased
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/favorites"
                        className="flex items-center text-sm py-1 hover:underline"
                      >
                        <HeartIcon
                          className="h-5 w-5 text-gray-300 transform"
                          aria-hidden="true"
                        />
                        <span className="block flex-1 pl-1">Favorites</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="list-none py-2 m-0 border-t border-gray-100">
                    <li>
                      <a
                        href="https://coborns.ourbrandfamily.com/"
                        className="flex items-center text-sm py-1 hover:underline"
                      >
                        <span className="block flex-1">Shop Local</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-sm py-1 hover:underline"
                      >
                        <span className="block flex-1">Our Brands</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shop.coborns.com/customcakes?&amp;locationCode=NAV_CATALOG`"
                        className="flex items-center text-sm py-1 hover:underline"
                      >
                        <span className="block flex-1">Custom Cakes</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-sm py-1 hover:underline"
                      >
                        <span className="block flex-1">Specials</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




ShopSidebar.propTypes = {
  onSubDeptChange: PropTypes.func
};


ShopSidebar.defaultProps = {
  onSubDeptChange: () => {}
};


export default ShopSidebar;
