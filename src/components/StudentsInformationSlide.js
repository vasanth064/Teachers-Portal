import React from 'react'
import GlassSheet from './GlassSheet'
import styled from 'styled-components'

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

const StudentsInformationSlide = ({data}) => {
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
              <StaffDetails> {item.department}</StaffDetails>
              <b>
                <StaffDetails>Batch</StaffDetails>
              </b>
              <StaffDetails> {item.batch}</StaffDetails>
              <b>
                <StaffDetails>Date of Birth:</StaffDetails>
              </b>
              <StaffDetails> {item.dateofbirth}</StaffDetails>
              <b>
                <StaffDetails>Father Name</StaffDetails>
              </b>
              <StaffDetails> {item.fathername}</StaffDetails>
               <b>
                <StaffDetails>E-Mail:</StaffDetails>
              </b>
              <StaffDetails> {item.email}</StaffDetails>
              <b>
                <StaffDetails>Phone Number:</StaffDetails>
              </b>
              <StaffDetails> {item.phoneno}</StaffDetails>
              <b>
                <StaffDetails>Tutor:</StaffDetails>
              </b>
              <StaffDetails> {item.tutor}</StaffDetails>
              <b>
                <StaffDetails>Programme Coordinator:</StaffDetails>
              </b>
              <StaffDetails> {item.programmecoordinator}</StaffDetails>
               <b>
                <StaffDetails>Resident:</StaffDetails>
              </b>
              <StaffDetails> {item.resident}</StaffDetails>
                <b>
                <StaffDetails>State:</StaffDetails>
              </b>
              <StaffDetails> {item.state}</StaffDetails>
                <b>
                <StaffDetails>Country:</StaffDetails>
              </b>
              <StaffDetails> {item.country}</StaffDetails>
               <b>
                <StaffDetails>Address:</StaffDetails>
              </b>
              <StaffDetails> {item.address}</StaffDetails>
          </DetailsContainer>
        </GlassSheet>
      </Container> 
      )
    })}
      </>
  )
}

export default StudentsInformationSlide