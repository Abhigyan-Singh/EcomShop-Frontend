import { ChevronDownIcon, ChevronRightIcon  } from '@heroicons/react/solid';
import { CheckboxStory } from 'stories/components/checkbox.stories';
import Checkbox from 'components/checkbox/checkbox';
import { useNavigate } from 'react-router-dom';
import React, { Fragment } from 'react';
import { Disclosure, Popover, Transition } from '@headlessui/react';


const ShopFilter = (props, args) => {
  const navigate = useNavigate();
  return (
    <div className="hidden lg:block">
      <div className="flow-root">
        <div className="flex items-center space-x-3">
          <div className="relative inline-block text-left">
          <Popover className="relative">
              {({open }) => {
                return (
                  <Fragment>
                    <Popover.Button
                        className="inline-flex justify-center text-sm font-medium px-2 py-1"
                        id="headlessui-popover-button-22"
                        type="button"
                        aria-expanded="false"
                      >
                        <span>Brand</span>
                        <span className="ml-1.5 rounded py-0.5 px-1.5 bg-green text-white text-xs tabular-nums cashwise:bg-merlot marketplace:bg-forest">
                          1
                        </span>
                        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
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
                      className="absolute -ml-0 mt-1"
                      style={{ zIndex: 9999 }}
                    > 
                    <div class="relative border shadow-lg p-4 bg-white rounded justify-center"
                        style={{
                        backgroundColor: 'rgb(255, 255, 255, 1)',
                        margin: -3,
                        color: 'black',
                        width: 135.85,
                        height: 124
                      }}
                    >
                    <Checkbox
                        {...args}
                        className="mb-5"
                        id="checkbox-1"
                        value="1"
                      />
                      <Checkbox {...args}  className="mb-5" id="checkbox-2" value="2" />
                      <Checkbox {...args}  cclassName="mb-2" id="checkbox-3" value="3" />        
                    </div>       
                    </Popover.Panel>
                  </Transition>
                </Fragment>
                )
              }}
            </Popover>
          </div>
          <div className="relative inline-block text-left">
            <Popover className="relative">
              {({open }) => {
                return (
                  <Fragment>
                    <Popover.Button
                      className="inline-flex justify-center text-sm font-medium px-2 py-1"
                      id="headlessui-popover-button-24"
                      type="button"
                      aria-expanded="false"
                      onClick={<Checkbox/>}
                      >
                      <span>Lifestyle &amp; Dietary</span>
                      <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
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
                      className="absolute -ml-0 mt-1"
                      style={{ zIndex: 9999 }}
                    > 
                    <div class="relative border shadow-lg p-4 bg-white rounded justify-center"
                        style={{
                        backgroundColor: 'rgb(255, 255, 255, 1)',
                        margin: -3,
                        color: 'black',
                        width: 182.25,
                        height: 124
                      }}
                    >
                    <Checkbox
                        {...args}
                        className="mb-5"
                        id="checkbox-1"
                        value="1"
                      />
                      <Checkbox {...args}  className="mb-5" id="checkbox-2" value="2" />
                      <Checkbox {...args}  cclassName="mb-2" id="checkbox-3" value="3" />        
                    </div>       
                    </Popover.Panel>
                  </Transition>
                </Fragment>
                )
              }}
            </Popover>
          </div>
          <div className="relative inline-block text-left">
          <Popover className="relative">
              {({open }) => {
                return (
                  <Fragment>
                    <Popover.Button
                      className="inline-flex justify-center text-sm font-medium px-2 py-1"
                      id="headlessui-popover-button-26"
                      type="button"
                      aria-expanded="false"
                      >
                      <span>New / Sale</span>
                      <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
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
                      className="absolute -ml-0 mt-1"
                      style={{ zIndex: 9999 }}
                    > 
                    <div class="relative border shadow-lg p-4 bg-white rounded justify-center"
                        style={{
                        backgroundColor: 'rgb(255, 255, 255, 1)',
                        margin: -3,
                        color: 'black',
                        width: 155.45,
                        height: 88
                      }}
                    >
                    <Checkbox
                        {...args}
                        className="mb-5"
                        id="checkbox-1"
                        value="1"
                      />
                      <Checkbox {...args}  className="mb-5" id="checkbox-2" value="2" />
                    </div>       
                    </Popover.Panel>
                  </Transition>
                </Fragment>
                )
              }}
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopFilter;
