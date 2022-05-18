import { where } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import LeaveStatus from '../../components/LeaveStatus';
import PageContent from '../../components/PageContent';
import PageHeader from '../../components/PageHeader';
import { useFirestore } from '../../Context/FirestoreContext';
import { useAuth } from '../../Context/AuthContext';

const PostedLeave = () => {
  const [postedLeaves, setPostedLeaves] = useState([]);
  const { getData } = useFirestore();
  const { userData } = useAuth();

  useEffect(() => {
    (async () => {
      const data = await getData('postedLeavePrintout', [
        where('tutorID', '==', userData.staffID),
      ]);
      setPostedLeaves(data);
    })();
  }, []);
  const updateLeaveData = async () => {
    const data = await getData('postedLeavePrintout', [
      where('tutorID', '==', userData.staffID),
    ]);
    setPostedLeaves(data);
  };

  return postedLeaves.length !== 0 ? (
    <>
      <div>
        {postedLeaves.filter((item) => item.status === null).length !== 0 ? (
          <>
            <PageHeader text='Posted Leaves' />
            <PageContent>
              <div className='flexRow'>
                {postedLeaves
                  .filter((item) => item.status === null)
                  .map((item, index) => (
                    <LeaveStatus
                      data={item}
                      key={index}
                      updateLeaveData={updateLeaveData}
                    />
                  ))}
              </div>
            </PageContent>
          </>
        ) : null}

        {postedLeaves.filter((item) => item.status === false).length !== 0 ? (
          <>
            <PageHeader text='Leaves Declined' style={{ marginTop: '5rem' }} />
            <PageContent>
              <div className='flexRow'>
                {postedLeaves
                  .filter((item) => item.status === false)
                  .map((item, index) => (
                    <LeaveStatus
                      data={item}
                      key={index}
                      updateLeaveData={updateLeaveData}
                    />
                  ))}
              </div>
            </PageContent>
          </>
        ) : null}
        {postedLeaves.filter((item) => item.status === true).length !== 0 ? (
          <>
            <PageHeader text='Leaves Accepted' style={{ marginTop: '5rem' }} />
            <PageContent>
              <div className='flexRow'>
                {postedLeaves
                  .filter((item) => item.status === true)
                  .map((item, index) => (
                    <LeaveStatus
                      data={item}
                      key={index}
                      updateLeaveData={updateLeaveData}
                    />
                  ))}
              </div>
            </PageContent>
          </>
        ) : null}
      </div>
    </>
  ) : (
    <h1 className='noClassMsg'>No Leaves Posted</h1>
  );
};

export default PostedLeave;
