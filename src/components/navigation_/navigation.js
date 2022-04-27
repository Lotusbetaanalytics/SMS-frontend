import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { studentLogout } from "../../redux/studentActions/studentAction";
import styles from "./styles.module.css";


const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 

  const myDetail = JSON.parse(localStorage.getItem("studentDetails"));
  const mystudentDetails = myDetail;
  


  const logoutHandler = () => {
    dispatch(studentLogout())
    setTimeout(()=>navigate("/student/login"),[2000]);
  };

  return (
    <div className={styles.navigation}>
      <div className={styles.title}>
        <Link to="/">
          <h3>SMS</h3>
        </Link>
      </div>
      <div className={styles.btnContainer}>
            <h3 className={styles.paddingTop}>
              Candidate: {mystudentDetails && mystudentDetails.first_name}
            </h3> 
            <Link to="/#" className="btn gold" onClick={logoutHandler}>
              Log out
            </Link>
      </div>
    </div>
  );
};

export default Navigation;
