import React from 'react';

import styled from 'styled-components';

import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import UniqueStaffData from '../../data/UniqueStaffData';
import GlassSheet from './../../components/GlassSheet';

const Container = styled.div`
  height: auto;
  width: auto;
  border: 1px solid transparent;
  padding: 0rem;
  margin: 0rem;
`;

const StaffImage = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 20rem;
  width: 20rem;
  border-radius: 10rem;
  box-shadow: 4px 4px 24px -4px rgba(0, 0, 0, 0.3);
  object-fit: cover;
  z-index: 1;
`;

const StaffName = styled.h1`
  padding: 12rem 0rem 0rem 0rem;
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-align: center;
`;

const DetailsContainer = styled.div`
  padding: 5rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;
`;
const StaffDetails = styled.div`
  display: flex;
`;
const StaffDetailHeader = styled.div`
  height: auto;
  width: 28rem;
  font-size: 1.8rem;
  letter-spacing: 0.07em;
  font-weight: bold;
`;
const StaffDetailsContent = styled.div`
  height: auto;
  width: 28rem;
  font-size: 1.8rem;
  letter-spacing: 0.07em;
`;

const StaffInformation = () => {
  return (
    <div>
      <PageHeader text='Staff Information' />
      <PageContent>
        {UniqueStaffData.A8452.map((item, index) => {
          return (
            <Container key={index}>
              <StaffImage src={item.img} alt='staff' />
              <GlassSheet
                height='auto'
                width='auto'
                borderRadius='2rem'
                margin='12rem 0rem 0rem 0rem'>
                <StaffName>{item.name}</StaffName>
                <DetailsContainer>
                  <StaffDetails>
                    <StaffDetailHeader>Department:</StaffDetailHeader>
                    <StaffDetailsContent>{item.Department}</StaffDetailsContent>
                  </StaffDetails>

                  <StaffDetails>
                    <StaffDetailHeader>Year Of Joining:</StaffDetailHeader>
                    <StaffDetailsContent>
                      {item.Year_of_Joining}
                    </StaffDetailsContent>
                  </StaffDetails>

                  <StaffDetails>
                    <StaffDetailHeader>E-Mail:</StaffDetailHeader>
                    <StaffDetailsContent> {item.E_mail}</StaffDetailsContent>
                  </StaffDetails>

                  <StaffDetails>
                    <StaffDetailHeader>Year Of Experience:</StaffDetailHeader>
                    <StaffDetailsContent>
                      {item.Year_of_Experience}
                    </StaffDetailsContent>
                  </StaffDetails>

                  <StaffDetails>
                    <StaffDetailHeader>
                      Area Of Specialization:
                    </StaffDetailHeader>
                    <StaffDetailsContent>
                      {item.Area_of_Specialization}
                    </StaffDetailsContent>
                  </StaffDetails>

                  <StaffDetails>
                    <StaffDetailHeader>Designation:</StaffDetailHeader>
                    <StaffDetailsContent>
                      {item.Designation}
                    </StaffDetailsContent>
                  </StaffDetails>

                  <StaffDetails>
                    <StaffDetailHeader>Phone Number:</StaffDetailHeader>
                    <StaffDetailsContent>
                      {item.Phone_Number}
                    </StaffDetailsContent>
                  </StaffDetails>

                  <StaffDetails>
                    <StaffDetailHeader>Qualification:</StaffDetailHeader>
                    <StaffDetailsContent>
                      {item.Qualificaiton}
                    </StaffDetailsContent>
                  </StaffDetails>

                  <StaffDetails>
                    <StaffDetailHeader>Landline:</StaffDetailHeader>
                    <StaffDetailsContent> {item.Landline}</StaffDetailsContent>
                  </StaffDetails>

                  <StaffDetails>
                    <StaffDetailHeader>Courses Handled:</StaffDetailHeader>
                    <StaffDetailsContent>
                      {item.Courses_Handled}
                    </StaffDetailsContent>
                  </StaffDetails>
                </DetailsContainer>
              </GlassSheet>
            </Container>
          );
        })}
      </PageContent>
    </div>
  );
};

export default StaffInformation;
