import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './select.css';

const Select = forwardRef((props, ref) => {
  const {
    className,
    disabled,
    hasRoundedCorners,
    isAccented,
    isInvalid,
    size,
    ...rest
  } = props;
  const componentClassName = classNames(
    'cbn-select',
    {
      'cbn-select--accented': isAccented,
      'cbn-select--invalid': isInvalid,
      'cbn-select--rounded': hasRoundedCorners,
      'cbn-select--medium': size === 'medium',
      'cbn-select--large': size === 'large'
    },
    className
  );

  return (
    <select
      className={componentClassName}
      disabled={disabled}
      ref={ref}
      {...rest}
    />
  );
});

Select.propTypes = {
  disabled: PropTypes.bool,
  hasRoundedCorners: PropTypes.bool,
  isAccented: PropTypes.bool,
  isInvalid: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['default', 'medium', 'large'])
};

Select.defaultProps = {
  disabled: false,
  hasRoundedCorners: false,
  isAccented: false,
  isInvalid: false,
  size: 'default'
};

export default Select;
