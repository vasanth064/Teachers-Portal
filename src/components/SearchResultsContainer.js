import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-top: 5rem;
  flex-wrap: wrap;
  gap: 6rem;
  justify-content: center;
`;

const SearchResultsContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default SearchResultsContainer;
