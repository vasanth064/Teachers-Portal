import React from 'react'
import GlassSheet from './GlassSheet';
import styled from 'styled-components';

const Container = styled.div`
height: auto;
width: auto;
border: 1px solid transparent;
padding: 0rem;
margin: 0rem;
`;

const StaffImage = styled.img`
position: absolute;
margin: 0rem 61rem 0rem 61rem;
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
padding: 5rem 0rem 4rem 0rem;
display: grid;
grid-template-columns: auto auto auto auto;
grid-gap: 2.5rem;
justify-content: center;
height: auto;
width: auto;
`;


const StaffDetails = styled.div`
height: auto;
width: 28rem;
font-size: 1.8rem;
letter-spacing: 0.07em;
`;

const Info = ({data}) => {
  return (
  <>
  {data.map((item, index) => {
    return (
      <Container>
        <StaffImage src={item.img} alt='staff'/>
        <GlassSheet
        height='auto'
        width='auto'
        borderRadius = '2rem'
        margin = '12rem 0rem 0rem 0rem'>
          <StaffName>{item.name}</StaffName>
          <DetailsContainer>
              <b>
                <StaffDetails>Department:</StaffDetails>
              </b>
              <StaffDetails> {item.Department}</StaffDetails>
              <b>
                <StaffDetails>Year Of Joining:</StaffDetails>
              </b>
              <StaffDetails> {item.Year_of_Joining}</StaffDetails>
              <b>
                <StaffDetails>E-Mail:</StaffDetails>
              </b>
              <StaffDetails> {item.E_mail}</StaffDetails>
              <b>
                <StaffDetails>Year Of Experience:</StaffDetails>
              </b>
              <StaffDetails> {item.Year_of_Experience}</StaffDetails>
              <b>
                <StaffDetails>Area Of Specialization:</StaffDetails>
              </b>
              <StaffDetails> {item.Area_of_Specialization}</StaffDetails>
              <b>
                <StaffDetails>Designation:</StaffDetails>
              </b>
              <StaffDetails> {item.Designation}</StaffDetails>
              <b>
                <StaffDetails>Phone Number:</StaffDetails>
              </b>
              <StaffDetails> {item.Phone_Number}</StaffDetails>
              <b>
                <StaffDetails>Qualification:</StaffDetails>
              </b>
              <StaffDetails> {item.Qualificaiton}</StaffDetails>
              <b>
                <StaffDetails>Landline:</StaffDetails>
              </b>
              <StaffDetails> {item.Landline}</StaffDetails>
              <b>
                <StaffDetails>Courses Handled:</StaffDetails>
              </b>
              <StaffDetails> {item.Courses_Handled}</StaffDetails>
          </DetailsContainer>
        </GlassSheet>
      </Container> 
      )
    })}
  </>
  )
}

export default Info;