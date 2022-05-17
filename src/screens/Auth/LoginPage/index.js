import React from "react";
import styles from "./styles.module.css";

function LoginPage() {
  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.loginPageContent}>
        <div className={styles.loginTitle}>
          <h2> Welcome</h2>
          <p>To the Student Management System</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
