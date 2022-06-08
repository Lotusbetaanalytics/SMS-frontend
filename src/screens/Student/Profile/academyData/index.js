import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchWidget from '../../../../components/Input/Search';
import StudentSidebar from '../../../../components/Sidebar';
import { studentDetails } from "../../../../redux/Actions/studentActions/studentAction";
import styles from "../styles.module.css"
const AcademyData = () => {
    const dispatch = useDispatch()  
  const navigate= useNavigate();

  const [institution, setInstitution] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [qualification_earned, setQualification_earned] = useState("");

  useEffect(() => {
    dispatch(studentDetails());
  }, [dispatch]);

  const details = useSelector((state) => state.details);
  const { success, studentDetail } = details;
  
  React.useEffect(() => {
    if (success) {
     
      setInstitution(studentDetail && studentDetail.biodata && studentDetail.biodata.academic_history[0] && studentDetail.biodata.academic_history[0].institution);
      setStart_date(studentDetail && studentDetail.biodata && studentDetail.biodata.academic_history[0] && studentDetail.biodata.academic_history[0].start_date);
      setEnd_date(studentDetail && studentDetail.biodata && studentDetail.biodata.academic_history[0] && studentDetail.biodata.academic_history[0].end_date);
      setQualification_earned(studentDetail && studentDetail.biodata && studentDetail.biodata.academic_history[0] && studentDetail.biodata.academic_history[0].qualification_earned);
    }
  }, [success,studentDetail]);


  
  const editHandler = () => {
    navigate("/student/profile/academy/edit")
}
const nextHandler = () => {
    navigate("/student/profile/health")
}
const backHandler = () => {
  navigate("/student/profile/biodata")
}
  return (
    <div className='page_container'>
    <StudentSidebar profile={"active"} />
    <div className='right_container'>
        <SearchWidget/>
        <div className='right_content_container'>
            <div className={styles.profile_bg}>
                <div>
                <div className={styles.header}>
                    <div className={styles.header_title}>Academy Information</div>
                    
                </div>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Institution</div>
                        <div className={styles.info_body}>{institution}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Start Date</div>
                        <div className={styles.info_body}>{start_date}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>End Date</div>
                        <div className={styles.info_body}>{end_date}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Qualification_earned</div>
                        <div className={styles.info_body}>{qualification_earned}</div>
                    </div>
                    
                    
                </div>
                </div>
                
                <div className={styles.btnContainer}>
                    <div>
                    <button className={styles.linear} onClick={backHandler}>Biodata data</button>
                    </div>
                  <div>
                  <button className={styles.brown} onClick={editHandler}>Edit</button>
                    <button className={styles.linear} onClick={nextHandler}>Health data</button>
                  </div>  
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AcademyData