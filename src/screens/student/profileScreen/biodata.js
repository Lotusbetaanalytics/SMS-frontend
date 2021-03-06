import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EditNavbar from "../../../components/navigation_";
import StudentSidebar from "../../../components/StudentSidebar";
import SidebarTwo from "../../../components/StudentSidebar/sidebar";

import styles from "./styles.module.css";

const BioData = () => {
  // const [marital_status,setMarital_status] = useState("")
  // const [gender,setGender] = useState("")
  // const [religion,setReligion] = useState("")
  // const [birthday,setBirthday] = useState("")
  // const [nationality,setNationality] = useState("")
  // const [state_of_origin,setState_of_origin] = useState("")
  // const [local_govt,setLocal_govt] = useState("")
  // const [address,setAddress] = useState("")
  // const [phone_no_1,setPhone_no_1] = useState("")
  // const [phone_no_2,setPhone_no_2] = useState("")
  const navigate = useNavigate();
  const myDetail = JSON.parse(localStorage.getItem("studentDetails"));
  const mystudentDetails = myDetail;
  console.log(mystudentDetails.marital_status);

  const marital_status = mystudentDetails.biodata.marital_status;
  const gender = mystudentDetails.biodata.gender;
  const religion = mystudentDetails.biodata.religion;
  const birthday = mystudentDetails.biodata.birthday;
  const nationality = mystudentDetails.biodata.nationality;
  const state_of_origin = mystudentDetails.biodata.state_of_origin;
  const local_govt = mystudentDetails.biodata.local_govt;
  const address = mystudentDetails.biodata.address;
  const phone_no_1 = mystudentDetails.biodata.phone_no_1;
  const phone_no_2 = mystudentDetails.biodata.phone_no_2;
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
              <form onSubmit={submitHandler}>
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
              </button>{" "}
              <Link to="/student/profile/academyhistory">
                {" "}
                <div className={`${styles.btn} ${styles.purple}`}>
                  Academic History
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.leftBar}>
            <SidebarTwo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioData;
