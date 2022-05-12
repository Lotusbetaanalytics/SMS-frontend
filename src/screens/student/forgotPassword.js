import React, { useState } from "react";
import Circle from "../../components/Circle";
import Input from "../../components/Input";
import styles from "./styles.module.css";
import logo from "../../assets/Rectangle 73girl.png"
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, useToast } from "@chakra-ui/react";
import { forgetpassword } from "../../redux/studentActions/studentAction";

import { FORGET_PASSWORD_RESET } from "../../redux/studentConstants/studentConstants";

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
  }
  
  

  return (
    <div className={styles.pageContainer_}>
      <div className={styles.topCircle_}>
        <Circle />
      </div>
      <div className={styles.center_}>
        <form onSubmit={submitHandler} className={styles.left_}>
        {msg && (
        <Alert status="warning">
          please input your password
        </Alert>
      )}
      {successMsg && (
        <Alert warning="success">
          check email to retrieve password
        </Alert>
      )}
          <div className={styles.input_box_}>
            <div className={styles.title_}>Forgot Password</div>
            <div>Email</div>
            <Input
              type={"text"}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
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

export default ForgotPassword;
