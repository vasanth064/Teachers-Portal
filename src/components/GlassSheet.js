import React from 'react';
import './css/GlassSheet.css';

const GlassSheet = ( {
    children,
    height,
    width,
    borderRadius,
    margin,
    padding
} ) => {
  return (
    <div className='GlassSheet'
    style={
        {
            height,
            width,
            borderRadius,
            margin,
            padding
        }
    }>{children}</div>
  )
}

export default GlassSheet;