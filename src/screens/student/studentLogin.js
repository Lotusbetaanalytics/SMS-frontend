import React, { useState } from "react";
import Button from "../../components/Button";
import Circle from "../../components/Circle";
import Input from "../../components/Input";
import styles from "./styles.module.css";
import logo from "../../assets/Rectangle 73girl.png"

function StudentLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = () => {

  }
  return (
    <div className={styles.pageContainer_}>
      <div className={styles.topCircle_}>
        <Circle />
      </div>
      <div className={styles.center_}>
        <div className={styles.left_}>
          <div className={styles.input_box_}>
            <div className={styles.title_}>Student Login</div>
            <div>Username</div>
            <Input
              type={"text"}
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
          </div>
          <div className={styles.input_box_}>
            <div>Password</div>
            <Input
              type={"text"}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className={styles.forgot_}>forgot password?</div>
          </div>
          <div className={styles.input_box_}>
            <Button className={styles.blue_}
              buttonName={"Login"}
              onClick={submitHandler}
            />
          </div>
        </div>
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

export default StudentLogin;
