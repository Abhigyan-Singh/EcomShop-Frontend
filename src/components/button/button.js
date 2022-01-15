import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.css';

const Button = forwardRef((props, ref) => {
  const { appearance, className, disabled, label, ...rest } = props;
  const componentClassName = classNames(
    'cbn-button',
    { 'cbn-button--secondary': appearance === 'secondary' },
    className
  );

  return (
    <button
      className={componentClassName}
      disabled={disabled}
      ref={ref}
      {...rest}
    >
      <span>{label}</span>
    </button>
  );
});

Button.propTypes = {
  appearance: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  appearance: 'primary',
  disabled: false
};

export default Button;
