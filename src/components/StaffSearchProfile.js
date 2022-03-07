import React, {useState} from 'react';
import SearchCard from './SearchCard';
import EmailButton from './EmailButton';
import PhoneButton from './PhoneButton';
import SearchButton from './SearchButton';
import styled from 'styled-components';

const Searching = styled.div`
position: relative;
display: flex;
top: 2.5rem;
`;

const StaffName = styled.div`
position: relative;
font-size: 2rem;
font-weight: bold;
letter-spacing: 0.04em;
display: flex;
justify-content: center;
top: 4rem;
`;

const StaffEdu = styled.div`
padding: 0.6rem 0rem 0rem 0.4rem;
font-size: 1.2rem;
font-weight: 500;
`;

const StaffDepartment = styled.div`
position: relative;
font-size: 1.6rem;
letter-spacing: 0.08em;
font-weight: 500;
top: 5.5rem;
`;

const StaffDesignation = styled.div`
position: relative;
font-size: 2.2rem;
letter-spacing: 0.08em;
font-weight: 600;
top: 7rem;
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

const Contact = styled.div`
position: relative;
top: 8.2rem;
background: none;
justify-content: space-around;
`;

const StaffSearchProfile = ({data}) => {
  
  const [filter, setFilter] = useState('');
 
  const SearchText = (event) => {
    setFilter(event.target.value);
  }
  
  let DataSearch = data.StaffDet.filter(item => {
    return Object.keys(item).some(key => item[key].toString().toLowerCase()
    .includes(filter.toString().toUpperCase())
    )
  });

        return (
        <>
         <Searching>
                <SearchButton/>
                <Searchbar
                value = {filter}
                onChange = {SearchText.bind(this)}/>
            </Searching>
            <SearchedArea>
                {DataSearch.map((item, index) => {
                  return (
                     <SearchCard width='28rem' height='32rem' borderRadius='2rem' key={index}>
                    <img style={
                        {
                            position: "relative",
                            height: "11rem", 
                            width: "11rem", 
                            objectFit: "cover", 
                            borderRadius: "6rem",
                            top: "2.5rem",}} 
                            src={item.img} alt='Staff'/>
                    <StaffName> {item.name} <StaffEdu> {item.Qualificaiton} </StaffEdu></StaffName>
                    <StaffDepartment> {item.Department} </StaffDepartment>
                    <StaffDesignation> {item.Designation} </StaffDesignation>
                    <Contact>
                        <EmailButton/>
                        <PhoneButton/>
                    </Contact>
                </SearchCard>
                  )})}
            </SearchedArea>
        </>
      )
    }
export default StaffSearchProfile;