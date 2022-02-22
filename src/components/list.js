import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import {
  ChevronLeftIcon,
  ChevronDownIcon,
  SwitchHorizontalIcon,
  HeartIcon,
  PlusIcon,
  DocumentDupl,
  DotsVerticalIcon
} from '@heroicons/react/solid';
import Button from 'components/button/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { addList, getAllList } from 'services/mylist';
import './list.css';

export default function List({ isCustomListItem, fetchListItems }) {
  const [menu, setMenu] = useState([]);
  const [list, setList] = useState('');
  const [listActionType, setListActionType] = useState('default');
  const { location } = useLocation();
  let defaultOption = 'Previously Purchased';
  if (window.location.pathname === '/favorites') {
    defaultOption = 'Favorites';
  }
  const [selected, setSelected] = useState(defaultOption);
  const [formOpen, setForm] = useState(false);
  const navigate = useNavigate();

  const getUserList = async () => {
    const userListRes = await getAllList();
    setMenu(userListRes.data);
  };

  const createList = async (description) => {
    const userListRes = await addList({ description });
  };

  useEffect(() => {
    getUserList();
  }, []);

  const handleSelect = (selectedMenu) => {
    if (selectedMenu === 'Favorites') {
      navigate('/favorites', { state: selectedMenu });
      setSelected(selectedMenu);
    } else if (selectedMenu === 'Previously Purchased') {
      navigate('/dispmyshoppinglistdetails', { state: selectedMenu });
      setSelected(selectedMenu);
    } else {
      setSelected(selectedMenu.description);
      if (fetchListItems) {
        fetchListItems(selectedMenu);
      } else {
        navigate('/shop-list-items', { state: selectedMenu });
      }
    }
  };

  return (
    <div>
      <div className="my-list-container">
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
                          <li
                            onClick={() => handleSelect('Previously Purchased')}
                          >
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
                              <span className="block flex-1 pl-1">
                                Favorites
                              </span>
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
                                <span className="block flex-1 pl-1">
                                  {menu.description}
                                </span>
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
                          <a className="bsw-dropmenu-new-list-link" href="#">
                            <PlusIcon
                              className="h-5 w-5 transform"
                              aria-hidden="true"
                            />
                            <span className="ml-2">Create</span>
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
                              label="Create"
                              onClick={async () => {
                                if (list) {
                                  // menu.unshift(list);
                                  // setMenu(menu);
                                  // setList(list);
                                  // setSelected(menu)
                                  await createList(list);
                                  getUserList();
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
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
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
              <Menu.Items className="absolute right-10 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  {listActionType === 'default' && isCustomListItem && (
                    <ul className="list-none py-2 m-0 border-b border-gray-100">
                      <li>
                        <a className="bsw-dropmenu-new-list-link" href="#">
                          <span className="ml-2">Delete List</span>
                        </a>
                      </li>
                    </ul>
                  )}
                  {listActionType === 'copyExist' && (
                    <ul className="list-none pl-3">
                      {menu.map((list) => (
                        <li>
                          <label class="bsw-checkbox">
                            <input
                              type="checkbox"
                              id="dmListId48920"
                              onclick="bswListsGrid.addItemToShoppingList('48920', '1047055')"
                            />
                            <span className="bsw-checkbox-placeholder"></span>
                            <span
                              className="bsw-checkbox-label"
                              name="customListName"
                            >
                              {list.description}
                            </span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  )}
                  <ul className="list-none pl-3">
                    {listActionType === 'default' && (
                      <li onClick={() => setListActionType('copyExist')}>
                        <a className="bsw-dropmenu-new-list-link" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                          <span
                            className="bsw-checkbox-label"
                            name="customListName"
                          >
                            Copy to Existing List
                          </span>
                        </a>
                      </li>
                    )}
                    {(listActionType === 'default' ||
                      listActionType === 'copyExist') && (
                      <li onClick={() => setListActionType('copyNew')}>
                        <a className="bsw-dropmenu-new-list-link" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                          <span
                            className="bsw-checkbox-label"
                            name="customListName"
                          >
                            Copy to New List
                          </span>
                        </a>
                      </li>
                    )}
                  </ul>
                  {listActionType === 'default' && isCustomListItem && (
                    <ul className="list-none py-2 m-0 border-t border-gray-100">
                      <li>
                        <a className="bsw-dropmenu-new-list-link" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                          <span className="ml-2">Rename</span>
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <p style={{ marginLeft: 30, marginRight: 10 }}>
        Your Previously Purchased list includes all items from your past 12
        orders, sorted by category. It is an ever-changing list that is updated
        every time you shop, and the best place to find items you purchase
        regularly. You cannot add or remove items from this list.
        <a href="#" style={{ whiteSpace: 'noWrap' }}>
          Learn More
        </a>
      </p>
      <span style={{ marginLeft: 
        30, marginRight: 10 }} className="page-head-left-store-name display-block">
        <span>
          Currently displaying your Previously Purchased List for St. Cloud, MN
          Cooper Ave.
        </span>
        <div className="inline-block">
          <div className="info-tooltip-wrap content-underline">
            Why are not all items available at this store?
          </div>
          {/* <div className="info-tooltip block">
            <span>
              Product selection varies between store locations and some items
              may not be available if you are currently shopping a different
              store from where this item was previously purchased.
            </span>
          </div> */}
        </div>
      </span>
    </div>
  );
}