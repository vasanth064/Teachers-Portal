import React from 'react';
import styled from 'styled-components';
import frostImg from './../assets/images/backgrounds/frost.png';
import { useUI } from './../Context/UiContext';
const Option = styled.div`
  width: max-content;
  text-align: center;
  min-width: 4rem;
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
  background: ${(props) => (props.active ? props.bg : 'transparent')};
  position: relative;
  z-index: 1;
  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${frostImg});
    mix-blend-mode: overlay;
    opacity: 0.2;
  }
`;

const FormOptions = ({
  handleActiveFormOption,
  data,
  activeFormOption,
  index,
  name,
  ...props
}) => {
  const { getTheme } = useUI();
  return data.map((name, index) => (
    <Option
      key={index}
      onClick={() => handleActiveFormOption(index)}
      {...props}
      active={index === activeFormOption ? true : false}
      bg={getTheme().liteBg}>
      {name}
    </Option>
  ));
};

export default FormOptions;
