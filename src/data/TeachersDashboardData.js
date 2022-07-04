import userImage from './../assets/images/UserAccount.png';
import logo from './../assets/images/logos/Logo.png';

import { MdOutlineDashboard, MdManageSearch } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { BsCalendarCheck, BsPencilSquare, BsSearch } from 'react-icons/bs';
import { HiOutlineSpeakerphone } from 'react-icons/hi';

import StaffSearch from '../pages/Search/StaffSearch';
import StudentSearch from '../pages/Search/StudentSearch';

import ClassTimetable from '../pages/Query/ClassTimetable';
import ClassReport from '../pages/Query/ClassReport';

import PostedLeave from '../pages/Attendance/PostedLeave';
import AttendanceReview from '../pages/Attendance/AttendanceReview';
import AttendanceReport from '../pages/Attendance/AttendanceReport';

import InternalMarkEntry from '../pages/Assesment/InternalMarkEntry';
import SemesterMarkEntry from '../pages/Assesment/SemesterMarkEntry';

import UpdateProfile from '../pages/Profile/UpdateProfile';
import AddTimeTable from '../pages/Profile/AddTimeTable';
import NotifyUsers from '../pages/Notifiy/NotifyUsers';
import NotifyBatch from '../pages/Notifiy/NotifyBatch';

const TeachersDashboardData = [
  {
    header: {
      userImage,
      userName: 'P Thilakaveni - P3145',
    },
    sidebar: {
      logo,
      navItems: [
        {
          navTitle: 'Dashboard',
          navIcon: <MdOutlineDashboard />,
          navURL: '',
          subMenu: [],
        },
        {
          navTitle: 'Search',
          navIcon: <BsSearch />,
          subMenu: [
            {
              title: 'Students Search',
              URL: 'searchStudents',
              page: <StudentSearch />,
            },
            {
              title: 'Teachers Search',
              URL: 'searchTeachers',
              page: <StaffSearch />,
            },
          ],
        },
        {
          navTitle: 'Query',
          navIcon: <MdManageSearch />,
          subMenu: [
            {
              title: 'Class Timetable',
              URL: 'classTimetable',
              page: <ClassTimetable />,
            },
            {
              title: 'Class Reports',
              URL: 'classReports',
              page: <ClassReport />,
            },
          ],
        },
        {
          navTitle: 'Attendance',
          navIcon: <BsCalendarCheck />,
          subMenu: [
            {
              title: 'Posted Leaves',
              URL: 'postedLeaves',
              page: <PostedLeave />,
            },
            // {
            //   title: 'Attendance Review',
            //   URL: 'attendancereview',
            //   page: <AttendanceReview />,
            // },
            {
              title: 'Attendance Report',
              URL: 'attendancereport',
              page: <AttendanceReport />,
            },
          ],
        },
        {
          navTitle: 'Assesment',
          navIcon: <BsPencilSquare />,
          subMenu: [
            {
              title: 'Internal Marks Entry',
              URL: 'internalMarkEntry',
              page: <InternalMarkEntry />,
            },
            {
              title: 'Semester Marks Entry',
              URL: 'semesterMarkEntry',
              page: <SemesterMarkEntry />,
            },
          ],
        },
        {
          navTitle: 'Profile',
          navIcon: <FaRegUser />,
          subMenu: [
            {
              title: 'Add Timetable',
              URL: 'addtimetable',
              page: <AddTimeTable />,
            },
            {
              title: 'Update Profile',
              URL: 'updateProfile',
              page: <UpdateProfile />,
            },
          ],
        },
        {
          navTitle: 'Notify',
          navIcon: <HiOutlineSpeakerphone />,
          subMenu: [
            {
              title: 'Notify Students /Teachers',
              URL: 'notifyUsers',
              page: <NotifyUsers />,
            },
            {
              title: 'Notify Batch',
              URL: 'notifyBatch',
              page: <NotifyBatch />,
            },
          ],
        },
      ],
    },
  },
];

export default TeachersDashboardData;
