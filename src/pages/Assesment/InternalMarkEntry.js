import { where } from 'firebase/firestore';
import { Field, Form, Formik } from 'formik';
import React, { useState, useEffect } from 'react';
import FormLabel from '../../components/FormLabel';
import FormSelect from '../../components/FormSelect';
import GlassSheet from '../../components/GlassSheet';
import GreenButton from '../../components/GreenButton';
import IconButton from '../../components/IconButton';
import InputField from '../../components/InputField';
import PageContent from '../../components/PageContent';
import PageHeader from '../../components/PageHeader';
import { useFirestore } from '../../Context/FirestoreContext';
import { useUI } from '../../Context/UiContext';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';

const InternalMarkEntry = () => {
  const { getData } = useFirestore();
  const { getTheme } = useUI();
  const [studentsMarkList, setStudentsMarkList] = useState([]);
  const [semester, setSemester] = useState('');
  const [department, setDepartment] = useState('');
  const [batch, setBatch] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [students, setStudents] = useState([]);

  const handleCourseCode = (value) => setCourseCode(value);
  const handleSemesterSelect = (value) => setSemester(value);
  const handleDepartmentSelect = (value) => setDepartment(value);
  const handleBatchSelect = (value) => setBatch(value);

  const getStudents = async () => {
    const ref = await getData('students', [
      where('batch', '==', batch),
      where('department', '==', department),
    ]);
    ref.map((item) =>
      setStudents((prevData) => [
        ...prevData,
        { name: item.name, rollno: item.rollno },
      ])
    );
  };
  useEffect(() => getStudents(), [semester, department]);

  return (
    <div>
      <PageHeader text='Internal Marks Entry' />
      <PageContent>
        <GlassSheet>
          <Formik
            onSubmit={async (values) => {
              const data = {
                semester,
                department,
                batch,
                ...values,
              };
              await document.querySelector('#markEntry').reset();
              console.log(data);
            }}>
            <Form id='markEntry'>
              <div style={{ display: 'flex', gap: '2rem' }}>
                <FormLabel name='Batch'>
                  <FormSelect
                    handleFormSelect={handleBatchSelect}
                    data={['select', '2019', '2020', '2021']}
                    style={{ width: '100%' }}
                  />
                </FormLabel>
                <FormLabel name='Department'>
                  <FormSelect
                    handleFormSelect={handleDepartmentSelect}
                    data={[
                      'select',
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
              </div>
              <FormLabel name='Course Code'>
                <InputField
                  type='text'
                  name='courseCode'
                  style={{ height: '6.5rem' }}
                  onChange={(e) => handleCourseCode(e.target.value)}
                />
              </FormLabel>
              <div style={{ display: 'flex', gap: '2rem' }}>
                <FormLabel name='Semester'>
                  <FormSelect
                    handleFormSelect={handleSemesterSelect}
                    data={['1', '2', '3', '4', '5', '6', '7', '8']}
                    style={{ width: '100%' }}
                  />
                </FormLabel>

                <FormLabel name='Test Type'>
                  <FormSelect
                    handleFormSelect={handleBatchSelect}
                    data={[
                      'Countinous Assessment 1',
                      'Countinous Assessment 2',
                      'Countinous Assessment 3',
                    ]}
                    style={{ width: '100%' }}
                  />
                </FormLabel>
              </div>
            </Form>
          </Formik>
        </GlassSheet>
      </PageContent>
      <PageContent>
        {students.length !== 0 ? (
          <GlassSheet>
            <Formik
              initialValues={{
                rollno: '',
                markSecured: '',
              }}
              onSubmit={(values) => {
                setStudents(
                  students.filter((item) =>
                    item.rollno !== values.rollno ? item : null
                  )
                );
                setStudentsMarkList((prevItems) => [...prevItems, values]);
              }}>
              <Form>
                <div>
                  <FormLabel name='Roll No' />
                  <Field as='select' name='rollno' style={{ width: '100%' }}>
                    <option>Select</option>
                    {students.map((item, index) => (
                      <option key={index} value={item.rollno}>
                        {item.name} - {item.rollno}
                      </option>
                    ))}
                  </Field>
                </div>
                <div>
                  <FormLabel name='Marks Secured' />
                  <InputField
                    type='number'
                    name='markSecured'
                    max='30'
                    min='0'
                  />
                </div>
                <GreenButton
                  style={{ marginTop: '3rem', width: '100%', color: 'white' }}>
                  Add Marks
                </GreenButton>
              </Form>
            </Formik>
          </GlassSheet>
        ) : null}
        <PageHeader style={{ marginTop: '5rem' }} text='' />
        <PageContent>
          {studentsMarkList.length !== 0 ? (
            <table>
              <thead>
                <tr>
                  <th style={{ background: getTheme().liteBg }}>SNO</th>
                  <th style={{ background: getTheme().liteBg }}>Roll No</th>
                  <th style={{ background: getTheme().liteBg }}>Marks</th>
                  <th style={{ background: getTheme().liteBg }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {studentsMarkList.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.rollno}</td>
                    <td>{item.markSecured}</td>
                    <td>
                      <IconButton>
                        <FaEdit size={22} />
                      </IconButton>
                    </td>
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

export default InternalMarkEntry;
