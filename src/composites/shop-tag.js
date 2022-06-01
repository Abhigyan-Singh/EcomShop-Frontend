import { useCookies } from 'react-cookie';
import { map } from 'lodash';
import { useState, useEffect } from 'react';
import { grocery } from 'services/groceryTree';
import PropTypes from 'prop-types';
import { CookiesAge } from 'apiConfig';
import { useNavigate } from 'react-router-dom'    

const ShopTag = (onSubDeptChange2) => {
  const [cookies, setCookie] = useCookies();
  const [data, setData] = useState();
  const { facility, dept, subdept } = cookies;
  const [selected, setSelected] = useState(dept);
  const navigate = useNavigate()

  useEffect(async () => {
    if (dept ) {
      if (dept === 'Baby') {
        await grocery(109791).then((res) => {
          setData(res.data);
        });
      } else if (dept === 'Bakery') {
        await grocery(109792).then((res) => {
          setData(res.data);
        });
      } else if (dept === 'Meat & Seafood') {
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
      } else if (dept && subdept) {
        console.log("WOKRING")
      }
    }
    
  }, [dept]);

  function refreshPage() {
    window.location.reload(false);
  }

  const handleSubDeptChange2 = (option) => {
    setSelected(option);
    setCookie('subdept', option, {
      path: '/',
      maxAge: CookiesAge   
    });
    if (typeof onSubDeptChange2 === 'function') {
      onSubDeptChange2(option);
    }
  };
  

  return (
    <div>
      {cookies.subdept != " "
        ? null
        : <div onClick={() => refreshPage()} className="flex relative space-x-3 space-y-1 whitespace-nowrap flex-wrap">
            {map(data, (option)=> (           
            <button
              className="border border-1 border-green-600 rounded-3xl px-5 pb-1"
              key={option.id.area} option={option.description} onClick={() => { handleSubDeptChange2(option.description)}} 
              >
              <button className="text-xs" onClick={() => navigate('/search?text=' + option.description)}>{option.description}</button>
            </button>
            ))}   
          </div> 
      }
    </div>
  );
};


ShopTag.propTypes = {
  onSubDeptChange2: PropTypes.func
};

ShopTag.defaultProps = {
  onSubDeptChange2: () => {}
};


export default ShopTag;



