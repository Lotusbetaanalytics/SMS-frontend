import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditNavbar from '../../../components/navigation_';
import StudentSidebar from '../../../components/StudentSidebar';
import SidebarTwo from '../../../components/StudentSidebar/sidebar';

import styles from "./styles.module.css"

const BioData = () => {
    const [marital_status,setMarital_status] = useState("")
    const [gender,setGender] = useState("")
    const [religion,setReligion] = useState("")
    const [birthday,setBirthday] = useState("")
    const [nationality,setNationality] = useState("")
    const [state_of_origin,setState_of_origin] = useState("")
    const [local_govt,setLocal_govt] = useState("")
    const [address,setAddress] = useState("")
    const [phone_no_1,setPhone_no_1] = useState("")
    const [phone_no_2,setPhone_no_2] = useState("")

    const submitHandler = () =>{

    }
    
  return <div >
        <div> 
            <div className={styles.layout}>
                <div className={styles.Sidebar}><StudentSidebar profile={styles.remote}/></div>
                <div className={styles.editContainer}>
                    <EditNavbar emergency={styles.remote} />
                    <div className={styles.formContainer}>
                        <form onSubmit={submitHandler}>
                        <div className={styles.inputContainer_}>
                      <label>Marital Status</label>
                      <input type="text" value={marital_status} onChange={(e) => setMarital_status(e.target.value)} />
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>Gender</label>
      
                      <select
                        onChange={(e) => setGender(e.target.value)}
                        value={gender}
                      >
                        <option>Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    
                    <div className={styles.inputContainer_}>
                      <label>Religion</label>
                      <input type="text" value={religion} onChange={(e) => setReligion(e.target.value)}/>
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>Birthday</label>
                      <input type="email" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>State_of origin</label>
                      <input type="text" value={state_of_origin} onChange={(e) => setState_of_origin(e.target.value)} />
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>Nationality</label>
                      <textarea type="text" value={nationality} onChange={(e) => setNationality(e.target.value)}/>
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>Local Government</label>
                      <textarea type="text" value={local_govt} onChange={(e) => setLocal_govt(e.target.value)}/>
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>Address</label>
                      <input type="textarea" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>Phone Number</label>
                      <input type="textarea" value={phone_no_1} onChange={(e) => setPhone_no_1(e.target.value)} />
                    </div>
                    <div className={styles.inputContainer_}>
                      <label>Phone Number 2</label>
                      <input type="textarea" value={phone_no_2} onChange={(e) => setPhone_no_2(e.target.value)} />
                    </div>
                        </form>
                        <button onClick={submitHandler} className={`${styles.btn} ${styles.lilac}`}>Save information</button> <Link to="/edit/officailInfo"> <div className={`${styles.btn} ${styles.purple}`}>Academic History</div></Link>
                    </div>
                </div>
                <div className={styles.leftBar}><SidebarTwo/></div>
            </div>
        </div>
        </div>;
};

export default BioData;
