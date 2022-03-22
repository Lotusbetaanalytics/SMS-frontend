import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import styles from "./styles.module.css";

function RegisterCourses() {
  const [studentName, setStudentName] = useState("");
  const [selectCourse, setSelectCourse] = useState("");
  const [selectSession, setSelectSession] = useState("");
  const [selectSemester, setSelectSemester] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.registerCourseContainer}>
      <Sidebar />
      <Header />
      <div className={styles.registerCourse}>
        <div className={styles.registerCourseTitle}>
          <span>Register Course</span>
        </div>
        <div className={styles.registerCourseContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.registerCourseForm}>
              <input
                type="text"
                onChange={(e) => setStudentName(e.target.value)}
                value={studentName}
                placeholder="Student Name"
                required={true}
              />

              <select
                onChange={(e) => setSelectCourse(e.target.value)}
                value={selectCourse}
                required={true}
                className={styles.registerCourseSelect}
              >
                <option>Select Course</option>
                <option>Biology</option>
              </select>

              <select
                onChange={(e) => setSelectSession(e.target.value)}
                value={selectSession}
                required={true}
                className={styles.registerCourseSelect}
              >
                <option>Select Session</option>
                <option>Year 3</option>
              </select>

              <select
                onChange={(e) => setSelectSemester(e.target.value)}
                value={selectSemester}
                required={true}
                className={styles.registerCourseSelect}
              >
                <option>Select Semester</option>
                <option>2nd Semester</option>
              </select>
            </div>

            <div className={styles.registerBtn}>
              <button type="submit" className={styles.stBtn} disable="true">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterCourses;
