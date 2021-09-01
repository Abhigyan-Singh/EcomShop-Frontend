import { ChevronRightIcon } from '@heroicons/react/solid';
import Item from 'components/item/item';
import Tabs from 'components/tabs/tabs';
import itemData from 'data/item.json';

const HomeGetStarted = (props) => {
  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col mb-5 lg:items-end lg:flex-row lg:space-x-10">
        <div className="font-serif text-lg tracking-widest uppercase mb-2 lg:mb-0">
          Get Started
        </div>
        <div className="flex-1 mb-2 lg:mb-0">
          <Tabs
            tabs={[
              { name: 'Lorem Ipsum', href: '#', current: true },
              { name: 'Lorem Ipsum', href: '#', current: false },
              { name: 'Lorem Ipsum', href: '#', current: false },
              { name: 'Lorem Ipsum', href: '#', current: false }
            ]}
          />
        </div>
        <div>
          <a href="#link">
            <span className="flex items-center">
              <span>See All</span>
              <ChevronRightIcon className="h-5 w-5 ml-2" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
        {[...Array(6)].map((e, i) => (
          <Item item={itemData} key={i} />
        ))}
      </div>
    </div>
  );
};

export default HomeGetStarted;
