import {
  ChevronDownIcon,
  ViewGridIcon,
  ViewListIcon
} from '@heroicons/react/solid';

const ShopSort = (props) => {
  return (
    <div className="relative inline-block text-left pr-4">
      <button
        className="inline-flex justify-center text-sm font-medium px-2 py-1"
        id="headlessui-popover-button-26"
        type="button"
        aria-expanded="false"
      >
        <span>Sort By: Default (Relevance)</span>
        <ChevronDownIcon
          className="h-5 w-5 text-black-300"
          aria-hidden="true"
        />
      </button>

      <button type="button" className="p-1 ml-3 rounded-full ring-2 ring-gray-200">
        <span className="sr-only">View grid</span>
        <ViewGridIcon className="h-5 w-5 text-black-300" aria-hidden="true" />
      </button>

      <button type="button" className="p-1 ml-3 rounded-full">
        <span className="sr-only">View list</span>
        <ViewListIcon className="h-5 w-5 text-black-300" aria-hidden="true" />
      </button>
    </div>
  );
};

export default ShopSort;
