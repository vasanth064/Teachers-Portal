import React from 'react';
import './css/BlueButton.css';
import Search from '../assets/images/icons/search.svg';

const SearchButton = () => {
  return  <button className='blueButton'  style={{
    borderRadius: "2rem 0rem 0rem 2rem"
  }}>
      <img className='iconButton' src={Search} alt='Phone'/>
  </button>
}

export default SearchButton;
