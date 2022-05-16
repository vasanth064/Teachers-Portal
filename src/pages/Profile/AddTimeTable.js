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
              console.log(values.days);
            }}>
            <Form>
              <div>
                <FormLabel name='Days' />
                <FormSelect
                  name='days'
                  as='select'
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
                  as='select'
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
                  as='select'
                  style={{ width: '100%' }}
                />
                <div>
                  <FormLabel name='Semester' />
                  <FormSelect
                    data={['1', '2', '3', '4', '5', '6', '7', '8']}
                    name='semester'
                    as='select'
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
              <GreenButton
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
