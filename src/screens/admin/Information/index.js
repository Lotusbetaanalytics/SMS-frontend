import React from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import styles from "./styles.module.css";

function Information() {
  return (
    <div className={styles.informationContainer}>
      <Sidebar />
      <Header />
      <div></div>
    </div>
  );
}

export default Information;
