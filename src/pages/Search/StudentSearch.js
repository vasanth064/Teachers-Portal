import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import SearchBar from '../../components/css/SearchBar';
import SearchCard from '../../components/SearchCard';
import { BiSearch } from 'react-icons/bi';
import SearchResultsContainer from '../../components/SearchResultsContainer';
import { useFirestore } from '../../Context/FirestoreContext';

const StudentSearch = () => {
  const { getData } = useFirestore();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getData('students');
      setStudents(data);
    })();
  }, []);

  return (
    <>
      <div>
        <PageHeader text='Student Search' />
        <PageContent>
          <SearchBar
            icon={<BiSearch size='3rem' />}
            placeholder='Students Search'
          />
          <SearchResultsContainer>
            {students.map((item, index) => (
              <SearchCard
                key={index}
                image={item.photo}
                name={item.name}
                department={item.department}
                rollno={item.rollno}
                phoneNumber={item.phoneNumber}
                email={item.email}
              />
            ))}
          </SearchResultsContainer>
        </PageContent>
      </div>
    </>
  );
};

export default StudentSearch;
