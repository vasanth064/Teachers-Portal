import React from 'react';
import './css/GlassSheet.css';

const GlassSheet = ( {
    children,
    height,
    width,
    borderRadius,
    margin,
} ) => {
  return (
    <div className='GlassSheet'
    style={
        {
            height,
            width,
            borderRadius,
            margin,
        }
    }>{children}</div>
  )
}

export default GlassSheet;