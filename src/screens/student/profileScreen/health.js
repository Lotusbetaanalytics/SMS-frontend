import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import EditNavbar from '../../../components/navigation_';
import StudentSidebar from '../../../components/StudentSidebar';
import SidebarTwo from '../../../components/StudentSidebar/sidebar';
import styles from "./styles.module.css"

const HealthData = () => {
    // const [bloodGroup,setBloodGroup] = useState("")
    // const [genotype,setGenotype] = useState("")
    // const [allergies ,setAllergies ] = useState("")
    // const [diabetes,setDiabetes] = useState("")
    // const [stis,setStis] = useState("")
    // const [heart_disease,setHeart_disease] = useState("")
    // const [disabilities,setDisabilities] = useState("")
    // const [respiratory_problems,setRespiratory_problems] = useState("")
  const dispatch = useDispatch() 
  const navigate = useNavigate();
  const myDetail = JSON.parse(localStorage.getItem("studentDetails")).biodata.health_data || {health_data:{blood_group:"",genotype:"",allergies:"",diabetes:"",STIs:"",heart_disease:"",disabilities:"",respiratory_problems:""}};
  const mystudentDetails = myDetail;
  console.log(mystudentDetails)
  
  const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));

 useEffect(() => {
  if (!studentLogin) {
    navigate("/student/login")
  }
}, [studentLogin,navigate,dispatch]);
  
  const blood_group = mystudentDetails.blood_group;
  const genotype = mystudentDetails.genotype;
  const allergies = mystudentDetails.allergies;
  const diabetes = mystudentDetails.diabetes;
  const stis = mystudentDetails.STIs;
  const heart_disease = mystudentDetails.heart_disease;
  const disabilities = mystudentDetails.disabilities;
  const Respiratory_problems = mystudentDetails.respiratory_problems;


    const submitHandler = () =>{
      navigate("/student/profile/healthdataEdit")
    }
  return <div >
        <div> 
            <div className={styles.layout}>
                <div className={styles.Sidebar}><StudentSidebar profile={styles.remote}/></div>
                <div className={styles.editContainer}>
                    <EditNavbar account={styles.remote} />
                    <div className={styles.formContainer}>
                        <form >
                        <div className={styles.inputContainer_}>
                      <label>blood Group</label>
                      <input type="text" value={blood_group} disabled/>
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>Genotype</label>
                      <input type="text" value={genotype} disabled/>
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>Allergies</label>
                      <input type="text" value={allergies} disabled/>
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>Diabetes</label>
                      <input type="text" value={diabetes} disabled/>
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>STIs</label>
                      <input type="text" value={stis} disabled/>
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>Heart Disease</label>
                      <input type="text" value={heart_disease} disabled/>
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>Disabilities</label>
                      <input type="text" value={disabilities} disabled/>
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>Respiratory_problems</label>
                      <input type="text" value={Respiratory_problems} disabled/>
                    </div>
                        </form>
                        <button onClick={submitHandler} className={`${styles.btn} ${styles.lilac}`}>Edit information</button> <Link to="/student/profile/familydata"> <div className={`${styles.btn} ${styles.purple}`}>Family Data</div></Link> 
                    </div>
                </div>
                <div className={styles.leftBar}><SidebarTwo/></div>
            </div>
        </div>
        </div>;
};

export default HealthData;
