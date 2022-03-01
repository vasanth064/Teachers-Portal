import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import UniqueStudentData from '../../data/UniqueStudentData';
import Table from '../../components/Table';
import StudentsInformationSlide from '../../components/StudentsInformationSlide';
import CAMarksData from '../../data/Academic/CAMarksData';

const camarksContainer = {
	marginTop: '8rem',
};

const StudentInformation = () => {
  return <div>
    <PageHeader text='Student Information'/>
    <PageContent>
      <StudentsInformationSlide data={UniqueStudentData.DX1927}/>
      <div style={camarksContainer}>
        <PageHeader
        text='Laboratory Marks'
        size='2.8'
        margin='0rem 0rem 3rem 0rem'/>
        {CAMarksData.map((item, index) => (
        <Table data={item.LaboratoryMarks} />
        ))}
      </div>
      <div style={camarksContainer}>
        <PageHeader 
        text='CA Marks' 
        size='2.8'
        margin='0rem 0rem 3rem 0rem' />
        {CAMarksData.map((item, index) => (
        <Table data={item.CaMarks} />
        ))}
      </div>
      <div style={camarksContainer}>
        <PageHeader
        text='Project Review Marks'
        size='2.8'
        margin='0rem 0rem 3rem 0rem'/>
        {CAMarksData.map((item, index) => (
        <Table data={item.Others} />
        ))}
      </div>
    </PageContent>
  </div>;
}

export default StudentInformation;
