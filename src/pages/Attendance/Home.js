import React from 'react';
import styled from 'styled-components';
import GlassSheet from '../../components/GlassSheet';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import SortButton from '../../components/SortButton';

const Searching = styled.div`
display: flex;
`;

const Searchbar = styled.input`
background: rgba(255, 249, 249, 0.6);
border: 2px solid rgba(0, 0, 0, 0.3);
justify-content: center;
text-align: center;
type='text' 
height: 6rem;
width: 135rem;
border-radius: 0rem 2rem 2rem 0rem;
font-size: 2rem;
font-weight:normal;
`;

const Home = () => {
  return <div>
    <PageHeader>Attendace Management</PageHeader>
    <PageContent>
      <GlassSheet
      padding='5rem'
      borderRadius='2.5rem'
      >
        <Searching>
          <Searchbar/>
        </Searching>
        <Searching>
          <SortButton margin='2.5rem 1rem'>
            Laboratory
          </SortButton>
          <SortButton margin='2.5rem 1rem'>
            Course
          </SortButton>
          <SortButton margin='2.5rem 1rem'>
            Others
          </SortButton>
          <SortButton margin='2.5rem 1rem'>
            All
          </SortButton>
        </Searching>
      </GlassSheet>
    </PageContent>
  </div>;
}

export default Home;
