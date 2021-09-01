import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './checkbox.css';

const Checkbox = forwardRef((props, ref) => {
  const { className, disabled, label, ...rest } = props;
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
