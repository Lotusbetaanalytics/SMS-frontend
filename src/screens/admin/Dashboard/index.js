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
// import { userDetails } from "../../../redux/action/userAction";
import styles from "./styles.module.css";
import { getDepartment } from "../../../redux/action/departmentAction";
import { getCourse } from "../../../redux/action/courseAction";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  console.log(getCourseId);

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
            {allStudent && allStudent.length}
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
          <div className={styles.dashboardScore}>
            {faculty && faculty.length}
          </div>
        </div>
        <div className={styles.dashboardCards}>
          <p>Total Number of Department</p>
          <div className={styles.dashboardScore}>
            {departmentid && departmentid.length}
          </div>
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
