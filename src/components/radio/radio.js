import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './radio.css';

const Radio = forwardRef((props, ref) => {
  const { className, disabled, label, ...rest } = props;
  const componentClassName = classNames(
    'cbn-radio',
    { 'cbn-radio--disabled': disabled },
    className
  );

  return (
    <label className={componentClassName}>
      <input
        className="cbn-radio__input"
        disabled={disabled}
        ref={ref}
        type="radio"
        {...rest}
      />
      <span className="cbn-radio__label">{label}</span>
    </label>
  );
});

Radio.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func
};

Radio.defaultProps = {
  disabled: false
};

export default Radio;
