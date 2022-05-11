import React from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

const Input = styled(Field)`
  font-size: 2rem;
  height: 7rem;
  width: 100%;
  border-radius: 2rem;
  border: 2px solid #c3c3c3;
  padding: 1rem 2rem;
  position: relative;
  z-index: 1;

  option {
    font-size: 2rem;
  }
`;

const InputField = ({ childern, ...props }) => {
  return childern ? <Input {...props}>{childern}</Input> : <Input {...props} />;
};

export default InputField;
