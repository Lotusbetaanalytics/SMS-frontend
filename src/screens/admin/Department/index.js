import React from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import styles from "./styles.module.css";

function Department() {
  return (
    <div className={styles.newDepartmentContainer}>
      <Sidebar />
      <Header userN="Fonsus" />
      <div className={styles.newDepartment}>
        <div className={styles.newDepartmentTitle}>
          <span>Create New Department</span>
        </div>
      </div>
    </div>
  );
}

export default Department;
