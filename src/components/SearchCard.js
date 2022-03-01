import React from 'react';
import './css/SearchCard.css';

const SearchCard = ({
  position,
  width, 
  height, 
  borderRadius, 
  margin, 
  type, 
  fontSize, 
  fontWeight,
  children,
  value,
})  => {
  
  return <div>
    {type === 'text' ? (
          <input
          className='searchcard'
          style={
            {
              width,
              height,
              borderRadius,
              margin,
              fontSize,
              fontWeight,
              value,
          }
        }>{children}</input>
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
      </div>;
    }

export default SearchCard;
