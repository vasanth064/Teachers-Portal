import React from 'react';
import './css/Table.css';

const Table = ({ data }) => {
  return (
    <div className='tableWrapper'>
      <table>
        {data &&
          data.map((item, index) => (
            <>
              <tr key={index}>
                {item.titles.map((title) => (
                  <th>{title}</th>
                ))}
              </tr>

              {item.contents.map((contents) => (
                <tr>
                  {contents.map((content) => (
                    <td>{content}</td>
                  ))}
                </tr>
              ))}
            </>
          ))}
      </table>
    </div>
  );
};

export default Table;
