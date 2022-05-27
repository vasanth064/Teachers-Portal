import { Form, Formik } from 'formik';
import React from 'react';
import FormLabel from '../../components/FormLabel';
import GlassSheet from '../../components/GlassSheet';
import GreenButton from '../../components/GreenButton';
import InputField from '../../components/InputField';
import PageContent from '../../components/PageContent';
import PageHeader from '../../components/PageHeader';

const NotifyUsers = () => {
  return (
    <div>
      <PageHeader text='Notify Sudent /Teacher' />
      <PageContent>
        <GlassSheet>
          <Formik
            initialValues={{
              userID: '',
              message: '',
              file: '',
            }}
            onSubmit={(values) => {
              console.log(values);
            }}>
            {({ isSubmitting, setFieldValue }) => (
              <Form>
                <FormLabel name='RollNo /Staff ID'>
                  <InputField type='text' name='userID' />
                </FormLabel>
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

export default NotifyUsers;
