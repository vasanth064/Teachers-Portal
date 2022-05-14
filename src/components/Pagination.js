import React from 'react';
import './css/Pagination.css';

const Pagination = ({ pageno, pagination, handlePagination }) => {
  return (
    <div>
      <div className='Pagination-Body'>
        {pageno.map((item, index) => (
          <div
            key={index}
            onClick={() =>handlePagination(item)}
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
