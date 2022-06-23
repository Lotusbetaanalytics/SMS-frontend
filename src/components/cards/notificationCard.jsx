import React from 'react'
import styles from './styles.module.css'
import { useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
const NotificationCard = () => {
  const navigate = useNavigate()
    const details = useSelector((state) => state.details);
    const { studentDetail } = details;
    const mystudentDetails = studentDetail;
    
    const testHandler = (item) =>{
      console.log(item.id)
      navigate(`/student/notice/${item.id}`)
      
      
    }



    console.log(mystudentDetails)
    const academicData = mystudentDetails && mystudentDetails.student[0].notices;
    console.log(academicData)

    let slicedMessage;

  return (
    <div >
      {mystudentDetails && mystudentDetails.student[0].notices.length > 0 ? mystudentDetails && mystudentDetails.student[0].notices.map((item,i)=>(
         slicedMessage = item.message.slice(0,90) + "....",
         <button  onClick={() => testHandler(item)} key={item.id} className={styles.noticeBoard}>
           
                <div className={styles.infoHeader}>{item.title}</div>
                <div className={styles.noticeInfo}>{slicedMessage}</div>
                <div className={styles.author}>Source : {item.source}</div>
            
          </button>
 

      )): (<div className={styles.noNew}> There are no notice yet </div>)}
            
    </div>
  )
}

export default NotificationCard