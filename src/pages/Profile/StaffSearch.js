import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import StaffSearchProfile from '../../components/StaffSearchProfile';
import StaffInformationData from '../../data/StaffInformationData';

const Staffsearch = () => {
    return (
    <div>
        <PageHeader text='Staff Search'/>
        <PageContent>
          <StaffSearchProfile data={StaffInformationData.StaffDet}/>
        </PageContent>
    </div>
    )
}

export default Staffsearch;