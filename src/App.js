import React from 'react';
import { Route, Routes, Navigate } from 'react-router';
import './assets/css/App.css';
import Login from './pages/Login.js';
import StudentDashboard from './pages/StudentDashboard';
import TodaySchedule from './pages/TodaySchedule';
import StudentDashboardData from './data/StudentDashboardData';
import { PrivateRoute } from './components/PrivateRoute';
import ChangePassword from './pages/Profile/ChangePassword';
const App = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <StudentDashboard>
                <TodaySchedule />
              </StudentDashboard>
            </PrivateRoute>
          }
        />

        <Route
          path='StudentsDashboard'
          element={
            <PrivateRoute>
              <Navigate replace to='/' />
            </PrivateRoute>
          }
        />
        {StudentDashboardData.map((item) =>
          item.sidebar.navItems.map((item) =>
            item.subMenu.map((item, index) => (
              <Route
                path={`/${item.URL}`}
                key={index}
                element={
                  <PrivateRoute>
                    <StudentDashboard>{item.page}</StudentDashboard>
                  </PrivateRoute>
                }
              />
            ))
          )
        )}
        <Route path='/Login' element={<Login />} />
        {/* <Route
          path='/ProfileView'
          element={
            <PrivateRoute>
              <StudentDashboard>
                <ProfileViewer />
              </StudentDashboard>
            </PrivateRoute>
          }
        /> */}
        <Route
          path='/ChangePassword'
          element={
            <PrivateRoute>
              <StudentDashboard>
                <ChangePassword />
              </StudentDashboard>
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
