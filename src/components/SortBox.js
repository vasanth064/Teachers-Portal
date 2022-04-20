import React from 'react';
import './css/SortBox.css';

const SortBox = ({ margin, padding }) => {
  return (
    <div
      style={{
        margin,
        padding,
      }}>
      <select className='ContainerHead'>
        <optgroup className='ContainerHead' label='Status Selection'>
          <option className='grpvalues'>View All</option>
          <option className='grpvalues'>Poor Case</option>
        </optgroup>
      </select>
    </div>
  );
};

export default SortBox;
