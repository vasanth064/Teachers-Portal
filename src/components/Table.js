import React, { useState } from 'react';
import './css/Table.css';

const Table = ({ data }) => {
  const backgrounds = [
    'royalBlue',
    'olive',
    'blueviolet',
    'chocolate',
    'crimson',
    'orange',
  ];
  const [background, setBackground] = useState(
    parseInt(localStorage.getItem('bgID'))
  );

  return (
    <div className='tableWrapper'>
      <table>
        {data &&
          data.map(
            (item, index) =>
              item.data && (
                <React.Fragment key={index}>
                  <thead>
                    <tr>
                      {item.titles.map((title, index) => (
                        <th
                          key={index}
                          className={
                            background ? `${backgrounds[background]}` : null
                          }>
                          {title}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {item.data.map((content, index) => (
                      <tr key={index}>
                        {item.contents.map((cell, index) => (
                          <td key={index}>{content[cell]}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </React.Fragment>
              )
          )}
      </table>
    </div>
  );
};

export default Table;
