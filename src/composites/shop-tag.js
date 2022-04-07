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
    grocery(4433).then((res) => {
      setData(res.data);
    });
  }, []);

  const handleDeptChange2 = (option) => {
    setSelected(option);
    setCookie('dept', option, {
      path: '/',
      maxAge: CookiesAge
    });
  
    if (typeof onDeptChange2 === 'function') {
      onDeptChange2(option);
    }
  };
  
  return (
    <div className="flex relative space-x-2 whitespace-nowrap">
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



