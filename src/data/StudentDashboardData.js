import userImage from './../assets/images/UserAccount.png';
import logo from './../assets/images/logos/Logo.png';
import { MdOutlineDashboard } from 'react-icons/md';
import { MdSchool } from 'react-icons/md';
import { MdLuggage } from 'react-icons/md';
import { SiMicrosoftacademic } from 'react-icons/si';
import StaffSearch from '../pages/Profile/StaffSearch';
import StaffInformation from '../pages/Profile/StaffInformation';
import StudentSearch from '../pages/Query/StudentSearch';
import StudentInformation from '../pages/Query/StudentInformation';
import ArrearList from '../pages/Query/ArrearList';
import AttendanceReport from '../pages/Query/AttendanceReport';
import AttendanceReview from '../pages/Query/AttendanceReview';
import LabDetails from '../pages/Timetable Entry/LabDetails';
import HallAllotmentDept from '../pages/Timetable Entry/HallAllotmentDept';
import HallAllotmentProcess from '../pages/Timetable Entry/HallAllotmentProcess';
import HallAllotmentSummer from '../pages/Timetable Entry/HallAllotmentSummer';
import WorkloadAllotment from '../pages/Timetable Entry/WorkloadAllotment';
import PreviousLoad from '../pages/Timetable Entry/PreviousLoad';
import StaffChange from '../pages/Timetable Entry/StaffChange';
import Home from '../pages/Attendance/Home';
import ElectiveEntry from '../pages/Attendance/ElectiveEntry';
import ClassTimetable from '../pages/Attendance/ClassTimetable';
import LeaveManagement from '../pages/Attendance/LeaveManagement';
import StaffTimetable from '../pages/Attendance/StaffTimetable';
import CAMarkEntry from '../pages/Assesment/CAMarkEntry';
import LabFinalExam from '../pages/Assesment/LabFinalExam';
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
          navURL: '/StudentsDashboard',
          subMenu: [],
        },
        {
          navTitle: 'Profile',
          navIcon: <SiMicrosoftacademic />,
          subMenu: [
            {
              title: 'Staff Search',
              // icon: <BiSitemap />,
              URL: 'Staffsearch',
              page: StaffSearch,
            },
            {
              title: 'Staff Information',
              URL: 'StaffInformation',
              page: StaffInformation,
            },
          ],
        },
        {
          navTitle: 'Query',
          navIcon: <MdSchool />,
          subMenu: [
            {
              title: 'Students Search',
              URL: 'StudentSearch',
              page: StudentSearch,
            },
            {
              title: 'Student Information',
              URL: 'StudentInformation',
              page: StudentInformation,
            },
            {
              title: 'Arrear List',
              URL: 'ArrearList',
              page: ArrearList,
            },
            {
              title: 'Attendance Report',
              URL: 'AttendanceReport',
              page: AttendanceReport,
            },
            {
              title: 'Attendance Review Report',
              URL: 'AttendanceReview',
              page:AttendanceReview,
            },
          ],
        },
        {
          navTitle: 'Timetable Entry',
          navIcon: <MdLuggage />,
          navURL: '/Hostel',
          subMenu: [
            {
              title: 'Lab Details',
              URL: 'LabDetails',
              page: LabDetails,
            },
            {
              title: 'Hall Allotment Dept',
              URL: 'HallAllotmentDept',
              page: HallAllotmentDept,
            },
            {
              title: 'Hall Allotment Process',
              URL: 'HallAllotmentProcess',
              page: HallAllotmentProcess,
            },
            {
              title: 'Hall Allotment Dept (Summer)',
              URL: 'HallAllotmentSummer',
              page: HallAllotmentSummer,
            },
            {
              title: 'Workload Allotment',
              URL: 'WorkloadAllotment',
              page: WorkloadAllotment,
            },
            {
              title: 'Previous Load',
              URL: 'PreviousLoad',
              page: PreviousLoad,
            },
            {
              title: 'Staff Change',
              URL: 'StaffChange',
              page: StaffChange,
            },
          ],
        },
        {
          navTitle: 'Attendance',
          navIcon: <MdLuggage />,
          navURL: '/Hostel',
          subMenu: [
            {
              title: 'Home',
              URL: 'Home',
              page: Home,
            },
            {
              title: 'Elective Entry',
              URL: 'ElectiveEntry',
              page: ElectiveEntry,
            },
            {
              title: 'Class Timetable',
              URL: 'ClassTimetable',
              page: ClassTimetable,
            },
            {
              title: 'Leave Management',
              URL: 'LeaveManagement',
              page: LeaveManagement,
            },
            {
              title: 'Staff Timetable',
              URL: 'StaffTimetable',
              page: StaffTimetable,
            },
          ],
        },
        {
          navTitle: 'Assesment',
          navIcon: <MdLuggage />,
          navURL: '/Hostel',
          subMenu: [
            {
              title: 'CA Marks Entry',
              URL: 'CAMarkEntry',
              page: CAMarkEntry,
            },
            {
              title: 'Lab Exam Mark Entry',
              URL: 'LabFinalExam',
              page: LabFinalExam,
            },
          ],
        },
      ],
    },
  },
];

export default StudentDashboardData;
