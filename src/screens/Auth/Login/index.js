import React, { useEffect, useState } from "react";
import Input from "../../../components/Input";
import styles from "./styles.module.css";
import {Alert, useToast, Button} from  "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginStudent } from "../../../redux/Actions/auth";
import { studentDetails } from "../../../redux/Actions/studentActions/studentAction";



function StudentLogin() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg,setMsg] = useState("");
  const[successMsg] = useState("")

  const studentLogin = useSelector((state) => state.studentLogin);
  const {loading, error,userInfo} = studentLogin

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMsg(true)
    } else {
      setMsg(false);
      dispatch(LoginStudent(email,password))
      
    }
  };
  if (error) {
    toast ({
      title: "Error",
      description: error,
      status: "error",
      duration: 9000,
      isClosable: true,
    })
  }
 
  
  
  useEffect(()=>{
    if (userInfo){
      dispatch(studentDetails())
      navigate("/student/dashboard")
    }
  },[userInfo,navigate,dispatch])
  return (
    <div className={styles.pageContainer}>

        <div className={styles.left}>
          <div className={styles.homepageContent}>
          <h2 className={styles.welcome}>Welcome to the </h2>
          <h1>Student Management Portal</h1>
          </div>
          <div className={styles.rectangle}>
            <div className={styles.rectangle_white}></div>
            <div className={styles.rectangle_dark}></div>
            <div className={styles.rectangle_dark}></div>
          </div>
        </div>
        <div className={styles.centerInputContainer}>
        {msg && (
        <Alert status="warning">
           Password not the same as confirm password
        </Alert>
      )}
      {successMsg && (
        <Alert warning="success">
          Password changed successfully
        </Alert>
      )}
          <div className={styles.loginMessage}>
            <div className={styles.salutation}>Hello There ! | </div>
            <div className={styles.salutation2}>it's Nice seeing you</div>
          </div>
          <form onSubmit={submitHandler}>
          <Input
          type={"email"}
          placeholder={"Email"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          />
          <Input
          type={"password"}
          placeholder={"Password"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
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
                Login
              </button>
            )}
          </form>
         
          <Link to={"/student/forgotpassword"} ><div className={styles.forgot} > Forgot Password?</div></Link>
        </div>
        
        <div className={styles.right}></div> 
    </div>
  );
}

export default StudentLogin;
