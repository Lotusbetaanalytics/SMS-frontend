import React, { useState } from "react";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import styles from "./styles.module.css";

function NewStudent() {
  //   const [search, setSearch] = useState("");
  return (
    <div className={styles.newStudentContainer}>
      <Sidebar />
      <Header userN="Fonsus" />
      <div className={styles.newStudent}>
        <div className={styles.newStudentTitle}>
          <span>Create New Student</span>
        </div>
      </div>
    </div>
  );
}

export default NewStudent;
