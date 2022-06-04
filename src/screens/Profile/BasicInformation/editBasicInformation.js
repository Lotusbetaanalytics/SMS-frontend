import React, { useEffect, useState } from "react";
import Input from "../../../components/Input";
import styles from "../styles.module.css";
import SearchWidget from '../../../components/Input/Search'
import StudentSidebar from '../../../components/Sidebar'
import { Alert, Button, Link, toast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { studentDetails } from "../../../redux/Actions/studentActions/studentAction";
import { useNavigate } from "react-router-dom";
import { editProfile } from "../../../redux/Actions/ProfileActions/profile";
import { STUDENT_DETAILS_REQUEST } from "../../../redux/Constants/studentConstants/studentConstants";
import { EDITPROFILE_RESET } from "../../../redux/Constants/ProfileConstants/profileConstants";

const EditBasicInformation = () => {

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

 useEffect(() => {
    dispatch(studentDetails())
  }, [dispatch]);

  const details = useSelector((state) => state.details);
  const { studentDetail } = details;
 
  const editProfile_ = useSelector((state) => state.editProfile_);
  const {loading,success,error} = editProfile_

  const nextHandler = () => {
    navigate("/student/profile/biodata")
}
    
  useEffect(() => {
    if (studentDetail){
    setFirst_name(studentDetail && studentDetail.first_name);
    setMiddle_name(studentDetail && studentDetail.middle_name);
    setLast_name( studentDetail && studentDetail.last_name);
    setSpecialization(studentDetail && studentDetail.specialization);
    setEmail(studentDetail && studentDetail.email)
    setMatric_num(studentDetail && studentDetail.student[0] && studentDetail.student[0].matric_no)
    }
  }, [studentDetail,dispatch]);

  
  const submitHandler = (e) => {
    e.preventDefault();
    const userdata = {first_name,middle_name,last_name } 
      dispatch(editProfile(userdata))   
  };
  if (success) {
    setMsg(true)
    dispatch({type:EDITPROFILE_RESET})
 }
 if (error) {
    toast({
      title: "Error",
      description: error,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  }
 

  return (
    <div className="page_container">
      <StudentSidebar profile={"active"} />
      <div className="right_container">
        <SearchWidget />
        <div className='message_container'>
            {msg && (
                <Alert status="success">
                  Profile Updated Successfully
                </Alert>
                )}
            </div>
        <div className="right_content_container">
          <div className={styles.profile_bg}>
            <div>
              <div className={styles.header}>
                <div className={styles.header_title}>Profile Information</div>
              </div>
              <div className={styles.editContainer}>
                <div className={styles.editinfo}>
                    <Input
                    label={"First Name"}
                     type={"text"}
                     value={first_name}
                     onChange={(e) => setFirst_name(e.target.value)}
                    />
                </div>
                <div className={styles.editinfo}>
                    <Input
                    label={"Middle Name"}
                     type="text"
                     value={middle_name}
                     onChange={(e) => setMiddle_name(e.target.value)}
                    />
                </div>
                <div className={styles.editinfo}>
                    <Input
                    type="text"
                    label={"Last Name"}
                    disabled
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                    />
                </div>
                <div className={styles.editinfo}>
                    <Input
                    label={"Email"}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled
                    />
                </div>
                <div className={styles.editinfo}>
                    <Input
                    label={"Specialization"}
                    type="text"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    readOnly/>
                </div>
                <div className={styles.editinfo}>
                    <Input
                    label={"Matric Number"}
                    type="text"
                    value={matric_num}
                    onChange={(e) => setMatric_num(e.target.value)}
                    readOnly/>
                </div>
              </div>
              
            </div>

            <div className={styles.btnContainer}>
            {loading? (
              <Button
              isLoading
              loadingText="Validating Credentials..."
              colorScheme="teal"
              variant="outline"
              isFullWidth
              style={{ height: "5rem" }}
            />):(
                <button className={styles.brown} onClick={submitHandler}>upload</button>
            )}
              <button className={styles.linear} onClick={nextHandler} > biodata </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBasicInformation;
