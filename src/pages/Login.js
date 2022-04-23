import React from 'react';
import LoginData from './../data/LoginData.js';
import LoginSwitchBtn from './../components/LoginSwitchBtn';
import './../assets/css/Login.css';
import './../components/css/LoginInput.css';
import { Field, Form, Formik } from 'formik';
import { useAuth } from '../Context/AuthContext.js';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const { emailPasswordSignIn, currentUser, error } = useAuth();
  return (
    <>
      {currentUser ? <Navigate to='/' /> : null}
      {error ? alert(error) : null}
      <div className='loginPage'>
        {LoginData.map((item, index) => {
          return (
            <div className='header' key={index}>
              <img className='logo' src={item.logo} alt='psg ptc logo' />
              <h1 className='logoTitle'>{item.logoTitle}</h1>
              <h2 className='logoSubTitle'>{item.logoSubTitle}</h2>
            </div>
          );
        })}
        <div className='content'>
          <h1 className='content-title'>Login to Your Account</h1>
          <div className='loginSwitch'>
            <LoginSwitchBtn
              icon='teacher'
              text='TEACHER’S LOGIN'
              active={true}
            />
          </div>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values) => {
              emailPasswordSignIn(values.email, values.password);
            }}>
            {() => (
              <Form className='formControlGroup'>
                <div className='loginInputGroup'>
                  <p className='loginInputName'>Email</p>
                  <Field
                    type='email'
                    className='loginInputField'
                    name='email'
                  />
                </div>
                <div className='loginInputGroup'>
                  <p className='loginInputName'>Password</p>
                  <Field
                    type='password'
                    className='loginInputField'
                    name='password'
                  />
                </div>
                <button className='loginBtn' type='submit'>
                  LOGIN
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
