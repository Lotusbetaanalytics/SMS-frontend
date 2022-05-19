import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import Cards from '../../components/cards';
import { FcDepartment,FcGraduationCap} from "react-icons/fc";
import Info from '../../components/Info'
import StudentSidebar from '../../components/Sidebar'
import SidebarTwo from '../../components/Sidebar/sidebar';
import book from '../../assets/book.png'
import styles from "./styles.module.css";
import SearchWidget from '../../components/Input/Search';
import CardTwo from '../../components/cards/card';
const StudentDashboard = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));

//  useEffect(() => {
//   if (!studentLogin) {
//     navigate("/student/login")
//   }
// }, [studentLogin,navigate,dispatch]);




  return (
    <div className={styles.studentDashboard}>
    <StudentSidebar/>
    <div className={styles.dashboard_info}>
    <SearchWidget/>
    
    <div className={styles.info_container}>
    <div className={styles.book}>
    <img src={book} alt="avatar" />
    </div>
      <CardTwo/>
    <div className={styles.card_container}>
    <Cards
        iconColor={"blue"}
        iconBorder={"8px solid blue"}
        body={"health Education"}
        title={"Department"}
        bgColor={"pink"}
        icon={<FcDepartment/>}
        />
         <Cards
        iconColor={"blue"}
        iconBorder={"8px solid blue"}
        body={"health Education"}
        title={"Department"}
        bgColor={"pink"}
        icon={<FcDepartment/>}
        />
         <Cards
        iconColor={"blue"}
        iconBorder={"8px solid blue"}
        body={"health Education"}
        title={"Department"}
        bgColor={"pink"}
        icon={<FcDepartment/>}
        />
         <Cards
        iconColor={"blue"}
        iconBorder={"8px solid blue"}
        body={"health Education"}
        title={"Department"}
        bgColor={"pink"}
        icon={<FcDepartment/>}
        />
         <Cards
        iconColor={"blue"}
        iconBorder={"8px solid blue"}
        body={"health Education"}
        title={"Department"}
        bgColor={"pink"}
        icon={<FcDepartment/>}
        />
         <Cards
        iconColor={"blue"}
        iconBorder={"8px solid blue"}
        body={"health Education"}
        title={"Department"}
        bgColor={"pink"}
        icon={<FcDepartment/>}
        />
         <Cards
        iconColor={"blue"}
        iconBorder={"8px solid blue"}
        body={"health Education"}
        title={"Department"}
        bgColor={"pink"}
        icon={<FcDepartment/>}
        />
         <Cards
        iconColor={"blue"}
        iconBorder={"8px solid blue"}
        body={"health Education"}
        title={"Department"}
        bgColor={"pink"}
        icon={<FcDepartment/>}
        />
        <Cards
        iconColor={"blue"}
        iconBorder={"8px solid blue"}
        body={"health Education"}
        title={"Department"}
        bgColor={"pink"}
        icon={<FcDepartment/>}
        />
    </div>
      
    </div>
    </div>
      
    </div>
  )
}

export default StudentDashboard