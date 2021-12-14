import React, { useCallback, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Input from 'components/input/input';
import useEventListener from 'hooks/useEventListener';
import './autocomplete.css';

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
  const { items, onChange, onItemSelect, value, onScroll, ...rest } = props;
  const inputRef = useRef(null);
  const [filteredItems, setFilteredItems] = useState([]);
  const [focused, setFocused] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const componentClassName = classNames('cbn-autocomplete', {});

  const filterItems = useCallback(
    (inputValue) => {
      setFilteredItems(
        items.filter((item) => {
          return item.toLowerCase().includes(inputValue.toLowerCase());
        })
      );
    },
    [items]
  );

  const handleBlur = () => {
    setSelectedItemIndex(null);
    setFocused(false);
  };

  useEffect(() => {
    filterItems(value);
  }, [filterItems, value]);

  const handleClick = (event, item) => {
    handleItemSelect(event, item);
  };

  const handleFocus = (event) => {
    filterItems(event.target.value);
    setFocused(true);
  };

  const handleItemSelect = useCallback(
    (event, item) => {
      onItemSelect(item);
      if (item) {
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
      {value && (
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
                    {item}
                  </AutocompleteMenuItem>
                ))}
              </AutocompleteMenu>
            )}
            {filteredItems.length === 0 && (
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
  value: PropTypes.string
};

Autocomplete.defaultProps = {
  items: []
};

export default Autocomplete;
