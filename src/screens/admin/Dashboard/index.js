import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Sidebar from "../../../components/Sidebar";
import WidgetPost from "../../../components/WidgetPost";
import {
  totalStaff,
  totalStudent,
} from "../../../redux/action/getAllUsersAction";
import { userDetails } from "../../../redux/action/userAction";
import styles from "./styles.module.css";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [person, setPerson] = React.useState("");
  // const user = JSON.parse(localStorage.getItem("userProfileName"));
  // React.useEffect(() => {
  //   if (user) setPerson(user.data.first_name);
  // }, [user]);

  // console.log(user);

  // useEffect(() => {
  //   dispatch(userDetails());
  // }, [dispatch]);

  // const userDetail = useSelector((state) => state.userDetail);
  // const { user } = userDetail;
  // console.log(user);
  const userAli = JSON.parse(localStorage.getItem("userProfileName"));
  const person = userAli;
  console.log(person.first_name);

  const userName = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    if (!userName) {
      navigate("/");
    }
  });

  useEffect(() => {
    dispatch(totalStudent());
  }, [dispatch]);
  const totalStudentNo = useSelector((state) => state.totalStudentNo);
  const { allStudent } = totalStudentNo;
  console.log(allStudent);
  const getStudent = JSON.parse(localStorage.getItem("getAllStudents"));
  const students = getStudent;

  useEffect(() => {
    dispatch(totalStaff());
  }, [dispatch]);
  const totalStaffNo = useSelector((state) => state.totalStaffNo);
  const { allStaff } = totalStaffNo;
  console.log(allStaff);
  const staff = JSON.parse(localStorage.getItem("allStaff"));
  const staffData = staff;

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <div className={styles.dashboard}>
        <div className={styles.dashboardHeader}>
          <h2>Hi {person.first_name}!</h2>
          <h4>it's nice to see you again!</h4>
        </div>
        <div className={styles.dashboardCards}>
          <p>Total Number of Students</p>
          <div className={styles.dashboardScore}>
            {students && students.count}
          </div>
        </div>
        <div className={styles.dashboardCards}>
          <p>Total Number of Staff</p>
          <div className={styles.dashboardScore}>
            {staffData && staffData.count}
          </div>
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
