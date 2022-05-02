import React, { useState } from 'react';
import './../assets/css/StudentDashboard.css';
import MediaQuery from 'react-responsive';
import SideBarMenuIcon from './../assets/images/icons/SidebarMenu.svg';
import StudentDashboardData from '../data/StudentDashboardData.js';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { MdOutlineFingerprint } from 'react-icons/md';
import { MdOutlineLogout } from 'react-icons/md';
import NavItem from '../components/DashboardNavItem';
import { NavLink } from 'react-router-dom';
import StudentDashboardMobile from './StudentDashboardMobile';
import { useAuth } from '../Context/AuthContext';
const StudentDashboard = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);

  const sideBarHandle = () => setSideBar(!sideBar);
  const { logOut, userData } = useAuth();
  return (
    <>
      <MediaQuery minWidth={900}>
        <div className='StudentsDashboardPage'>
          {StudentDashboardData.map((item, index) =>
            sideBar ? (
              <div
                className='dashboardSidebar'
                key={index}
                style={{ width: '39rem' }}>
                <div className='siderbarHeaderExpanded'>
                  <img
                    src={SideBarMenuIcon}
                    className='sidebarHeaderMenuIcon'
                    alt='menu'
                    onClick={sideBarHandle}
                  />
                  <h1 className='sidebarHeaderTitle'>PSG PTC</h1>
                  <img
                    src={item.sidebar.logo}
                    alt='logo'
                    className='sidebarHeaderLogo'
                  />
                </div>
                <div className='sidebarContent'>
                  {item.sidebar.navItems.map((item, index) => (
                    <NavItem
                      data={item}
                      key={index}
                      sideBarHandle={sideBarHandle}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className='dashboardSidebar' key={index}>
                <div className='siderbarHeaderExpanded'>
                  <img
                    src={SideBarMenuIcon}
                    className='sidebarHeaderMenuIcon'
                    alt='menu'
                    onClick={sideBarHandle}
                    style={{ transform: 'rotatez(180deg)' }}
                  />
                </div>

                <div className='sidebarContentCollapsed'>
                  {item.sidebar.navItems.map((item, index) =>
                    item.subMenu.length === 0 ? (
                      <NavLink
                        className='navItemCollapsed'
                        to={`/${item.navURL}`}
                        key={index}>
                        <span className='navItemCollapsedIcon'>
                          {item.navIcon}
                        </span>
                      </NavLink>
                    ) : (
                      <NavLink
                        className='navItemCollapsed'
                        to=''
                        onClick={sideBarHandle}
                        key={index}>
                        <span className='navItemCollapsedIcon'>
                          {item.navIcon}
                        </span>
                      </NavLink>
                    )
                  )}
                </div>
                <h1 className='sidebarHeaderTitleCollapsed'>PSG PTC</h1>
              </div>
            )
          )}

          <div
            className='dasboardSection'
            style={
              sideBar
                ? { left: '35rem', width: 'calc(100vw - 35rem)' }
                : { left: '10rem', width: 'calc(100vw - 10rem)' }
            }>
            {StudentDashboardData.map((item, index) => (
              <div className='dashboardHeader' key={index}>
                <div className='dashboardHeaderLeft'>
                  <img
                    className='dashboardHeaderUserAccount'
                    src={userData.photo}
                    alt='user'
                  />
                  <h1 className='dashboardHeaderUsername'>{userData.name}</h1>
                </div>
                <div className='dashboardHeaderRight'>
                  <div className='userActionBtn notification'>
                    <MdOutlineNotificationsActive />
                  </div>
                  <div className='userActionBtn password'>
                    <MdOutlineFingerprint />
                  </div>
                  <button
                    className='userActionBtn logout'
                    onClick={() => logOut()}>
                    <MdOutlineLogout />
                  </button>
                </div>
              </div>
            ))}
            <div className='Content'>{children}</div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={900}>
        <StudentDashboardMobile>{children}</StudentDashboardMobile>
      </MediaQuery>
    </>
  );
};

export default StudentDashboard;
