import React from 'react'
import CardTwo from '../cards/card'
import NotificationCard from '../cards/notificationCard'
import styles from "./styles.module.css";
const SidebarTwo = () => {
  return (
    <div>
       <div className={styles.notificationBar}>
            this is notification
        </div>
       <div className={styles.calender}>
           this is calender
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