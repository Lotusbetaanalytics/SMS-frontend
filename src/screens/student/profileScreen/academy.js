import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EditNavbar from '../../../components/navigation_';
import StudentSidebar from '../../../components/StudentSidebar';
import SidebarTwo from '../../../components/StudentSidebar/sidebar';


import styles from "./styles.module.css"

const AcademicHistory = () => {
    
  const navigate= useNavigate();
  const myDetail = JSON.parse(localStorage.getItem("studentDetails"));
  const healthDetails = myDetail;
  const mystudentDetails = healthDetails.biodata.academic_history[0];
  
  console.log(mystudentDetails.institution)

  const institution = mystudentDetails.institution;
  console.log(institution)
  const start_date = mystudentDetails.start_date;
  const end_date = mystudentDetails.end_date;
  const qualification_earn = mystudentDetails.qualification_earned;


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
                <div className={styles.leftBar}><SidebarTwo/></div>
            </div>
        </div>
        </div>;
};

export default AcademicHistory;
