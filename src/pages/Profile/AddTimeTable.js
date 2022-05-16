import { Form, Formik } from 'formik';
import React from 'react';
import FormLabel from '../../components/FormLabel';
import FormSelect from '../../components/FormSelect';
import GlassSheet from '../../components/GlassSheet';
import GreenButton from '../../components/GreenButton';
import InputField from '../../components/InputField';
import PageContent from '../../components/PageContent';
import PageHeader from '../../components/PageHeader';

const AddTimeTable = () => {
  const periods = [
    {
      1: '09:20 - 10:10',
      2: '10:30 - 11:20',
      3: '11:20 - 12:10',
      4: '12:10 - 12:40',
      5: '13:50 - 14:30',
      6: '14:30 - 15:10',
      7: '15:30 - 16:10',
      8: '16:10 - 17:10',
      9: '17:10 - 18:00',
      10: '18:20 - 19:00',
    },
  ];
  return (
    <div>
      <PageHeader text='Add Time Table' />
      <PageContent>
        <GlassSheet>
          <Formik
            initialValues={{
              days: '',
              hour: '',
              from: '',
              to: '',
              coursecode: '',
              coursetitle: '',
              facultyincharge: '',
              batch: '',
              department: '',
              semester: '',
            }}
            onSubmit={(values) => {
              console.log(
                values.days,
                values.hour,
                values.from,
                values.to,
                values.coursecode,
                values.coursetitle,
                values.facultyincharge,
                values.batch,
                values.department,
                values.semester
              );
            }}>
            <Form>
              <div>
                <FormLabel name='Days' />
                <FormSelect
                  name='days'
                  data={[
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                  ]}
                  style={{ width: '100%' }}
                />
              </div>
              <div>
                <FormLabel name='Hour' />
                <FormSelect
                  name='hour'
                  data={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
                  style={{ width: '100%' }}
                />
              </div>
              <div>
                <FormLabel name='From' />
                <InputField type='time' name='from' />
              </div>
              <div>
                <FormLabel name='To' />
                <InputField type='time' name='to' />
              </div>
              <div>
                <FormLabel name='Course Code' />
                <InputField type='text' name='coursecode' />
              </div>
              <div>
                <FormLabel name='Course Title' />
                <InputField type='text' name='coursetitle' />
              </div>
              <div>
                <FormLabel name='Faculty In Charge' />
                <InputField type='text' name='facultyincharge' />
              </div>
              <div>
                <FormLabel name='Batch' />
                <InputField type='text' name='batch' />
              </div>
              <div>
                <FormLabel name='Department' />
                <FormSelect
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
                  name='department'
                  style={{ width: '100%' }}
                />
                <div>
                  <FormLabel name='Semester' />
                  <FormSelect
                    data={['1', '2', '3', '4', '5', '6', '7', '8']}
                    name='semester'
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
              <GreenButton
                onClick={onsubmit}
                style={{ marginTop: '3rem', width: '100%', color: 'white' }}>
                Add TimeTable
              </GreenButton>
            </Form>
          </Formik>
        </GlassSheet>
      </PageContent>
    </div>
  );
};

export default AddTimeTable;
