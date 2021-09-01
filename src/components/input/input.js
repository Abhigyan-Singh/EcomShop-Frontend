import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './input.css';

const Input = forwardRef((props, ref) => {
  const {
    className,
    disabled,
    hasRoundedCorners,
    icon,
    iconPosition,
    isInvalid,
    size,
    ...rest
  } = props;
  const containerClassName = classNames('cbn-input-container', {}, className);
  const componentClassName = classNames(
    'cbn-input',
    {
      'cbn-input--invalid': isInvalid,
      'cbn-input--rounded': hasRoundedCorners,
      'cbn-input--medium': size === 'medium',
      'cbn-input--large': size === 'large',
      'cbn-input--icon-left': icon && iconPosition === 'left',
      'cbn-input--icon-right': icon && iconPosition === 'right'
    },
    className
  );
  const iconClassName = classNames('cbn-input__icon', {
    'cbn-input__icon--left': iconPosition === 'left',
    'cbn-input__icon--right': iconPosition === 'right'
  });

  const IconComponent = icon;

  return (
    <div className={containerClassName}>
      <input
        className={componentClassName}
        disabled={disabled}
        ref={ref}
        {...rest}
      />
      {icon && (
        <div className={iconClassName}>
          <IconComponent className="h-5 w-5 text-gray-500" aria-hidden="true" />
        </div>
      )}
    </div>
  );
});

Input.propTypes = {
  disabled: PropTypes.bool,
  hasRoundedCorners: PropTypes.bool,
  icon: PropTypes.any,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  isInvalid: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['default', 'medium', 'large'])
};

Input.defaultProps = {
  disabled: false,
  hasRoundedCorners: false,
  icon: null,
  iconPosition: 'left',
  isInvalid: false,
  size: 'default'
};

export default Input;
