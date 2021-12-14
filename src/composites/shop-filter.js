import { ChevronDownIcon } from '@heroicons/react/solid';

const ShopFilter = (props) => {
  return (
    <div className="hidden lg:block">
      <div className="flow-root">
        <div className="flex items-center space-x-3">
          <div className="relative inline-block text-left">
            <button
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
            </button>
          </div>
          <div className="relative inline-block text-left">
            <button
              className="inline-flex justify-center text-sm font-medium px-2 py-1"
              id="headlessui-popover-button-24"
              type="button"
              aria-expanded="false"
            >
              <span>Lifestyle &amp; Dietary</span>
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="relative inline-block text-left">
            <button
              className="inline-flex justify-center text-sm font-medium px-2 py-1"
              id="headlessui-popover-button-26"
              type="button"
              aria-expanded="false"
            >
              <span>New / Sale</span>
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopFilter;
