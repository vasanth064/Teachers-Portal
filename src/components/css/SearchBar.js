import React from 'react';
import styled from 'styled-components';
import frostImg from './../../assets/images/backgrounds/frost.png';
const FormContainer = styled.div`
  position: relative;
  width: 100%;
`;
const Frost = styled.div`
  position: absolute;
  background: url(${frostImg});
  height: 100%;
  width: 100%;
  mix-blend-mode: overlay;
  opacity: 0.2;
`;
const IconContainer = styled.div`
  position: absolute;
  height: 6rem;
  max-height: 6rem;
  width: fit-content;
  z-index: 5;
  padding: 0 3.5rem;
  text-align: center;
  border-radius: 20px 0px 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #99add3;
  overflow: hidden;
  p {
    padding: 0;
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
  }
`;
const SearchInput = styled.input`
  width: 100%;
  height: 6rem;
  background: #ffffff;
  border-radius: 20px;
  border: 2.5px solid #dddddd;
  padding-left: 12.5rem;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 2.4rem;
  letter-spacing: 0.07em;
  color: #4b4b4b;
  outline: none;
`;

const SearchBar = ({ icon, type, placeholder }, ...props) => {
  return (
    <FormContainer>
      <IconContainer>
        <Frost />
        {icon || <p>Search</p>}
      </IconContainer>
      <SearchInput
        type={type || 'text'}
        placeholder={placeholder || 'Type to Search'}
        {...props}
      />
    </FormContainer>
  );
};

export default SearchBar;
