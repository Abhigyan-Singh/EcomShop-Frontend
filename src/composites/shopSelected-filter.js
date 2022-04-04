import { XIcon } from '@heroicons/react/solid';
import { useCookies } from 'react-cookie';
import { CookiesAge } from 'apiConfig';

const ShopSelectedFilter = (props) => {
  const [cookies, setCookie] = useCookies();
  const { facility, dept } = cookies;
  const { filterCards } = props;

  return (
    <div className="bg-gray-100 border-b hidden lg:block">
      <div className="flex items-center px-5 py-1">
        <h3 className="text-xs text-gray-400 font-bold uppercase tracking-wider">
          Filters
          <span className="sr-only">, active</span>
        </h3>
        <div aria-hidden="true" className="bg-gray-300 w-px h-5 ml-4"></div>
        <div className="mt-0 ml-3">
          <div className="flex flex-wrap items-center">
            {filterCards.map((each) => {
              return (
                <span className="inline-flex rounded-full border border-gray-200 items-center m-1 py-1.5 pl-3 pr-2 text-xs bg-white">
                  <span>{each.label}</span>
                  <button
                    onClick={''}
                    type="button"
                    className="flex-shrink-0 ml-1 h-4 w-4 p-1 rounded-full inline-flex text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                  >
                    <span className="sr-only">Remove filter for Banquet</span>
                    <XIcon />
                  </button>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSelectedFilter;
