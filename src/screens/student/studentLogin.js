import React, { useEffect, useState } from "react";
import Circle from "../../components/Circle";
import Input from "../../components/Input";
import styles from "./styles.module.css";
import logo from "../../assets/Rectangle 73girl.png"
import {Alert, useToast, Button} from  "@chakra-ui/react";
import { STUDENT_LOGIN_RESET } from "../../redux/studentConstants/studentConstants";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginStudent, studentDetails } from "../../redux/studentActions/studentAction";

function StudentLogin() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg,setMsg] = useState("");
  const[successMsg,setSuccessMsg] = useState("")

  const studentLogin = useSelector((state) => state.studentLogin);
  const {loading, error,success,userInfo} = studentLogin

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMsg(true)
    } else {
      setMsg(false);
      dispatch(LoginStudent(email,password))
      dispatch(studentDetails())
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
    dispatch({type:STUDENT_LOGIN_RESET});
  }
 
  
  useEffect(()=>{
    if (userInfo){
      navigate("/student/dashboard")
    }
  },[userInfo,navigate])
  return (
    <div className={styles.pageContainer_}>
      <div className={styles.topCircle_}>
        <Circle />
      </div>
      <div className={styles.center_}>    
        <form onSubmit={submitHandler} className={styles.left_}>
        {msg && (
        <Alert status="warning">
          All field are Required
        </Alert>
      )}
      {successMsg && (
        <Alert warning="success">
          Login Successfully
        </Alert>
      )}
          <div className={styles.input_box_}>
            <div className={styles.title_}>Student Login</div>
            <div>Email</div>
            <Input
              type={"text"}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className={styles.input_box_}>
            <div>Password</div>
            <Input
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className={styles.forgot_}><Link to="/student/forgotpassword">forgot password?</Link></div>
          </div>
          <div className={styles.input_box_}>
            {loading? (
              <Button
              isLoading
              loadingText="Validating Credentials..."
              colorScheme="teal"
              variant="outline"
              isFullWidth
              style={{ height: "5rem" }}
            />):(
              <button type="submit" className={styles.blue_}>
                login
              </button>
            )}
            
          </div>
        </form>
        <div className={styles.right_}>
          <img src={logo} alt="caption"/>
        </div>
      </div>
      <div className={styles.downCircle_}>
        <Circle />
      </div>
    </div>
  );
}

export default StudentLogin;
