import React from 'react';
import { Route, Routes, Navigate } from 'react-router';
import './assets/css/App.css';
import Login from './pages/Login.js';
import TeachersDashboard from './pages/TeachersDashboard';
import TodaySchedule from './pages/TodaySchedule';
import TeachersDashboardData from './data/TeachersDashboardData';
import { PrivateRoute } from './components/PrivateRoute';
import ChangePassword from './pages/Profile/ChangePassword';
import StaffInformation from './pages/Profile/StaffInformation';
import { useAuth } from './Context/AuthContext';
import StudentInformation from './components/StudentInformation';
import StaffSearchProfile from './components/StaffSearchProfile';

const App = () => {
  const { userData, currentUser } = useAuth();
  console.log(userData);
  console.log(currentUser);
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <TeachersDashboard>
                <TodaySchedule />
              </TeachersDashboard>
            </PrivateRoute>
          }
        />

        <Route
          path='TeachersDashboard'
          element={
            <PrivateRoute>
              <Navigate replace to='/' />
            </PrivateRoute>
          }
        />
        {TeachersDashboardData.map((item) =>
          item.sidebar.navItems.map((item) =>
            item.subMenu.map((item, index) => (
              <Route
                path={`/${item.URL}`}
                key={index}
                element={
                  <PrivateRoute>
                    <TeachersDashboard>{item.page}</TeachersDashboard>
                  </PrivateRoute>
                }
              />
            ))
          )
        )}
        <Route
          path='searchStudents/:rollno'
          element={
            <PrivateRoute>
              <TeachersDashboard>
                <StudentInformation />
              </TeachersDashboard>
            </PrivateRoute>
          }
        />
        <Route
          path='searchTeachers/:staffID'
          element={
            <PrivateRoute>
              <TeachersDashboard>
                <StaffSearchProfile />
              </TeachersDashboard>
            </PrivateRoute>
          }
        />

        <Route path='/Login' element={<Login />} />
        <Route
          path='/ProfileView'
          element={
            <PrivateRoute>
              <TeachersDashboard>
                <StaffInformation />
              </TeachersDashboard>
            </PrivateRoute>
          }
        />
        <Route
          path='/ChangePassword'
          element={
            <PrivateRoute>
              <TeachersDashboard>
                <ChangePassword />
              </TeachersDashboard>
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
