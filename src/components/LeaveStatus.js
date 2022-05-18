import React from 'react';
import { useFirestore } from '../Context/FirestoreContext';
import './css/LeaveStatus.css';

const LeaveStatus = ({ data, updateLeaveData }) => {
  const { updateData } = useFirestore();

  return (
    <div>
      <div className='Container'>
        <div className='leaveStudentData'>
          <div className='leaveStudent'>
            <h1 className='leaveStudentName'>{data.name}</h1>
            <h2 className='leaveStudentRollNo'>{data.rollNo}</h2>
          </div>
          <div className='dateSection'>
            <div className='date fromDate'>{data.fromDate}</div>
            <div className='date ytoDate'>{data.toDate}</div>
          </div>
          <a href={data.documnet} className='fileHolder'>
            Attachment
          </a>
        </div>
        {data.status !== null ? (
          <button
            className='StatusShower'
            style={{ background: 'grey' }}
            onClick={() =>
              updateData('postedLeavePrintout', data.uid, {
                status: !data.status,
              }) && updateLeaveData()
            }>
            {data.status == null
              ? 'pending'
              : data.status
              ? 'Change Status'
              : 'Change Status'}
          </button>
        ) : (
          <div className='StatusShower'>
            {console.log(data)}
            <button
              className='buttonLeft'
              onClick={() =>
                updateData('postedLeavePrintout', data.uid, {
                  status: true,
                  responded: true,
                }) && updateLeaveData()
              }>
              Accept
            </button>
            <button
              className='buttonRight'
              onClick={() =>
                updateData('postedLeavePrintout', data.uid, {
                  status: false,
                  responded: true,
                }) && updateLeaveData()
              }>
              Decline
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaveStatus;
