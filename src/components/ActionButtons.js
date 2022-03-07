import React from 'react';
import './css/ActionButtons.css';

const ActionButton = ({children, height, width, margin, padding}) => {
    return <button 
    className='ButtonBody'
    style={
        {
            height,
            width,
            margin,
            padding
        }}>{children}</button>
}

export default ActionButton;