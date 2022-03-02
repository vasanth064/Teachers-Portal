import React from 'react'
import './css/SortBoxBeta.css';

const SortBoxBeta = () => {
  return (
    <div style={
        {
            position: 'absolute',
            margin: '3rem 0rem 0rem 95rem'
        }}>
        <select className='ContainerHead'>
            <optgroup className='ContainerHead' label='AttendanceReview'>
                 <option className='grpvalues'>Overall</option>
                 <option className='grpvalues'>Review 1</option>
                 <option className='grpvalues'>Review 2</option>
            </optgroup>
            <optgroup className='ContainerHead' label='Semester'>
                 <option className='grpvalues'>1</option>
                 <option className='grpvalues'>2</option>
                 <option className='grpvalues'>3</option>
                 <option className='grpvalues'>4</option>
                 <option className='grpvalues'>5</option>
                 <option className='grpvalues'>6</option>
            </optgroup>
        </select>
    </div>
  )
}

export default SortBoxBeta