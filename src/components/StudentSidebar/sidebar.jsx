import React, { useEffect, useState } from 'react'
import CardTwo from '../cards/card'
import NotificationCard from '../cards/notificationCard'
import Calendar from "react-calendar";
import styles from "./styles.module.css";
import 'react-calendar/dist/Calendar.css';
import { MdOutlineNotificationsActive } from "react-icons/md";
import adminpic from "../../assets/adminpic.png";
import data from '../../data';
import { useDispatch, useSelector } from 'react-redux';
import { studentDetails } from '../../redux/studentActions/studentAction';


const SidebarTwo = () => {
  const [value, onChange] = useState(new Date());

  const dispatch = useDispatch();

  // const details = useSelector((state) => state.details);

  // const { studentDetail } = details;
  // const mystudentDetails = studentDetail;
  

  // useEffect(() => {
  //   dispatch(studentDetails());
  // }, [dispatch]);
  
  const myDetail = JSON.parse(localStorage.getItem("studentDetails"));
  const mystudentDetails = myDetail;

  const academicData = mystudentDetails && mystudentDetails.student[0].academic_data.course_adviser;
    console.log(academicData)

  const course_adviser = academicData && academicData.staff.user.full_name
  console.log(course_adviser)
  
  return (
    <div className={styles.SidebarTwo}>
       <div className={styles.notificationBar}>
          <div className={styles.user}>
            <div className={styles.userImg}> <img src={adminpic} alt="" /> </div>
            <div className={styles.userName}>{mystudentDetails && mystudentDetails.first_name}</div>
          </div>
          <div className={styles.bar}>
            <MdOutlineNotificationsActive />
            <p className={styles.colorNotify}>2</p>
            </div>
        </div>
       <div className={styles.calender}>
         <Calendar onChange={onChange} value={value} />  
        </div>
       <div className={styles.personel}>
            <CardTwo bgColor={'rgba(250, 179, 179, 0.35)'} name={academicData && academicData.staff.user.full_name} header={"Designated Course Adviser"}/>
            {/* <CardTwo bgColor={'#F681F926'} name={designated_HOD} header={"Designated HOD"}/>
            <CardTwo bgColor={'#2D9CDB26'} name={designated_dean_of_faculty} header={"Designated Dean of faculty"}/>
            <CardTwo bgColor={'#FAB3B326'} name={vice_chancellor} header={"Vice Chancellor"}/> */}
        </div>
       <div className={styles.notification}>
         <div className={styles.notice}>Notice Board</div> 
        <div className={styles.board}>
        <NotificationCard/>
        </div>
         
        </div>
    </div>
  )
}

export default SidebarTwo