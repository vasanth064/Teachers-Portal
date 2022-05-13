import React from 'react';
import PageContent from '../../components/PageContent';
import PageHeader from '../../components/PageHeader';
import AttendanceStatusShell from '../../components/AttendanceStatusShell';
import styled from 'styled-components';

const CellsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
`;

const Header = styled.h3`
  font-size: 2.2rem;
  letter-spacing: 0.08rem;
  margin: 4rem 0rem;
  font-weight: bold;
`;

const AttendanceReview = () => {
  return (
    <div>
      <PageHeader text='Attendance Review' />
      <PageContent>
        <Header>Present</Header>
        <CellsContainer>
          <AttendanceStatusShell data={[]} />
        </CellsContainer>
        <Header>Absent</Header>
        <CellsContainer>
          <AttendanceStatusShell data={[]} />
        </CellsContainer>
      </PageContent>
    </div>
  );
};

export default AttendanceReview;
