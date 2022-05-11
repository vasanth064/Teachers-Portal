import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import GlassSheet from '../../components/GlassSheet';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import GreenButton from '../../components/GreenButton';
import InputField from '../../components/InputField';
import { useAuth } from '../../Context/AuthContext';

const InputHeader = styled.h1`
  font-size: 2rem;
  letter-spacing: 0.07rem;
  margin: 2rem 0rem;
`;

const ChangePassword = () => {
  const { passwordUpdate, logOut } = useAuth();

  return (
    <div>
      <PageHeader text='Change Password' />
      <PageContent>
        <GlassSheet>
          <Formik
            initialValues={{
              password: '',
              rePassword: '',
            }}
            onSubmit={async (values) => {
              if (values.password !== values.rePassword) {
                alert(`Passwords Don't Macth`);
                document.querySelector('#changePassword').reset();
              } else {
                try {
                  passwordUpdate(values.password);
                  await logOut();
                } catch (err) {
                  alert('Failed To Change,', err);
                }
              }
            }}>
            {({ isSubmitting }) => (
              <Form id='changePassword'>
                <div>
                  <InputHeader>New Password</InputHeader>
                  <InputField type='password' name='password' />
                </div>
                <div>
                  <InputHeader>Re-type Password</InputHeader>
                  <InputField type='password' name='rePassword' />
                </div>
                <GreenButton
                  style={{
                    margin: '2.5rem 0',
                    padding: '1.5rem',
                    width: '100%',
                  }}
                  disabled={isSubmitting}>
                  Change Password
                </GreenButton>
              </Form>
            )}
          </Formik>
        </GlassSheet>
      </PageContent>
    </div>
  );
};

export default ChangePassword;
