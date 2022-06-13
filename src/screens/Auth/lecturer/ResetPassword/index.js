import { Alert, Button, toast } from "@chakra-ui/react";
import React, { useState } from "react";
import Input from "../../../../components/Input";
import styles from "../styles.module.css";
import girl from "../../../../assets/Ellipse 44bc.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { lecturerConfirmpasswordAction } from "../../../../redux/Actions/auth";
import { CONFIRM_PASSWORD_RESET, LECTURER_CONFIRM_PASSWORD_RESET } from "../../../../redux/Constants/auth";
const LecturerResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [msg, setMsg] = useState(false);
  const lecturerConfirmpassword = useSelector(
    (state) => state.lecturerConfirmpassword
  );
  const { loading, error, success } = lecturerConfirmpassword;

  let url = window.location;

  let token = new URLSearchParams(url.search).get("token");

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMsg(true);
    } else {
      setMsg(false);
      dispatch(lecturerConfirmpasswordAction(password, token));
    }
  };

  if (success) {
    setSuccessMsg(true);
    dispatch({ type: CONFIRM_PASSWORD_RESET });
    navigate("/");
  }

  if (error) {
    toast({
      title: "Error",
      description: error,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    dispatch({type:LECTURER_CONFIRM_PASSWORD_RESET})
  }

  return (
    <div className={styles.page_Container}>
      <div className={styles.left}>
        <div>
          {msg && (
            <Alert status="warning">
              Password not the same as confirm password
            </Alert>
          )}
          {successMsg && (
            <Alert warning="success">Password changed successfully</Alert>
          )}
        </div>
        <div className={styles.header}>
          <h1>Welcome Back !</h1>
          <p>Its nice seeing you</p>
        </div>

        <div className={styles.center_div}>
          <form onSubmit={submitHandler}>
            <Input
              type={"password"}
              placeholder={"New Password"}
              onChange={(e) => setPassword(e.target.value)}
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
              />
            ) : (
              <button type="submit" className={styles.blue_}>
                Login
              </button>
            )}
          </form>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.imageContainer}>
          <img src={girl} alt="girl" />
        </div>
      </div>
    </div>
  );
};

export default LecturerResetPassword;
