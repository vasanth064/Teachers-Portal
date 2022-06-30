import { Form, Formik } from 'formik';
import React from 'react';
import FormLabel from '../../components/FormLabel';
import GlassSheet from '../../components/GlassSheet';
import GreenButton from '../../components/GreenButton';
import InputField from '../../components/InputField';
import PageContent from '../../components/PageContent';
import PageHeader from '../../components/PageHeader';
import { useFirestore } from '../../Context/FirestoreContext';

const NotifyUsers = () => {
  const { addData, getFileURL } = useFirestore();
  const tableName = 'notification';
  return (
    <div>
      <PageHeader text='Notify Sudent /Teacher' />
      <PageContent>
        <GlassSheet>
          <Formik
            initialValues={{
              userID: '',
              message: '',
              file: null,
            }}
            onSubmit={async (values) => {
              if (values.file) {
                const URL = await getFileURL(values.file, tableName);
                values.file = URL;
              }
              values.userID = values.userID.toUpperCase();

              alert(`Notification Sent to ${values.userID}`);
              await addData(tableName, values);
            }}>
            {({ isSubmitting, setFieldValue }) => (
              <Form>
                <FormLabel name='RollNo /Staff ID'>
                  <InputField type='text' name='userID' required />
                </FormLabel>
                <FormLabel name='Message'>
                  <InputField type='text' name='message' required />
                </FormLabel>
                <div>
                  <FormLabel name='Document'>
                    <input
                      type='file'
                      name='file'
                      onChange={(e) => {
                        setFieldValue('file', e.currentTarget.files[0]);
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
