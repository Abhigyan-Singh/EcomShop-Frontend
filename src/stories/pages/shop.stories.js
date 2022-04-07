import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useRef
} from 'react';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import Alert from 'components/alert/alert';
import Hero from 'components/hero/hero';
import Locator from 'components/locator/locator';
import Signup from 'components/signup/signup';
import ShopSidebar from 'composites/shop-sidebar';
import ShopCategory from 'composites/shop-category';
import ShopTag from 'composites/shop-tag';
import ShopFilter from 'composites/shop-filter';
import ShopSort from 'composites/shop-sort';
import ShopSelectedFilter from 'composites/shopSelected-filter';
import user from 'data/user.json';
import slides from 'data/slides.json';
import slidesCashWise from 'data/slidesCashWise.json';
import slidesMarketPlace from 'data/slidesMarketPlace.json';
import MobileNav from 'components/mobile-nav/mobile-nav';
import ShopGetPage from 'composites/shop-get';
import filter from 'services/dropdownfilter';
import { grocery } from 'services/groceryTree';
import useFetch from '../../hooks/useFetch';
import queryString from 'query-string';
import { CartState, Context } from 'context/context';
import { useCookies } from 'react-cookie';
import useCart from 'services/addtocart';
import { usefavoriteApi } from 'services/favorites';
import { CookiesAge } from 'apiConfig';
import { userInfoService } from 'services/auth';

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
export const ShopStory = ({ isAuthenticated, logout, ...rest }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [data, setData] = useState([]);
  const params = window.location.href.split('?')[1];
  const { text: searchText } = queryString.parse(params);
  const [query, setQuery] = useState(searchText);
  const [page, setPage] = useState(1);
  const { loading, error, list } = useFetch(query, page);
  const [cookies, setCookie] = useCookies(['user']);
  const { userInfo } = cookies;
  const { dispatchUser } = CartState();
  const { fetchFavorites } = usefavoriteApi();
  const { getCartDetails } = useCart();
  const [filterDropdowns, setFilterDropdowns] = useState({
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
  });
  const [filterCards, setFilterCards] = useState([]);

  const loader = useRef(null);

  useEffect(() => {
    const filtdropDown = {
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

  const hanldeFilterChange = (event, key, isBrand, index) => {
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
      setPage((prev) => prev + 1);
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
    if (!userInfo) {
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
    getCartDetails();
    fetchFavorites();
    handleChange();
  }, []);

  useEffect(() => {
    grocery(109791)
      .then((res) => {
        setData(res);
        console.log('DATA', data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Fragment>
      <div className="border-b-2">
        <Locator />
      </div>
      <div className="flex flex-row">
        <ShopSidebar />
        <div className="w-full">
          <div className="pl-6 pt-5">
            <ShopCategory />
            <ShopTag />
            <div className="pt-6 flex flex-row justify-between">
              <ShopFilter
                hanldeFilterChange={hanldeFilterChange}
                filterDropdowns={filterDropdowns}
              />
              <ShopSort />
            </div>
          </div>
          <ShopSelectedFilter
            onClose={onFilterClose}
            keyToText={keyToText}
            filterCards={filterCards}
          />
          <ShopGetPage
            loader={loader}
            list={list}
            error={error}
            loading={loading}
          />
        </div>
      </div>
    </Fragment>
  );
};

ShopStory.storyName = 'Home';
