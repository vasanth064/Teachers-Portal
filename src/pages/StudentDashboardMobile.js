import React, { useState, useEffect } from 'react';
import './../assets/css/StudentDashboardMobile.css';
import SideBarMenuIcon from './../assets/images/icons/SidebarMenu.svg';
import SideBarMenuCloseIcon from './../assets/images/icons/SidebarMenuClose.svg';
import NavItem from '../components/DashboardNavItem';
import StudentDashboardData from '../data/StudentDashboardData.js';
import {
  MdOutlineLogout,
  MdOutlineNotificationsActive,
  MdColorLens,
} from 'react-icons/md';
import { useAuth } from '../Context/AuthContext';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Config/firebaseConfig';
import { Navigate } from 'react-router-dom';
import Loader from '../components/Loader';

const StudentDashboardMobile = ({ children }) => {
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const backgrounds = [
    'royalBlue',
    'olive',
    'blueviolet',
    'chocolate',
    'crimson',
    'orange',
  ];
  const [background, setBackground] = useState(0);
  const sideBarHandle = () => setMobileSidebar(!mobileSidebar);

  const { currentUser, logOut, setData, userData } = useAuth();

  useEffect(() => {
    if (!currentUser) return <Navigate to='/login' />;
    getUserData();
    if (localStorage.bgID) {
      setBackground(parseInt(localStorage.getItem('bgID')));
    }
  }, [currentUser]);
  const getUserData = async () => {
    const userDataRef = collection(db, 'students');
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
    <div
      className='StudentsDashboardMobilePage'
      style={{ background: backgrounds[background] }}>
      <div className='dashboardSidebarContainerMobile'>
        {StudentDashboardData.map((item, index) => (
          <div
            className={
              background
                ? `dashboardSidebarMobile ${backgrounds[background]}`
                : 'dashboardSidebarMobile'
            }
            key={index}
            style={mobileSidebar ? { zIndex: 10 } : { zIndex: -100 }}>
            <img
              onClick={sideBarHandle}
              src={SideBarMenuCloseIcon}
              className='sidebarHeadeCloseIconMobile'
              alt='menu'
            />
            {item.sidebar.navItems.map((item, index) => (
              <NavItem data={item} key={index} sideBarHandle={sideBarHandle} />
            ))}
            <div className='dashboardSidebarUserAction'>
              <img
                className='dashboardSidebarUserAccount'
                src={userData.photo}
                alt='user'
              />
              <h1 className='dashboardSidebarUsername'>{`${userData.name} - ${userData.staffID}`}</h1>
              <div className='userActionBtnMob notification'>
                <MdOutlineNotificationsActive />
              </div>
            </div>
          </div>
        ))}
        <div
          className='dashboardSidebarMobileBlur'
          style={mobileSidebar ? { zIndex: 8 } : { zIndex: -100 }}
          onClick={sideBarHandle}></div>
      </div>
      <div className='dasboardSectionMobile'>
        <div className='dashboardHeaderMobile'>
          <img
            src={SideBarMenuIcon}
            className='sidebarHeaderMenuIconMobile'
            alt='menu'
            onClick={sideBarHandle}
          />
          <div style={{ display: 'flex', gap: '2rem' }}>
            <div
              className='userActionBtnMobile'
              style={{ background: backgrounds[background], color: 'white' }}
              onClick={changeBG}>
              <MdColorLens />
            </div>
            <div
              className='userActionBtnMobile logoutMobile'
              onClick={() => logOut()}>
              <MdOutlineLogout />
            </div>
          </div>
        </div>

        <div className='MobileContent'>{children}</div>
      </div>
    </div>
  );
};

export default StudentDashboardMobile;
