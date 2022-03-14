import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Sidebar from "../../../components/Sidebar";
import WidgetPost from "../../../components/WidgetPost";
// import { userDetails } from "../../../redux/action/userAction";
import styles from "./styles.module.css";

function Dashboard() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("userDetails"));
  const person = user;
  console.log(person.first_name);

  // useEffect(() => {
  //   dispatch(userDetails());
  // }, [dispatch]);

  // const userDetail = useSelector((state) => state.userDetail);
  // const { user } = userDetail;

  // console.log(user);

  const userName = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    if (!userName) {
      navigate("/");
    }
  });

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <div className={styles.dashboard}>
        <div className={styles.dashboardHeader}>
          <h2>Hi {user.first_name}!</h2>
          <h4>it's nice to see you again!</h4>
        </div>
        <div className={styles.dashboardCards}>
          <p>Total Number of Students</p>
          <div className={styles.dashboardScore}>1000</div>
        </div>
        <div className={styles.dashboardCards}>
          <p>Total Number of Staff</p>
          <div className={styles.dashboardScore}>102</div>
        </div>
        <div className={styles.dashboardCards}>
          <p>Total Number of Faculties</p>
          <div className={styles.dashboardScore}>10</div>
        </div>
        <div className={styles.dashboardCards}>
          <p>Total Number of Department</p>
          <div className={styles.dashboardScore}>40</div>
        </div>
        <div className={styles.dashboardCards}>
          <p>Total Number of Courses</p>
          <div className={styles.dashboardScore}>325</div>
        </div>
      </div>
      <WidgetPost />
    </div>
  );
}

export default Dashboard;
