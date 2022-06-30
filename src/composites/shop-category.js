import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid';
import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'    
import queryString from 'query-string';
import {useSearchParams} from 'react-router-dom';

const ShopCategory = (props) => {
  const {inputCheck, list} = props;
  const [cookies, setCookie] = useCookies();
  const { facility, dept, subdept } = cookies;
  const params = window.location.href.split('?')[1]; 
  const { text: searchText } = queryString.parse(params);
  const [query, setQuery] = useState(searchText);
  const navigate = useNavigate();
  function refreshPage() {
    window.location.reload(false);
  }
  const [searchParams] = useSearchParams();

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
          {searchParams.get("area")
              ? <>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon
                    className="h-5 w-5 text-gray-300 transform"
                    aria-hidden="true" />
                  <a href="#" className="ml-2 hover:underline">
                    PRODUCTS
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon
                    className="h-5 w-5 text-gray-300 transform"
                    aria-hidden="true" />
                  <button
                    className="ml-2 hover:underline"
                    onClick={() => {
                      refreshPage();
                      navigate('/search?text=' + dept);
                    } }>{dept}
                  </button>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon
                    className="h-5 w-5 text-gray-300 transform"
                    aria-hidden="true" />
                  <button
                    onClick={() => {
                      refreshPage();
                      navigate('/search?text=' + subdept);
                    } }
                    className="ml-2 hover:underline" aria-current="page">
                    {subdept}
                  </button>
                </div>
              </li>
              </>             
              : <div> {list.length} Results for: <a style={{fontWeight: 'bold'}}>{query}</a></div>
            }
        </ol>
      </nav>
    </div>
  );
};

export default ShopCategory;
