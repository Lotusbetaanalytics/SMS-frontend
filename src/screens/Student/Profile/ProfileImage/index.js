import { Alert, Button, toast, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '../../../../components/Input';
import SearchWidget from '../../../../components/Input/Search';
import StudentSidebar from '../../../../components/Sidebar';
import { editProfile, profilePicture } from '../../../../redux/Actions/ProfileActions/profile';
import { studentDetails } from '../../../../redux/Actions/studentActions/studentAction';
import { EDITPROFILE_RESET } from '../../../../redux/Constants/ProfileConstants/profileConstants';
import styles from "../styles.module.css"

const ProfilePicture = () => {
  const toast = useToast();
    const [profile_image, setProfile_image] = useState("");
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
      const { studentDetail,loading,error,success } = details;
     
    
      const nextHandler = () => {
        navigate("/student/profile/biodata")
    }
        
      useEffect(() => {
        if (success && studentDetail.biodata){
        setProfile_image(studentDetail && studentDetail.biodata.profile_picture)
        }
      }, [success]);

      const displayPicture = useSelector((state) => state.displayPicture);
      const {loading:uploadLoading,success:uploadSuccess,error:uploadError,ProfilePicture} = displayPicture

      const onChangeHandler = (e) => {
        const file = e.target.files[0];
        setProfile_image(file);
      };
    
      
      const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
    formData.append("profile_picture",profile_image); 
          dispatch(profilePicture(formData))   
      };
    //   if (success) {
    //     setMsg(true)
    //     dispatch({type:EDITPROFILE_RESET})
    //  }
     if (error) {
        toast({
          title: "Error",
          description: error,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
      if (uploadSuccess) {
        toast({
          title: "Success",
          description: uploadSuccess,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        dispatch({type:EDITPROFILE_RESET})
     }
     if (uploadError) {
        toast({
          title: "Error",
          description: uploadError,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }

      const jame = [
        
      ]

     
    
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
                    <img src={profile_image} alt="avatar"/>
                  </div>
                  <div className={styles.editContainer}>
                    <div className={styles.editinfo}>
                        <Input
                        type={"file"}
                        name="profile_image"
                         onChange={onChangeHandler}
                        />
                    </div>
                  </div>
                  
                </div>
    
                <div className={styles.btnContainer}>
                {loading? (
                  <Button
                  isLoading
              loadingText="Updating..."
              colorScheme="teal"
              variant="outline"
              style={{ height: "3rem" }}
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
    