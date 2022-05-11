import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import StaffInformationData from '../../data/StaffInformationData';
import SearchCard from '../../components/SearchCard';
import { BiSearch } from 'react-icons/bi';
import SearchBar from '../../components/css/SearchBar';
import SearchResultsContainer from '../../components/SearchResultsContainer';

const Staffsearch = () => {
  return (
    <div>
      <PageHeader text='Staff Search' />
      <PageContent>
        <SearchBar icon={<BiSearch size='3rem' />} placeholder='Staff Search' />
        <SearchResultsContainer>
          {StaffInformationData.map((item, index) => {
            return (
              <SearchCard
                key={index}
                image={item.img}
                name={item.name}
                qualification={item.qualification}
                department={item.department}
                designation={item.designation}
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

export default Staffsearch;
