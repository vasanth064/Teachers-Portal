import React from 'react';
import './css/BlueButton.css';
import Phone from '../assets/images/icons/call.svg';

const PhoneButton = () => {
  return <button className='blueButton'  style={{
    borderRadius: "0rem 0rem 1.5rem 0rem"
  }}>
      <img className='iconButton' src={Phone} alt='Phone'/>
  </button>
}

export default PhoneButton;
