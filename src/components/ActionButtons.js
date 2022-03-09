import React from 'react';
import './css/ActionButtons.css';

const ActionButton = ({children, height, width, margin, padding, borderRadius}) => {
    return <button 
    className='ButtonBody'
    style={
        {
            height,
            width,
            margin,
            padding,
            borderRadius
        }}>{children}</button>
}

export default ActionButton;