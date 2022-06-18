import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchWidget from '../../../../components/Input/Search';
import StudentSidebar from '../../../../components/Sidebar';
import { studentDetails } from "../../../../redux/Actions/studentActions/studentAction";
import styles from "../styles.module.css"
const Biodata = () => {
    const navigate = useNavigate();
  const dispatch = useNavigate();
  const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));

  const [marital_status, setMarital_status] = useState("");
  const [gender, setGender] = useState("");
  const [religion, setReligion] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nationality, setNationality] = useState("");
  const [state_of_origin, setState_of_origin] = useState("");
  const [local_govt, setLocal_govt] = useState("");
  const [address, setAddress] = useState("");
  const [phone_no_1, setPhone_no_1] = useState("");
  const [phone_no_2, setPhone_no_2] = useState("");
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
const backHandler = () => {
    navigate("/student/profile/basic")
  }

  const { success: isSuccess, studentDetail } = useSelector(
    (state) => state.details
  );

  React.useEffect(() => {
    // console.log(studentDetail.biodata)
    if (isSuccess && studentDetail) {
      setMarital_status(studentDetail && studentDetail.biodata && studentDetail.biodata.marital_status);
      setGender(studentDetail && studentDetail.biodata && studentDetail.biodata.gender);
      setReligion(studentDetail  && studentDetail.biodata && studentDetail.biodata.religion);
      setBirthday(studentDetail  && studentDetail.biodata && studentDetail.biodata.birthday);
      setNationality(studentDetail  && studentDetail.biodata && studentDetail.biodata.nationality);
      setState_of_origin(studentDetail  && studentDetail.biodata && studentDetail.biodata.state_of_origin);
      setLocal_govt(studentDetail && studentDetail.biodata && studentDetail.biodata.local_govt);
      setAddress(studentDetail && studentDetail.biodata && studentDetail.biodata.address);
      setPhone_no_1(studentDetail  && studentDetail.biodata && studentDetail.biodata.phone_no_1);
      setPhone_no_2(studentDetail  && studentDetail.biodata && studentDetail.biodata.phone_no_2);
    }
  }, [isSuccess]);

  
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
                        <div className={styles.info_title}>State of Origin</div>
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
                    <div>
                    <button className={styles.linear} onClick={backHandler}>Basic Information</button>
                    </div>
                    <div>
                    <button className={styles.brown} onClick={editHandler}>Edit</button>
                    <button className={styles.linear} onClick={nextHandler}>Academy data</button>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Biodata