import React from 'react';
import LoginData from './../data/LoginData.js';
import LoginSwitchBtn from './../components/LoginSwitchBtn';
import LoginInput from '../components/LoginInput.js';
import './../assets/css/Login.css';

const Login = () => {
  return (
    <div className='loginPage'>
      {LoginData.map((item) => {
        return (
          <div className='header'>
            <img className='logo' src={item.logo} alt='psg ptc logo' />
            <h1 className='logoTitle'>{item.logoTitle}</h1>
            <h2 className='logoSubTitle'>{item.logoSubTitle}</h2>
          </div>
        );
      })}
      <div className='content'>
        <h1 className='content-title'>Login to Your Account</h1>
        <div className='loginSwitch'>
          <LoginSwitchBtn icon='student' text='STUDENT’S LOGIN' active={true} />
          <LoginSwitchBtn
            icon='teacher'
            text='TEACHER’S LOGIN'
            active={false}
          />
        </div>
        <form className='formControlGroup'>
          <LoginInput inputName='Roll No' type='text' />
          <LoginInput inputName='Password' type='password' />
          <button className='loginBtn'>LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
