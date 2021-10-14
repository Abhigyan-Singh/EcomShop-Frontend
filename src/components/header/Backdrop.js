import './Backdrop.css';
import React from 'react';

const Backdrop = ({ onClose }) => {
  return (
    <div
      className="backdrop-bg-color"
      onClick={() => {
        onClose();
      }}
    ></div>
  );
};

export default Backdrop;
