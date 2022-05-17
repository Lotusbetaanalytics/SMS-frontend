import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import Info from '../../components/Info'
import StudentSidebar from '../../components/StudentSidebar'
import SidebarTwo from '../../components/StudentSidebar/sidebar';

import styles from "./styles.module.css";
const StudentDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));

 useEffect(() => {
  if (!studentLogin) {
    navigate("/student/login")
  }
}, [studentLogin,navigate,dispatch]);




  return (
    <div className={styles.studentDashboard}>
        <div className={styles.Sidebar}><StudentSidebar dashboard={styles.remote} /></div>
        <div className={styles.info}><Info/></div>
        <div className={styles.leftBar}><SidebarTwo/></div>
    </div>
  )
}

export default StudentDashboard