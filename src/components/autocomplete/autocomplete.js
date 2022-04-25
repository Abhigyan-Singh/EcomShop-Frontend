import React, { useCallback, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Input from 'components/input/input';
import useEventListener from 'hooks/useEventListener';
import './autocomplete.css';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { CookiesAge } from 'apiConfig';

const AutocompleteMenu = (props) => {
  const { children, ...rest } = props;
  return (
    <div className="cbn-autocomplete__menu" role="listbox" {...rest}>
      {children}
    </div>
  );
};

AutocompleteMenu.propTypes = {
  children: PropTypes.node
};

const AutocompleteMenuItem = (props) => {
  const { children, ...rest } = props;

  return (
    <div className="cbn-autocomplete__menu-item" tabIndex={0} {...rest}>
      {children}
    </div>
  );
};

AutocompleteMenuItem.propTypes = {
  children: PropTypes.node
};

const Autocomplete = (props) => {
  const { items, onChange, onItemSelect, value, onScroll, loading, ...rest } =
    props;
  const inputRef = useRef(null);
  const [filteredItems, setFilteredItems] = useState();
  const [focused, setFocused] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();
  const { facility, dept } = cookies;
  const [selected, setSelected] = useState(dept);

  const componentClassName = classNames('cbn-autocomplete', {});

  const handleBlur = () => {
    setSelectedItemIndex(null);
    setFocused(false);
  };

  useEffect(() => {
    items && setFilteredItems(items);
  }, [items]);

  const handleClick = (event, item) => {
    handleDeptChange5(item.prodDepartment);
    handleItemSelect(event, item);
    navigate('/item/' + item.productId, { state: item });
    onItemSelect('');
  };

  const handleDeptChange5 = (item) => {
    setSelected(item);
    setCookie('dept', item, {
      path: '/',
      maxAge: CookiesAge
    });
  };

  const handleFocus = (event) => {
    setFocused(true);
  };

  const handleItemSelect = useCallback(
    (event, item) => {
      if (item && item.productName) {
        onItemSelect(item.productName);
        inputRef.current.blur();
      }
    },
    [onItemSelect]
  );

  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  const handleKeyDown = useCallback(
    (event) => {
      if (event.target.value) {
        if (event.keyCode === 13 && focused) {
          event.preventDefault();
          handleItemSelect(event, filteredItems[selectedItemIndex]);
          window.location.href = '/search?text=' + event.target.value; 
        } else if (event.keyCode === 38 && focused) {
          event.preventDefault();
          if (selectedItemIndex === null || selectedItemIndex === 0) {
            setSelectedItemIndex(filteredItems.length - 1);
          } else {
            if (selectedItemIndex > 0) {
              setSelectedItemIndex(selectedItemIndex - 1);
            }
          }
        } else if (event.keyCode === 40 && focused) {
          event.preventDefault();
          if (selectedItemIndex === null) {
            setSelectedItemIndex(0);
          } else {
            if (
              selectedItemIndex >= 0 &&
              selectedItemIndex < filteredItems.length - 1
            ) {
              setSelectedItemIndex(selectedItemIndex + 1);
            } else {
              setSelectedItemIndex(0);
            }
          }
        }
      }
    },
    [filteredItems, focused, handleItemSelect, selectedItemIndex]
  );

  useEventListener('keydown', handleKeyDown);

  return (
    <div className={componentClassName}>
      <Input
        autoComplete="off"
        ref={inputRef}
        type="search"
        value={value}
        aria-autocomplete="both"
        onBlur={handleBlur}
        onChange={onChange}
        onFocus={handleFocus}
        {...rest}
      />
      {!loading && value && (
        <div
          className="cbn-autocomplete__container"
          onScroll={onScroll}
          style={{ maxHeight: '35vh', overflow: 'auto' }}
        >
          <div className="cbn-autocomplete__popover">
            {filteredItems && (
              <AutocompleteMenu>
                {filteredItems.map((item, index) => (
                  <AutocompleteMenuItem
                    key={index}
                    role="option"
                    aria-selected={selectedItemIndex === index}
                    onClick={(event) => handleClick(event, item)}
                    onMouseDown={handleMouseDown}
                  >
                    {item.productName}
                  </AutocompleteMenuItem>
                ))}
              </AutocompleteMenu>
            )}
            {filteredItems && filteredItems.length === 0 && (
              <div className="text-center text-xs text-gray-300 p-3">
                No matches for your search.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

Autocomplete.propTypes = {
  items: PropTypes.array,
  onItemSelect: PropTypes.func,
  value: PropTypes.string,
  handleDeptChange5: PropTypes.func
};

Autocomplete.defaultProps = {
  items: []
};

export default Autocomplete;
