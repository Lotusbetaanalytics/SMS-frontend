import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Sidebar from "../../../components/Sidebar";
import WidgetPost from "../../../components/WidgetPost";
import {
  totalStaff,
  totalStudent,
} from "../../../redux/action/getAllUsersAction";
import { getfaculty } from "../../../redux/action/facultyAction";
import styles from "./styles.module.css";
import { getDepartment } from "../../../redux/action/departmentAction";
import { getCourse } from "../../../redux/action/courseAction";
import { userDetails } from "../../../redux/action/userAction";
import { Link } from "react-router-dom";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userDetails());
  }, [dispatch]);

  const userDetail = useSelector((state) => state.userDetail);
  const { username } = userDetail;

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

  useEffect(() => {
    dispatch(totalStaff());
  }, [dispatch]);
  const totalStaffNo = useSelector((state) => state.totalStaffNo);
  const { allStaff } = totalStaffNo;
  console.log(allStaff);
  const staff = JSON.parse(localStorage.getItem("allStaff"));
  const staffData = staff;

  useEffect(() => {
    dispatch(getfaculty());
  }, [dispatch]);

  const listFaculty = useSelector((state) => state.listFaculty);
  const { faculty } = listFaculty;

  useEffect(() => {
    dispatch(getDepartment());
  }, [dispatch]);

  const departmentGet = useSelector((state) => state.departmentGet);
  const { departmentid } = departmentGet;

  useEffect(() => {
    dispatch(getCourse());
  }, [dispatch]);

  const courseGet = useSelector((state) => state.courseGet);
  const { getCourseId } = courseGet;

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <div className={styles.dashboard}>
        <div className={styles.dashboardHeader}>
          <h2>Hi {username && username.first_name}!</h2>
          <h4>it's nice to see you again!</h4>
        </div>
        <div className={styles.dashboardCards}>
          <p>Total Number of Students</p>

          <div className={styles.dashboardScore}>
            {allStudent && allStudent.length}
          </div>
        </div>
        <div className={styles.dashboardCards}>
          <p>Total Number of Staff</p>
          <div className={styles.dashboardScore2}>
            {staffData && staffData.count}
          </div>
        </div>
        <div className={styles.dashboardCards}>
          <p>Total Number of Faculties</p>
          <div className={styles.dashboardScore3}>
            {faculty && faculty.length}
          </div>
        </div>
        <div className={styles.dashboardCards}>
          <p>Total Number of Department</p>
          <div className={styles.dashboardScore4}>
            {departmentid && departmentid.length}
          </div>
        </div>
        <div className={styles.dashboardCards}>
          <p>Total Number of Courses</p>
          <div className={styles.dashboardScore5}>
            {getCourseId && getCourseId.count}
          </div>
        </div>
      </div>
      <WidgetPost />
    </div>
  );
}

export default Dashboard;
