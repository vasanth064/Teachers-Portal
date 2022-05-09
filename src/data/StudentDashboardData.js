import userImage from './../assets/images/UserAccount.png';
import logo from './../assets/images/logos/Logo.png';
import { MdOutlineDashboard } from 'react-icons/md';
import { MdSchool ,MdLuggage,MdManageSearch} from 'react-icons/md';
import {FaSearch} from 'react-icons/fa'
 import { SiMicrosoftacademic } from 'react-icons/si';
import StaffSearch from '../pages/Profile/StaffSearch';
import StaffInformation from '../pages/Profile/StaffInformation';
import ArrearList from '../pages/Query/ArrearList';
import AttendanceReport from '../pages/Query/AttendanceReport';
import AttendanceReview from '../pages/Query/AttendanceReview';
import Home from '../pages/Attendance/Home';
import ElectiveEntry from '../pages/Attendance/ElectiveEntry';
import ClassTimetable from '../pages/Attendance/ClassTimetable';
import LeaveManagement from '../pages/Attendance/LeaveManagement';
import StaffTimetable from '../pages/Attendance/StaffTimetable';
import CAMarkEntry from '../pages/Assesment/CAMarkEntry';
import LabFinalExam from '../pages/Assesment/LabFinalExam';
import StudentInformation from './../pages/Query/StudentInformation';
import StudentSearch from '../pages/Query/StudentSearch';
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
              // icon: <BiSitemap />,
              URL: 'searchStudents',
              page: <StaffSearch />,
            },
            {
              title: 'Teachers Search',
              URL: 'searchTeachers',
              page: <StaffInformation />,
            },
          ],
        },
        {
          navTitle: 'Query',
          navIcon: <MdManageSearch />,
          subMenu: [
            {
              title: 'Internal Marks',
              URL: 'internalMarks',
              page: <StudentSearch />,
            },
            {
              title: 'Semester Marks',
              URL: 'semesterMarks',
              page: <StudentInformation />,
            },
            {
              title: 'Class Timetable',
              URL: 'classTimetable',
              page: <ArrearList />,
            },
            {
              title: 'Posted Leaves',
              URL: 'postedLeaves',
              page: <AttendanceReport />,
            },
            {
              title: 'Class Reports',
              URL: 'classReports',
              page: <AttendanceReview />,
            },
          ],
        },
        {
          navTitle: 'Attendance',
          navIcon: <MdLuggage />,
          subMenu: [
            {
              title: 'Attendance Entry',
              URL: 'internalMarkEntry',
              page: <CAMarkEntry />,
            },
            {
              title: 'Attendance Review',
              URL: 'semesterMarkEntry',
              page: <CAMarkEntry />,
            },
            {
              title: 'Attendance Report',
              URL: 'semesterMarkEntry',
              page: <CAMarkEntry />,
            },
          ],
        },
        {
          navTitle: 'Assesment',
          navIcon: <MdLuggage />,
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
          navIcon: <MdLuggage />,
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
