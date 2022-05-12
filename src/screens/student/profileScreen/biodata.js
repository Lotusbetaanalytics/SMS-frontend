import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import EditNavbar from "../../../components/navigation_";
import StudentSidebar from "../../../components/StudentSidebar";


import styles from "./styles.module.css";

const BioData = () => {
  
  const navigate = useNavigate();
  const dispatch = useNavigate();
  const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));

 useEffect(() => {
  if (!studentLogin) {
    navigate("/student/login")
  }
}, [studentLogin,navigate,dispatch]);
  const myDetail = JSON.parse(localStorage.getItem("studentDetails")).biodata || {biodata:{marital_status:"",gender:"",religion:"",birthday:"",nationality:"",state_of_origin:"",local_govt:"",address:"",phone_no_1:"",phone_no_2:""}};
  const mystudentDetails = myDetail;
  console.log(mystudentDetails);

  const marital_status = mystudentDetails.marital_status;
  const gender =mystudentDetails.gender;
  const religion = mystudentDetails.religion;
  const birthday = mystudentDetails.birthday;
  const nationality =mystudentDetails.nationality;
  const state_of_origin = mystudentDetails.state_of_origin;
  const local_govt =  mystudentDetails.local_govt;
  const address = mystudentDetails.address;
  const phone_no_1 = mystudentDetails.phone_no_1;
  const phone_no_2 = mystudentDetails.phone_no_2;
  const submitHandler = () => {
    navigate("/student/profile/biodataEdit")
  };

  return (
    <div>
      <div>
        <div className={styles.layout}>
          <div className={styles.Sidebar}>
            <StudentSidebar profile={styles.remote} />
          </div>
          <div className={styles.editContainer}>
            <EditNavbar emergency={styles.remote} />
            
            <div className={styles.formContainer}>
              <form>
                <div className={styles.inputContainer_}>
                  <label>Marital Status</label>
                  <input type="text" value={marital_status} disabled />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Gender</label>
                  <input type="text" value={gender} disabled />
                </div>

                <div className={styles.inputContainer_}>
                  <label>Religion</label>
                  <input type="text" value={religion} disabled />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Birthday</label>
                  <input type="email" value={birthday} disabled />
                </div>
                <div className={styles.inputContainer_}>
                  <label>State_of origin</label>
                  <input type="text" value={state_of_origin} disabled />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Nationality</label>
                  <textarea type="text" value={nationality} disabled />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Local Government</label>
                  <textarea type="text" value={local_govt} disabled />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Address</label>
                  <input type="textarea" value={address} disabled />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Phone Number</label>
                  <input type="textarea" value={phone_no_1} disabled />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Phone Number 2</label>
                  <input type="textarea" value={phone_no_2} disabled />
                </div>
              </form>
              <button
                onClick={submitHandler}
                className={`${styles.btn} ${styles.lilac}`}
              >
                Edit information
              </button>
              <Link to="/student/profile/academyhistory">
                {" "}
                <div className={`${styles.btn} ${styles.purple}`}>
                  Academic History
                </div>
              </Link>
            </div>
          </div>
          {/* <div className={styles.leftBar}>
            <SidebarTwo />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BioData;
