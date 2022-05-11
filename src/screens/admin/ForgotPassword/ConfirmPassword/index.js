import React, { useState } from "react";
import Circle from "../../../../components/Circle";
import Input from "../../../../components/Input";
import styles from "./styles.module.css";
import confirmpic from "../../../../assets/confirmpic.png";
import { confirmPassword } from "../../../../redux/action/userAction";
import { useDispatch, useSelector } from "react-redux";
import { Button, useToast } from "@chakra-ui/react";
import { CONFIRMPASSWORD_RESET } from "../../../../redux/constants/userConstants";
import { useNavigate } from "react-router";

function ConfirmPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const [password, setPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [msg, setMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const passwordConfirmed = useSelector((state) => state.passwordConfirmed);
  const { loading, success, error } = passwordConfirmed;

  let url = window.location;

  let token = new URLSearchParams(url.search).get("token");
  console.log(token);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmNewPassword) {
      setMsg(true);
    } else {
      setMsg(false);
      dispatch(confirmPassword(password, token));
    }
  };

  if (success) {
    setSuccessMsg(true);
    navigate("/");
    dispatch({ type: CONFIRMPASSWORD_RESET });
  }

  if (error) {
    toast({
      title: "Error",
      description: error,
      status: "error",
      duration: 4000,
      isClosable: true,
    });
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.topCircle}>
        <Circle />
      </div>
      <div className={styles.center}>
        <div className={styles.left}>
          <form onSubmit={submitHandler}>
            <div className={styles.input_box}>
              <div className={styles.title}>Confirm New Password</div>
              <div>New Password</div>
              <Input
                type={"password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required={true}
              />
            </div>
            <div className={styles.input_box}>
              <div>Confirm Password</div>
              <Input
                type={"password"}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                value={confirmNewPassword}
                reqiured={true}
              />
            </div>
            <div className={styles.input_box}>
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
                <button
                  type="submit"
                  className={styles.stBtn}
                  onClick={submitHandler}
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
        <div className={styles.right}>
          <img src={confirmpic} alt="caption" />
        </div>
      </div>
      <div className={styles.downCircle}>
        <Circle />
      </div>
    </div>
  );
}

export default ConfirmPassword;
