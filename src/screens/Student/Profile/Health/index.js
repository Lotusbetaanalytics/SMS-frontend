import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchWidget from '../../../../components/Input/Search';
import StudentSidebar from '../../../../components/Sidebar';
import { studentDetails } from "../../../../redux/Actions/studentActions/studentAction";
import styles from "../styles.module.css"

const HealthData = () => {

  const [blood_group, setBlood_group] = useState("");
  const [genotype, setGenotype] = useState("");
  const [allergies, setAllergies] = useState("");
  const [diabetes, setDiabetes] = useState("");
  const [STIs, setSTIs] = useState("");
  const [heart_disease, setHeart_disease] = useState("");
  const [disabilities, setDisabilities] = useState("");
  const [respiratory_problems, setRespiratory_problems] = useState("");

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
    
  useEffect(() => {
    if  (success) {
        setBlood_group(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.blood_group );
        setGenotype(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.genotype);
        setAllergies(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.allergies);
       setDiabetes(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.diabetes);
       setSTIs(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.STIs);
       setHeart_disease(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.heart_disease);
       setDisabilities(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.disabilities);
       setRespiratory_problems(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.respiratory_problems);
}
}, [success,studentDetail]);
    const editHandler = () =>{
        navigate("/student/profile/health/edit")
      }
      const nextHandler = () =>{
        navigate("/student/profile/family")
      }
      
      const backHandler = () =>{
        navigate("/student/profile/academy")
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
                    <div className={styles.header_title}>Health Information</div>
                    
                </div>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Blood Group</div>
                        <div className={styles.info_body}>{blood_group}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Genotype</div>
                        <div className={styles.info_body}>{genotype}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Allergies</div>
                        <div className={styles.info_body}>{allergies}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Diabetes</div>
                        <div className={styles.info_body}>{diabetes}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>STIs</div>
                        <div className={styles.info_body}>{STIs}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Heart Disease</div>
                        <div className={styles.info_body}>{heart_disease}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Disabilities</div>
                        <div className={styles.info_body}>{disabilities}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Respiratory Problems</div>
                        <div className={styles.info_body}>{respiratory_problems}</div>
                    </div>
                    
                </div>
                </div>
                
                <div className={styles.btnContainer}>
                <div>
                    <button className={styles.linear} onClick={backHandler}>Academic history</button>
                    </div>
                    <div>
                    <button className={styles.brown} onClick={editHandler}>Edit</button>
                    <button className={styles.linear} onClick={nextHandler}>Family data</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HealthData