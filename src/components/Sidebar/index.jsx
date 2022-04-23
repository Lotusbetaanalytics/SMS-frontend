import React, { useEffect } from "react";
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
import { userLogout } from "../../redux/action/userAction";
import { userDetails } from "../../redux/action/userAction";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(userLogout());
  };

  useEffect(() => {
    dispatch(userDetails());
  }, [dispatch]);

  const userDetail = useSelector((state) => state.userDetail);
  const { username } = userDetail;

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarImgContent}>
        <img src={adminpic} alt="User" />
      </div>
      <div className={styles.sidebarTitle}>
        <h3>{username && username.first_name}</h3>
        {/* <h3>{person.last_name}</h3> */}
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
            <Link to="/admin/newstudent">
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
            <div className={styles.dropdown}>
              <Link to="/staff/newstaff">
                <div className={styles.iconContainer}>
                  <div className={styles.icon}>
                    <IoMdPeople />
                  </div>
                  <div className={styles.iconName}>
                    <button>Staff</button>
                  </div>
                  <div className={styles.dropContent}>
                    <Link to="/staff/newstaff">Staff</Link>
                    <Link to="/user/formdata">BioData</Link>
                    {/* <br /> */}
                    <Link to="/staff/specialization">Specialization</Link>
                  </div>
                </div>
              </Link>
            </div>
          </li>

          <li>
            <Link to="/staff/newfaculty">
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
            <Link to="/staff/newdepartment">
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
            <Link to="/staff/registercourses">
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
            <Link to="/staff/noticeboard">
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
            <Link to="/" onClick={logoutHandler}>
              {/* <div className={styles.logout}> */}
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  <MdOutlineLogout />
                </div>
                <div className={styles.iconName}>
                  <p>Logout</p>
                </div>
              </div>
              {/* </div> */}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
