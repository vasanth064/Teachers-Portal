import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import StudentInformationData from '../../data/StudentsData';
import SearchBar from '../../components/css/SearchBar';
import SearchCard from '../../components/SearchCard';
import { BiSearch } from 'react-icons/bi';
import SearchResultsContainer from '../../components/SearchResultsContainer';

const StudentSearch = () => {
  return (
    <div>
      <PageHeader text='Student Search' />
      <PageContent>
        <SearchBar
          icon={<BiSearch size='3rem' />}
          placeholder='Students Search'
        />
        <SearchResultsContainer>
          {StudentInformationData.StudentDet.map((item, index) => {
            return (
              <SearchCard
                key={index}
                image={item.img}
                name={item.name}
                department={item.Department}
                designation={item.rollno}
                phoneNumber={item.phoneNumber}
                email={item.email}
              />
            );
          })}
        </SearchResultsContainer>
      </PageContent>
    </div>
  );
};

export default StudentSearch;
