import styles from "../styles.module.css"
import React, { useEffect } from 'react'

import { Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import StudentSidebar from "../../../../components/Sidebar";
import SearchWidget from "../../../../components/Input/Search";
import { studentDetails } from "../../../../redux/Actions/studentActions/studentAction";

const BasicProfile = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(studentDetails());
      }, [dispatch]);

      const myDetail = JSON.parse(localStorage.getItem("studentDetails"));
    const mystudentDetails = myDetail;
      const first_Name = mystudentDetails && mystudentDetails.first_name;
      const last_Name = mystudentDetails && mystudentDetails.last_name;
      const middle_Name = mystudentDetails && mystudentDetails.middle_name;
      const email_ =mystudentDetails &&  mystudentDetails.email;
      const specialization_ =mystudentDetails && mystudentDetails.specialization.name;
      const matricNum = mystudentDetails && mystudentDetails.student[0].matric_no;

    const navigate = useNavigate();

    const editHandler = () => {
        navigate("/student/profile/basic/edit")
    }
    const nextHandler = () => {
        navigate("/student/profile/biodata")
    }
  return (
    <div className='page_container'>
    <StudentSidebar profile={"active"}/>
    <div className='right_container'>
        <SearchWidget/>
        <div className='right_content_container'>
            <div className={styles.profile_bg}>
                <div>
                <div className={styles.header}>
                    <div className={styles.header_title}>Basic Information</div>
                    
                </div>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <div className={styles.info_title}>First Name</div>
                        <div className={styles.info_body}>{first_Name}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Middle Name</div>
                        <div className={styles.info_body}>{middle_Name}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Last Name</div>
                        <div className={styles.info_body}>{last_Name}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Email</div>
                        <div className={styles.info_body}>{email_}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Specialization</div>
                        <div className={styles.info_body}>{specialization_}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Matric Number</div>
                        <div className={styles.info_body}>{matricNum}</div>
                    </div>
                    
                </div>
                </div>
                
                <div className={styles.btnContainer}>
                    <div></div>
                    <button className={styles.linear} onClick={nextHandler}>Bio data</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default BasicProfile