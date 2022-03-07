import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import SortBox from '../../components/SortBox';
import styled from 'styled-components';
import SearchCard from '../../components/SearchCard';
import GreenButton from '../../components/GreenButton';

const SearchArea = styled.div`
display: flex;
`;

const ArrearList = () => {
  return <div>
    <PageHeader text='Arrear Report'/>
    <PageContent>
      <SearchArea>
      <SortBox/>
      <SearchCard 
      type='text'
      width='115rem'
      height='6rem'
      borderRadius='0rem 2rem 2rem 0rem'
      fontSize='2rem'
      fontWeight='500'
      />
    </SearchArea>
    <GreenButton   
    margin='15rem 55rem'>Get Arrear Report</GreenButton>
    </PageContent>
  </div>;
}

export default ArrearList;
