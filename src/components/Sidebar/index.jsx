import React, { useEffect } from "react";
import styles from "./styles.module.css";
import adminpic from "../../assets/profile.jpg";
import { Link, useNavigate } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";
import { FaRegUser, FaClipboardList } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { BsCardList } from "react-icons/bs";
import { AiOutlineCamera} from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { studentLogout } from "../../redux/Actions/auth";
import { studentDetails } from "../../redux/Actions/studentActions/studentAction";



const StudentSidebar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const details = useSelector((state) => state.details);
    const { studentDetail } = details;
    const mystudentDetails = studentDetail;

  // const myDetail = JSON.parse(localStorage.getItem("studentDetails"));
  //   const mystudentDetails = myDetail;


  const logoutHandler = () => {
    dispatch(studentLogout());
    setTimeout(() => navigate("/"), [2000]);
  };
  

  return (
    <div className={styles.sideBar_container}>
      <div className={styles.logo}>
      <div className={styles.imgContainer}>
      <Link to="/student/profile/picture"> <img src={adminpic} alt="avatar" /></Link>
      </div>
      <Link to="/student/profile/picture"><div className={styles.dpHandler}><button> <AiOutlineCamera/></button></div></Link>
      <div className={styles.User}>{mystudentDetails && mystudentDetails.first_name}</div>
      <div className={styles.url}>
        <ul>
          <Link to="/student/dashboard">
            <li className={props.dashboard}>
              <div className={styles.svg}>
                <MdSpaceDashboard />
              </div>
              Dashboard
            </li>
          </Link>
          <Link to="/student/profile/basic">
            <li className={props.profile}>
              <div className={styles.svg}>
                <div>
                  <FaRegUser />
                </div>
              </div>
              Profile
            </li>
          </Link>
          <Link to="/student/course/registeration">
            <li className={props.courses}>
              <div className={styles.svg}>
                <div>
                  < GiBookshelf />
                </div>
              </div>
              Courses
            </li>
          </Link>
          <Link to="/student/assignment">
            <li className={props.assignment}>
              <div className={styles.svg}>
                <div>
                  <FaClipboardList />
                </div>
              </div>
              Assignment
            </li>
          </Link>
          <Link to="/student/test">
            <li className={props.test}>
              <div className={styles.svg}>
                <div className={styles.svgli}>
                  <FaRegUser />
                </div>
              </div>
              Test
            </li>
          </Link>
          
        </ul>
    </div>
   
      </div>
      <div className={styles.log}>
      <div className={styles.url}>
     <div>
     <ul>
       <Link to="" onClick={logoutHandler}>
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
     
  </div>
  );
};

export default StudentSidebar;
