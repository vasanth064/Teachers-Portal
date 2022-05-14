import React from 'react';
import styled from 'styled-components';
import frostImg from './../assets/images/backgrounds/frost.png';
const Container = styled.div`
  width: 100%;
  background: linear-gradient(
    98.41deg,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0.6) 100%
  );
  box-shadow: 4px 4px 20px -4px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(240px);
  padding: 1rem 1.7rem;
  border-radius: 2rem;
  border: 4px solid white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  z-index: 0;
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    background: url(${frostImg});
    mix-blend-mode: overlay;
    opacity: 0.5;
    z-index: 1;
  }
`;
const Button = styled.button`
  padding: 1.2rem 0rem;
  font-size: 2rem;
  font-weight: 700;
  border: none;
  margin-top: 2.5rem;
  background: #99add3;
  border-radius: 2rem;
  left: 0;
  width: 100%;
  z-index: 10;
  text-transform: uppercase;
  position: relative;
  cursor: pointer;
  color: white;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    background: url(${frostImg});
    mix-blend-mode: overlay;
    opacity: 0.5;
    z-index: 10;
  }
`;
const FormContainer = ({ children }) => {
  return (
    <Container>
      {children}
      <Button type='submit'>Submit</Button>
    </Container>
  );
};

export default FormContainer;
