import React from 'react';
import styled from 'styled-components';

const StudentContainer = styled.div`
  border: none;
  background: rgba(255, 249, 249, 0.4);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2rem;
  width: 30rem !important;
  height: auto;
`;

const ContentBody = styled.div`
  justify-content: center;
  text-align: center;
  padding: 2rem 2rem 0rem 2rem;
  color: black;
`;

const StudentImage = styled.img`
  height: 12rem;
  width: 12rem;
  border-radius: 6rem;
  vertical-align: middle;
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  object-fit: cover;
`;

const StudentName = styled.h1`
  font-size: 2.4rem;
  color: black;
  letter-spacing: 0.07em;
  padding: 1rem 0rem 0.8rem 0rem;
`;

const StudentRoll = styled.h1`
  font-size: 1.8rem;
  color: black;
  letter-spacing: 0.07em;
  padding-bottom: 1.6rem;
`;

const Footer = styled.button`
  background-color: #99add3;
  border-radius: 0rem 0rem 0rem 4rem;
  font-size: 1.8rem;
  font-weight: 800;
  color: white;
  padding: 1.6rem;
  width: 50%;
  border: none;
  display: block;
  margin: 0.1rem;
`;

const AttendanceStatusShell = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <StudentContainer key={index}>
          <ContentBody>
            <StudentImage src={data.Image} alt='StudentImage' />
            <StudentName>{data.name}</StudentName>
            <StudentRoll>{data.rollno}</StudentRoll>
          </ContentBody>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}>
            <Footer style={{ borderRadius: '0rem 0rem 0rem 2rem' }}>
              ACCEPT
            </Footer>
            <Footer style={{ borderRadius: '0rem 0rem 2rem 0rem' }}>
              DECLINE
            </Footer>
          </div>
        </StudentContainer>
      ))}
    </div>
  );
};

export default AttendanceStatusShell;
