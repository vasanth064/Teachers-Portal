import React from 'react'
import styled from 'styled-components';
import SearchCard from './SearchCard';
import ActionButton from './ActionButtons';
import { BiSearch } from 'react-icons/bi' 
import { FaPhoneAlt } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

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

const StudentProfileSearch = ({data}) => {
  return (
  <>
  <Searching>
             <span>
                 <ActionButton
                 height='6rem'
                 width='10rem'
             borderRadius='2rem 0rem 0rem 2rem'
             padding='1rem 0rem 0rem 0rem'>
                 <BiSearch size='4rem'/>
             </ActionButton>
             </span>
                  <SearchCard
                type='text' 
                height='6rem'
                width='135rem'
                />
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
                        <ActionButton
                        height='6rem'
                        width='13.8rem'
                        borderRadius='0rem 0rem 0rem 2rem'
                        margin='0rem 0.2rem 0rem 0rem'
                        padding='0.5rem 0rem 0rem 0rem'>
                            <FaPhoneAlt size="3rem"/>
                        </ActionButton>
                        <ActionButton
                        height='6rem'
                        width='13.8rem'
                        borderRadius='0rem 0rem 2rem 0rem'
                        margin='0rem 0rem 0rem 0.2rem'>
                            <IoIosMail size="3.5rem"/>
                        </ActionButton>
                    </Contact>
          </SearchCard>
          )})}
      </SearchedArea>
  </>
  );
}

export default StudentProfileSearch;