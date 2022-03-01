import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import './css/LoginBtn.css'

const LoginSwitchBtn = ({icon,text,active}) => {
    return (
    
    <div className ={active ? 'btn active-btn' : 'btn inactive-btn'}>
        <span>{icon === 'student' ? <FaUserAlt /> : <FaUserGraduate /> }</span>
        <h1 className='btn-text'>{text}</h1>
    </div>
    )
}

export default LoginSwitchBtn
