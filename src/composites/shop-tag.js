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

  useEffect(async () => {
    if (dept === 'Baby') {
      await grocery(109791).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Bakery') {
      await grocery(109792).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Butcher') {
      await grocery(109793).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Dairy') {
      await grocery(109794).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Deli') {
      await grocery(109795).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Floral') {
      await grocery(109796).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'General Merchandise') {
      await grocery(109797).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Grocery') {
      await grocery(109798).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Frozen') {
      await grocery(109799).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Health & Beauty') {
      await grocery(109800).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Household & Laundry') {
      await grocery(109801).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Pet') {
      await grocery(109802).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Produce') {
      await grocery(109803).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Beer') {
      await grocery(109804).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Wine') {
      await grocery(109805).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Liquor') {
      await grocery(109806).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Tobacco') {
      await grocery(109807).then((res) => {
        setData(res.data);
      });
    } else if (dept === 'Floral') {
      await grocery(109808).then((res) => {
        setData(res.data);
      });
    }
  }, [dept]);

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



