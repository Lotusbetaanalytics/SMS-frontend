import React, { useState } from "react";
import Search from "../Search";
import styles from "./styles.module.css";
import adminpic from "../../assets/adminpic.png";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";

function Haeder() {
  const [search, setSearch] = useState("");

  const user = JSON.parse(localStorage.getItem("userProfileName"));
  const person = user;

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
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
        <div className={styles.headerUser}>
          <img src={adminpic} alt="User" />
          <div className={styles.headerTitle}>
            <h5>{person.first_name}</h5>
          </div>
          <div className={styles.headerIcondrop}>
            <RiArrowDownSFill />
          </div>
          <div className={styles.headerNotify}>
            <MdOutlineNotificationsActive />
            <p className={styles.colorNotify}></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Haeder;
