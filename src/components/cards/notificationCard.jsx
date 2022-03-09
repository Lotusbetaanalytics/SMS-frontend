import React from 'react'
import styles from './styles.module.css'
import adminpic from "../../assets/adminpic.png";

const NotificationCard = () => {
  return (
    <div className={styles.noticeBoard}>
        <div className={styles.noticePicture}><img src={adminpic} alt="" /></div>
        <div className={styles.noticeInfo} >
            <div className={styles.infoHeader}>this is life of gangstar of the life we are living </div>
            <div className={styles.author}>by john doe</div>
        </div>
    </div>
  )
}

export default NotificationCard