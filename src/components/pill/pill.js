import React from 'react';
import PropTypes from 'prop-types';
import './pill.css';

const Pill = (props) => {
  const { label, ...rest } = props;

  return (
    <a className="cbn-pill" {...rest}>
      <span>{label}</span>
    </a>
  );
};

Pill.propTypes = {
  label: PropTypes.string
};

Pill.defaultProps = {};

export default Pill;
