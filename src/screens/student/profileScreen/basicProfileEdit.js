import { Alert, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import EditNavbar from "../../../components/navigation_";
import StudentSidebar from "../../../components/StudentSidebar";

import { editProfile, studentDetails } from "../../../redux/studentActions/studentAction";
import { EDITPROFILE_RESET } from "../../../redux/studentConstants/studentConstants";
// import { EDITPROFILE_REQUEST, EDITPROFILE_RESET, STUDENT_DETAILS_SUCCESS } from "../../../redux/studentConstants/studentConstants";
import styles from "./styles.module.css";

const EditBasicInfo = () => {
  
  const [first_name, setFirst_name] = useState("");
  const [middle_name, setMiddle_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [matric_num, setMatric_num] = useState("");
  const [msg,setMsg] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));

  useEffect(() => {
   if (!studentLogin) {
     navigate("/student/login")
   }
 }, [studentLogin,navigate,dispatch]);

  const details = useSelector((state) => state.details);
  const {studentDetail} = details;

  console.log(studentDetail)
  

  const editProfile_ = useSelector((state) => state.editProfile_);
  const {loading,success} = editProfile_

    
  useEffect(() => {
    if (studentDetail){
    setFirst_name(studentDetail.first_name);
    setMiddle_name(studentDetail.middle_name);
    setLast_name( studentDetail.last_name);
    setSpecialization(studentDetail.specialization);
    setEmail(studentDetail.email)
    setMatric_num(studentDetail.student[0].matric_no)
    }
  }, [studentDetail, dispatch]);

  
  const submitHandler = (e) => {
    e.preventDefault();
    const userdata = {first_name,middle_name,last_name } 
      dispatch(editProfile(userdata))
     
      
  };
  if (success) {
    dispatch(studentDetails())
    setMsg(true)
    dispatch({type:EDITPROFILE_RESET})
 }
 

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
            {msg && (
                <Alert status="success">
                  Profile Updated Successfully
                </Alert>
                )}
              <form>
                <div className={styles.inputContainer_}>
                  <label>First Name</label>
                  <input
                    type="text"
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Middle Name</label>
                  <input
                    type="text"
                    value={middle_name}
                    onChange={(e) => setMiddle_name(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Last Name</label>
                  <input
                    type="text"
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    readOnly
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>specialization </label>
                  <input
                    type="text"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    readOnly
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Matric Number</label>
                  <input
                    type="text"
                    value={matric_num}
                    onChange={(e) => setMatric_num(e.target.value)}
                    readOnly
                  />
                </div>
              </form>
              {loading? (
              <Button
              isLoading
              loadingText="Validating Credentials..."
              colorScheme="teal"
              variant="outline"
              isFullWidth
              style={{ height: "5rem" }}
            />):(
              <button
              onClick={submitHandler}
              className={`${styles.btn} ${styles.lilac}`}
            >
              Save information
            </button>
            )}
              <Link to="/edit/emergencyInfo">
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

export default EditBasicInfo;
