import React from 'react';
import styled from 'styled-components';

export const Container = styled.select`
  position: relative;
  z-index: 1;
  padding: 1.4rem;
  border-radius: 2rem;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 23px;
  letter-spacing: 0.07em;
  text-transform: capitalize;
  border: 2px solid #c3c3c3;
`;

export const Options = styled.option`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 23px;
  letter-spacing: 0.07em;
`;

const FormSelect = ({ handleFormSelect, data, ...props }) => (
  <Container {...props} onChange={(e) => handleFormSelect(e.target.value)}>
    {data &&
      data.map((item, index) => (
        <Options value={item} key={index}>
          {item}
        </Options>
      ))}
  </Container>
);

export default FormSelect;
