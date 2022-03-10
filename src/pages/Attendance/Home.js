import React from 'react';
import styled from 'styled-components';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import ActionButton from '../../components/ActionButtons';
import GlassSheet from '../../components/GlassSheet';
import SearchCard from '../../components/SearchCard';
import SortButton from '../../components/SortButton';
import { BiSearch } from 'react-icons/bi' 

const Searching = styled.div`
display: flex;
`;

const SubjectHeader = styled.div`
display: flex;
width: 134rem;
padding: 6rem 6rem 0rem 6rem;
justify-content: space-between;
`;

const MiddleFunction = styled.div`
display: flex;
padding: 0rem 6rem;
`;

const ContentArea = styled.div`
padding: 2rem;
margin: 6rem 2rem;
justify-content: center;
`;

const SubjectTitle = styled.h1`
font-size: 2.5rem;
font-weight: bold;
letter-spacing: 0.2rem;
`;

const Period = styled.div`
text-align: center;
margin: 4rem 0rem;
`;

const Day = styled.h1`
font-size: 7rem;
font-weight: bold;
letter-spacing: 2rem;
`;

const Date = styled.h2`
font-size: 6rem;
font-weight: bold;
letter-spacing: 1rem;
padding: 1.8rem 0rem;
`;

const Year = styled.h3`
font-size: 2rem;
font-weight: bold;
letter-spacing: 0.6rem;
`;

const ReasonPanel = styled.div`
margin: 7rem 6rem;
`;

const ButtonArea = styled.div`
margin: 7rem 2rem;
`;

const BottomButtons = styled.div`
display: flex;
justify-content: center;
`;

const Home = () => {
  return <div>
    <PageHeader>Attendace Management</PageHeader>
    <PageContent>
      <GlassSheet
      padding='4rem 4rem 0rem 4rem'
      borderRadius='2.5rem'>
        <Searching>
          <ActionButton
          height='6rem'
          width='10rem'
          borderRadius='2rem 0rem 0rem 2rem'
          padding='1rem 1rem'>
            <BiSearch size='4rem'/>
          </ActionButton>
          <SearchCard
          type='date' 
          height='6rem'
          width='120rem'
          borderRadius='0rem 2rem 2rem 0rem'
          border='2.5px solid #99ADD3'
          placeholder='Date'/>
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
      
      <ContentArea>
        <GlassSheet
        borderRadius='3.5rem'>
          <SubjectHeader>
            <SubjectTitle>Problem Solving and C Programming - Z211025</SubjectTitle>
            <SubjectTitle>Semester 01</SubjectTitle>
          </SubjectHeader>
          <MiddleFunction>
            <Period>
              <Day>TUE</Day>
              <Date>14</Date>
              <Year>09/2021</Year>
            </Period>
          <ReasonPanel>
            <SearchCard
              height='16rem'
              width='70rem'
              type='text'
              border='2.5px solid #99ADD3'
              borderRadius='2rem'/>
          </ReasonPanel>
          <ButtonArea>
             <ActionButton
              height='6rem'
              width='16rem'
              borderRadius='1.5rem'
              margin='1rem'
              padding='1rem'>Class Cancel</ActionButton>
              <br/>
              <ActionButton
              height='6rem'
              width='16rem'
              borderRadius='1.5rem'
              margin='1rem'
              padding='1rem'>Submit</ActionButton>
            </ButtonArea>
          </MiddleFunction>
        <BottomButtons>
          <ActionButton
          height='6rem'
          width='70rem'
          margin='0rem 0.2rem'
          borderRadius='0rem 0rem 0rem 3rem'>ATTENDANCE ENTRY</ActionButton>
          <ActionButton
          height='6rem'
          width='70rem'
          margin='0rem 0.2rem'
          borderRadius='0rem 0rem 3rem 0rem'>ATTENDANCE VIEW</ActionButton>
          </BottomButtons>
        </GlassSheet>
      </ContentArea>
    </PageContent>
  </div>;
}

export default Home;
