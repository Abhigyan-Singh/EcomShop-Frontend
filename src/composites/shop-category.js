import { ChevronRightIcon } from '@heroicons/react/solid';

const ShopCategory = (props) => {
  return (
    <div className="mb-2 whitespace-nowrap md:mb-3">
      <nav className="lg:text-lg" aria-label="Breadcrumbs">
        <ol className="flex items-center space-x-2">
          <li>
            <div>
              <a href="/" className="text-gray-400 hover:text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
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
              <a href="#link" className="ml-2 hover:underline">
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
              <a href="#link" className="ml-2 hover:underline">
                Frozen
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 text-gray-300 transform"
                aria-hidden="true"
              />
              <a
                href="#link"
                className="ml-2 hover:underline"
                aria-current="page"
              >
                Frozen Meals &amp; Entrees
              </a>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default ShopCategory;
