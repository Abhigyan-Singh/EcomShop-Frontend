import { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { ChevronRightIcon } from '@heroicons/react/solid';
import mainNavigation from 'data/mainNavigation';
import './mobile-nav.css';

const MobileNav = (props) => {
  const { open, onClose, ...rest } = props;

  const handleMobileNavClose = (event) => {
    if (typeof onClose === 'function') {
      onClose(false);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="cbn-mobile-nav"
        onClose={handleMobileNavClose}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-50" />

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md shadow">
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        Main Navigation
                      </Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          className="cbn-mobile-nav__close-button"
                          onClick={handleMobileNavClose}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    {/* Start content */}
                    <div className="rounded bg-yellow-100 mb-3 p-4">
                      <div className="font-bold leading-tight">
                        Saint Cloud, MN
                      </div>
                      <div className="text-sm font-medium mb-1">
                        Open today until 10pm
                      </div>
                      <div className="text-xs font-medium">
                        <a className="underline">View Store Details</a>
                      </div>
                    </div>
                    <div className="relative grid grid-cols-1 bg-white">
                      {mainNavigation.map((item) =>
                        !item.children ? (
                          <a
                            key={item.name}
                            href={item.href}
                            className="p-3 flex items-center rounded transition ease-in-out duration-150 text-gray-500 hover:bg-yellow-100"
                          >
                            <span className="flex items-center flex-1">
                              {item.icon && <item.icon />}
                              <span className="text-base font-medium">
                                {item.name}
                              </span>
                            </span>
                          </a>
                        ) : (
                          <Disclosure as="div" key={item.name}>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="p-3 flex items-center rounded transition ease-in-out duration-150 w-full text-gray-500 hover:bg-yellow-100">
                                  <span className="flex items-center flex-1">
                                    {item.icon && <item.icon />}
                                    <span className="text-base font-medium">
                                      {item.name}
                                    </span>
                                  </span>
                                  <ChevronRightIcon
                                    className={classNames(
                                      open ? 'rotate-90' : '',
                                      'h-5 w-5 text-gray-300 transform'
                                    )}
                                    aria-hidden="true"
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="space-y-1">
                                  {item.children.map((subItem) => (
                                    <a
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="py-2 pl-6 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full text-gray-500 hover:bg-yellow-100"
                                    >
                                      {subItem.name}
                                    </a>
                                  ))}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        )
                      )}
                    </div>
                    {/* End content */}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

MobileNav.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
};

MobileNav.defaultProps = {
  open: false
};

export default MobileNav;
