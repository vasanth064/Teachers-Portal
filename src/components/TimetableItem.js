import React from 'react';

const TimetableItem = ({ data }) =>
  data.length !== 0 ? (
    data.map((item, index) => (
      <div className='todayScheduleItem' key={index}>
        <h1 className='todayScheduleSubject'>{item.courseTitle}</h1>
        <h1 className='todayScheduleTime'>
          {item.fromTime} - {item.toTime}
        </h1>
        <h1 className='todayScheduleTimeFacultyIncharge'>{item.faculty}</h1>
      </div>
    ))
  ) : (
    <h1 className='noClassMsg'>No Classes Scheduled</h1>
  );

export default TimetableItem;
