import React from "react";
import Sidebar from "../../../components/Sidebar";
import styles from "./styles.module.css";

function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
    </div>
  );
}

export default Dashboard;
