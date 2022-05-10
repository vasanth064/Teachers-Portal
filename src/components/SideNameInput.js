import { Field } from 'formik';
import React from 'react';
import './css/SideNameInput.css';

const SideNameInput = ({ type, name, rows, width, onChange, ...props }) => {
  return (
    <div className='SideNameInputGroup' style={{ width }}>
      <h1 className='SideName'>{name}</h1>
      {type === 'textarea' ? (
        <Field
          as='textarea'
          className='SideNameTextArea'
          rows={rows}
          maxLength='450'
          name={name}
          onChange={onChange}
          required
          {...props}></Field>
      ) : (
        <Field
          type={type}
          className='SideNameInput'
          name={name}
          onChange={onChange}
          {...props}
          required
        />
      )}
    </div>
  );
};

export default SideNameInput;
