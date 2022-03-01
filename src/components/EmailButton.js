import React from 'react';
import './css/BlueButton.css';
import Email from '../assets/images/icons/Email.svg';

const EmailButton = () => {
  return <button className='blueButton' style={{
    borderRadius: "0rem 0rem 0rem 2rem"
  }}>
          <img className='iconButton' src={Email} alt='Email'/>
      </button>;
}

export default EmailButton;
