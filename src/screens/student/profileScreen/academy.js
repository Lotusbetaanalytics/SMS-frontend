import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import EditNavbar from '../../../components/navigation_';
import StudentSidebar from '../../../components/StudentSidebar';
import SidebarTwo from '../../../components/StudentSidebar/sidebar';


import styles from "./styles.module.css"

const AcademicHistory = () => {
  const dispatch = useDispatch()  
  const navigate= useNavigate();

  const myDetail = JSON.parse(localStorage.getItem("studentDetails"))
  console.log(myDetail)
  

   const institution = myDetail && myDetail.biodata.academic_history[0] && myDetail.biodata.academic_history[0].institution || ""; ;
   console.log(institution)
  const start_date = myDetail && myDetail.biodata.academic_history[0] && myDetail.biodata.academic_history[0].start_date || "";
  console.log(start_date)
  const end_date = myDetail && myDetail.biodata.academic_history[0] && myDetail.biodata.academic_history[0].institution.end_date || "";
  console.log(end_date)
  const qualification_earn = myDetail && myDetail.biodata.academic_history[0] && myDetail.biodata.academic_history[0].institution.qualification_earned || "";
  console.log(qualification_earn)

  const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));

 useEffect(() => {
  if (!studentLogin) {
    navigate("/student/login")
  }
}, [studentLogin,navigate,dispatch]);


   const submitHandler = () =>{
      navigate("/student/profile/academyhistoryEdit")
    }
  return <div >
        <div> 
            <div className={styles.layout}>
                <div className={styles.Sidebar}><StudentSidebar profile={styles.remote}/></div>
                <div className={styles.editContainer}>
                    <EditNavbar official={styles.remote} />
                    <div className={styles.formContainer}>
                        <form>
                        <div className={styles.inputContainer_}>
                      <label>Institution</label>
                      <input type="text" value={institution} disabled/>
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>Start date</label>
                      <input type="date" value={start_date} disabled />
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>End date</label>
                      <input type="date" value={end_date} disabled/>
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>Qualification Earn</label>
                      <input type="email" value={qualification_earn} />
                    </div>
                        </form>
                        <button onClick={submitHandler} className={`${styles.btn} ${styles.lilac}`}>Edit information</button> <Link to="/student/profile/healthdata"> <div className={`${styles.btn} ${styles.purple}`}>Health Data</div></Link>
                    </div>
                </div>
                {/* <div className={styles.leftBar}><SidebarTwo/></div> */}
            </div>
        </div>
        </div>;
};

export default AcademicHistory;
