import React from 'react';
import PageContent from '../../components/PageContent';
import PageHeader from '../../components/PageHeader';
import Table from '../../components/Table';
import styled from 'styled-components';
import GreenButton from '../../components/GreenButton';

const ContentBody = styled.div`
  text-align: center;
`;

const AttendanceReport = () => {
  return (
    <div>
      <PageHeader text='Attendance Report' />
      <PageContent>
        <ContentBody>
          <Table />
          <GreenButton
            style={{ color: 'white', margin: '4rem 0rem 0rem 0rem' }}>
            Get Report
          </GreenButton>
        </ContentBody>
      </PageContent>
    </div>
  );
};

export default AttendanceReport;
