/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from 'react';
import {
  HeartIcon,
  PlusIcon,
  ClipboardListIcon
} from '@heroicons/react/outline';
import { Menu, Transition } from '@headlessui/react';
import { addList, saveListItem } from 'services/mylist';
import Button from 'components/button/button';

const Favorite = (props) => {
  const { showLabel = false, item, listItems } = props;
  const [list, setList] = useState('');
  const [formOpen, setForm] = useState(false);

  const saveListItemMethod = async (each) => {
    await saveListItem(item.productId, {
      listId: each.id,
      itemText: item.productName
    });
  };

  const createList = async (description) => {
    const userListRes = await addList({ description });
  };

  return (
    <button className="block">
      <Menu
        as="div"
        className="relative inline-block text-left"
        // style={{ zIndex: 99 }}
      >
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium  rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <ClipboardListIcon className="h-6 w-6 text-gray-400" />
          {showLabel && <span className="ml-2">Add to List</span>}
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            style={{ zIndex: 9999 }}
            className="absolute list-position w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div className="px-1 py-1 ">
              <ul className="list-none pl-3">
                {listItems.map((each) => (
                  <li>
                    <label className="bsw-checkbox">
                      <input
                        type="checkbox"
                        id="dmListId48920"
                        onClick={() => saveListItemMethod(each)}
                      />
                      <span className="bsw-checkbox-placeholder"></span>
                      <span
                        className="bsw-checkbox-label"
                        name="customListName"
                      >
                        {each.description}
                      </span>
                    </label>
                  </li>
                ))}
                <li>
                  <a className="flex items-center text-sm py-1 hover:underline">
                    <HeartIcon
                      className="h-5 w-5 text-gray-300 transform"
                      aria-hidden="true"
                    />
                    <span className="block flex-1 pl-1">Favorites</span>
                  </a>
                </li>
              </ul>

              <ul className="list-none py-2 m-0 border-t border-gray-100">
                {!formOpen && (
                  <li>
                    <a className="bsw-dropmenu-new-list-link">
                      <PlusIcon
                        className="h-5 w-5  transform"
                        aria-hidden="true"
                        onClick={() => setForm(true)}
                      />
                      <span className="ml-2">Create New List</span>
                    </a>
                  </li>
                )}
                {formOpen && (
                  <li>
                    <div className="flex items-center text-sm py-1 hover:underline">
                      <div>
                        <input
                          name="list-input"
                          id="list-input"
                          type="text"
                          onChange={(event) => setList(event.target.value)}
                        />
                        <Button
                          style={{ marginTop: 5, marginLeft: 50 }}
                          className="cbn-item__view-button group-hover:visible group-focus-within:visible"
                          label="Create"
                          onClick={async () => {
                            if (list) {
                              await createList(list);
                              setForm(false);
                            }
                          }}
                        />
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </button>
  );
};

export default Favorite;
