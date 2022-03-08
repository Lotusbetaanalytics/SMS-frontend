import React from "react";
import styles from "./styles.module.css";
import adminpic from "../../assets/adminpic.png";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { GiBookshelf} from "react-icons/gi";
import { FaRegUser,FaClipboardList } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

const StudentSidebar = (props) => {
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
          <li className={props.dashboard}>
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

          <li className={props.profile}>
            <Link to="/">
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  <FaRegUser />
                </div>
                <div className={styles.iconName}>
                  <p>Profile</p>
                </div>
              </div>
            </Link>
          </li>

          <li className={props.test}>
            <Link to="/">
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  <GiBookshelf />
                </div>
                <div className={styles.iconName}>
                  <p>Take Test</p>
                </div>
              </div>
            </Link>
          </li>

          <li className={props.result}>
            <Link to="/">
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  <FaClipboardList />
                </div>
                <div className={styles.iconName}>
                  <p>Result</p>
                </div>
              </div>
            </Link>
          </li>
          <li className={styles.logout}>
            <Link to="" onClick={logoutHandler}>
                <div className={styles.iconContainer}>
                  <div className={styles.icon}>
                    <MdOutlineLogout />
                  </div>
                  <div className={styles.iconName}>
                    <p>Logout</p>
                  </div>
                </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StudentSidebar;