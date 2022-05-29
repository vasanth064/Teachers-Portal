import React from 'react';
import { useUI } from '../Context/UiContext';
import './css/GreenButton.css';
const GreenButton = ({ children, marginCenter, ...props }) => {
  const { getTheme } = useUI();
  return (
    <button
      type='submit'
      {...props}
      className='greenButton'
      style={{ background: getTheme().liteBg }}>
      {children}
    </button>
  );
};

export default GreenButton;
