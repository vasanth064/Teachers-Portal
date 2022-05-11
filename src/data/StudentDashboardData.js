import userImage from './../assets/images/UserAccount.png';
import logo from './../assets/images/logos/Logo.png';
import { MdOutlineDashboard, MdManageSearch } from 'react-icons/md';
import { FaSearch, FaUserAlt } from 'react-icons/fa';
import { BsCalendarCheck, BsPencilSquare } from 'react-icons/bs';
import StaffSearch from '../pages/Profile/StaffSearch';
import AttendanceReport from '../pages/Query/AttendanceReport';
import AttendanceReview from '../pages/Query/AttendanceReview';
import Home from '../pages/Attendance/Home';
import ClassTimetable from '../pages/Query/ClassTimetable';
import LeaveManagement from '../pages/Attendance/LeaveManagement';
import CAMarkEntry from '../pages/Assesment/CAMarkEntry';
import StudentSearch from '../pages/Query/StudentSearch';
// import StaffInformation from '../pages/Profile/StaffInformation';
// import ArrearList from '../pages/Query/ArrearList';
// import ElectiveEntry from '../pages/Attendance/ElectiveEntry';
// import StaffTimetable from '../pages/Attendance/StaffTimetable';
// import LabFinalExam from '../pages/Assesment/LabFinalExam';
// import StudentInformation from './../pages/Query/StudentInformation';
// import { BiSitemap } from 'react-icons/bi';

const StudentDashboardData = [
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
          navIcon: <FaSearch />,
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
              title: 'Posted Leaves',
              URL: 'postedLeaves',
              page: <LeaveManagement />,
            },
            {
              title: 'Class Reports',
              URL: 'classReports',
              page: <Home />,
            },
          ],
        },
        {
          navTitle: 'Attendance',
          navIcon: <BsCalendarCheck />,
          subMenu: [
            {
              title: 'Attendance Entry',
              URL: 'internalMarkEntry',
              page: <CAMarkEntry />,
            },
            {
              title: 'Attendance Review',
              URL: 'semesterMarkEntry',
              page: <AttendanceReview />,
            },
            {
              title: 'Attendance Report',
              URL: 'semesterMarkEntry',
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
              page: <CAMarkEntry />,
            },
            {
              title: 'Semester Marks Entry',
              URL: 'semesterMarkEntry',
              page: <CAMarkEntry />,
            },
          ],
        },
        {
          navTitle: 'Profile',
          navIcon: <FaUserAlt />,
          subMenu: [
            {
              title: 'Add Timetable',
              URL: 'internalMarkEntry',
              page: <CAMarkEntry />,
            },
            {
              title: 'Update Profile',
              URL: 'updateProfile',
              page: <CAMarkEntry />,
            },
          ],
        },
      ],
    },
  },
];

export default StudentDashboardData;
