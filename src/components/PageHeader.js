import React from 'react';
import './css/PageHeader.css';
const PageHeader = ({ text, color, size, uppercase }) => {
  return (
    <h1
      className='pageHeader'
      style={{ color, fontSize: `${size}rem`, textTransform: uppercase }}>
      {text}
    </h1>
  );
};

export default PageHeader;
