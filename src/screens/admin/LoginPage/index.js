import React, { useState } from "react";
import Button from "../../../components/Button";
import Circle from "../../../components/Circle";
import Input from "../../../components/Input";
import styles from "./styles.module.css";
import logo from "../../../assets/logo1.png";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = () => {};
  return (
    <div className={styles.pageContainer}>
      <div className={styles.topCircle}>
        <Circle />
      </div>
      <div className={styles.center}>
        <div className={styles.left}>
          <div className={styles.input_box}>
            <div className={styles.title}>Login</div>
            <div>Username</div>
            <Input
              type={"text"}
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
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
            <Button
              className={styles.blue}
              buttonName={"Login"}
              onClick={submitHandler}
            />
          </div>
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
