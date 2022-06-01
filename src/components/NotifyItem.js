import React from 'react';
import { MdDownload } from 'react-icons/md';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { useFirestore } from '../Context/FirestoreContext';
const NotifyItem = ({ content, id, doc }) => {
  const { deleteData } = useFirestore();
  return (
    <div>
      <div className='notifyItem'>
        <div className='notifyItemContainer'>
          <p className='notifyItemContent'>{content}</p>
          {doc && (
            <a
              className='notifyItemDoc'
              href={doc}
              target='_blank'
              rel='noopener noreferrer'>
              <MdDownload
                size={20}
                color='black'
                className='notifyItemDelete'
              />
              &nbsp; Download
            </a>
          )}
        </div>
        <div
          className='notifyDeleteContainer'
          onClick={() => deleteData('notification', id)}>
          <RiDeleteBin5Fill
            size={20}
            color='black'
            className='notifyItemDelete'
          />
        </div>
      </div>
    </div>
  );
};

export default NotifyItem;
