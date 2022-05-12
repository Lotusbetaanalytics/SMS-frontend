import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { studentDetails } from '../../redux/studentActions/studentAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import StudentSidebar from '../../components/StudentSidebar';
  
  const Notification = () => {
    const dispatch = useDispatch();

    const details = useSelector((state) => state.details);
    const { studentDetail } = details;
    const mystudentDetails = studentDetail;
    
    useEffect(() => {
      dispatch(studentDetails());
    }, [dispatch]);

    
    console.log(mystudentDetails)
    const academicData = mystudentDetails && mystudentDetails.student[0].notices;
    console.log(academicData)

  
    return (
        <div className={styles.result}>
        <div className={styles.Sidebar}>
          <StudentSidebar dashboard={styles.remote} />
        </div>
        
        <div className={styles.resultTable}>
        <div className={styles.label}>Notice Board</div>
        {mystudentDetails && mystudentDetails.student[0].notices ? mystudentDetails && mystudentDetails.student[0].notices.map((item,i)=>(
     <Link to="/student/profile/healthdata"> <div className={styles.noticeBoard} key={i}>
            <div className={styles.infoHeader}>{item.title}</div>
            <div className={styles.noticeInfo}>{item.message}</div>
            <div className={styles.author}>Source : {item.source}</div>
          </div></Link>


  )): (<div className={styles.noticeBoard}> There are no notice yet </div>)}
        </div>
      </div>
    );
  };
  
  export default Notification;

  
  