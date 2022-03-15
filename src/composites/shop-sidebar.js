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
import { Popover,  Transition } from '../../node_modules/@headlessui/react/dist/index';



const ShopSidebar = (onSubDeptChange, onDepartChange3) => {
  const navigate = useNavigate()
  const [cookies, setCookie] = useCookies();
  const [data, setData] = useState();
  const { facility, dept, subdept } = cookies;
  const [selected, setSelected] = useState(subdept);
  const [selected2, setSelected2] = useState(dept);
  const [data2, setData2] = useState()



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
  }, [onSubDeptChange,]);


  const handleSubDept = (option) => {
    setSelected(option);
    setCookie('subdept', option, {
      path: '/',
      maxAge: 1
    });
  };

  const handleDeptChange3 = (option2) => {
    setSelected2(option2);
    setCookie('dept', option2, {
      path: '/',
      maxAge: CookiesAge
    });
  };

  useEffect(() => {
    grocery(4433).then((res) => {
      setData2(res.data);
      console.log('HEADER DEPARTMENT STORAGE', data2)
    });
  }, []);

  
  const tree = () => {
    return (
      <div className="list-none pl-3">
      <div>
        <div>
          <div  >   
          {map(data, (option)=> ( 
            <div onClick={() => navigate("/search?text=" + option.description)}>
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
                  <Popover className="flex-1" aria-label="Sidebar Navigation">
                      {({open}) => {
                        return (
                          <Fragment >
                            <Popover.Button >
                              <button style={{marginBottom: -15, fontWeight: 'bold'}} className="flex items-center text-sm py-1 hover:underline">{dept}</button>
                              <ChevronDownIcon
                                className="h-5 w-5 text-gray-300 transform"
                                aria-hidden="true"
                                style={{marginLeft: 200, top: 5}}
                              />                    
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
                                className="absolute -ml-0 mt-1 absolute border shadow-lg "

                                style={{ 
                                  zIndex: 9999, 
                                  backgroundColor: "white", 
                                  borderRadius: 20,  
                                  width: 225, 
                                  height: 520,                  
                                }}
                                  >
                                <ul>
                                  {map(data2, (option2) => (
                                    <li onClick={() => handleDeptChange3(option2.description)}>
                                      <button onClick={() => navigate("/search?text=" + option2.description)} style={{ paddingLeft: 20, paddingTop: 3,}} className="flex items-center text-sm py-1 hover:underline" >{option2.description}</button>
                                    </li>
                                  ))}
                                </ul>                      
                                </Popover.Panel>                                                                
                              </Transition>                                                
                            </Fragment>
                          )           
                        }}
                      </Popover>
                  <ul className="list-none py-2 m-0 border-t border-gray-100">
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-sm py-1 hover:underline"
                      >
                        <span className="block flex-1">{dept}</span>                   
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
                        href="https://coborns.ourbrandfamily.com/"
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
  onSubDeptChange: PropTypes.func,
  onDepartChange3: PropTypes.func
};


ShopSidebar.defaultProps = {
  onSubDeptChange: () => {},
  onDepartChange3: () => {}
};


export default ShopSidebar;



