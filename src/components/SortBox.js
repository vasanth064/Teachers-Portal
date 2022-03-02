import React from 'react'
import './css/SortBox.css';

const SortBox = () => {
    return (
    <div>
        <select className='Container'>
            <option className='dropdown-content' value='department'>Department</option>
            <option className='dropdown-content' value='semester'>Semester</option>
        </select>
    </div>
)
}

export default SortBox;