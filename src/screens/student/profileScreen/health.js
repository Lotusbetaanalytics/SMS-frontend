import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditNavbar from '../../../components/navigation_';
import StudentSidebar from '../../../components/StudentSidebar';
import SidebarTwo from '../../../components/StudentSidebar/sidebar';
import styles from "./styles.module.css"

const HealthData = () => {
    const [bloodGroup,setBloodGroup] = useState("")
    const [genotype,setGenotype] = useState("")
    const [allergies ,setAllergies ] = useState("")
    const [diabetes,setDiabetes] = useState("")
    const [stis,setStis] = useState("")
    const [heart_disease,setHeart_disease] = useState("")
    const [disabilities,setDisabilities] = useState("")
    const [respiratory_problems,setRespiratory_problems] = useState("")
    
    
    const submitHandler = () =>{
      
    }
  return <div >
        <div> 
            <div className={styles.layout}>
                <div className={styles.Sidebar}><StudentSidebar/></div>
                <div className={styles.editContainer}>
                    <EditNavbar account={styles.remote} />
                    <div className={styles.formContainer}>
                        <form onSubmit={submitHandler}>
                        <div className={styles.inputContainer_}>
                      <label>blood Group</label>
                      <input type="text" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} />
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>Genotype</label>
                      <input type="text" value={genotype} onChange={(e) => setGenotype(e.target.value)} />
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>Allergies</label>
                      <select
                        onChange={(e) => setAllergies(e.target.value)}
                        value={allergies}
                      >
                      <option>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No
                        </option>
                      </select>
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>Diabetes</label>
                      <select
                        onChange={(e) => setDiabetes(e.target.value)}
                        value={diabetes}
                      >
                      <option>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No
                        </option>
                      </select>
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>STIs</label>
                      <select
                        onChange={(e) => setStis(e.target.value)}
                        value={stis}
                      >
                      <option>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No
                        </option>
                      </select>
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>Heart Disease</label>
                      <select
                        onChange={(e) => setHeart_disease(e.target.value)}
                        value={heart_disease}
                      >
                      <option>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No
                        </option>
                      </select>
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>Disabilities</label>
                      <select
                        onChange={(e) => setDisabilities(e.target.value)}
                        value={disabilities}
                      >
                      <option>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No
                        </option>
                      </select>
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>Respiratory_problems</label>
                      <select
                        onChange={(e) => setRespiratory_problems(e.target.value)}
                        value={respiratory_problems}
                      >
                      <option>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No
                        </option>
                      </select>
                    </div>
                        </form>
                        <button onClick={submitHandler} className={`${styles.btn} ${styles.lilac}`}>Save information</button> <Link to="/edit/profileImage"> <div className={`${styles.btn} ${styles.purple}`}>Photo Upload</div></Link> 
                    </div>
                </div>
                <div className={styles.leftBar}><SidebarTwo/></div>
            </div>
        </div>
        </div>;
};

export default HealthData;
