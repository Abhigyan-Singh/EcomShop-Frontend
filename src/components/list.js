import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import {
  ChevronLeftIcon,
  ChevronDownIcon,
  SwitchHorizontalIcon,
  HeartIcon,
  PlusIcon,
  DocumentDupl
} from '@heroicons/react/solid';
import Button from 'components/button/button';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Example() {
  const [menu, setMenu] = useState([]);
  const [list, setList] = useState('');
  const { location } = useLocation();
  let defaultOption = 'Previously Purchased';
  if (window.location.pathname ==='/favorites') {
    defaultOption = 'Favorites'
  }
  const [selected, setSelected] = useState(
    location?.state || defaultOption || menu 
  );
  const [formOpen, setForm] = useState(false);
  const navigate = useNavigate();
  const handleSelect = (selectedMenu) => {
    setSelected(selectedMenu);
    if (selectedMenu === 'Favorites') {
      navigate('/favorites', { state: selectedMenu });
    }
    if (selectedMenu === 'Previously Purchased') {
      navigate('/dispmyshoppinglistdetails', { state: selectedMenu });
    }
    if(selectedMenu === menu){
      navigate (`/${menu}`, {state: selectedMenu});
    }
  };

  const handleCreateItemList = (selectedMenu) => {
    if(selectedMenu === 'Favorites'){
      console.log("List is already created")
    }
    if(selectedMenu ==='Previously Purchased'){
      console.log("List is already been created");
    }
    if(selectedMenu === ''){
      alert("Please provide one list name that you want to create")
    }
  }

  

  return (
    <div>
      <Menu
        as="div"
        className="relative inline-block text-left"
        style={{ zIndex: 99 }}
      >
        <div style={{ fontSize: 22 }}>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium  rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                clipRule="evenodd"
              />
            </svg>
            {'My List: '}
            {selected}
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-100 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <ul className="list-none py-2 m-0">
                <li>
                  <a
                    href="#"
                    className="flex items-center text-sm py-1 hover:underline"
                  >
                    <span className="block flex-1  text-gray-300">
                      My Lists
                    </span>
                  </a>
                  <ul className="list-none pl-3">
                    <Menu.Item>
                      <li onClick={() => handleSelect('Previously Purchased')}>
                        <a
                          href="#"
                          className="flex items-center text-sm py-1 hover:underline"
                        >
                          <span className="block flex-1 pl-1">
                            Previously Purchased
                          </span>
                        </a>
                      </li>
                    </Menu.Item>
                    <Menu.Item>
                      <li onClick={() => handleSelect('Favorites')}>
                        <a
                          href="#"
                          className="flex items-center text-sm py-1 hover:underline"
                        >
                          <HeartIcon
                            className="h-5 w-5 text-gray-300 transform"
                            aria-hidden="true"
                          />
                          <span className="block flex-1 pl-1">Favorites</span>
                        </a>
                      </li>
                    </Menu.Item>
                    {menu.map((menu) => (
                      <Menu.Item>
                        <li onClick={() => handleSelect(menu)}>
                          <a
                            href="#"
                            className="flex items-center text-sm py-1 hover:underline"
                          >
                            <span className="block flex-1 pl-1">{menu}</span>
                          </a>
                        </li>
                      </Menu.Item>
                    ))}
                  </ul>
                </li>
              </ul>
              <ul className="list-none py-2 m-0 border-t border-gray-100">
                {!formOpen && (
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-sm py-1 hover:underline"
                      onClick={() => setForm(true)}
                    >
                      <a
                          className="bsw-dropmenu-new-list-link"
                          href="#"
                        >
                          <PlusIcon   
                          className="h-5 w-5 transform"
                          aria-hidden="true"/>
                          <span className="ml-2" onClick={() => handleCreateItemList('Favorites')} >Create</span>
                        </a>
                    </a>
                  </li>
                )}
                {formOpen && (
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-sm py-1 hover:underline"
                    >
                      <div>
                        <input
                          name="list-input"
                          id="list-input"
                          onChange={(event) => setList(event.target.value)}
                          type="text"
                        />
                        <Button
                          style={{ marginTop: 5, marginLeft: 50 }}
                          className="cbn-item__view-button group-hover:visible group-focus-within:visible"
                          label="Createe"
                          onClick={() => {
                            if (list) {
                              menu.unshift(list);
                              setMenu(menu);
                              setList(list);
                              setSelected(menu)
                              setForm(false);
                            }
                          }}
                        />
                      </div>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
