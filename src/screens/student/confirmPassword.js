import React, { useState } from "react";
import Button from "../../components/Button";
import Circle from "../../components/Circle";
import Input from "../../components/Input";
import styles from "./styles.module.css";
import logo from "../../assets/Rectangle 73girl.png"

function ConfirmPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
            <div className={styles.title_}>Forgot Password</div>
            <div>New Password</div>
            <Input
              type={"text"}
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
            />
          </div>
          <div className={styles.input_box_}>
            <div>Confirm Password</div>
            <Input
              type={"text"}
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>
          <div className={styles.input_box_}>
            <Button className={styles.blue_}
              buttonName={"Submit"}
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

export default ConfirmPassword;
