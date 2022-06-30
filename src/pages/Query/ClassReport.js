import React, { useEffect, useState } from 'react';
import { MdOutlineMenuBook } from 'react-icons/md';
import { FaUserGraduate } from 'react-icons/fa';
import SearchBar from '../../components/css/SearchBar';
import FormContainer from '../../components/FormContainer';
import GreenButton from '../../components/GreenButton';

import FormSelect, { Container, Options } from '../../components/FormSelect';
import PageContent from '../../components/PageContent';
import PageHeader from '../../components/PageHeader';
import { debounce } from 'lodash';
import { useFirestore } from '../../Context/FirestoreContext';
import FormLabel from '../../components/FormLabel';
import { where } from 'firebase/firestore';
import { useUI } from '../../Context/UiContext';
import { useAuth } from '../../Context/AuthContext';
import sortOptions from '../../data/classReports[SortOptions]';

const ClassReport = () => {
  const { getData } = useFirestore();
  const { getTheme } = useUI();
  const { userData } = useAuth();
  const [reportType, setReportType] = useState('');
  const [subReportType, setSubReportType] = useState('');
  const [batch, setBatch] = useState('2019');
  const [courseCode, setCourseCode] = useState('');
  const [assessmentData, setAssessmentData] = useState(null);
  const [newResults, setNewResults] = useState(null);
  const [rollno, setRollno] = useState(null);
  const [sortMark, setSortMark] = useState(null);
  const [sortType, setSortType] = useState(null);

  const handleReportTypeSelect = (value) => {
    setRollno(null);
    setReportType(value);
  };
  const handleSubReportTypeSelect = (value) => {
    setSubReportType(value);
  };
  const handleBatchSelect = (value) => setBatch(value);
  const handleRollno = (value) => {};

  const getMarks = async (table) => {
    const data = await getData(table, [
      where('batch', '==', batch),
      where('courseCode', '==', courseCode),
      where('subType', '==', subReportType),
      where('department', '==', userData.department),
    ]);
    setAssessmentData(data);
  };
  //Sorting , Filtering and Searching
  useEffect(() => {
    if (rollno) {
      const res =
        assessmentData &&
        assessmentData[0].scores.filter((item) =>
          item.rollno.toLowerCase().includes(rollno.toLowerCase())
        );
      setNewResults(res);
    }
    if (rollno === null) {
      setNewResults(null);
    }
  }, [rollno]);

  useEffect(() => {
    if (sortMark && sortType) {
      const res = assessmentData[0].scores.filter((item) =>
        eval(parseInt(item.markSecured) + sortType + parseInt(sortMark))
      );
      setNewResults(res);
    }
    if (sortMark === null || sortType === null) {
      setNewResults(null);
    }
  }, [sortMark, sortType]);

  useEffect(() => {
    if (reportType === 'Internal Marks Report') {
      getMarks('testResults');
    } else if (reportType === 'External Marks Report') {
      getMarks('examResults');
    }
  }, [reportType, subReportType, batch, courseCode]);

  return (
    <div>
      <PageHeader text='Class Report' />
      <PageContent>
        <form autoComplete='off'>
          <FormContainer>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <FormLabel
                name='Report Type'
                style={{
                  margin: '1rem 0rem 1rem 1rem',
                }}>
                <FormSelect
                  handleFormSelect={handleReportTypeSelect}
                  data={[
                    'select',
                    'Internal Marks Report',
                    'External Marks Report',
                  ]}
                  style={{ width: '100%' }}
                />
              </FormLabel>
              <FormLabel
                style={{
                  margin: '1rem 0rem 1rem 1rem',
                }}
                name={
                  reportType === 'Internal Marks Report'
                    ? 'Test Type'
                    : reportType === 'External Marks Report'
                    ? 'Exam Type'
                    : 'Report Sub Type'
                }>
                <FormSelect
                  handleFormSelect={handleSubReportTypeSelect}
                  data={
                    reportType === 'Internal Marks Report'
                      ? [
                          'Select',
                          'Countinous Assessment 1',
                          'Countinous Assessment 2',
                          'Countinous Assessment 3',
                        ]
                      : reportType === 'External Marks Report'
                      ? ['Select', 'Theory', 'Practicals']
                      : ['Select']
                  }
                  style={{ width: '100%' }}
                />
              </FormLabel>
            </div>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <FormLabel
                style={{
                  margin: '1rem 0rem 1rem 1rem',
                }}
                name='Batch'>
                <FormSelect
                  handleFormSelect={handleBatchSelect}
                  data={['select', '2019', '2020', '2021']}
                  style={{ width: '100%' }}
                />
              </FormLabel>
              <FormLabel
                style={{
                  margin: '1rem 0rem 1rem 1rem',
                }}
                name='Course Code'>
                <SearchBar
                  icon={<MdOutlineMenuBook size='2.5rem' />}
                  name='courseCode'
                  placeholder='Course Code'
                  onChange={debounce((e) => setCourseCode(e.target.value), 500)}
                />
              </FormLabel>
            </div>
          </FormContainer>
        </form>
        {assessmentData && assessmentData.length !== 0 ? (
          <PageContent>
            <form autoComplete='off' onSubmit={null}>
              <FormContainer>
                <FormLabel
                  style={{
                    margin: '1rem 0rem 1rem 1rem',
                  }}
                  name='Roll No'>
                  <SearchBar
                    id='rollno'
                    icon={<FaUserGraduate size='2.5rem' />}
                    name='rollno'
                    placeholder='Roll Number'
                    onChange={debounce((e) => {
                      setRollno(e.target.value);
                      document.querySelector('#sortMark').value = '';
                      setSortMark(null);
                      document.querySelector('#sortType').value = '';
                      setSortType(null);
                    }, 500)}
                  />
                </FormLabel>
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <FormLabel
                    style={{
                      margin: '1rem 0rem 1rem 1rem',
                    }}
                    name='Marks'>
                    <Container
                      onChange={(e) => {
                        setSortType(e.target.value);
                        document.querySelector('#rollno').value = '';
                        setRollno(null);
                      }}
                      id='sortType'>
                      {sortOptions &&
                        sortOptions.map((item, index) => (
                          <Options value={item.value} key={index}>
                            {item.name}
                          </Options>
                        ))}
                    </Container>
                  </FormLabel>
                  <FormLabel
                    style={{
                      margin: '3rem 0rem 1rem 1rem',
                    }}>
                    <SearchBar
                      icon={<FaUserGraduate size='2.5rem' />}
                      name='sortMark'
                      id='sortMark'
                      placeholder='Marks'
                      onChange={debounce((e) => {
                        setSortMark(e.target.value);
                        document.querySelector('#rollno').value = '';
                        setRollno(null);
                      }, 500)}
                    />
                  </FormLabel>
                </div>
              </FormContainer>
            </form>
          </PageContent>
        ) : null}
        <PageContent>
          {assessmentData && assessmentData.length !== 0 ? (
            <table>
              <thead>
                <tr>
                  <th style={{ background: getTheme().liteBg }}>SNO</th>
                  <th style={{ background: getTheme().liteBg }}>Roll No</th>
                  <th style={{ background: getTheme().liteBg }}>Marks</th>
                </tr>
              </thead>
              <tbody>
                {newResults
                  ? newResults.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.rollno}</td>
                        <td>{item.markSecured}</td>
                      </tr>
                    ))
                  : assessmentData[0].scores.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.rollno}</td>
                        <td>{item.markSecured}</td>
                      </tr>
                    ))}
              </tbody>
            </table>
          ) : null}
        </PageContent>
      </PageContent>
    </div>
  );
};

export default ClassReport;
