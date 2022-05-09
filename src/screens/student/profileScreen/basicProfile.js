import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import EditNavbar from "../../../components/navigation_";
import StudentSidebar from "../../../components/StudentSidebar";
import SidebarTwo from "../../../components/StudentSidebar/sidebar";
import { studentDetails } from "../../../redux/studentActions/studentAction";
import styles from "./styles.module.css";

const BasicProfile = () => {
  // const [firstName, setFirstName] = useState("");
  // const [middleName, setMiddleName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [specialization, setSpecialization] = useState("");
  // const [matric_num, setMatric_num] = useState("");

  const navigate= useNavigate();
  const dispatch = useDispatch()
  const myDetail = JSON.parse(localStorage.getItem("studentDetails"));
  const mystudentDetails = myDetail;
  const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));

 useEffect(() => {
  if (!studentLogin) {
    navigate("/student/login")
  }
}, [studentLogin,navigate,dispatch]);

  useEffect(() => {
    dispatch(studentDetails());
  }, [dispatch]);


  // const details = useSelector((state) => state.details);
  // const {studentDetail} = details;
  // const mystudentDetails = studentDetail;
  

  const first_Name = mystudentDetails && mystudentDetails.first_name;
  const last_Name = mystudentDetails && mystudentDetails.last_name;
  const middle_Name = mystudentDetails && mystudentDetails.middle_name;
  const profile_picture = mystudentDetails && mystudentDetails.profile_picture;
  const email_ =mystudentDetails &&  mystudentDetails.email;
  const specialization_ =mystudentDetails && mystudentDetails.specialization;
  const matricNum = mystudentDetails && mystudentDetails.student[0].matric_no;

  const submitHandler = () => {
    navigate("/student/profile/basicInfoEdit")
  };
  return (
    <div>
      <div>
        <div className={styles.layout}>
          <div className={styles.Sidebar}>
            <StudentSidebar profile={styles.remote} />
          </div>
          <div className={styles.editContainer}>
            <EditNavbar basic={styles.remote} />
            <div className={styles.formContainer}>
              <form >
                <div className={styles.inputContainer_}>
                  <label>First Name</label>
                  <input
                    type="text"
                    value={first_Name}
                    disabled
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Middle Name</label>
                  <input
                    type="text"
                    value={middle_Name}
                    disabled
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Last Name</label>
                  <input
                    type="text"
                    value={last_Name}
                    disabled
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Email</label>
                  <input
                    type="email"
                    value={email_}
                    disabled
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>specialization </label>
                  <input
                    type="text"
                    value={specialization_}
                    disabled
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Matric Number</label>
                  <input
                    type="text"
                    value={matricNum}
                    disabled
                  />
                </div>
              </form>
              <button
                onClick={submitHandler}
                className={`${styles.btn} ${styles.lilac}`}
              >
                Edit information
              </button>
              <Link to="/student/profile/biodata">
                <div className={`${styles.btn} ${styles.purple}`}>
                  Bio Data
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

export default BasicProfile;
