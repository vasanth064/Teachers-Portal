import React from 'react'
import './css/SortButton.css'

const SortButton = ({children, margin}) => {
  return (
    <div
    style={
        {
            margin
        }}>
            <button
            className='SortButtonBody'
            >
                {children}
            </button>
        </div>
  )
}

export default SortButton