import React from 'react';
import './css/TodayScheduleItem.css';

const TodayScheduleItem = ({ data }) => {
  return data.length !== 0 ? (
    data.map((item, index) => (
      <div className='todayScheduleItem' key={index}>
        <h1 className='todayScheduleSubject'>{item.subject}</h1>
        <h1 className='todayScheduleTime'>{item.time}</h1>
        <h1 className='todayScheduleTimeFacultyIncharge'>
          {item.facultyIncharge}
        </h1>
      </div>
    ))
  ) : (
    <h1 className='noClassMsg'>No Classes Scheduled Today</h1>
  );
};

export default TodayScheduleItem;
