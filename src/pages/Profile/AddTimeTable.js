import React, { useState, useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
import FormLabel from '../../components/FormLabel';
import GlassSheet from '../../components/GlassSheet';
import GreenButton from '../../components/GreenButton';
import InputField from '../../components/InputField';
import PageContent from '../../components/PageContent';
import PageHeader from '../../components/PageHeader';
import { useAuth } from '../../Context/AuthContext';
import { useFirestore } from '../../Context/FirestoreContext';

const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const periods = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const semesters = ['1', '2', '3', '4', '5', '6', '7', '8'];

const AddTimeTable = () => {
  const { userData } = useAuth();
  const { addData } = useFirestore();
  const [monday, setMonday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursaday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);
  const [saturday, setSaturday] = useState([]);

  return (
    <div>
      <PageHeader text='Add Time Table' />
      <PageContent>
        <GlassSheet>
          <Formik
            initialValues={{
              weekDay: '',
              hour: '',
              fromTime: '',
              toTime: '',
              courseCode: '',
              courseTitle: '',
            }}
            onSubmit={(values) => {
              switch (values.weekDay) {
                case '1':
                  setMonday((preValues) =>
                    setMonday([
                      ...preValues,
                      { period: parseInt(values.hour), ...values },
                    ])
                  );
                  break;
                case '2':
                  setTuesday((preValues) =>
                    setTuesday([
                      ...preValues,
                      { period: parseInt(values.hour), ...values },
                    ])
                  );
                  break;
                case '3':
                  setWednesday((preValues) =>
                    setWednesday([
                      ...preValues,
                      { period: parseInt(values.hour), ...values },
                    ])
                  );
                  break;
                case '4':
                  setThursday((preValues) =>
                    setThursday([
                      ...preValues,
                      { period: parseInt(values.hour), ...values },
                    ])
                  );
                  break;
                case '5':
                  setFriday((preValues) =>
                    setFriday([
                      ...preValues,
                      { period: parseInt(values.hour), ...values },
                    ])
                  );
                  break;
                case '6':
                  setSaturday((preValues) =>
                    setSaturday([
                      ...preValues,
                      { period: parseInt(values.hour), ...values },
                    ])
                  );
              }
              document.querySelector('#addSubjects').reset();
            }}>
            <Form id='addSubjects'>
              <div>
                <FormLabel name='Days' />
                <Field
                  as='select'
                  name='weekDay'
                  style={{ width: '100%' }}
                  required>
                  <option>Select</option>
                  {weekDays.map((item, index) => (
                    <option value={index + 1} key={index}>
                      {item}
                    </option>
                  ))}
                </Field>
              </div>
              <div>
                <FormLabel name='Period' />
                <Field
                  as='select'
                  name='hour'
                  style={{ width: '100%' }}
                  required>
                  <option>Select</option>
                  {periods.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </Field>
              </div>
              <div>
                <FormLabel name='From' />
                <InputField type='time' name='fromTime' required />
              </div>
              <div>
                <FormLabel name='To' />
                <InputField type='time' name='toTime' required />
              </div>
              <div>
                <FormLabel name='Course Code' />
                <InputField type='text' name='courseCode' required />
              </div>
              <div>
                <FormLabel name='Course Title' />
                <InputField type='text' name='courseTitle' required />
              </div>
              <GreenButton style={{ marginTop: '3rem', width: '100%' }}>
                Add Subjects
              </GreenButton>
            </Form>
          </Formik>
        </GlassSheet>
      </PageContent>

      {
        <PageContent>
          <table>
            {(monday.length !== 0 ||
              tuesday.length !== 0 ||
              wednesday.length !== 0 ||
              thursaday.length !== 0 ||
              friday.length !== 0 ||
              saturday.length !== 0) && (
              <thead>
                <tr>
                  <th>Week Day</th>
                  <th>Period</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Course Code</th>
                  <th>Course Title</th>
                  <th>Action</th>
                </tr>
              </thead>
            )}
            <tbody>
              {monday.map((item, index) => (
                <tr key={index}>
                  <td>Monday</td>
                  <td>{item.hour}</td>
                  <td>{item.fromTime}</td>
                  <td>{item.toTime}</td>
                  <td>{item.courseCode}</td>
                  <td>{item.courseTitle}</td>
                  <td>
                    <GreenButton
                      style={{ position: 'relative', zIndex: '100' }}
                      onClick={() =>
                        setMonday(monday.filter((i, sno) => sno !== index))
                      }>
                      Delete
                    </GreenButton>
                  </td>
                </tr>
              ))}
              {tuesday.map((item, index) => (
                <tr key={index}>
                  <td>Tuesday</td>
                  <td>{item.hour}</td>
                  <td>{item.fromTime}</td>
                  <td>{item.toTime}</td>
                  <td>{item.courseCode}</td>
                  <td>{item.courseTitle}</td>
                  <td>
                    <GreenButton
                      style={{ position: 'relative', zIndex: '100' }}
                      onClick={() =>
                        setTuesday(tuesday.filter((i, sno) => sno !== index))
                      }>
                      Delete
                    </GreenButton>
                  </td>
                </tr>
              ))}
              {wednesday.map((item, index) => (
                <tr key={index}>
                  <td>Wednesday</td>
                  <td>{item.hour}</td>
                  <td>{item.fromTime}</td>
                  <td>{item.toTime}</td>
                  <td>{item.courseCode}</td>
                  <td>{item.courseTitle}</td>
                  <td>
                    <GreenButton
                      style={{ position: 'relative', zIndex: '100' }}
                      onClick={() =>
                        setWednesday(
                          wednesday.filter((i, sno) => sno !== index)
                        )
                      }>
                      Delete
                    </GreenButton>
                  </td>
                </tr>
              ))}
              {thursaday.map((item, index) => (
                <tr key={index}>
                  <td>Thursday</td>
                  <td>{item.hour}</td>
                  <td>{item.fromTime}</td>
                  <td>{item.toTime}</td>
                  <td>{item.courseCode}</td>
                  <td>{item.courseTitle}</td>
                  <td>
                    <GreenButton
                      style={{ position: 'relative', zIndex: '100' }}
                      onClick={() =>
                        setThursday(thursaday.filter((i, sno) => sno !== index))
                      }>
                      Delete
                    </GreenButton>
                  </td>
                </tr>
              ))}
              {friday.map((item, index) => (
                <tr key={index}>
                  <td>Friday</td>
                  <td>{item.hour}</td>
                  <td>{item.fromTime}</td>
                  <td>{item.toTime}</td>
                  <td>{item.courseCode}</td>
                  <td>{item.courseTitle}</td>
                  <td>
                    <GreenButton
                      style={{ position: 'relative', zIndex: '100' }}
                      onClick={() =>
                        setFriday(friday.filter((i, sno) => sno !== index))
                      }>
                      Delete
                    </GreenButton>
                  </td>
                </tr>
              ))}
              {saturday.map((item, index) => (
                <tr key={index}>
                  <td>Saturday</td>
                  <td>{item.hour}</td>
                  <td>{item.fromTime}</td>
                  <td>{item.toTime}</td>
                  <td>{item.courseCode}</td>
                  <td>{item.courseTitle}</td>
                  <td>
                    <GreenButton
                      style={{ position: 'relative', zIndex: '100' }}
                      onClick={() =>
                        setSaturday(saturday.filter((i, sno) => sno !== index))
                      }>
                      Delete
                    </GreenButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </PageContent>
      }
      {(monday.length !== 0 ||
        tuesday.length !== 0 ||
        wednesday.length !== 0 ||
        thursaday.length !== 0 ||
        friday.length !== 0 ||
        saturday.length !== 0) && (
        <PageContent>
          <GlassSheet style={{ marginTop: '5rem' }}>
            <Formik
              initialValues={{
                semester: '',
              }}
              onSubmit={async (values) => {
                const data = {
                  ...values,
                  staffID: userData.staffID,
                  timeTable: {
                    monday,
                    tuesday,
                    wednesday,
                    thursaday,
                    friday,
                    saturday,
                  },
                };
                await addData('teachersTimetable', data);
                document.querySelector('#addTimeTable').reset();
              }}>
              <Form id='addTimeTable'>
                <div>
                  <FormLabel name='Semester' />
                  <Field
                    name='semester'
                    as='select'
                    style={{ width: '100%' }}
                    required>
                    <option>Select</option>
                    {semesters.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </Field>
                </div>
                <GreenButton style={{ marginTop: '3rem', width: '100%' }}>
                  Add TimeTable
                </GreenButton>
              </Form>
            </Formik>
          </GlassSheet>
        </PageContent>
      )}
    </div>
  );
};

export default AddTimeTable;
