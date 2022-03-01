import React from 'react';
import './css/SideNameInput.css';

const SideNameInput = ({
  type,
  name,
  rows,
  width,
  marginLeft,
  marginRight,
}) => {
  return (
    <div className='SideNameInputGroup'>
      <h1 className='SideName'>{name}</h1>
      {type === 'textarea' ? (
        <textarea
          className='SideNameTextArea'
          rows={rows}
          maxlength='450'
          style={{ width, marginLeft, marginRight }}></textarea>
      ) : (
        <input
          type={type}
          className='SideNameInput'
          style={{ width, marginLeft, marginRight }}
        />
      )}
    </div>
  );
};

export default SideNameInput;
