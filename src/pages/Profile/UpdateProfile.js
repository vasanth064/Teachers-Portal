import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import GlassSheet from '../../components/GlassSheet';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import GreenButton from '../../components/GreenButton';
import InputField from '../../components/InputField';
import { useFirestore } from '../../Context/FirestoreContext';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const InputHeader = styled.h1`
  font-size: 2rem;
  letter-spacing: 0.07rem;
  margin: 2rem 0rem;
`;

const ProfileUpdate = () => {
  const { getFileURL, updateData } = useFirestore();
  const { userData } = useAuth();
  const tableName = 'teachers';
  const navigate = useNavigate();
  return (
    <div>
      <PageHeader text='Update Profile' />
      <PageContent>
        <GlassSheet>
          <Formik
            initialValues={{
              semester: '',
              phoneNumber: '',
              email: '',
              address: '',
              photo: null,
            }}
            onSubmit={async (values) => {
              let data = {};
              if (values.photo) {
                const URL = await getFileURL(values.photo, tableName);
                data.photo = URL;
              }
              values.designation && (data.designation = values.designation);
              values.landline && (data.landline = values.landline);
              values.email && (data.email = values.email);
              values.phoneNumber && (data.phoneNumber = values.phoneNumber);
              values.qualificaton && (data.qualificaton = values.qualificaton);
              values.areaOfSpecialization &&
                (data.areaOfSpecialization = values.areaOfSpecialization);
              values.coursesHandled &&
                (data.coursesHandled = values.coursesHandled);

              await updateData(tableName, userData.id, data);
              await document.querySelector('#updateProfile').reset();
              navigate('/ProfileView');
            }}>
            {({ isSubmitting, setFieldValue }) => (
              <Form id='updateProfile'>
                <div>
                  <InputHeader>Designation</InputHeader>
                  <InputField type='text' name='designation' />
                </div>
                <div>
                  <InputHeader>Landline</InputHeader>
                  <InputField type='text' name='landline' />
                </div>
                <div>
                  <InputHeader>Email</InputHeader>
                  <InputField type='text' name='email' />
                </div>
                <div>
                  <InputHeader>Phone Number</InputHeader>
                  <InputField type='text' name='phoneNumber' />
                </div>
                <div>
                  <InputHeader>Qualification</InputHeader>
                  <InputField type='text' name='qualificaton' />
                </div>
                <div>
                  <InputHeader>Area Of Specialization</InputHeader>
                  <InputField type='text' name='areaOfSpecialization' />
                </div>
                <div>
                  <InputHeader>Courses Handled</InputHeader>
                  <InputField type='text' name='coursesHandled' />
                </div>
                <div>
                  <InputHeader>Photo</InputHeader>
                  <input
                    type='file'
                    name='photo'
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
                </div>
                <GreenButton
                  style={{ marginTop: '2.5rem', width: '100%' }}
                  disabled={isSubmitting}>
                  Update Profile
                </GreenButton>
              </Form>
            )}
          </Formik>
        </GlassSheet>
      </PageContent>
    </div>
  );
};

export default ProfileUpdate;
