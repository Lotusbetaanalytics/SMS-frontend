import React, { useState } from "react";
import Input from "../../../../components/Input";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, useToast } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { FORGET_PASSWORD_RESET } from "../../../../redux/Constants/auth";
import { forgetpassword } from "../../../../redux/Actions/auth";

const ForgotPassword = () => {
  
  const [email, setEmail] = useState("");
  const [msg,setMsg] = useState("");
  const [successMsg,setSuccessMsg] = useState("")
  const dispatch = useDispatch()
  const toast = useToast();

  const forgetPassword = useSelector((state) => state.forgetPassword);
  const {loading,error,success} = forgetPassword;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email) {
      setMsg(true)
    } else  {
      setMsg(false);
      dispatch(forgetpassword(email))
    }
 };

  if (success) {
    setSuccessMsg(true)
    dispatch({type:FORGET_PASSWORD_RESET})
    
  }
  if (error) {
    toast ({
      title: "Error",
      description: error,
      status: "error",
      duration: 9000,
      isClosable: true,
    })
    dispatch({type:FORGET_PASSWORD_RESET})
  }
  
  

  return (
    <div className={styles.pageContainer}>

        <div className={styles.left_forgot}>
          <div className={styles.homepageContent}>
          <h2 className={styles.welcome}>Welcome to the </h2>
          <h1>Student Management Portal</h1>
          </div>
          <div className={styles.rectangle}>
            
            <div className={styles.rectangle_dark}></div>
            <div className={styles.rectangle_white}></div>
            <div className={styles.rectangle_dark}></div>
          </div>
        </div>
        <div className={styles.centerInputContainer}>
        {msg && (
    <Alert status="warning">
       Please input your email
    </Alert>
  )}
      {successMsg && (
        <Alert warning="success">
          Check your mail to reset your password
        </Alert>
      )}
          <div className={styles.loginMessage}>
            <div className={styles.salutation}>Reset Password </div>  
          </div>
          <Input
          type={"email"}
          placeholder={"Email"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          />
          {loading ? (
              <Button
              isLoading
              loadingText="Validating Credentials..."
              colorScheme="teal"
              variant="outline"
              isFullWidth
              style={{ height: "5rem" }}
            />):(
              <button type="submit" onClick={submitHandler} className={styles.blue_}>
                Submit
              </button>
            )}
          <Link to={"/"} ><div className={styles.forgot} > Remember your Password?</div></Link>
        </div>
        
        <div className={styles.right}></div> 
    </div>
  );
}

export default ForgotPassword;
