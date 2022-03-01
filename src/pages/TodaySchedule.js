import React from 'react';
import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';
import TodayScheduleData from '../data/TodayScheduleData';
import TodayScheduleItem from '../components/TodayScheduleItem';
import './../assets/css/todaySchedule.css';
//change data of sunday
const TodaySchedule = () => {
  const d = new Date();
  let day = d.getDay();

  return (
    <div className='todaySchedulePage'>
      <PageHeader text={`Today's Schedule`} />
      <PageContent>
        <div className='todayScheduleList'>
          {TodayScheduleData.map((item, index) => (
            <TodayScheduleItem data={item[day]} key={index} />
          ))}
        </div>
      </PageContent>
    </div>
  );
};

export default TodaySchedule;
