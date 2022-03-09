import React, { useEffect, useState } from "react";
// import Button from "../../../components/Button";
import Circle from "../../../components/Circle";
import Input from "../../../components/Input";
import styles from "./styles.module.css";
import logo from "../../../assets/logo1.png";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/action/userAction";
import { useNavigate } from "react-router-dom";
import { Alert, AlertIcon, Center, CircularProgress } from "@chakra-ui/react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  console.log(userInfo);

  useEffect(() => {
    if (userInfo) {
      navigate("/admin/dashboard");
    }
  });

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
          {msg && (
            <Alert status="success">
              <AlertIcon />
              login Successfully
            </Alert>
          )}
          {loading ? (
            <Center>
              <CircularProgress isIndeterminate color="purple.500" />
            </Center>
          ) : (
            <form onSubmit={submitHandler}>
              <div className={styles.input_box}>
                <div className={styles.title}>Login</div>
                <div>Username</div>
                <Input
                  type={"text"}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required={true}
                />
              </div>
              <div className={styles.input_box}>
                <div>Password</div>
                <Input
                  type={"password"}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  reqiured={true}
                />
                <div className={styles.forgot}>forgot password?</div>
              </div>
              <div className={styles.input_box}>
                <button
                  type={"submit"}
                  className={styles.blue}
                  onClick={submitHandler}
                >
                  Login
                </button>
              </div>
            </form>
          )}
        </div>
        <div className={styles.right}>
          <img src={logo} alt="caption" />
        </div>
      </div>
      <div className={styles.downCircle}>
        <Circle />
      </div>
    </div>
  );
}

export default LoginPage;
