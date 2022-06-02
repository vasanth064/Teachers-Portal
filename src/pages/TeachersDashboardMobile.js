import React, { useState, useEffect } from 'react';
import './../assets/css/TeachersDashboardMobile.css';
import SideBarMenuIcon from './../assets/images/icons/SidebarMenu.svg';
import SideBarMenuCloseIcon from './../assets/images/icons/SidebarMenuClose.svg';
import NavItem from '../components/DashboardNavItem';
import TeachersDashboardData from '../data/TeachersDashboardData.js';
import {
  MdOutlineLogout,
  MdColorLens,
  MdOutlineFingerprint,
  MdOutlineNotificationsActive,
} from 'react-icons/md';
import { useAuth } from '../Context/AuthContext';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Config/firebaseConfig';
import { Link, Navigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { useUI } from '../Context/UiContext';
import NotifyItem from '../components/NotifyItem';
import { useFirestore } from '../Context/FirestoreContext';

const TeachersDashboardMobile = ({ children }) => {
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const { getTheme, setTheme } = useUI();
  const { getData } = useFirestore();

  const [notifications, setNotifications] = useState([]);
  const [notificationBar, setNotificationBar] = useState(false);

  const sideBarHandle = () => setMobileSidebar(!mobileSidebar);

  const { currentUser, logOut, setData, userData } = useAuth();

  useEffect(() => {
    if (!currentUser) return <Navigate to='/login' />;
    getUserData();
  }, [currentUser]);

  const getUserData = async () => {
    const userDataRef = collection(db, 'teachers');
    const q = query(userDataRef, where('email', '==', currentUser.email));
    const snapshot = await getDocs(q);
    setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0]);
  };

  const getNotifications = async () => {
    setNotificationBar(!notificationBar);
    const data = await getData('notification', [
      where('userID', '==', userData.staffID),
    ]);
    setNotifications(data);
  };

  return !userData ? (
    <Loader text='Getting Your Data ⌛️' />
  ) : (
    <div
      className='StudentsDashboardMobilePage'
      style={{ background: getTheme().background }}>
      <div className='dashboardSidebarContainerMobile'>
        {TeachersDashboardData.map((item, index) => (
          <div
            className={
              getTheme().background
                ? `dashboardSidebarMobile ${getTheme().background}`
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
              <Link
                onClick={sideBarHandle}
                to='/ProfileView'
                style={{ display: 'flex', placeItems: 'center' }}>
                <img
                  className='dashboardSidebarUserAccount'
                  src={userData.photo}
                  alt='user'
                />
                <h1 className='dashboardSidebarUsername'>{`${userData.name} - ${userData.staffID}`}</h1>
              </Link>
              <Link to='/ChangePassword'>
                <div className='userActionBtn password' onClick={sideBarHandle}>
                  <MdOutlineFingerprint />
                </div>
              </Link>
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
              className='userActionBtn notification'
              onClick={() => getNotifications()}>
              <MdOutlineNotificationsActive />
              <div
                className='notifyContainer'
                style={
                  notificationBar
                    ? {
                        display: 'block',
                        marginTop: '20px',
                        marginRight: '20px',
                      }
                    : { display: 'none' }
                }>
                {notifications.length !== 0 ? (
                  notifications.map((item, index) => (
                    <NotifyItem
                      key={index}
                      content={item.message}
                      id={item.uid}
                      doc={item.file}
                    />
                  ))
                ) : (
                  <p
                    className='notifyItemContent'
                    style={{
                      textAlign: 'center',
                      fontSize: '1.8rem',
                      padding: '1rem',
                    }}>
                    No Notifications
                  </p>
                )}
              </div>
            </div>
            <div
              className='userActionBtnMobile'
              style={{ background: getTheme().background, color: 'white' }}
              onClick={() => setTheme()}>
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

export default TeachersDashboardMobile;
