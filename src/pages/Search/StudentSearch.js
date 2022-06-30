import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import SearchBar from '../../components/css/SearchBar';
import SearchCard from '../../components/SearchCard';
import { BiSearch } from 'react-icons/bi';
import SearchResultsContainer from '../../components/SearchResultsContainer';
import { useFirestore } from '../../Context/FirestoreContext';
import FormContainer from '../../components/FormContainer';
import FormOptions from '../../components/FormOptions';
import FormSelect from '../../components/FormSelect';

const StudentSearch = () => {
  const { getData } = useFirestore();
  const [students, setStudents] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [activeFormOption, setActiveFormOpton] = useState(0);
  const [batch, setBatch] = useState('2019');

  useEffect(() => {
    if (batch) {
      const newResults = students.filter((student) => student.batch === batch);
      setSearchResults(newResults);
    }
  }, [batch]);

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
      if (activeFormOption === 0) {
        return student.name.toLowerCase().includes(search.toLowerCase());
      }
      if (activeFormOption === 1) {
        return student.department.toLowerCase().includes(search.toLowerCase());
      }
      if (activeFormOption === 2) {
        return student.rollno.toLowerCase().includes(search.toLowerCase());
      }
    });

    setSearchResults(newResults);

    if (search === '') {
      setSearchResults([]);
    }
  };

  const handleActiveFormOption = (index) => setActiveFormOpton(index);
  const handleFormSelect = (value) => setBatch(value);

  return (
    <>
      <div>
        <PageHeader text='Student Search' />
        <PageContent>
          <form autoComplete='off'>
            <FormContainer>
              <SearchBar
                icon={<BiSearch size='3rem' />}
                name='studentName'
                placeholder='Students Search'
                onChange={(e) => searchStudents(e.target.value)}
              />
              <div style={{ display: 'flex', gap: '1rem' }}>
                <FormOptions
                  data={['name', 'department', 'rollno']}
                  activeFormOption={activeFormOption}
                  handleActiveFormOption={handleActiveFormOption}
                />
                <FormSelect
                  handleFormSelect={handleFormSelect}
                  data={['2019', '2020', '2021', 'all']}
                />
              </div>
            </FormContainer>
          </form>
          <SearchResultsContainer>
            {searchResults.length === 0
              ? students.map((item, index) => (
                  <SearchCard
                    key={item.rollno}
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
                    key={item.rollno}
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
