import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import adminpic from "../../assets/adminpic.png";
import { MdSpaceDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { IoMdPeople } from "react-icons/io";
import { FaCity } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import { ImBook } from "react-icons/im";
// import { GiTabletopPlayers } from "react-icons/gi";
import { BsClipboardData } from "react-icons/bs";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { userDetails, userLogout } from "../../redux/action/userAction";

function SidebarNav() {
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
    <div className={styles.sidenavContainer}>
      <div className={styles.sidebarnavContent}>
        <div className={styles.sidebarLogoTitle}>
          <img src={adminpic} alt="User" />
          <p>{username && username.first_name}</p>
        </div>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.dropdown}>
          <Link to="/admin/dashboard">
            <div className={styles.iconContent}>
              <MdSpaceDashboard />
              <button>Dashboard</button>
            </div>
          </Link>
        </div>

        <div className={styles.dropdown}>
          <Link to="/admin/newstudent">
            <div className={styles.iconContent}>
              <IoIosPeople />
              <button>Student</button>
            </div>
          </Link>
        </div>
        <br></br>

        <div className={styles.dropdown}>
          <Link to="/staff/newstaff">
            <div className={styles.iconContent}>
              <IoMdPeople />
              <button>Staff</button>
            </div>
            <div className={styles.dropContent}>
              {/* <Link to="/staff/newstaff">Staff</Link> */}
              {/* <Link to="/user/formdata">BioData</Link> */}
              <Link to="/staff/specialization">
                {/* <GiTabletopPlayers /> */}
                Specialization
              </Link>
            </div>
          </Link>
        </div>
        <br></br>

        <div className={styles.dropdown}>
          <Link to="/user/biodata">
            <div className={styles.iconContent}>
              <BsClipboardData />
              <button>Bio-Data</button>
            </div>
            <div className={styles.dropContent}>
              {/* <Link to="/staff/newstaff">Staff</Link> */}
              {/* <Link to="/user/formdata">BioData</Link> */}
              <Link to="/user/academichistory">
                {/* <GiTabletopPlayers /> */}
                Academic Data
              </Link>
              <Link to="/user/healthdata">
                {/* <GiTabletopPlayers /> */}
                Health Data
              </Link>
              <Link to="/user/familydata">
                {/* <GiTabletopPlayers /> */}
                Family Data
              </Link>
            </div>
          </Link>
        </div>
        <br></br>

        <div className={styles.dropdown}>
          <Link to="/staff/newfaculty">
            <div className={styles.iconContent}>
              <FaCity />
              <button>Faculty</button>
            </div>
          </Link>
        </div>

        <div className={styles.dropdown}>
          <Link to="/staff/newdepartment">
            <div className={styles.iconContent}>
              <BsBuilding />
              <button>Department</button>
            </div>
          </Link>
        </div>

        <div className={styles.dropdown}>
          <Link to="/staff/registercourses">
            <div className={styles.iconContent}>
              <ImBook />
              <button>Course</button>
            </div>
            <div className={styles.dropContent}>
              <Link to="/student/addcourse">Add Course</Link>
            </div>
          </Link>
        </div>
        <br></br>

        <div className={styles.dropdown}>
          <Link to="/staff/noticeboard">
            <div className={styles.iconContent}>
              <FaAssistiveListeningSystems />
              <button>Notice</button>
            </div>
            <div className={styles.dropContent}>
              <Link to="/staff/information">Information</Link>
            </div>
          </Link>
        </div>

        <Link to="/" onClick={logoutHandler}>
          <div className={styles.logoutCon}>
            <div className={styles.iconContent}>
              <MdOutlineLogout />
              <button>Logout</button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SidebarNav;
