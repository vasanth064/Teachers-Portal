import React, { useState, useEffect } from 'react';
import './../assets/css/StudentDashboard.css';
import MediaQuery from 'react-responsive';
import SideBarMenuIcon from './../assets/images/icons/SidebarMenu.svg';
import StudentDashboardData from '../data/StudentDashboardData.js';
import {
  MdOutlineNotificationsActive,
  MdOutlineFingerprint,
  MdOutlineLogout,
  MdColorLens,
} from 'react-icons/md';
import NavItem from '../components/DashboardNavItem';
import { Link, Navigate, NavLink } from 'react-router-dom';
import StudentDashboardMobile from './StudentDashboardMobile';
import { useAuth } from '../Context/AuthContext';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Config/firebaseConfig';
import Loader from '../components/Loader';

const StudentDashboard = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);
  const backgrounds = [
    'royalBlue',
    'olive',
    'blueviolet',
    'chocolate',
    'crimson',
    'orange',
  ];
  const [background, setBackground] = useState(0);
  const sideBarHandle = () => setSideBar(!sideBar);
  const { currentUser, logOut, setData, userData } = useAuth();

  useEffect(() => {
    if (!currentUser) return <Navigate to='/login' />;
    getUserData();
    if (localStorage.bgID) {
      setBackground(parseInt(localStorage.getItem('bgID')));
    }
  }, [currentUser]);
  const getUserData = async () => {
    const userDataRef = collection(db, 'teachers');
    const q = query(userDataRef, where('email', '==', currentUser.email));
    const snapshot = await getDocs(q);
    setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0]);
  };

  const changeBG = () => {
    setBackground(backgrounds.length - 1 <= background ? 0 : background + 1);
    localStorage.removeItem('bgID');
    localStorage.setItem(
      'bgID',
      backgrounds.length - 1 <= background ? 0 : background + 1
    );
  };

  return !userData ? (
    <Loader text='Getting Your Data ⌛️' />
  ) : (
    <>
      <MediaQuery minWidth={900}>
        <div
          className='StudentsDashboardPage'
          style={{ background: backgrounds[background] }}>
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
                <Link to='/ProfileView'>
                  <div className='dashboardHeaderLeft'>
                    <img
                      className='dashboardHeaderUserAccount'
                      src={userData.photo}
                      alt='user'
                    />
                    <h1 className='dashboardHeaderUsername'>{`${userData.name} - ${userData.staffID}`}</h1>
                  </div>
                </Link>
                <div className='dashboardHeaderRight'>
                  <div
                    className='userActionBtn'
                    style={{
                      background: backgrounds[background],
                      color: 'white',
                    }}
                    onClick={changeBG}>
                    <MdColorLens />
                  </div>
                  {/* <div className='userActionBtn notification'>
                    <MdOutlineNotificationsActive />
                  </div> */}
                  <Link to='/ChangePassword'>
                    <div className='userActionBtn password'>
                      <MdOutlineFingerprint />
                    </div>
                  </Link>
                  <div
                    className='userActionBtn logout'
                    onClick={() => logOut()}>
                    <MdOutlineLogout />
                  </div>
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
