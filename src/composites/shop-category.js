import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid';
import { useCookies } from 'react-cookie';
import { map } from 'lodash';
import { useState } from 'react';

const ShopCategory = (props) => {
  const [cookies, setCookie] = useCookies();
  const [data, setData] = useState();
  const { facility, dept, subdept } = cookies;

  return (
    <div className="mb-2 whitespace-nowrap md:mb-3">
      <nav className="lg:text-lg" aria-label="Breadcrumbs">
        <ol className="flex items-center space-x-2">
          <li>
            <div>
              <a href="/" className="text-gray-400 hover:text-gray-500">
                <HomeIcon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Home</span>
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 text-gray-300 transform"
                aria-hidden="true"
              />
              <a href="/" className="ml-2 hover:underline">
                Grocery
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 text-gray-300 transform"
                aria-hidden="true"
              />
              <a className="ml-2 hover:underline">{dept}</a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 text-gray-300 transform"
                aria-hidden="true"
              />
              <a className="ml-2 hover:underline" aria-current="page">
                {subdept}
              </a>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default ShopCategory;
