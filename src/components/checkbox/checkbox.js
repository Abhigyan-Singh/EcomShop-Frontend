import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './checkbox.css';

const Checkbox = forwardRef((props, ref) => {
  const { className, disabled, label, count, ...rest } = props;
  const componentClassName = classNames(
    'cbn-checkbox',
    { 'cbn-checkbox--disabled': disabled },
    className
  );

  return (
    <label className={componentClassName}>
      <input
        className="cbn-checkbox__input"
        disabled={disabled}
        ref={ref}
        type="checkbox"
        {...rest}
      />
      <span className="cbn-checkbox__label">{label}</span>
      {count ? (
        <span className="ml-1.5 rounded py-0.5 px-1.5 bg-green text-white text-xs tabular-nums cashwise:bg-merlot marketplace:bg-forest">
          {count}
        </span>
      ) : null}
    </label>
  );
});

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  disabled: false
};

export default Checkbox;
