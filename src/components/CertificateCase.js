import React from 'react';
import { useFirestore } from '../Context/FirestoreContext';
import './css/CertificateCase.css';

const CertificateCase = ({
  url,
  image,
  title,
  deleteUID,
  tableName,
  getProjects,
}) => {
  const { deleteData } = useFirestore();
  return (
    <div className='certificateContainer'>
      <a href={url ? url : '#'}>
        <div className='certificateSection'>
          <img className='CertImage' src={image} alt={title} />
        </div>
        <div className='SubHeaderContainer'>
          <h2 className='SubHeader'>{title}</h2>
        </div>
      </a>
      {deleteUID && (
        <button
          onClick={() => {
            deleteData(tableName, deleteUID);
            getProjects();
          }}
          className='deleteButton'>
          Delete
        </button>
      )}
    </div>
  );
};

export default CertificateCase;
