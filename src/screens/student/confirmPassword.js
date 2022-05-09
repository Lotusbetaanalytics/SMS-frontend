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
    if (error) {
      toast ({
        title: "Error",
        description: error,
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    }
    if (success) {
      setSuccessMsg(true)
      dispatch({type: CONFIRM_PASSWORD_RESET})
      setTimeout(() => navigate("/student/login"), [2000]);
    }
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
           Password not the same as confirm password
        </Alert>
      )}
      {successMsg && (
        <Alert warning="success">
          Password changed successfully
        </Alert>
      )}
          <div className={styles.input_box_}>
            <div className={styles.title_}>Change Password</div>
            <div>New Password</div>
            <Input
              type={"password"}
              onChange={(e) => setNewPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className={styles.input_box_}>
            <div>Confirm Password</div>
            <Input
              type={"password"}
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>
          <div className={styles.input_box_}>
          {loading ? (
              <Button
              isLoading
              loadingText="Validating Credentials..."
              colorScheme="teal"
              variant="outline"
              isFullWidth
              style={{ height: "5rem" }}
            />):(
              <button type="submit" className={styles.blue_}>
                Submit
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

export default ConfirmPassword;
