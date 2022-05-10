import React, { useEffect, useState } from 'react';
import './css/GreenButton.css';
const GreenButton = ({ children, marginCenter, ...props }) => {
  const backgrounds = [
    'royalBlue',
    'olive',
    'blueviolet',
    'chocolate',
    'crimson',
    'orange',
  ];
  const [background, setBackground] = useState(
    parseInt(localStorage.getItem('bgID'))
  );

  return (
    <button
      type='submit'
      {...props}
      className={
        background ? `greenButton ${backgrounds[background]}` : 'greenButton'
      }>
      {children}
    </button>
  );
};

export default GreenButton;
