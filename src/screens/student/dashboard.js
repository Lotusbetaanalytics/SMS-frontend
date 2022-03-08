import React from 'react'
import Info from '../../components/Info'
import Sidebar from '../../components/Sidebar'
import StudentSidebar from '../../components/StudentSidebar'
import styles from "./styles.module.css";
const StudentDashboard = () => {
  return (
    <div className={styles.studentDashboard}>
        <div className={styles.Sidebar}><StudentSidebar/></div>
        <div className={styles.info}><Info/></div>
    </div>
  )
}

export default StudentDashboard