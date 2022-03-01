import React from 'react'
import styled from 'styled-components';
import SearchCard from './SearchCard';
import SearchButton from './SearchButton';
import EmailButton from './EmailButton';
import PhoneButton from './PhoneButton';

const Searching = styled.div`
position: relative;
display: flex;
top: 2.5rem;
`;

const Contact = styled.div`
position: relative;
top: 8.4rem;
background: none;
`;

const StudentName = styled.div`
position: relative;
font-size: 2.2rem;
font-weight: bold;
letter-spacing: 0.04em;
display: flex;
justify-content: center;
top: 4rem;
`;

const StudentRegisterNumber = styled.div`
position: relative;
font-size: 1.8rem;
letter-spacing: 0.08em;
font-weight: 600;
top: 7rem;
`;

const StudentDepartment = styled.div`
position: relative;
font-size: 1.6rem;
letter-spacing: 0.08em;
font-weight: 500;
top: 5.5rem;
`;

const SearchedArea = styled.div`
position: relative;
display: grid;
grid-template-columns: auto auto auto auto;
grid-gap: 6rem;
justify-content: center;
top: 8rem;
align-items: center;
`;
        
const Searchbar = styled.input`
position: relative;
background: rgba(255, 249, 249, 0.6);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border: none;
justify-content: center;
text-align: center;
type='text' 
height: 6rem;
width: 135rem;
border-radius: 0rem 2rem 2rem 0rem;
font-size: 2rem;
font-weight:normal;
`;

const StudentProfileSearch = ({data}) => {
  return (
  <>
    <Searching>
      <SearchButton/>
      <Searchbar/>
    </Searching>
    <SearchedArea>
      {data.StudentDet.map((item, index) => {
        return (
        <SearchCard width='28rem' height='32rem' borderRadius='2rem' key={index}>
          <img style={
            {
              position: "relative",
              height: "11rem", 
              width: "11rem", 
              objectFit: "cover", 
              borderRadius: "6rem",
              top: "2.5rem",
            }} 
            src={item.img} alt='Staff'/>
            <StudentName> {item.name}</StudentName>
            <StudentDepartment> {item.Department} </StudentDepartment>
            <StudentRegisterNumber>{item.rollno}</StudentRegisterNumber>
            <Contact>
              <EmailButton/>
              <PhoneButton/>
            </Contact>
          </SearchCard>
          )})}
      </SearchedArea>
  </>
  );
}

export default StudentProfileSearch;