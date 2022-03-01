import React from 'react';
import './../assets/css/StudentDashboard.css';
import StudentDashboardData from '../data/StudentDashboardData.js';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { MdOutlineFingerprint } from 'react-icons/md';
import { MdOutlineLogout } from 'react-icons/md';
import NavItem from '../components/DashboardNavItem';

const StudentDashboard = ({ children }) => {
  return (
    <div className='StudentsDashboardPage'>
      {StudentDashboardData.map((item, index) => (
        <div className='dashboardSidebar' key={index}>
          <div className='siderbarHeader'>
            <img src={item.sidebar.logo} alt='logo' className='sidebarLogo' />
          </div>
          <div className='sidebarContent'>
            {item.sidebar.navItems.map((item, index) => (
              <NavItem data={item} key={index} />
            ))}
          </div>
        </div>
      ))}

      <div className='dasboardSection'>
        {StudentDashboardData.map((item, index) => (
          <div className='dashboardHeader' key={index}>
            <div className='dashboardHeaderLeft'>
              <img
                className='dashboardHeaderUserAccount'
                src={item.header.userImage}
                alt='user'
              />
              <h1 className='dashboardHeaderUsername'>
                {item.header.userName}
              </h1>
            </div>
            <div className='dashboardHeaderRight'>
              <div className='userActionBtn notification'>
                <MdOutlineNotificationsActive />
              </div>
              <div className='userActionBtn password'>
                <MdOutlineFingerprint />
              </div>
              <div className='userActionBtn logout'>
                <MdOutlineLogout />
              </div>
            </div>
          </div>
        ))}
        <div className='Content'>{children}</div>
      </div>
    </div>
  );
};

export default StudentDashboard;
