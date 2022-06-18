import React, { useEffect, useState } from "react";
import Input from "../../../../components/Input";
import styles from "./styles.module.css";
import {Alert, useToast, Button} from  "@chakra-ui/react";
// import "slick-carousel/slick/slick.css";
import BackgroundSlider from 'react-background-slider'
// import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginStudent } from "../../../../redux/Actions/auth";
import { studentDetails } from "../../../../redux/Actions/studentActions/studentAction";
import { STUDENT_LOGIN_RESET } from "../../../../redux/Constants/auth";
import slider1 from "../../../../assets/legs.jpg";
import slider2 from  "../../../../assets/graduates.jpg";
import slider3 from "../../../../assets/smiling-african-student-pointing-with-pencil-laptop-screen-concentrated-blonde-woman-glasses-propping-chin-with-hand-while-working-with-computer-office.jpg";

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
    dispatch({type:STUDENT_LOGIN_RESET})
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
        <BackgroundSlider
  images={[slider1,slider2,slider3]}
  duration={15} transition={4} />


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
