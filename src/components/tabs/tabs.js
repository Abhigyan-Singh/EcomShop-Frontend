import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'components/select/select';
import './tabs.css';

const Tabs = (props) => {
  const { className, id, tabs, ...rest } = props;
  const componentClassName = classNames('cbn-tabs', {}, className);

  return (
    <div className={componentClassName} {...rest}>
      <div className="sm:hidden">
        <label htmlFor={id} className="sr-only">
          Select a tab
        </label>
        <Select
          id={id}
          name="tabs"
          className="block w-full"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab, index) => (
            <option key={index}>{tab.name}</option>
          ))}
        </Select>
      </div>
      <div className="hidden sm:block">
        <nav className="cbn-tabs__nav" aria-label="Tabs">
          {tabs.map((tab, index) => (
            <a
              key={index}
              href={tab.href}
              className={classNames(
                'cbn-tab',
                tab.current ? 'cbn-tab--current' : ''
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

Tabs.propTypes = {
  id: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
      current: PropTypes.bool
    })
  )
};

Tabs.defaultProps = {
  id: 'tabs',
  tabs: []
};

export default Tabs;
