import React from 'react';
import './css/TodayScheduleItem.css';

const TodayScheduleItem = ({ data }) => {
  return data && data.length !== 0 ? (
    data.map((item, index) => (
      <div className='todayScheduleItem' key={index}>
        <h1 className='todayScheduleSubject'>{item.courseTitle}</h1>
        <h1 className='todayScheduleTime'>
          {item.fromTime}-{item.toTime}
        </h1>
        <h1 className='todayScheduleTimeFacultyIncharge'>{item.courseCode}</h1>
      </div>
    ))
  ) : (
    <h1 className='noClassMsg'>No Classes Scheduled Today</h1>
  );
};

export default TodayScheduleItem;
