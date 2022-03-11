import React, { useState } from "react";
import { Link } from "react-router-dom";
import EditNavbar from "../../../components/navigation_";
import StudentSidebar from "../../../components/StudentSidebar";
import SidebarTwo from "../../../components/StudentSidebar/sidebar";
import styles from "./styles.module.css";

const BasicProfileInfo = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [matric_num, setMatric_num] = useState("");

  const submitHandler = () => {};
  return (
    <div>
      <div>
        <div className={styles.layout}>
          <div className={styles.Sidebar}>
            <StudentSidebar profile={styles.remote} />
          </div>
          <div className={styles.editContainer}>
            <EditNavbar basic={styles.remote} />
            <div className={styles.formContainer}>
              <form onSubmit={submitHandler}>
                <div className={styles.inputContainer_}>
                  <label>First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Middle Name</label>
                  <input
                    type="text"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>specialization </label>
                  <input
                    type="text"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Matric Number</label>
                  <input
                    type="text"
                    value={matric_num}
                    onChange={(e) => setMatric_num(e.target.value)}
                  />
                </div>
              </form>
              <button
                onClick={submitHandler}
                className={`${styles.btn} ${styles.lilac}`}
              >
                Save information
              </button>
              <Link to="/edit/emergencyInfo">
                <div className={`${styles.btn} ${styles.purple}`}>
                  Bio Data
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.leftBar}>
            <SidebarTwo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicProfileInfo;
