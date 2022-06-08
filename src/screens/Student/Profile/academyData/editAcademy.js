import { Alert, Button, toast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../../../components/Input';
import SearchWidget from '../../../../components/Input/Search';
import StudentSidebar from '../../../../components/Sidebar';
import { editProfile } from '../../../../redux/Actions/ProfileActions/profile';
import { studentDetails } from '../../../../redux/Actions/studentActions/studentAction';
import { EDITPROFILE_RESET } from '../../../../redux/Constants/ProfileConstants/profileConstants';
import styles from "../styles.module.css"
const EditAcademyData = () => {

  const [institution, setInstitution] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [qualification_earned, setQualification_earned] = useState("");
  const [msg,setMsg] = useState("")

    const dispatch = useDispatch()  
  const navigate= useNavigate();

  const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));

  useEffect(() => {
   if (!studentLogin) {
     navigate("/student/login")
   }
 }, [studentLogin,navigate,dispatch]);

  useEffect(() => {
    dispatch(studentDetails());
  }, [dispatch]);

  const details = useSelector((state) => state.details);
  const { success, studentDetail } = details;
 
  const editProfile_ = useSelector((state) => state.editProfile_);
  const { success:isSuccess,loading, error } = editProfile_;

  React.useEffect(() => {
    if (success) {
     
      setInstitution(studentDetail && studentDetail.biodata && studentDetail.biodata.academic_history[0] && studentDetail.biodata.academic_history[0].institution);
      setStart_date(studentDetail && studentDetail.biodata && studentDetail.biodata.academic_history[0] && studentDetail.biodata.academic_history[0].start_date);
      setEnd_date(studentDetail && studentDetail.biodata && studentDetail.biodata.academic_history[0] && studentDetail.biodata.academic_history[0].end_date);
      setQualification_earned(studentDetail && studentDetail.biodata && studentDetail.biodata.academic_history[0] && studentDetail.biodata.academic_history[0].qualification_earned);
    }
  }, [success,studentDetail]);

  const submitHandler = (e) => {
    e.preventDefault();

    const userdata = {
      biodata: {
        academic_history: [
          {
            institution:institution,
            start_date:start_date,
            end_date:end_date,
            qualification_earned:qualification_earned
          }
        ]
    }
  }
    dispatch(editProfile(userdata));
  };

  if (isSuccess) {
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
  
 
const nextHandler = () => {
    navigate("/student/profile/health")
}
const backHandler = () => {
  navigate("/student/profile/acadeny")
}
  return (
    <div className='page_container'>
    <StudentSidebar profile={"active"}/>
    <div className='right_container'>
        <SearchWidget/>
        <div className='message_container'>
            {msg && (
                <Alert status="success">
                  Profile Updated Successfully
                </Alert>
                )}
            </div>
        <div className='right_content_container'>
            <div className={styles.profile_bg}>
                <div>
                <div className={styles.header}>
                   <Link to="/student/profile/health" ><div className={styles.header_title}>Academy Information</div></Link>
                    
                </div>
                <div className={styles.editContainer}>
                <div className={styles.editinfo}>
                    <Input
                    label={"Institution"}
                    type="text"
                    value={institution}
                    onChange={(e) => setStart_date(e.target.value)}
                    />
                </div>
                <div className={styles.editinfo}>
                    <Input
                    label={"Start Date"}
                    type="date"
                    value={start_date}
                    onChange={(e) => setStart_date(e.target.value)}
                    />
                </div>
                <div className={styles.editinfo}>
                    <Input
                    label={"End date"}
                    type="date"
                    value={end_date}
                    onChange={(e) => setEnd_date(e.target.value)}
                    />
                </div>
                <div className={styles.editinfo}>
                <label>Qualification Earn</label>
                  <select
                    onChange={(e) => setQualification_earned(e.target.value)}
                    value={qualification_earned}
                  >
                    <option>Select</option>
                    <option value="JSSCE">JSSCE</option>
                    <option value="SSCE">SSCE</option>
                    <option value="Bachelors">Bachelors</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
                </div>
                
                <div className={styles.btnContainer}>
                <div>
                <button className={styles.linear} onClick={backHandler}>Academy data</button>
                </div>
                <div>
                {loading? (
              <Button
              isLoading
              loadingText="Validating Credentials..."
              colorScheme="teal"
              variant="outline"
              isFullWidth
              style={{ height: "5rem" }}
            />):(
                <button className={styles.brown} onClick={submitHandler}>Update</button>
            )}
              <button className={styles.linear} onClick={nextHandler} > Health data </button>
                </div>

              
                </div>
              
            </div>
        </div>
    </div>
    </div>
  )
}

export default EditAcademyData