import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import styled from 'styled-components';
import ActionButton from '../../components/ActionButtons';
import GlassSheet from '../../components/GlassSheet';
import Table from '../../components/Table';
import ExamResult from '../../data/Examination/ExamResultData';

const ContentTopic = styled.h1`
  position: relative;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  padding: 5rem 0rem 0rem 0rem;
`;

const ContentHolder = styled.div`
  position: relative;
  display: flex;
  height: auto;
  width: 65rem;
  padding: 4rem 0rem 0rem 2rem;
  justify-content: space-between;
  align-content: center;
`;

const Label = styled.label`
  position: relative;
  font-size: 2rem;
  font-weight: 500;
`;

const InputField = styled.input`
  position: relative;
  height: 4rem;
  width: 25rem;
  border: 2px solid #c3c3c3;
  border-radius: 1.5rem;
  margin: 0rem 0rem 0rem 2rem;
  padding: 0rem 2rem 0rem 2rem;
  font-size: 1.5rem;
  font-weight: 500;
  background: #ffffff;
`;

const AttendanceReport = () => {
  return (
    <div>
      <PageHeader text='Attendance Report' />
      <PageContent>
        <GlassSheet
          height='28rem'
          width='120rem'
          borderRadius='2rem'
          padding='0rem 8rem 0rem 8rem'
          margin='0rem 0rem 8rem 0rem'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <div>
              <ContentTopic>Department of Computer Engineering</ContentTopic>
              <ContentHolder>
                <div>
                  <Label>From</Label>
                  <InputField type='date' placeholder='From...'></InputField>
                </div>
                <div>
                  <Label>To</Label>
                  <InputField type='date' placeholder='To...'></InputField>
                </div>
              </ContentHolder>
            </div>
          </div>
          <ActionButton
            height='4rem'
            width='18rem'
            margin='5rem 0rem 0rem 45rem'
            borderRadius='1rem'>
            Submit
          </ActionButton>
        </GlassSheet>

        <Table data={ExamResult} />
      </PageContent>
    </div>
  );
};

export default AttendanceReport;
