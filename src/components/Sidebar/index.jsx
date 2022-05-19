import React from "react";
import styles from "./styles.module.css";
import adminpic from "../../assets/adminpic.png";
import { Link, useNavigate } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";
import { FaRegUser, FaClipboardList } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { BsCardList } from "react-icons/bs";

// import {
//   studentLogout
// } from "../../redux/studentActions/studentAction";
// import { useDispatch } from "react-redux";

const StudentSidebar = (props) => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const details = useSelector((state) => state.details);

  // const { studentDetail } = details;
  // const mystudentDetails = studentDetail;

  // useEffect(() => {
  //   dispatch(studentDetails());
  // }, [dispatch]);
  //  const myDetail = JSON.parse(localStorage.getItem("studentDetails"));
  //  const mystudentDetails = myDetail;

  //  console.log(mystudentDetails.biodata.profile_picture)

  // const logoutHandler = () => {
  //   dispatch(studentLogout());
  //   setTimeout(() => navigate("/student/login"), [2000]);
  // };
  const user = "jide"

  return (
    <div className={styles.sideBar_container}>
    <div className={styles.logo}>
      <img src={adminpic} alt="avatar" />
      <div className={styles.User}>{user}</div>
    </div>
    
    <div className={styles.url}>
        <ul>
          <Link to="/#">
            <li className={props.dashboard}>
              <div className={styles.svg}>
                <MdSpaceDashboard />
              </div>
              Dashboard
            </li>
          </Link>
          <Link to="/#">
            <li className={props.configure_role}>
              <div className={styles.svg}>
                <div>
                  <FaRegUser />
                </div>
              </div>
              Profile
            </li>
          </Link>
          <Link to="/#">
            <li className={props.configure_role}>
              <div className={styles.svg}>
                <div>
                  < GiBookshelf />
                </div>
              </div>
              Courses
            </li>
          </Link>
          <Link to="/#">
            <li className={props.configure_role}>
              <div className={styles.svg}>
                <div>
                  <FaClipboardList />
                </div>
              </div>
              Assignment
            </li>
          </Link>
          <Link to="/#">
            <li className={props.configure_role}>
              <div className={styles.svg}>
                <div>
                  <FaRegUser />
                </div>
              </div>
              Test
            </li>
          </Link>
          
        </ul>
    </div>
  <div className={styles.url}>
    <div>
    <ul>
      <Link to="/#">
        <li className={props.logout}>
          <div className={styles.svg}>
                <div>
                  <MdOutlineLogout />
                </div>
          </div>
            Logout
          </li>
          </Link>
    </ul>
    </div>
   
  </div>
  </div>
  );
};

export default StudentSidebar;
