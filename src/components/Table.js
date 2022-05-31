import React from 'react';
import { useUI } from './../Context/UiContext';
import './css/Table.css';

const Table = ({ data }) => {
  const { getTheme } = useUI();

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
                        <th key={index} className={`.${getTheme().liteBg}`}>
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
