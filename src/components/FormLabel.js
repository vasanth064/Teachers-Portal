import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Label = styled.label`
  text-transform: capitalize;
  margin: 3rem 0rem 1rem 1rem;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.6rem;
  letter-spacing: 0.07em;
`;
const FormLabel = ({ children, name, ...props }) => {
  return (
    <Container>
      <Label {...props}> {name && `${name} : `} </Label>
      {children}
    </Container>
  );
};

export default FormLabel;
