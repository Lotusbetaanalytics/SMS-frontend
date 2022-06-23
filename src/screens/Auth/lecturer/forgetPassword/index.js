import { Alert, Button, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import Input from '../../../../components/Input'
import styles from "../styles.module.css"
import girl from "../../../../assets/Ellipse 44bc.png"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { lecturerForgetpasswordAction } from '../../../../redux/Actions/auth'
import {  LECTURER_FORGET_PASSWORD_RESET } from '../../../../redux/Constants/auth'
const LecturerForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [msg,setMsg] = useState("");
    const [successMsg,setSuccessMsg] = useState("")
  const dispatch = useDispatch()
  const toast = useToast();

  const lecturerForgetPassword = useSelector((state) => state.lecturerForgetPassword);
  const {loading,error,success} = lecturerForgetPassword;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email) {
      setMsg(true)
    } else  {
      setMsg(false);
      dispatch(lecturerForgetpasswordAction(email))
    }
 };

  if (success) {
    setSuccessMsg(true)
    dispatch({type:LECTURER_FORGET_PASSWORD_RESET})
    
  }
  if (error) {
    toast ({
      title: "Error",
      description: error,
      status: "error",
      duration: 9000,
      isClosable: true,
    })
    dispatch({type:LECTURER_FORGET_PASSWORD_RESET})
  }
  
  
  return (
    <div className={styles.page_Container}>
        <div className={styles.left}>
            <div className={styles.header}>
            <h1>Reset Password</h1>
            <h5>Let's help you recover you password</h5>
            </div>
           
            <div className={styles.center_div}> 
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
            <form  onSubmit={submitHandler} >
          <input
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
              <button type="submit"  className={styles.blue_}>
                Submit
              </button>
            )}
          </form>
          <Link to="/lecturer/login"><p>Remember password ?</p></Link>
            </div>
        </div>
        <div className={styles.right}>

            <div className={styles.imageContainer}><img src={girl} alt="girl" /></div>
        </div>
    </div>
  )
}

export default LecturerForgetPassword