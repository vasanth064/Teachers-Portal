import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from'../../components/PageContent';
import GlassSheet from '../../components/GlassSheet';
import styled from 'styled-components';
import SortBoxBeta from '../../components/SortBoxBeta';

const ContentTopic = styled.h1`
position: relative;
font-size: 2rem;
font-weight: 600;
letter-spacing: 0.2rem;
padding: 4rem 0rem 0rem 5rem;
`;

const ContentHolder = styled.div`
position: relative;
display: flex;
height: auto;
width: 75rem;
margin: 5rem 0rem 0rem 8rem;
justify-content: space-between;
align-content: center;
`;

const Label = styled.label`
position: relative;
font-size: 2rem;
font-weight: 500;
`;

const InputField = styled.input`
position: relative;
height: 4rem;
width: 25rem;
border: 2px solid #C3C3C3;
border-radius: 1.5rem;
margin: 0rem 0rem 0rem 2rem;
padding: 0rem 2rem 0rem 2rem;
font-size: 1.5rem;
font-weight: 500;
background: #ffffff;
`;

const AttendanceReview = () => {
  return <div>
     <PageHeader text='Attendance Review'/>
    <PageContent>
      <GlassSheet 
      height='25rem'
      width='130rem'
      borderRadius='2rem'
      margin='0rem 0rem 0rem 0rem'>
        <div style={
          {
            display: 'flex'
            }}>
              <ContentTopic>Department of Computer Engineering</ContentTopic>
              <SortBoxBeta/>
        </div>
        <ContentHolder>
          <div>
             <Label>From</Label>
             <InputField type='date' placeholder='From...'></InputField>
          </div>
          <div>
             <Label>To</Label>
             <InputField type='date' placeholder='To...'></InputField>
          </div>
        </ContentHolder>
      </GlassSheet>
    </PageContent>
  </div>;
}

export default AttendanceReview;
