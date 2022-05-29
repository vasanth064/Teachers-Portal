import React from 'react';
import { useUI } from '../Context/UiContext';
import './css/Pagination.css';

const Pagination = ({ pageno, pagination, handlePagination }) => {
  const { getTheme } = useUI();
  return (
    <div>
      <div className='Pagination-Body'>
        {pageno.map((item, index) => (
          <div
            key={index}
            onClick={() => handlePagination(item)}
            style={
              pagination === item ? { background: getTheme().background } : null
            }
            className={
              pagination === item
                ? 'pagination btn1 btnActive'
                : 'pagination btn1'
            }>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
