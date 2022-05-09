import React, { useEffect } from 'react'
import styles from './styles.module.css'
import adminpic from "../../assets/adminpic.png";
import data from '../../data';
import { studentDetails, studentNotice } from '../../redux/studentActions/studentAction';
import { useDispatch, useSelector } from 'react-redux';

const NotificationCard = () => {

  // const dispatch = useDispatch();

  // const myDetail = JSON.parse(localStorage.getItem("studentDetails"));
  // const mystudentDetails = myDetail;
  // const id = mystudentDetails.student[0].id;
  // console.log(id)
  // useEffect(()=>{
  //   dispatch(studentNotice(id))
  // },[id,dispatch])
  
  // console.log(id)

  // const notice = useSelector((state) => state.notice);
  // const { noticeBoard } = notice;
  // console.log(noticeBoard)

  const dispatch = useDispatch();

    const details = useSelector((state) => state.details);
    const { studentDetail } = details;
    const mystudentDetails = studentDetail;
    
    useEffect(() => {
      dispatch(studentDetails());
    }, [dispatch]);

    
    console.log(mystudentDetails)
    const academicData = mystudentDetails && mystudentDetails.student[0].notices || ""
    console.log(academicData)



  return (
    <div >
      {mystudentDetails && mystudentDetails.student[0].notices.map((item,i)=>(

              <div className={styles.noticeBoard} key={i}>
                <div className={styles.infoHeader}>{item.title}</div>          
                <div className={styles.noticeInfo}>{item.message}</div>
                <div className={styles.author}>Source : {item.source}</div>
              </div>
 

      ))}
            
    </div>
  )
}

export default NotificationCard