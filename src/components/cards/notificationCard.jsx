import React, { useEffect } from 'react'
import styles from './styles.module.css'
import adminpic from "../../assets/adminpic.png";
import data from '../../data';
import { studentNotice } from '../../redux/studentActions/studentAction';
import { useDispatch, useSelector } from 'react-redux';

const NotificationCard = () => {

  const dispatch = useDispatch();

  const myDetail = JSON.parse(localStorage.getItem("studentDetails"));
  const mystudentDetails = myDetail;
  const id = mystudentDetails.student[0].id;
  console.log(id)
  useEffect(()=>{
    dispatch(studentNotice(id))
  },[id,dispatch])
  
  console.log(id)

  const notice = useSelector((state) => state.notice);
  const { noticeBoard } = notice;
  console.log(noticeBoard)



  return (
    <div className={styles.noticeBoard}>
            {/* <div className={styles.infoHeader}>{noticeBoard && noticeBoard.title}</div>
             <div className={styles.author}>{noticeBoard && noticeBoard.source}</div>  */}
    </div>
  )
}

export default NotificationCard