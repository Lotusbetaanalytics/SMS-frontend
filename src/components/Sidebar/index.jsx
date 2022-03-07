import React from "react";
import styles from "./styles.module.css";
import adminpic from "../../assets/adminpic.png";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { IoMdPeople } from "react-icons/io";
import { FaCity } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import { ImBook } from "react-icons/im";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

const Sidebar = () => {
  const logoutHandler = () => {};

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarImgContent}>
        <img src={adminpic} alt="User" />
      </div>
      <div className={styles.sidebarTitle}>
        <h3>Fonsus Ali</h3>
      </div>
      <div className={styles.sidebarIconContainer}>
        <ul>
          <li>
            <Link to="/admin/dashboard">
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  <MdSpaceDashboard />
                </div>
                <div className={styles.iconName}>
                  <p>Dashboard</p>
                </div>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/">
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  <IoIosPeople />
                </div>
                <div className={styles.iconName}>
                  <p>Student</p>
                </div>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/">
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  <IoMdPeople />
                </div>
                <div className={styles.iconName}>
                  <p>Staff</p>
                </div>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/">
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  <FaCity />
                </div>
                <div className={styles.iconName}>
                  <p>Faculty</p>
                </div>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/">
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  <BsBuilding />
                </div>
                <div className={styles.iconName}>
                  <p>Department</p>
                </div>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/">
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  <ImBook />
                </div>
                <div className={styles.iconName}>
                  <p>Courses</p>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  <FaAssistiveListeningSystems />
                </div>
                <div className={styles.iconName}>
                  <p>Notice</p>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="" onClick={logoutHandler}>
              <div className={styles.logout}>
                <div className={styles.iconContainer}>
                  <div className={styles.icon}>
                    <MdOutlineLogout />
                  </div>
                  <div className={styles.iconName}>
                    <p>Logout</p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
