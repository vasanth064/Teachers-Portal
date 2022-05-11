import React from 'react';
import './css/GlassSheet.css';

const GlassSheet = ({ children, ...props }) => {
  return (
    <div className='GlassSheet' {...props}>
      {children}
    </div>
  );
};

export default GlassSheet;
