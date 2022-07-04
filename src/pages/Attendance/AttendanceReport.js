import React, { useEffect, useState } from 'react';
import { MdOutlineMenuBook } from 'react-icons/md';
import PageContent from '../../components/PageContent';
import PageHeader from '../../components/PageHeader';
import './../../components/css/Table.css';
import FormSelect from '../../components/FormSelect';
import FormLabel from '../../components/FormLabel';
import { debounce } from 'lodash';

import FormContainer from '../../components/FormContainer';
import SearchBar from '../../components/css/SearchBar';
import { useFirestore } from '../../Context/FirestoreContext';
import { where } from 'firebase/firestore';
import { useUI } from '../../Context/UiContext';

const AttendanceReport = () => {
  const { getData } = useFirestore();
  const [attendance, setAttendance] = useState(null);
  const { getTheme } = useUI();
  const [batch, setBatch] = useState('2019');
  const [date, setDate] = useState('');
  const handleBatchSelect = (value) => setBatch(value);
  const getAttendance = async () => {
    const data = await getData('attendance', [
      where('batch', '==', batch),
      where('date', '==', date),
    ]);
    setAttendance(data);
  };

  useEffect(() => {
    batch && date && getAttendance();
  }, [batch, date]);

  return (
    <div>
      {console.log(attendance)}
      <PageHeader text='Attendance Report' />
      <PageContent>
        <form autoComplete='off'>
          <FormContainer>
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
                name='Date'>
                <SearchBar
                  icon={<MdOutlineMenuBook size='2.5rem' />}
                  name='date'
                  type='date'
                  placeholder='Date'
                  onChange={debounce((e) => setDate(e.target.value), 500)}
                />
              </FormLabel>
            </div>
          </FormContainer>
        </form>
        {attendance && attendance.length !== 0
          ? attendance.map((hour, index) => (
              <PageContent>
                <table key={index}>
                  <thead>
                    <tr>
                      <th style={{ background: getTheme().liteBg }}>SNO</th>
                      <th style={{ background: getTheme().liteBg }}>Roll No</th>
                      <th style={{ background: getTheme().liteBg }}>
                        Course Code
                      </th>
                      <th style={{ background: getTheme().liteBg }}>Hour</th>
                      <th style={{ background: getTheme().liteBg }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hour.studentsPresent.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item}</td>
                        <td>{hour.courseCode}</td>
                        <td>{hour.hour}</td>
                        <td>Present</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </PageContent>
            ))
          : null}
      </PageContent>
    </div>
  );
};

export default AttendanceReport;
