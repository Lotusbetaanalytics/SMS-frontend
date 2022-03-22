import React, { useState } from "react";
import {
  Alert,
  AlertIcon,
  Center,
  CircularProgress,
  Input,
} from "@chakra-ui/react";
import styles from "./styles.module.css";
import Circle from "../../../components/Circle";
import forgetpic from "../../../assets/forgetpic.png";
import { useDispatch, useSelector } from "react-redux";
import { userForgotPassword } from "../../../redux/action/userAction";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userForgotPassword(email));
  };

  const userforgetPassword = useSelector((state) => state.userforgetPassword);
  const { loading, error, success } = userforgetPassword;

  if (success) {
    setTimeout(() => navigate("/staff/confirmpassword"), [3000]);
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.topCircle}>
        <Circle />
      </div>
      <div className={styles.center}>
        <div className={styles.left}>
          {error && (
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          )}
          {success && (
            <Alert status="success">
              <AlertIcon />
              Check your Email to Verify
            </Alert>
          )}
          {loading ? (
            <Center>
              <CircularProgress isIndeterminate color="purple.500" />
            </Center>
          ) : (
            <form onSubmit={submitHandler}>
              <div className={styles.input_box}>
                <div className={styles.title}>Forgot Password</div>
                <div>Email</div>
                <Input
                  type={"text"}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required={true}
                />
              </div>
              <div className={styles.input_box}>
                <button
                  type={"submit"}
                  className={styles.stBtn}
                  onClick={submitHandler}
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
        <div className={styles.right}>
          <img src={forgetpic} alt="caption" />
        </div>
      </div>
      <div className={styles.downCircle}>
        <Circle />
      </div>
    </div>
  );
}

export default ForgotPassword;
