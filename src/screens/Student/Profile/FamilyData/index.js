import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchWidget from '../../../../components/Input/Search';
import StudentSidebar from '../../../../components/Sidebar';
import { studentDetails } from "../../../../redux/Actions/studentActions/studentAction";
import styles from "../styles.module.css";
const FamilyData = () => {
    const [next_of_kin_full_name, setNext_of_kin_full_name] = useState("");
  const [next_of_kin_phone_no_1, setNext_of_kin_phone_no_1] = useState("");
  const [next_of_kin_phone_no_2, setNext_of_kin_phone_no_2] = useState("");
  const [next_of_kin_address, setNext_of_kin_address] = useState("");
  const [guardian_full_name, setGuardian_full_name] = useState("");
  const [guardian_phone_no_1, setGuardian_phone_no_1] = useState("");
  const [guardian_phone_no_2, setGuardian_phone_no_2] = useState("");
  const [guardian_address, setGuardian_address] = useState("");
    
    const dispatch = useDispatch();
  const navigate = useNavigate();

  const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));
 useEffect(() => {
  if (!studentLogin) {
    navigate("/student/login")
  }
}, [studentLogin,navigate,dispatch]);

useEffect(() => {
    dispatch(studentDetails());
  }, []);

  const details = useSelector((state) => state.details);
  const { success, studentDetail } = details;

  React.useEffect(() => {
    if (success) {
  setNext_of_kin_full_name(studentDetail && studentDetail.biodata && studentDetail.biodata.next_of_kin_full_name) ;
  setNext_of_kin_phone_no_1(studentDetail && studentDetail.biodata &&studentDetail.biodata.next_of_kin_phone_no_1);
  setNext_of_kin_phone_no_2(studentDetail && studentDetail.biodata && studentDetail.biodata.next_of_kin_phone_no_2);
  setNext_of_kin_address(studentDetail && studentDetail.biodata && studentDetail.biodata.next_of_kin_address);
  setGuardian_full_name(studentDetail && studentDetail.biodata && studentDetail.biodata.guardian_full_name);
  setGuardian_phone_no_1(studentDetail && studentDetail.biodata &&studentDetail.biodata.guardian_phone_no_1);
  setGuardian_phone_no_2(studentDetail && studentDetail.biodata &&studentDetail.biodata.guardian_phone_no_2);
  setGuardian_address(studentDetail && studentDetail.biodata &&studentDetail.biodata.guardian_address);
}}, [success,studentDetail]);
  const nextHandler = () => {
    navigate("/student/profile/basic")
  };
  const editHandler = () => {
    navigate("/student/profile/family/edit")
  };
  return (
    <div className='page_container'>
    <StudentSidebar profile={"active"}/>
    <div className='right_container'>
        <SearchWidget/>
        <div className='right_content_container'>
            <div className={styles.profile_bg}>
                <div>
                <div className={styles.header}>
                    <div className={styles.header_title}>Family Information</div>
                    
                </div>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Next of kin Full Name</div>
                        <div className={styles.info_body}>{next_of_kin_full_name}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Next of kin Phone Number 1</div>
                        <div className={styles.info_body}>{next_of_kin_phone_no_1}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Next of Kin Phone Number 2</div>
                        <div className={styles.info_body}>{next_of_kin_phone_no_2}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Next of Kin Address</div>
                        <div className={styles.info_body}>{next_of_kin_address}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Guardian Full Name</div>
                        <div className={styles.info_body}>{guardian_full_name}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Guardian Phone Number</div>
                        <div className={styles.info_body}>{guardian_phone_no_1}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Guardian Phone Number 2</div>
                        <div className={styles.info_body}>{guardian_phone_no_2}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Guardian Address</div>
                        <div className={styles.info_body}>{guardian_address}</div>
                    </div>
                    
                </div>
                </div>
                
                <div className={styles.btnContainer}>
                    <button className={styles.brown} onClick={editHandler}>Edit</button>
                    <button className={styles.linear} onClick={nextHandler}>Basic information</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default FamilyData