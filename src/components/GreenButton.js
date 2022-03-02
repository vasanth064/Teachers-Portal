import React from 'react';
import './css/GreenButton.css';
const GreenButton = ({ children, marginCenter, margin }) => {
  return (
    <button
      className={marginCenter ? 'greenButton marginCenter' : 'greenButton'}
      style = {
        {
          margin
        }
      }
      >
      {children}
    </button>
  );
};

export default GreenButton;
