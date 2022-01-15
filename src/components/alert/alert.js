import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { InformationCircleIcon } from '@heroicons/react/solid';
import './alert.css';

const Alert = (props) => {
  const { children, className, icon, ...rest } = props;
  const componentClassName = classNames('cbn-alert', {}, className);
  const IconComponent = icon;

  return (
    <div className={componentClassName} {...rest}>
      <div className="flex items-start sm:items-center">
        <div className="flex-shrink-0">
          <IconComponent className="cbn-alert__icon" aria-hidden="true" />
        </div>
        <div className="cbn-alert__content">{children}</div>
      </div>
    </div>
  );
};

Alert.propTypes = {
  icon: PropTypes.any
};

Alert.defaultProps = {
  icon: InformationCircleIcon
};

export default Alert;
