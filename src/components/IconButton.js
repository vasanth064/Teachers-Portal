import React from 'react';
import { useUI } from '../Context/UiContext';
import './css/GreenButton.css';
const IconButton = ({ children, marginCenter, ...props }) => {
  const { getTheme } = useUI();
  return (
    <button {...props} className={`iconButton ${getTheme().background}`}>
      {children}
    </button>
  );
};

export default IconButton;
