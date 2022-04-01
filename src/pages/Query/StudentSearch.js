import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import StudentInformationData from '../../data/StudentsData';
import StudentProfileSearch from '../../components/StudentProfileSearch';

const StudentSearch = () => {
  return (
    <div>
      <PageHeader text='Student Search' />
      <PageContent>
        <StudentProfileSearch data={StudentInformationData} />
      </PageContent>
    </div>
  );
};

export default StudentSearch;
