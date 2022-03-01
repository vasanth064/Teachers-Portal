import React from 'react';
import './css/LoginInput.css';
const LoginInput = ({ inputName, type }) => {
  return (
    <div className='loginInputGroup'>
      <p className='loginInputName'>{inputName}</p>
      <input
        type={type === 'password' ? 'password' : 'text'}
        className='LoginInput'
      />
    </div>
  );
};

export default LoginInput;
