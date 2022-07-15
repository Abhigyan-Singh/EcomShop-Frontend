import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useRef
} from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Locator from 'components/locator/locator';
import ShopSidebar from 'composites/shop-sidebar';
import ShopCategory from 'composites/shop-category';
import ShopTag from 'composites/shop-tag';
import ShopFilter from 'composites/shop-filter';
import ShopSort from 'composites/shop-sort';
import ShopSelectedFilter from 'composites/shopSelected-filter';
import ShopGetPage from 'composites/shop-get';
import { grocery } from 'services/groceryTree';
import useFetch from '../../hooks/useFetch';
import queryString from 'query-string';
import { CartState, Context } from 'context/context';
import { useCookies } from 'react-cookie';
import useCart from 'services/addtocart';
import { usefavoriteApi } from 'services/favorites';
import { CookiesAge } from 'apiConfig';
import { userInfoService } from 'services/auth';
import { filterProducts } from 'services/filter';
import { departments } from 'services/departmentSearch';
import onSale from 'services/departmentSearch';
import ShopDepartment from 'composites/shop-department';

export default {
  title: 'Pages/Home',
  argTypes: {
    isAuthenticated: {
      name: 'Show Authenticated State',
      control: 'boolean',
      defaultValue: true
    }
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const keyToText = {
  glutenFree: 'Gluten Free',
  nationalLocal: 'Local',
  naturalOrganic: 'Organic & Natural',
  isNew: 'New Arrivals',
  onSale: 'Sale Items'
};
const filterdropDown = {
  brands: [],
  glutenFree: {
    checked: false,
    count: 0
  },
  nationalLocal: {
    checked: false,
    count: 0
  },
  naturalOrganic: {
    checked: false,
    count: 0
  },
  isNew: {
    checked: false,
    count: 0
  },
  onSale: {
    checked: false,
    count: 0
  }
};
export const ShopStory = ({ onSubDepartChange2, logout, handleInputCheck, inputCheck, ...rest }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [data, setData] = useState([]);
  const [gridView, setGridView] = useState(true);
  const [listView, setListView] = useState(false);
  const params = window.location.href.split('?')[1];
  const { text: searchText } = queryString.parse(params);
  const [query, setQuery] = useState(searchText);
  const [pageno, setPageno] = useState(1);
  const { loading, error, list } = useFetch(query, pageno);
  const [cookies, setCookie] = useCookies();
  const { userInfo, user, facility, dept, subdept } = cookies;
  const { dispatchUser, favorites } = CartState();
  const { fetchFavorites } = usefavoriteApi();
  const { getCartDetails } = useCart();
  const [list2, setList2] = useState()
  const defaultFacilityId = 2035;
  const [filteredList, setFilteredList] = useState([]);
  const [filterDropdowns, setFilterDropdowns] = useState(JSON.parse(JSON.stringify(filterdropDown)));
  const [filterCards, setFilterCards] = useState([]);
  const loader = useRef(null);
  useEffect(() => {
    //handleAbcSort()
    console.log('calling...');
    const brand = [];
    let areaId;
    const payload = {
      brand: [],
      lifestyleAndDietary: [],
      newAndSale: []
    };
    filterDropdowns.brands.forEach((each) => {
      if (each.checked) {
        const item = searchParams.get("area") ? list2.filter(a => a.brand === each.brand)[0] : list.filter(a => a.brand === each.brand)[0];
        if (item) {
          areaId = item.catalogArea[0];
          areaId = areaId.replace('PRODUCTS_', '');
        }
        brand.push(`"${each.brand}"`);
      }
    });
    if (filterDropdowns.onSale) {
      payload.newAndSale.push('sale');
    }
    if (brand.length) {
      const facilityId = facility?.facilityId ? facility?.facilityId : defaultFacilityId;
      filterProducts(0, 1000, facilityId, areaId, brand).then((res) => {
        res?.data?.products ? setFilteredList(res.data.products) : setFilteredList([]);
      });
    } else {
      setFilteredList([]);
    }
  }, [filterCards.length]);

  useEffect(() => {
    const filtdropDown = JSON.parse(JSON.stringify(filterdropDown));
    let brandsObj = {};
    list.forEach((each) => {
      if (!brandsObj[each.brand]) {
        brandsObj[each.brand] = {
          count: 1
        };
      } else {
        brandsObj[each.brand].count += 1;
      }
      if (each.nationalLocal) {
        filtdropDown.nationalLocal.count += 1;
      }
      if (each.naturalOrganic) {
        filtdropDown.naturalOrganic.count += 1;
      }
      if (each.glutenFree) {
        filtdropDown.glutenFree.count += 1;
      }
      if (each.isNew) {
        filtdropDown.isNew.count += 1;
      }
      if (each.onSale) {
        filtdropDown.onSale.count += 1;
      }
    });
    Object.keys(brandsObj).forEach((key) => {
      filtdropDown.brands.push({
        brand: key,
        count: brandsObj[key].count,
        checked: false
      });
    });
    setFilterDropdowns({ ...filtdropDown });
  }, [list]);

  const updateFilterDrop = (brands, facets) => {
    const filtdropDown = JSON.parse(JSON.stringify(filterdropDown));
    brands.forEach(brand => {
      filtdropDown.brands.push({
        brand: brand.name,
        count: brand.count,
        checked: false
      });
    });
    Object.keys(facets).forEach(facet => {
      if (facet === 'onSale' || facet === 'onsale') {
        filtdropDown.onSale.count = facets[facet].count;
      } else {
        filtdropDown[facet].count = facets[facet].count;
      }
    })
    setFilterDropdowns({ ...filtdropDown });
  }
  const handleFilterChange = (event, key, isBrand, index) => {
    if (isBrand) {
      filterDropdowns.brands[index].checked = event.target.checked;
      if (event.target.checked) {
        filterCards.push({
          isBrand,
          index,
          label: filterDropdowns.brands[index].brand
        });
        setFilterCards([...filterCards]);
      } else {
        const filteredCards = filterCards.filter((each) => {
          return each.label !== filterDropdowns.brands[index].brand;
        });
        setFilterCards([...filteredCards]);
      }
      setFilterDropdowns({ ...filterDropdowns });
    } else {
      filterDropdowns[key].checked = event.target.checked;
      if (event.target.checked) {
        filterCards.push({
          isBrand: false,
          label: key
        });
        setFilterCards([...filterCards]);
      } else {
        const filteredCards = filterCards.filter((each) => {
          return each.label !== key;
        });
        setFilterCards([...filteredCards]);
      }
      setFilterDropdowns({ ...filterDropdowns });
    }
  };

  const onFilterClose = (each, index) => {
    if (each.isBrand) {
      filterDropdowns.brands[each.index].checked = false;
      const filteredCards = filterCards.filter((e) => {
        return JSON.stringify(each) !== JSON.stringify(e);
      });
      setFilterCards([...filteredCards]);
      setFilterDropdowns({ ...filterDropdowns });
    } else {
      filterDropdowns[each.label].checked = false;
      const filteredCards = filterCards.filter((e) => {
        return JSON.stringify(each) !== JSON.stringify(e);
      });
      setFilterCards([...filteredCards]);
      setFilterDropdowns({ ...filterDropdowns });
    }
  };

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPageno((prev) => prev + 1);
    }
  }, []);

  const handleChange = (e) => {
    setQuery(e?.target?.value);
  };

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  useEffect(() => {
    if (!userInfo && user) {
      userInfoService().then((userRes) => {
        if (userRes.data) {
          setCookie('userInfo', userRes.data, {
            path: '/',
            maxAge: CookiesAge
          });
          dispatchUser({
            type: 'SET_USER',
            payload: { userName: userRes.data.userName }
          });
          getCartDetails(userRes.data.userName);
        }
      });
    }
  }, [userInfo]);

  useEffect(() => {
    if (favorites.favorites.length === 0 && favorites.progress === false) {
      fetchFavorites();
    }
  }, []);

  useEffect(() => {
    getCartDetails();
    handleChange();
  }, []);


  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    grocery(109791)
      .then((res) => {
        setData(res);
      })
  }, [filterDropdowns]);
  
  const [searchParams] = useSearchParams();
  const getItems = (id) => {
    console.log("HIT", id)
    const facilityId = facility?.facilityId ? facility?.facilityId : defaultFacilityId;
    if (id) {
      departments(1, facilityId, id)
        .then((response) => {
          updateFilterDrop(response.data.brands, response.data.facets);
          setList2(response.data.products)
          console.log('LIST2', response.data.products)
        })
    }
  }
  const [list3, setList3] = useState()
  const getOnSaleItems = () => {
    onSale()
    .then((response) => {
      setList3(response.data.products)
      console.log('LIST3', response.data.products)
    })
  }

  useEffect(() => {
    if (searchParams.get("area") === "102188") {
      getOnSaleItems()
    }
    getItems(searchParams.get("area"))
  }, [searchParams.get("area")])
  
  return (
    <Fragment>
      <div className="border-b-2">
        <Locator />
      </div>
      <div className="flex flex-row">
        {list3 || list && !list2
          ?  null
          : <ShopSidebar handleInputCheck={handleInputCheck} inputCheck={inputCheck} />
        }
        <div className="w-full">
          <div className="pl-6 pt-5">
            {list3 
              ? null 
              : <ShopCategory handleInputCheck={handleInputCheck} list={list} inputCheck={inputCheck}/>
            }
            
            <ShopTag handleInputCheck={handleInputCheck} inputCheck={inputCheck} onSubDeptChange2={onSubDepartChange2}/>
            <div className="pt-6 flex flex-row justify-between">
              <ShopFilter
                handleFilterChange={handleFilterChange}
                filterDropdowns={filterDropdowns}
              />
              <ShopSort
                list2={list2}
                list={list}
                filteredList={filteredList}
                setGridView={setGridView}
                setListView={setListView}
                listView={listView}
                gridView={gridView}
              />
            </div>
          </div>
          <ShopSelectedFilter
            onClose={onFilterClose}
            keyToText={keyToText}
            filterCards={filterCards}
          />
          <ShopGetPage
            list3={list3}
            inputCheck={inputCheck}
            list2={list2}
            listView={listView}
            gridView={gridView}
            loader={loader}
            list={filteredList.length === 0 ? list : filteredList}
            error={error}
            loading={loading}
            pageno={pageno}
            query={query}
          />
        </div>
        {(searchParams.get("area") && !subdept) && <div className="w-full">
          <ShopDepartment
            list2={list2}
          ></ShopDepartment>
        </div>}
      </div>
    </Fragment>
  );
};

ShopStory.storyName = 'Home';
