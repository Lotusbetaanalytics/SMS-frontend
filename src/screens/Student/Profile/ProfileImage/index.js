import { Alert, Button, toast, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '../../../../components/Input';
import SearchWidget from '../../../../components/Input/Search';
import StudentSidebar from '../../../../components/Sidebar';
import { editProfile } from '../../../../redux/Actions/ProfileActions/profile';
import { studentDetails } from '../../../../redux/Actions/studentActions/studentAction';
import { EDITPROFILE_RESET } from '../../../../redux/Constants/ProfileConstants/profileConstants';
import styles from "../styles.module.css"

const ProfilePicture = () => {

    const [profile_picture, setProfile_picture] = useState("");
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
        setProfile_picture(studentDetail && studentDetail.profile_picture)
        }
      }, [studentDetail,dispatch]);
    
      
      const submitHandler = (e) => {
        e.preventDefault();
        const userdata = {profile_picture } 
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
                    <div className={styles.header_title}>Profile picture</div>
                    <div className={styles.header_profile}>Profile Information</div>
                    <div >kjkhhjhjhkkl</div>
                  </div>
                  <div className={styles.editContainer}>
                    <div className={styles.editinfo}>
                        <Input
                        
                         type={"file"}
                         value={profile_picture}
                         onChange={(e) => setProfile_picture(e.target.file)}
                        />
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
    
    export default ProfilePicture;
    