import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import FormLabel from '../../components/FormLabel';
import GlassSheet from '../../components/GlassSheet';
import GreenButton from '../../components/GreenButton';
import InputField from '../../components/InputField';
import PageContent from '../../components/PageContent';
import PageHeader from '../../components/PageHeader';
import { useUI } from '../../Context/UiContext';

const InternalMarkEntry = () => {
  const { getTheme } = useUI();
  const [studentsMarkList, setStudentsMarkList] = useState([]);
  return (
    <div>
      <PageHeader text='Internal Marks Entry' />
      <PageContent>
        <GlassSheet>
          <Formik
            initialValues={{
              rollNo: '',
              markSecured: '',
            }}
            onSubmit={(values) => {
              setStudentsMarkList((prevItems) => [...prevItems, values]);
            }}>
            <Form>
              <div>
                <FormLabel name='Roll No' />
                <InputField type='text' name='rollNo' />
              </div>
              <div>
                <FormLabel name='Marks Secured' />
                <InputField type='text' name='markSecured' />
              </div>
              <GreenButton
                style={{ marginTop: '3rem', width: '100%', color: 'white' }}>
                Add Marks
              </GreenButton>
            </Form>
          </Formik>
        </GlassSheet>
        <PageHeader style={{ marginTop: '5rem' }} text='' />
        <PageContent>
          {studentsMarkList.length !== 0 ? (
            <table>
              <thead>
                <tr>
                  <th style={{ background: getTheme().liteBg }}>SNO</th>
                  <th style={{ background: getTheme().liteBg }}>Roll No</th>
                  <th style={{ background: getTheme().liteBg }}>Marks</th>
                </tr>
              </thead>
              <tbody>
                {studentsMarkList.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.rollNo}</td>
                    <td>{item.markSecured}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </PageContent>
        {studentsMarkList.length !== 0 ? (
          <PageContent>
            <GlassSheet>
              <Formik
                initialValues={{
                  semester: '',
                  testType: '',
                  courseCode: '',
                  batch: '',
                }}
                onSubmit={(values) => {
                  console.log({ ...values, studentsMarkList });
                }}>
                <Form>
                  <FormLabel name='Course Code'>
                    <InputField
                      type='text'
                      name='courseCode'
                      style={{ height: '6.5rem' }}
                    />
                  </FormLabel>
                  <div style={{ display: 'flex', gap: '2rem' }}>
                    <FormLabel name='Semester'>
                      <Field
                        as='select'
                        name='semester'
                        style={{ width: '100%' }}>
                        <option>Select</option>
                        {['1', '2', '3', '4', '5', '6', '7', '8'].map(
                          (item, index) => (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          )
                        )}
                      </Field>
                    </FormLabel>

                    <FormLabel name='Test Type'>
                      <Field
                        as='select'
                        name='testType'
                        style={{ width: '100%' }}>
                        <option>Select</option>
                        {[
                          'Countinous Assessment 1',
                          'Countinous Assessment 2',
                          'Countinous Assessment 3',
                        ].map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </Field>
                    </FormLabel>
                  </div>
                  <div style={{ display: 'flex', gap: '2rem' }}>
                    <FormLabel name='Batch'>
                      <Field as='select' name='batch' style={{ width: '100%' }}>
                        <option>Select</option>
                        {['2018', '2019', '2021', '2022'].map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </Field>
                    </FormLabel>
                  </div>
                  <GreenButton
                    style={{
                      marginTop: '3rem',
                      width: '100%',
                      color: 'white',
                    }}>
                    Add Marks
                  </GreenButton>
                </Form>
              </Formik>
            </GlassSheet>
          </PageContent>
        ) : null}
      </PageContent>
    </div>
  );
};

export default InternalMarkEntry;
