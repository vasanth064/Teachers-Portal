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
  childrens
})  => {
  
  return <>
  {type === 'text' ? (
    <span>
      <input
  className='inputfield'
  style={
    {
      type,
      height,
      width
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
