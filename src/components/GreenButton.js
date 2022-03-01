import React from 'react';
import './css/GreenButton.css';
const GreenButton = ({ children, marginCenter, height, width, borderRadius, fontSize, margin }) => {
  return (
    <button
      className={marginCenter ? 'greenButton marginCenter' : 'greenButton'}
      style = {
        {
          height,
          width,
          borderRadius,
          fontSize,
          margin
        }
      }
      >
      {children}
    </button>
  );
};

export default GreenButton;
