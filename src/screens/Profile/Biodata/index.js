import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchWidget from '../../../components/Input/Search';
import StudentSidebar from '../../../components/Sidebar';
import { studentDetails } from '../../../redux/Actions/studentActions/studentAction';
import styles from "../styles.module.css"
const Biodata = () => {
    const navigate = useNavigate();
  const dispatch = useNavigate();
  const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));

 useEffect(() => {
  if (!studentLogin) {
    navigate("/")
  }
}, [studentLogin,navigate,dispatch]);

useEffect(() => {
    dispatch(studentDetails())
  }, [dispatch]);
  const editHandler = () => {
    navigate("/student/profile/biodata/edit")
}
const nextHandler = () => {
    navigate("/student/profile/academy")
}

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

  
  return (
    <div className='page_container'>
    <StudentSidebar profile={"active"}/>
    <div className='right_container'>
        <SearchWidget/>
        <div className='right_content_container'>
            <div className={styles.profile_bg}>
                <div>
                <div className={styles.header}>
                    <div className={styles.header_title}>Biodata Information</div>
                    
                </div>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Marital Status</div>
                        <div className={styles.info_body}>{marital_status}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Gender</div>
                        <div className={styles.info_body}>{gender}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Religion</div>
                        <div className={styles.info_body}>{religion}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Birthday</div>
                        <div className={styles.info_body}>{birthday}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Nationality</div>
                        <div className={styles.info_body}>{nationality}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>State of origin</div>
                        <div className={styles.info_body}>{state_of_origin}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Local Address</div>
                        <div className={styles.info_body}>{local_govt}</div>
                    </div>
                    <div className={styles.info}>
                        
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Phone Number 1</div>
                        <div className={styles.info_body}>{phone_no_1}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Phone Number 2</div>
                        <div className={styles.info_body}>{phone_no_2}</div>
                    </div>
                    <div className={styles.info}>
                        
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Address</div>
                        <div className={styles.info_body}>{address}</div>
                    </div>
                </div>
                </div>
                
                <div className={styles.btnContainer}>
                  <button className={styles.brown} onClick={editHandler}>edit</button>
                    <button className={styles.linear} onClick={nextHandler}>academy data</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Biodata