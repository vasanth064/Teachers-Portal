import React from 'react';
import './css/Pagination.css';

const Pagination = ({ pageno, pagination, handlePagination }) => {
  return (
    <div>
      <div className='Pagination-Body'>
        {pageno.map((item, index) => (
          <button
            key={index}
            onClick={() => handlePagination(item)}
            className={pagination === item ? 'btn1 btnActive' : 'btn1'}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
