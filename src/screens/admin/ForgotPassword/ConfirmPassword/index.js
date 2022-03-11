import React, { useState } from "react";
import Circle from "../../../../components/Circle";
import Input from "../../../../components/Input";
import styles from "./styles.module.css";
import confirmpic from "../../../../assets/confirmpic.png";

function ConfirmPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = () => {};

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
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
                required={true}
              />
            </div>
            <div className={styles.input_box}>
              <div>Confirm Password</div>
              <Input
                type={"password"}
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                reqiured={true}
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
