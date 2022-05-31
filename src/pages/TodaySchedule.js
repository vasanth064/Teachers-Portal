import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';
import TodayScheduleItem from '../components/TodayScheduleItem';
import './../assets/css/todaySchedule.css';
import { useFirestore } from '../Context/FirestoreContext';
import { useAuth } from '../Context/AuthContext';
import { where } from 'firebase/firestore';
const TodaySchedule = () => {
  const { userData } = useAuth();
  const { getData } = useFirestore();
  let day;
  switch (new Date().getDay()) {
    case 0:
      day = 'sunday';
      break;
    case 1:
      day = 'monday';
      break;
    case 2:
      day = 'tuesday';
      break;
    case 3:
      day = 'wednesday';
      break;
    case 4:
      day = 'thursday';
      break;
    case 5:
      day = 'friday';
      break;
    case 6:
      day = 'saturday';
  }
  const [timeTable, setTimeTable] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getData('teachersTimetable', [
        where('staffID', '==', userData.staffID),
      ]);
      setTimeTable(data[0].timeTable);
    })();
  }, []);
  return (
    <div className='todaySchedulePage'>
      <PageHeader text={`Today's Schedule`} />
      <PageContent>
        <div className='todayScheduleList'>
          <TodayScheduleItem data={timeTable[day]} />
        </div>
      </PageContent>
    </div>
  );
};

export default TodaySchedule;
