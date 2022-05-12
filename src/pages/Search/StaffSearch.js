import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import SearchCard from '../../components/SearchCard';
import { BiSearch } from 'react-icons/bi';
import { debounce } from 'lodash';
import SearchBar from '../../components/css/SearchBar';
import SearchResultsContainer from '../../components/SearchResultsContainer';
import { useFirestore } from '../../Context/FirestoreContext';

const Staffsearch = () => {
  const { getData } = useFirestore();
  const [teachers, setTeachers] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getData('teachers');
      setTeachers(data);
    })();
  }, []);
  const searchTeachers = (search) => {
    debounce(() => setSearchName(search), 500);

    const newResults = teachers.filter((teacher) => {
      if (search === '') {
        return teacher;
      }

      return teacher.name.toLowerCase().includes(search.toLowerCase());
    });

    setSearchResults(newResults);

    if (search === '') {
      setSearchResults([]);
    }
  };
  return (
    <div>
      <PageHeader text='Staff Search' />
      <PageContent>
        <SearchBar
          icon={<BiSearch size='3rem' />}
          name='teacherName'
          placeholder='Teachers Search'
          onChange={(e) => searchTeachers(e.target.value)}
        />

        <SearchResultsContainer>
          {searchResults.length === 0
            ? teachers.map((item, index) => (
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
              ))
            : searchResults.map((item, index) => (
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
