import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditNavbar from '../../../components/navigation_';
import StudentSidebar from '../../../components/StudentSidebar';
import SidebarTwo from '../../../components/StudentSidebar/sidebar';


import styles from "./styles.module.css"

const AcademicHistory = () => {
    const [institution,setInstitution] = useState("")
    const [start_date,setStart_date] = useState("")
    const [end_date,setEnd_date] = useState("")
    const [qualification_earn,setQualification_earn] = useState("")

    const submitHandler = () =>{
      
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
                      <input type="date" value={institution} onChange={(e) => setInstitution(e.target.value)}/>
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>Start date</label>
                      <input type="date" value={start_date} onChange={(e) => setStart_date(e.target.value)} />
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>End date</label>
                      <input type="date" value={end_date} onChange={(e) => setEnd_date(e.target.value)} />
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>Qualification Earn</label>
                      <input type="email" value={qualification_earn} onChange={(e) => setQualification_earn(e.target.value)} />
                    </div>
                        </form>
                        <button onClick={submitHandler} className={`${styles.btn} ${styles.lilac}`}>Save information</button> <Link to="/edit/accountInfo"> <div className={`${styles.btn} ${styles.purple}`}>Health Data</div></Link>
                    </div>
                </div>
                <div className={styles.leftBar}><SidebarTwo/></div>
            </div>
        </div>
        </div>;
};

export default AcademicHistory;
