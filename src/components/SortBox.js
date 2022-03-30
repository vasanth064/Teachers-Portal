import React from 'react';
import './css/SortBoxBeta.css';

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
