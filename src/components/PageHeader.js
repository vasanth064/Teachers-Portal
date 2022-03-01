import React from 'react';
import './css/PageHeader.css';

const PageHeader = ({ text, color, size, uppercase, margin }) => {
  return (
    <h1
      className='pageHeader'
      style={
        { 
          color, 
          fontSize: `${size}rem`, 
          textTransform: uppercase,
          margin
          }
          }>
      {text}
    </h1>
  );
};

export default PageHeader;
