import React, { useState } from 'react'
import CardTwo from '../cards/card'
import NotificationCard from '../cards/notificationCard'
import Calendar from "react-calendar";
import styles from "./styles.module.css";
import 'react-calendar/dist/Calendar.css';
import { MdOutlineNotificationsActive } from "react-icons/md";
import adminpic from "../../assets/adminpic.png";


const SidebarTwo = () => {
  const [value, onChange] = useState(new Date());

  const myDetail = JSON.parse(localStorage.getItem("studentDetails"));
  const mystudentDetails = myDetail;
  console.log(mystudentDetails)
  return (
    <div>
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
         <div>
         <Calendar onChange={onChange} value={value} />  
         </div>
        </div>
       <div className={styles.personel}>
            <CardTwo bgColor={'#8AFAA326'} name={'Mr John Doe'} header={"Designated Course adviser"}/>
            <CardTwo bgColor={'#F681F926'} name={'Dr Wuu Chi'} header={"Designated HOD"}/>
            <CardTwo bgColor={'#2D9CDB26'} name={'Dr Zang Zhu'} header={"Designated Dean of faculty"}/>
            <CardTwo bgColor={'#FAB3B326'} name={'Prof Job John'} header={"Vice Chancellor"}/>
        </div>
       <div className={styles.notification}>
         <div className={styles.notice}>Notice Board</div> 
        <div className={styles.board}>
        <NotificationCard/>
         <NotificationCard/>
         <NotificationCard/>
         <NotificationCard/>
        </div>
         
        </div>
    </div>
  )
}

export default SidebarTwo