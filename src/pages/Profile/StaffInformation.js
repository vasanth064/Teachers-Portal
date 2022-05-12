import React from 'react';
import GlassSheet from '../../components/GlassSheet';
import styled from 'styled-components';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import { useAuth } from './../../Context/AuthContext';

const Container = styled.div`
  height: auto;
  width: auto;
  border: 1px solid transparent;
  padding: 0rem;
  margin: 0rem;
  @media screen and (max-width: 900px) {
    & {
      margin: 8rem 0;
    }
  }
  @media screen and (max-width: 450px) {
    & {
      margin: 8rem 0;
    }
  }
`;

const StaffImage = styled.img`
  position: absolute;
  left: 50%;
  top: 12.5%;
  transform: translateX(-50%);
  height: 20rem;
  width: 20rem;
  border-radius: 10rem;
  box-shadow: 4px 4px 24px -4px rgba(0, 0, 0, 0.3);
  object-fit: cover;
  z-index: 5;

  @media screen and (max-width: 450px) {
    & {
      top: 15%;
      height: 15rem;
      width: 15rem;
    }
  }
`;

const StaffName = styled.h1`
  padding: 12rem 0rem 0rem 0rem;
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-align: center;
`;

const DetailsContainer = styled.div`
  padding: 5rem 2.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;
`;
const StaffDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
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
  margin: 1rem 0;
`;

const StaffInformation = () => {
  const { userData } = useAuth();

  return (
    <div>
      <PageHeader text='Profile View' />
      <PageContent>
        <Container>
          <StaffImage src={userData.photo} alt='staff' />
          <GlassSheet>
            <StaffName>{userData.name}</StaffName>
            <DetailsContainer className='DetailsContainer'>
              <StaffDetails className='StaffDetails'>
                <StaffDetailHeader>Staff ID:</StaffDetailHeader>
                <StaffDetailsContent>{userData.staffID}</StaffDetailsContent>
              </StaffDetails>

              <StaffDetails>
                <StaffDetailHeader className='StaffDetailHeader'>
                  Department:
                </StaffDetailHeader>
                <StaffDetailsContent className='StaffDetailsContent'>
                  {userData.department}
                </StaffDetailsContent>
              </StaffDetails>

              <StaffDetails>
                <StaffDetailHeader>Designation:</StaffDetailHeader>
                <StaffDetailsContent>
                  {userData.designation}
                </StaffDetailsContent>
              </StaffDetails>

              <StaffDetails>
                <StaffDetailHeader>Year Of Joining:</StaffDetailHeader>
                <StaffDetailsContent>
                  {userData.yearOfJoining}
                </StaffDetailsContent>
              </StaffDetails>

              <StaffDetails>
                <StaffDetailHeader>Landline :</StaffDetailHeader>
                <StaffDetailsContent>{userData.landline}</StaffDetailsContent>
              </StaffDetails>

              <StaffDetails>
                <StaffDetailHeader>E-Mail:</StaffDetailHeader>
                <StaffDetailsContent> {userData.email}</StaffDetailsContent>
              </StaffDetails>

              <StaffDetails>
                <StaffDetailHeader>Phone Number:</StaffDetailHeader>
                <StaffDetailsContent>
                  {userData.phoneNumber}
                </StaffDetailsContent>
              </StaffDetails>

              <StaffDetails>
                <StaffDetailHeader>Qualification:</StaffDetailHeader>
                <StaffDetailsContent>
                  {userData.qualification}
                </StaffDetailsContent>
              </StaffDetails>

              <StaffDetails style={{ marginTop: '2.5rem' }}>
                <StaffDetailHeader>Area of Specialization:</StaffDetailHeader>
                <p style={{ fontSize: '2rem', textAlign: 'justify' }}>
                  {userData.areaOfSpecialization}
                </p>
              </StaffDetails>
              <StaffDetails style={{ marginTop: '2.5rem' }}>
                <StaffDetailHeader>Courses Handled:</StaffDetailHeader>
                <p style={{ fontSize: '2rem', textAlign: 'justify' }}>
                  {userData.coursesHandled}
                </p>
              </StaffDetails>
            </DetailsContainer>
          </GlassSheet>
        </Container>
      </PageContent>
    </div>
  );
};

export default StaffInformation;
