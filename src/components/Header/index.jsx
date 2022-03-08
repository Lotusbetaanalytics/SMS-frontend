import React, { useState } from "react";
import Search from "../Search";
import styles from "./styles.module.css";
import adminpic from "../../assets/adminpic.png";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";

function Haeder() {
  const [search, setSearch] = useState("");
  return (
    <div className={styles.headerContainer}>
      <form>
        <Search
          type={"text"}
          name={"search"}
          placeholder={"Search..."}
          value={search}
          required={true}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className={styles.header}>
        <img src={adminpic} alt="User" />
        <div className={styles.widgetUserName}>
          <div className={styles.headerUser}>
            <h5>Fonsus Ali</h5>
            <div className={styles.headerIcondrop}>
              <RiArrowDownSFill />
            </div>
          </div>
        </div>
        <div className={styles.headerNotify}>
          <MdOutlineNotificationsActive />
          <p className={styles.colorNotify}></p>
        </div>
      </div>
    </div>
  );
}

export default Haeder;
