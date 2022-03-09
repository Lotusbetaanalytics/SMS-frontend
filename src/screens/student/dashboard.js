import React from 'react'
import Info from '../../components/Info'
import StudentSidebar from '../../components/StudentSidebar'
import SidebarTwo from '../../components/StudentSidebar/sidebar';
import styles from "./styles.module.css";
const StudentDashboard = () => {
  return (
    <div className={styles.studentDashboard}>
        <div className={styles.Sidebar}><StudentSidebar/></div>
        <div className={styles.info}><Info/></div>
        <div className={styles.leftBar}><SidebarTwo/></div>
    </div>
  )
}

export default StudentDashboard