import React from 'react';
import Info from '../../components/Info';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import UniqueStaffData from '../../data/UniqueStaffData';

const StaffInformation = () => {
  return <div>
    <PageHeader text='Staff Information'/>
    <PageContent>
       <Info data={UniqueStaffData.A8452}/>
    </PageContent>
  </div>;
}

export default StaffInformation;
