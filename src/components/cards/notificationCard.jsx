import React from 'react'
import styles from './styles.module.css'
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
const NotificationCard = () => {

    const details = useSelector((state) => state.details);
    const { studentDetail } = details;
    const mystudentDetails = studentDetail;
    
    console.log(mystudentDetails)
    const academicData = mystudentDetails && mystudentDetails.student[0].notices;
    console.log(academicData)

    let slicedMessage;

  return (
    <div >
      {mystudentDetails && mystudentDetails.student[0].notices ? mystudentDetails && mystudentDetails.student[0].notices.map((item,i)=>(
         slicedMessage = item.message.slice(0,90) + "....",
         <Link to="/student/notification"> <div className={styles.noticeBoard} key={i}>
                <div className={styles.infoHeader}>{item.title}</div>
                <div className={styles.noticeInfo}>{slicedMessage}</div>
                <div className={styles.author}>Source : {item.source}</div>
              </div></Link>
 

      )): (<div className={styles.noNew}> There are no notice yet </div>)}
            
    </div>
  )
}

export default NotificationCard