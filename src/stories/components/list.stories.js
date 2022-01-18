import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import {
  ChevronLeftIcon,
  ChevronDownIcon,
  SwitchHorizontalIcon,
  HeartIcon,
  PlusIcon
} from '@heroicons/react/solid';
import Button from 'components/button/button';

export default function Example() {
  const [menu, setMenu] = useState([]);
  const [list, setList] = useState('');
  const [formOpen, setForm] = useState(false);
  return (
    <div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium  rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Options
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
                    <span className="block flex-1  text-gray-300">My List</span>
                  </a>
                  <ul className="list-none pl-3">
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-sm py-1 hover:underline"
                      >
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
                    {menu.map((menu) => (
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-sm py-1 hover:underline"
                        >
                          <span className="block flex-1 pl-1">{menu}</span>
                        </a>
                      </li>
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
                      <PlusIcon
                        className="h-5 w-5 text-gray-300 transform"
                        aria-hidden="true"
                      />
                      <span className="block flex-1 pl-1">Create</span>
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
                          onClick={() => {
                            if (list) {
                              menu.unshift(list);
                              setMenu(menu);
                              setList('');
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
