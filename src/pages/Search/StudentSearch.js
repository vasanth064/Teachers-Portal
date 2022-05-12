import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';
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
  const [searchName, setSearchName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getData('students');
      setStudents(data);
    })();
  }, []);

  const searchStudents = (search) => {
    debounce(() => setSearchName(search), 500);

    const newResults = students.filter((student) => {
      if (search === '') {
        return student;
      }

      return student.name.toLowerCase().includes(search.toLowerCase());
    });

    setSearchResults(newResults);

    if (search === '') {
      setSearchResults([]);
    }
  };

  return (
    <>
      <div>
        {console.log(searchName)}
        <PageHeader text='Student Search' />
        <PageContent>
          <SearchBar
            icon={<BiSearch size='3rem' />}
            name='studentName'
            placeholder='Students Search'
            onChange={(e) => searchStudents(e.target.value)}
          />

          <SearchResultsContainer>
            {searchResults.length === 0
              ? students.map((item, index) => (
                  <SearchCard
                    key={index}
                    image={item.photo}
                    name={item.name}
                    department={item.department}
                    rollno={item.rollno}
                    phoneNumber={item.phoneNumber}
                    email={item.email}
                  />
                ))
              : searchResults.map((item, index) => (
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
