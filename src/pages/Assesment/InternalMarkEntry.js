import { Form, Formik } from 'formik';
import React from 'react';
import FormLabel from '../../components/FormLabel';
import FormSelect from '../../components/FormSelect';
import GlassSheet from '../../components/GlassSheet';
import GreenButton from '../../components/GreenButton';
import InputField from '../../components/InputField';
import PageContent from '../../components/PageContent';
import PageHeader from '../../components/PageHeader';
import Table from '../../components/Table';

const InternalMarkEntry = () => {
  return (
    <div>
      <PageHeader text='Internal Marks Entry' />
      <PageContent>
        <GlassSheet>
          <Formik
            initialValues={{
              semester: '',
              rollNo: '',
              attendance: '',
              testType: '',
              courseCode: '',
              courseTitle: '',
              questionNumbers: '',
              maximumMarks: '',
              questionTaken: '',
              studentMark: '',
            }}
            onSubmit={(values) => {
              console.log(values);
            }}>
            <Form>
              <div>
                <FormLabel name='Semester' />
                <FormSelect
                  name='semester'
                  data={['1', '2', '3', '4', '5', '6', '7', '8']}
                />
              </div>
              <div>
                <FormLabel name='Roll No' />
                <FormSelect
                  name='rollNo'
                  data={[
                    '19DX01',
                    '19DX02',
                    '19DX03',
                    '19DX04',
                    '19DX05',
                    '19DX06',
                    '19DX07',
                    '19DX08',
                    '19DX09',
                    '19DX10',
                  ]}
                />
              </div>
              <div>
                <FormLabel name='Attendance' />
                <FormSelect name='attendance' data={['Present', 'Absent']} />
              </div>
              <div>
                <FormLabel name='Test Type' />
                <FormSelect
                  name='testType'
                  data={[
                    'Countinous Assessment 1',
                    'Countinous Assessment 2',
                    'Countinous Assessment 3',
                  ]}
                />
              </div>
              <div>
                <FormLabel name='Course Code' />
                <FormSelect
                  name='courseCode'
                  data={['Z18601', 'Z18613', 'Z19402', 'Z19401']}
                />
              </div>
              <div>
                <FormLabel name='Course Title' />
                <FormSelect
                  name='courseTitle'
                  data={[
                    'Cloud Computing',
                    'Server Administration Laboratory',
                    'Data Structures',
                    'Problem Solving Using Python',
                  ]}
                />
              </div>
              <div>
                <FormLabel name='Number of Questions' />
                <InputField type='number' name='questionNumbers' />
              </div>
              <div>
                <FormLabel name='Maximum Marks' />
                <InputField type='number' name='maximumMarks' />
              </div>
              <div>
                <FormLabel name='Question Number' />
                <InputField type='number' name='questionTaken' />
              </div>
              <div>
                <FormLabel name='Marks Secured' />
                <InputField type='number' name='studentsMark' />
              </div>
              <GreenButton
                style={{ marginTop: '3rem', width: '100%', color: 'white' }}>
                Include Score
              </GreenButton>
            </Form>
          </Formik>
        </GlassSheet>
        <PageHeader style={{ marginTop: '5rem' }} text='Report' />
        <PageContent>
          <Table />
        </PageContent>
      </PageContent>
    </div>
  );
};

export default InternalMarkEntry;
