import { Field, Form, Formik } from 'formik';
import React from 'react';
import FormLabel from '../../components/FormLabel';
import GlassSheet from '../../components/GlassSheet';
import GreenButton from '../../components/GreenButton';
import InputField from '../../components/InputField';
import PageContent from '../../components/PageContent';
import PageHeader from '../../components/PageHeader';
const NotifyBatch = () => {
  return (
    <div>
      <PageHeader text='Notify Batch' />
      <PageContent>
        <GlassSheet>
          <Formik
            initialValues={{
              batch: '',
              department: '',
              message: '',
              file: '',
            }}
            onSubmit={(values) => {
              console.log(values);
            }}>
            {({ isSubmitting, setFieldValue }) => (
              <Form>
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
                  <FormLabel name='Department'>
                    <Field
                      as='select'
                      name='department'
                      style={{ width: '100%' }}>
                      <option>Select</option>
                      {[
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
                      ].map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </Field>
                  </FormLabel>
                </div>
                <FormLabel name='Message'>
                  <InputField type='text' name='message' />
                </FormLabel>
                <div>
                  <FormLabel name='Document'>
                    <input
                      type='file'
                      name='file'
                      onChange={(e) => {
                        setFieldValue('photo', e.currentTarget.files[0]);
                      }}
                      style={{
                        position: 'relative',
                        zIndex: '1',
                        fontSize: '2rem',
                        border: 'none',
                      }}
                    />
                  </FormLabel>
                </div>
                <GreenButton
                  style={{ marginTop: '2.5rem', width: '100%' }}
                  disabled={isSubmitting}>
                  Send Notification
                </GreenButton>
              </Form>
            )}
          </Formik>
        </GlassSheet>
      </PageContent>
    </div>
  );
};

export default NotifyBatch;
