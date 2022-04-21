import { useCookies } from 'react-cookie';
import { map } from 'lodash';
import { useState, useEffect } from 'react';
import { grocery } from 'services/groceryTree';
import PropTypes from 'prop-types';
import { CookiesAge } from 'apiConfig';
import { useNavigate } from 'react-router-dom'    

const ShopTag = (onDeptChange2) => {
  const [cookies, setCookie] = useCookies();
  const [data, setData] = useState();
  const { facility, dept } = cookies;
  const [selected, setSelected] = useState(dept);
  const navigate = useNavigate()

  useEffect(() => {
    if (dept === 'Baby') {
      grocery(109791).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Bakery') {
      grocery(109792).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Butcher') {
      grocery(109793).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Dairy') {
      grocery(109794).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Deli') {
      grocery(109795).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Floral') {
      grocery(109796).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'General Merchandise') {
      grocery(109797).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Grocery') {
      grocery(109798).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Frozen') {
      grocery(109799).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Health & Beauty') {
      grocery(109800).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Household & Laundry') {
      grocery(109801).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Pet') {
      grocery(109802).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Produce') {
      grocery(109803).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Beer') {
      grocery(109804).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Wine') {
      grocery(109805).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Liquor') {
      grocery(109806).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Tobacco') {
      grocery(109807).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Floral') {
      grocery(109808).then((res) => {
        setData(res.data);
      });
    }
  }, [onDeptChange2]);

  const handleDeptChange2 = (option) => {
    setSelected(option);
    setCookie('subdept', option, {
      path: '/',
      maxAge: 1
    });
  
    if (typeof onDeptChange2 === 'function') {
      onDeptChange2(option);
    }
  };
  
  return (
    <div className="flex relative space-x-2 whitespace-nowrap flex-wrap">
      {map(data, (option)=> (           
        <button
          className="border border-2 border-green-600 rounded-2xl px-4 pb-1 pb-1"
          key={option.id.area} option={option.description} onClick={() => handleDeptChange2(option.description)} 
          >
          <button className="text-xs" onClick={() => navigate("/search?text=" + option.description)}>{option.description}</button>
        </button>
      ))}   
    </div>
  );
};


ShopTag.propTypes = {
  onDeptChange2: PropTypes.func
};

ShopTag.defaultProps = {
  onDeptChange2: () => {}
};


export default ShopTag;



