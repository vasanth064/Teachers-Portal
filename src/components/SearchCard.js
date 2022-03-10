import React from 'react';
import './css/SearchCard.css';

const SearchCard = ({
  position,
  width, 
  height, 
  borderRadius, 
  margin, 
  type, 
  children,
  border
})  => {
  
  return <>
  {(type === 'text' || type === 'date') ? (
    <span>
      <input
  className='inputfield'
  style={
    {
      type,
      height,
      width,
      border,
      borderRadius
    }
  }>{children}</input>
    </span>
  ) : (
  <div
  className='searchcard'
  style={
    {
      position,
      width,
      height,
               borderRadius,
               margin, 
              }}>{children}</div>
        )}
      </>;
    }

export default SearchCard;
