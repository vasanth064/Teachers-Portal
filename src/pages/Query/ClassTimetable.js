import { where } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import FormContainer from '../../components/FormContainer';
import FormLabel from '../../components/FormLabel';
import FormSelect from '../../components/FormSelect';
import PageContent from '../../components/PageContent';
import PageHeader from '../../components/PageHeader';
import Pagination from '../../components/Pagination';
import TimetableItem from '../../components/TimetableItem';
import { useAuth } from '../../Context/AuthContext';
import { useFirestore } from '../../Context/FirestoreContext';

const ClassTimetable = () => {
  const { getData } = useFirestore();
  const { userData } = useAuth();
  const [semester, setSemester] = useState('6');
  const [deparment, setDepartment] = useState(userData.department);
  const [batch, setBatch] = useState('2019');
  const [table, setTable] = useState([]);

  const handlePagination = (value) => setSemester(value);
  const handleDepartmentSelect = (value) => setDepartment(value);
  const handleBatchSelect = (value) => setBatch(value);
  useEffect(() => {
    (async () => {
      const data = await getData('classTimetable', [
        where('department', '==', deparment),
        where('batch', '==', batch),
        where('semester', '==', semester),
      ]);
      setTable(data);
    })();
  }, []);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    (async () => {
      const data = await getData('classTimetable', [
        where('department', '==', deparment),
        where('batch', '==', batch),
        where('semester', '==', semester),
      ]);
      setTable(data);
    })();
  };

  return (
    <div>
      <PageHeader text='Class Timetable' />
      {console.log(table)}
      <PageContent>
        <form onSubmit={handleFormSubmit}>
          <FormContainer>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <FormLabel name='Department'>
                <FormSelect
                  handleFormSelect={handleDepartmentSelect}
                  data={[
                    'Apparel Technology',
                    'Automobile Engneering',
                    'Computer Engneering',
                    'Computer Networking',
                    'Electrical and Electronics Engneering',
                    'Electronics and Communication Engneering',
                    'Foundary Technology',
                    'Information Technology',
                    'Mechanical Engneering',
                    'Mechatronics Engneering',
                    'Textile Technology',
                  ]}
                  style={{ width: '100%' }}
                />
              </FormLabel>
              <FormLabel name='Batch'>
                <FormSelect
                  handleFormSelect={handleBatchSelect}
                  data={['2019', '2020', '2021']}
                  style={{ width: '100%' }}
                />
              </FormLabel>
            </div>
            <Pagination
              pageno={['1', '2', '3', '4', '5', '6', '7', '8']}
              pagination={semester}
              handlePagination={handlePagination}
            />
          </FormContainer>
        </form>

        {table.length !== 0 ? (
          <PageContent>
            <PageHeader text='Monday' />
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '2.5rem',
                justifyContent: 'center',
              }}>
              <TimetableItem
                data={table[0].timeTable.filter((item) => item.weekDay === '1')}
              />
            </div>
            <PageHeader text='Tuesday' style={{ marginTop: '2.5rem' }} />
            <div className='todayScheduleList'>
              <TimetableItem
                data={table[0].timeTable.filter((item) => item.weekDay === '2')}
              />
            </div>
            <PageHeader text='Wednesday' style={{ marginTop: '2.5rem' }} />
            <div className='todayScheduleList'>
              <TimetableItem
                data={table[0].timeTable.filter((item) => item.weekDay === '3')}
              />
            </div>

            <PageHeader text='Thursday' style={{ marginTop: '2.5rem' }} />
            <div className='todayScheduleList'>
              <TimetableItem
                data={table[0].timeTable.filter((item) => item.weekDay === '4')}
              />
            </div>

            <PageHeader text='Friday' style={{ marginTop: '2.5rem' }} />
            <div className='todayScheduleList'>
              <TimetableItem
                data={table[0].timeTable.filter((item) => item.weekDay === '5')}
              />
            </div>
          </PageContent>
        ) : (
          <h1 className='noClassMsg' style={{ marginTop: '2.5rem' }}>
            No Classes Scheduled
          </h1>
        )}

        {table.length !== 0 ? (
          <>
            <PageHeader text='Table View' />
            <PageContent>
              <table style={{ marginTop: '5rem' }}>
                <tbody>
                  <tr>
                    <td
                      style={{
                        background: '#9ab1de',
                        borderTopLeftRadius: '2rem',
                      }}>
                      Monday
                    </td>
                    {table[0].timeTable
                      .filter((item) => item.weekDay === '1')
                      .map((item, index) => (
                        <td key={index}>{item.courseTitle}</td>
                      ))}
                  </tr>
                  <tr>
                    <td
                      style={{
                        background: '#9ab1de',
                      }}>
                      Tuesday
                    </td>
                    {table[0].timeTable
                      .filter((item) => item.weekDay === '2')
                      .map((item, index) => (
                        <td key={index}>{item.courseTitle}</td>
                      ))}
                  </tr>
                  <tr>
                    <td
                      style={{
                        background: '#9ab1de',
                      }}>
                      Wednesday
                    </td>
                    {table[0].timeTable
                      .filter((item) => item.weekDay === '3')
                      .map((item, index) => (
                        <td key={index}>{item.courseTitle}</td>
                      ))}
                  </tr>
                  <tr>
                    <td
                      style={{
                        background: '#9ab1de',
                      }}>
                      Thursday
                    </td>
                    {table[0].timeTable
                      .filter((item) => item.weekDay === '4')
                      .map((item, index) => (
                        <td key={index}>{item.courseTitle}</td>
                      ))}
                  </tr>
                  <tr>
                    <td
                      style={{
                        background: '#9ab1de',
                      }}>
                      Friday
                    </td>
                    {table[0].timeTable
                      .filter((item) => item.weekDay === '5')
                      .map((item, index) => (
                        <td key={index}>{item.courseTitle}</td>
                      ))}
                  </tr>
                </tbody>
              </table>
            </PageContent>
          </>
        ) : null}
      </PageContent>
    </div>
  );
};

export default ClassTimetable;
