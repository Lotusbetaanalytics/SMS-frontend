import React, { useEffect } from "react";
import styles from "./styles.module.css";
import adminpic from "../../assets/adminpic.png";
import { Link, useNavigate } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";
import { FaRegUser, FaClipboardList } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { BsCardList } from "react-icons/bs";

import {
  studentDetails,
  studentLogout,
} from "../../redux/studentActions/studentAction";
import { useDispatch, useSelector } from "react-redux";

const StudentSidebar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const details = useSelector((state) => state.details);

  // const { studentDetail } = details;
  // const mystudentDetails = studentDetail;

  // useEffect(() => {
  //   dispatch(studentDetails());
  // }, [dispatch]);
   const myDetail = JSON.parse(localStorage.getItem("studentDetails"));
   const mystudentDetails = myDetail;

  const logoutHandler = () => {
    dispatch(studentLogout());
    setTimeout(() => navigate("/student/login"), [2000]);
  };

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarImgContent}>
        <img src={adminpic} alt="User" />
      </div>
      <div className={styles.sidebarTitle}>
        <h3>{mystudentDetails && mystudentDetails.first_name}</h3>
      </div>
      <div className={styles.sidebarIconContainer}>
        <ul>
          <li className={props.dashboard}>
            <Link to="/student/dashboard">
              <div className={styles.iconContainer}>
                <p className={styles.icon}>
                  <MdSpaceDashboard />
                </p>
                <div className={styles.iconName}>
                  <p>Dashboard</p>
                </div>
              </div>
            </Link>
          </li>

          <li className={props.profile}>
            <Link to="/student/profile/basicInfo">
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
          <li className={props.courses}>
            <Link to="/student/courses">
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  <BsCardList />
                </div>
                <div className={styles.iconName}>
                  <p>Courses</p>
                </div>
              </div>
            </Link>
          </li>

          <li className={props.test}>
            <Link to="/student/taketest">
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
            <Link to="/student/result">
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
