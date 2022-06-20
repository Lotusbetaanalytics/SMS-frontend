import { Alert, AlertIcon } from "@chakra-ui/alert";
import { Center } from "@chakra-ui/layout";
import { CircularProgress } from "@chakra-ui/progress";
import { useToast } from "@chakra-ui/toast";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userForgotPassword } from "../../../redux/action/userAction";
// import { CONFIRMPASSWORD_RESET } from "../../../redux/constants/userContstant";
// import { USER_LOGIN_RESET } from "../../../redux/constants/userContstant";
import styles from "./styles.module.css";

function ConfirmPassword() {
  const toast = useToast();

  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const toast = useToast();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userForgotPassword(email));
  };

  const forgetPassword = useSelector((state) => state.forgetPassword);
  const { userInfo, loading, error, success } = forgetPassword;
  console.log(userInfo);

  // if (success) {
  //   setEmail("");
  //   toast({
  //     title: "Notification",
  //     description: "Success",
  //     status: "success",
  //     duration: 8000,
  //     isClosable: true,
  //   });
  //   dispatch({ type: CONFIRMPASSWORD_RESET });
  // }
  // if (error) {
  //   setEmail("");
  //   toast({
  //     title: "Notification",
  //     description: "Error",
  //     status: "error",
  //     duration: 8000,
  //     isClosable: true,
  //   });
  //   dispatch({ type: CONFIRMPASSWORD_RESET });
  // }

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate("/");
  //   }
  // });

  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.loginPageContent}>
        <div className={styles.loginTitle}>
          <h2> Welcome</h2>
          <p>To the School Management System</p>
        </div>
        <div className={styles.loginForm}>
          {error && (
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          )}
          {success && (
            <Alert status="success">
              <AlertIcon />
              Email Successfully Sent
            </Alert>
          )}
          {loading ? (
            <Center>
              <CircularProgress isIndeterminate color="purple.500" />
            </Center>
          ) : (
            <form onSubmit={submitHandler}>
              <div className={styles.loginContent}>
                <div className={styles.adminTitle}>Confirm Email</div>
                <div className={styles.newForm}>
                  <label>Email</label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required={true}
                  />
                </div>
                <div className={styles.forgotpassword_btn}>
                  <div className={styles.forgotpassword}>
                    <Link to="/">
                      <h5>Back</h5>
                    </Link>
                  </div>

                  <div className={styles.stBtn}>
                    <button
                      type="submit"
                      className={styles.btn}
                      onClick={submitHandler}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ConfirmPassword;
