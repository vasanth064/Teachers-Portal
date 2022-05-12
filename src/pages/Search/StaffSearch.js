import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import SearchCard from '../../components/SearchCard';
import { BiSearch } from 'react-icons/bi';
import SearchBar from '../../components/css/SearchBar';
import SearchResultsContainer from '../../components/SearchResultsContainer';
import { useFirestore } from '../../Context/FirestoreContext';

const Staffsearch = () => {
  const { getData } = useFirestore();
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getData('teachers');
      setTeachers(data);
    })();
  }, []);

  return (
    <div>
      <PageHeader text='Staff Search' />
      <PageContent>
        <SearchBar
          icon={<BiSearch size='3rem' />}
          placeholder='Staff Search'
          name='teacherSearch'
        />
        <SearchResultsContainer>
          {teachers &&
            teachers.map((item, index) => (
              <SearchCard
                key={index}
                rollno={item.staffID}
                image={item.photo}
                name={item.name}
                qualification={item.qualification}
                department={item.department}
                designation={item.designation}
                phoneNumber={item.phoneNumber}
                email={item.email}
              />
            ))}
        </SearchResultsContainer>
      </PageContent>
    </div>
  );
};

export default Staffsearch;
