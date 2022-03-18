import React from 'react';
import { Route, Routes, Navigate } from 'react-router';
import './assets/css/App.css';
import Login from './pages/Login.js';
import StudentDashboard from './pages/StudentDashboard';
import TodaySchedule from './pages/TodaySchedule';
import StudentDashboardData from './data/StudentDashboardData';

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <StudentDashboard>
              <TodaySchedule />
            </StudentDashboard>
          }
        />

        <Route path='StudentsDashboard' element={<Navigate replace to='/' />} />
        {StudentDashboardData.map((item) =>
          item.sidebar.navItems.map((item) =>
            item.subMenu.map((item, index) => (
              <Route
                path={`/${item.URL}`}
                key={index}
                element={<StudentDashboard>{item.page}</StudentDashboard>}
              />
            ))
          )
        )}
        <Route path='/Login' element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
