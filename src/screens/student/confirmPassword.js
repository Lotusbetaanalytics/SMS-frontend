import React, { useState } from "react";
import Button from "../../components/Button";
import Circle from "../../components/Circle";
import Input from "../../components/Input";
import styles from "./styles.module.css";
import logo from "../../assets/Rectangle 73girl.png"
import { Alert, useToast } from "@chakra-ui/react";
import { Confirmpassword } from "../../redux/studentActions/studentAction";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CONFIRM_PASSWORD_RESET } from "../../redux/studentConstants/studentConstants";

function ConfirmPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const [password, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMsg,setSuccessMsg] = useState(false);
  const [msg,setMsg] = useState(false)

  const confirmpassword = useSelector((state) => state.confirmpassword);
  const {loading, error,success} = confirmpassword;

  let url = window.location;

  let token = new URLSearchParams(url.search).get('token');
  console.log(token)


  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMsg(true)
    } else  {
      setMsg(false);
      dispatch(Confirmpassword(password,token))
    }
  }

  if (success) {
    setSuccessMsg(true)
    dispatch({type: CONFIRM_PASSWORD_RESET})
    navigate("/student/login");
  }

  if (error) {
    toast ({
      title: "Error",
      description: error,
      status: "error",
      duration: 9000,
      isClosable: true,
    })
  }
  

  return (
    <div className={styles.pageContainer}>

    <div className={styles.left}>
      <div className={styles.homepageContent}>
      <h2 className={styles.welcome}>Welcome to the </h2>
      <h1>Student Management Portal</h1>
      </div>
      <div className={styles.rectangle}>
        
        <div className={styles.rectangle_dark}></div>
        <div className={styles.rectangle_dark}></div>
        <div className={styles.rectangle_white}></div>
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
        <div className={styles.salutation}>Reset Password</div>
        
      </div>
      <Input
      type={"password"}
      placeholder={"Input New Password"}
      onChange={(e) => setNewPassword(e.target.value)}
      value={password}
      />
      <Input
      type={"password"}
      placeholder={"Confirm Password"}
      onChange={(e) => setConfirmPassword(e.target.value)}
      value={confirmPassword}
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
    </div>
    
    <div className={styles.right}></div> 
</div>
  );
}

export default ConfirmPassword;
