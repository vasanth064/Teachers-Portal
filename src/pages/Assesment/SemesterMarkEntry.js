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
import { useNavigate } from 'react-router-dom';

const SemesterMarkEntry = () => {
  const { getData, addData, updateData } = useFirestore();
  const { getTheme } = useUI();
  const [update, setUpdate] = useState(false);
  const [updateUID, setUpdateUID] = useState(null);
  const [studentsMarkList, setStudentsMarkList] = useState([]);
  const [subType, setSubType] = useState('');
  const [students, setStudents] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [department, setDepartment] = useState('');
  const [batch, setBatch] = useState('');
  const [semester, setSemester] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const handleCourseCode = (value) => setCourseCode(value);
  const handleSemesterSelect = (value) => setSemester(value);
  const handleDepartmentSelect = (value) => setDepartment(value);
  const handleBatchSelect = (value) => setBatch(value);
  const handleSubTypeSelect = (value) => setSubType(value);
  const navigate = useNavigate();

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
    ref.map((item) =>
      setStudentList((prevData) => [
        ...prevData,
        { name: item.name, rollno: item.rollno },
      ])
    );
  };

  const getMarkList = async () => {
    const ref = await getData('examResults', [
      where('batch', '==', batch),
      where('department', '==', department),
      where('subType', '==', subType),
      where('courseCode', '==', courseCode),
      where('semester', '==', semester),
    ]);
    if (ref[0]) {
      setUpdate(true);
      setUpdateUID(ref[0].uid);
      setStudentList(
        students.filter(
          (student) =>
            !ref[0].scores.some((score) => student.rollno === score.rollno)
        )
      );
    } else {
      setUpdate(false);
      setUpdateUID(null);
    }
    setStudentsMarkList(ref[0]?.scores || []);
  };

  useEffect(
    () =>
      batch && department && subType && courseCode && semester && getMarkList(),
    [batch, department, subType, courseCode, semester]
  );

  useEffect(() => getStudents(), [batch, department]);

  const deleteItem = (index, rollno) => {
    setStudentsMarkList(studentsMarkList.filter((i, sno) => sno !== index));
    setStudentList((prevData) => [
      ...prevData,
      students.filter((item) => item.rollno === rollno)[0],
    ]);
  };

  const submitMarks = async () => {
    const header = {
      batch,
      department,
      courseCode,
      semester,
      subType,
    };
    const data = {
      ...header,
      scores: studentsMarkList,
    };
    const check = window.confirm('Are you sure to publish the marks ?');
    if (check) {
      await addData('examResults', data);
      navigate('/');
    }
  };

  const updateMarks = async () => {
    const header = {
      batch,
      department,
      courseCode,
      semester,
      subType,
    };
    const data = {
      ...header,
      scores: studentsMarkList,
    };
    const check = window.confirm('Are you sure to update the marks ?');
    if (check) {
      await updateData('examResults', updateUID, data);
      navigate('/');
    }
  };

  return (
    <div>
      <PageHeader text='Semester Marks Entry' />
      <PageContent>
        <GlassSheet>
          <Formik>
            <Form>
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
                    data={['select', '1', '2', '3', '4', '5', '6', '7', '8']}
                    style={{ width: '100%' }}
                  />
                </FormLabel>
                <FormLabel name='Exam Type'>
                  <FormSelect
                    handleFormSelect={handleSubTypeSelect}
                    data={['select', 'Theory', 'Practicals']}
                    style={{ width: '100%' }}
                  />
                </FormLabel>
              </div>
            </Form>
          </Formik>
        </GlassSheet>
      </PageContent>
      <PageContent>
        {courseCode &&
        semester &&
        subType &&
        students.length !== 0 &&
        students.length !== studentsMarkList.length ? (
          <GlassSheet>
            <Formik
              initialValues={{
                rollno: '',
                markSecured: '',
              }}
              onSubmit={(values) => {
                setStudentList(
                  studentList.filter((item) =>
                    item.rollno !== values.rollno ? item : null
                  )
                );
                setStudentsMarkList((prevItems) => [...prevItems, values]);
                document.querySelector('#markEntry').reset();
              }}>
              <Form id='markEntry'>
                <div>
                  <FormLabel name='Roll No' />
                  <Field as='select' name='rollno' style={{ width: '100%' }}>
                    <option>Select</option>
                    {studentList.map((item, index) => (
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
                    max='100'
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
                        <RiDeleteBin5Fill
                          size={22}
                          onClick={() => deleteItem(index, item.rollno)}
                        />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </PageContent>
        {update ? (
          students.length === studentsMarkList.length &&
          studentsMarkList.length !== 0 ? (
            <GreenButton onClick={() => updateMarks()}>Update</GreenButton>
          ) : null
        ) : students.length === studentsMarkList.length &&
          studentsMarkList.length !== 0 ? (
          <GreenButton onClick={() => submitMarks()}>Submit</GreenButton>
        ) : null}
      </PageContent>
    </div>
  );
};

export default SemesterMarkEntry;
