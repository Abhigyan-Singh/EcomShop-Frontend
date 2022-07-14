import React, { useState, useEffect } from 'react';
import Item from 'components/item/item';
import { getAllList } from 'services/mylist';
import { Context } from 'context/context';
import { groupBy } from 'lodash';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CustomLeftArrow, CustomRightArrow } from 'components/custom-arrow/custom-arrow';
import './shop-department.css';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { CookiesAge } from 'apiConfig';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const ShopDepartment = ({ loader, error, list, loading, gridView, listView, list2 }) => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [itemsByGroup, setItemsByGroup] = useState([]);
  const [listItems, setListItems] = useState([]);
  const getListItems = async () => {
    const res = await getAllList();
    setListItems(res.data);
  };
  const onViewAll = (subDept) => {
    navigate('/search?area=' + subDept.id);
    setCookie('subdept', subDept.name, {
      path: '/',
      maxAge: CookiesAge
    });
  }
  useEffect(() => {
    getListItems();
  }, []);
  useEffect(() => {
    if (list2) {
      list2.forEach(a => {
        if (a.productAreaHierarchy?.length) {
          const ids = a.productAreaHierarchy[0].split('|');
          const id = ids[ids.length - 1];
          a.id = id;
        }
        a.groupByDepartment = a.area[0];
      });
      const result = groupBy(list2, 'groupByDepartment');
      const final = [];
      Object.keys(result).forEach(a => {
        final.push({ name: a, items: result[a], id: result[a][0]['id'] });
      });
      console.log(final);
      setItemsByGroup(final);
    }
  }, [list2])

  return (
    <div
      className="App">
      <div>
        <div className="grid grid-cols-1 gap-3">
          {itemsByGroup && itemsByGroup.map((e, i) => (
            <div key={`sub-department-${i}`}>
              <div className='sub-department-container'>
                <div>{e.name.toUpperCase()}</div>
                <div onClick={() => onViewAll(e)} className='viewall-container'><p>View All</p><i className="viewall-right-arrow" /></div>
              </div>
              <Carousel responsive={responsive}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                containerClass="carousel-custom-container"
                itemClass="carousel-custom-item">
                {
                  e.items.map((item, i) => <Item key={`sub-department-item-${i}`}
                    listItems={listItems} item={item} listView={listView} gridView={gridView} />)
                }
                {e.items.map((e, i) => (
                  <Context data={e} key={i}></Context>
                ))}
              </Carousel>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopDepartment;
